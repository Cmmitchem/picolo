import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { CardCategory, Round } from "@/types/game";

// ─── Request / Response shapes ───────────────────────────────────────────────

interface GenerateRequest {
  players: string[];
  round: Round;
  count: number;
}

interface ClaudeCard {
  text: string;
  category: "truth" | "confess" | "challenge" | "group" | "vote" | "rule";
}

interface GeneratedCard {
  id: string;
  text: string;
  category: CardCategory;
  round: Round;
}

// ─── Round-specific prompt context ───────────────────────────────────────────

function roundContext(round: Round): string {
  switch (round) {
    case Round.HeatingUp:
      return (
        "Round 1 — Heating Up. Funny, bizarre, and out of pocket. Embarrassing confessions, " +
        "weird hypotheticals, dumb stories, petty admissions, and 'drink if you've ever...' prompts with absurd scenarios. " +
        "Penalties of 1–3 sips. Get people laughing and loosened up."
      );
    case Round.Crazy:
      return (
        "Round 2 — Crazy. Getting wild and unhinged. Revealing phone content, roast battles, " +
        "bizarre challenges, chaotic group activities, hot takes, and forced confessions. " +
        "Penalties of 3–5 sips. Push people into absurd, hilarious situations."
      );
    case Round.WelcomeToHell:
      return (
        "Round 3 — Welcome to Hell. Absolutely unhinged, over-the-top, jaw-dropping prompts. " +
        "Maximum chaos energy — brutal honesty, ridiculous challenges, diabolical rules, and out-of-pocket questions. " +
        "Finish-your-drink penalties, freestyle roasts, deranged hot takes, total mayhem."
      );
  }
}

// ─── System prompt ───────────────────────────────────────────────────────────

function buildSystemPrompt(players: string[], round: Round): string {
  const playerList = players.join(", ");
  return `You are a hilarious, unhinged, out-of-pocket card writer for an adults-only drinking party game called Papa's Picolo.

PLAYERS IN THIS GAME: ${playerList}

ROUND CONTEXT: ${roundContext(round)}

YOUR TASK: Write funny, bizarre, rated-R humor drinking game cards. Cards should be embarrassing, absurd, chaotic, and create unforgettable party moments. Think weird hypotheticals, brutal honesty, ridiculous challenges, and out-of-pocket confessions.

IMPORTANT — TONE RULES:
- DO NOT make cards sexual. No hookup questions, no body count, no "who would you sleep with" type content.
- Instead focus on: embarrassing stories, petty behavior, unhinged opinions, bizarre confessions, chaotic challenges, deranged hot takes, roasting each other, absurd hypotheticals, and general mayhem.
- Be creative and weird — the humor comes from the absurdity, not from being dirty.

IMPORTANT — FORMAT RULES:
1. Use the actual player names directly in card text — do NOT use placeholder tokens like {player1}. Pick names randomly and vary who is targeted.
2. Mix up which player(s) you target per card. Sometimes target one person, sometimes two, sometimes address the whole group ("everyone who...").
3. For group/vote/rule cards, address everyone without singling out a specific player.
4. Drinking penalties must be realistic — small amounts, never dangerously large.
5. Cards should be concise: 1–3 sentences maximum.
6. Vary the categories to keep the game interesting.

CATEGORY DEFINITIONS:
- truth: A question the player must answer honestly or drink
- confess: The player must admit or reveal something specific — forced admissions, showing receipts, owning up to things
- challenge: A competition between players or a group skill test
- group: Everyone in the group drinks based on a shared condition
- vote: The group votes and the winner/loser gets a consequence
- rule: A new rule is established that persists for a few cards

OUTPUT FORMAT: Respond with ONLY a valid JSON array. No markdown fences, no commentary. Example:
[
  {"text": "...", "category": "truth"},
  {"text": "...", "category": "confess"}
]`;
}

// ─── Map category string to CardCategory enum ────────────────────────────────

function toCardCategory(raw: string): CardCategory {
  const map: Record<string, CardCategory> = {
    truth: CardCategory.Truth,
    confess: CardCategory.Confess,
    challenge: CardCategory.Challenge,
    group: CardCategory.Group,
    vote: CardCategory.Vote,
    rule: CardCategory.Rule,
  };
  return map[raw] ?? CardCategory.Group;
}

// ─── Route handler ───────────────────────────────────────────────────────────

export async function POST(request: Request): Promise<NextResponse> {
  // Validate environment
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured" },
      { status: 500 }
    );
  }

  // Parse and validate request body
  let body: GenerateRequest;
  try {
    body = (await request.json()) as GenerateRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { players, round, count } = body;

  if (!Array.isArray(players) || players.length < 2) {
    return NextResponse.json(
      { error: "At least 2 players are required" },
      { status: 400 }
    );
  }

  if (![Round.Crazy, Round.HeatingUp, Round.WelcomeToHell].includes(round)) {
    return NextResponse.json({ error: "Invalid round value" }, { status: 400 });
  }

  const safeCount = Math.min(Math.max(count, 1), 20);

  // Call Claude
  const client = new Anthropic({ apiKey });

  let rawText: string;
  try {
    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `Generate exactly ${safeCount} drinking game cards for this round. Return only the JSON array — no other text.`,
        },
      ],
      system: buildSystemPrompt(players, round),
    });

    const firstContent = message.content[0];
    if (firstContent.type !== "text") {
      throw new Error("Unexpected content type from Claude");
    }
    rawText = firstContent.text;
  } catch (err) {
    console.error("[generate-cards] Claude API error:", err);
    return NextResponse.json(
      { error: "Failed to generate cards from AI" },
      { status: 502 }
    );
  }

  // Parse Claude's JSON response
  let claudeCards: ClaudeCard[];
  try {
    // Strip optional markdown code fences if Claude adds them despite instructions
    const cleaned = rawText
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();
    claudeCards = JSON.parse(cleaned) as ClaudeCard[];

    if (!Array.isArray(claudeCards)) {
      throw new Error("Response is not a JSON array");
    }
  } catch (err) {
    console.error("[generate-cards] JSON parse error. Raw response:", rawText, err);
    return NextResponse.json(
      { error: "AI returned malformed card data" },
      { status: 502 }
    );
  }

  // Map to GeneratedCard format
  const cards: GeneratedCard[] = claudeCards
    .filter((c) => typeof c.text === "string" && typeof c.category === "string")
    .map((c, i): GeneratedCard => ({
      id: `ai-r${round}-${Date.now()}-${i}`,
      text: c.text.trim(),
      category: toCardCategory(c.category),
      round,
    }));

  return NextResponse.json({ cards });
}
