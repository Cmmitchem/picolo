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
        "Round 1 — Heating Up. Spicy from the jump. Sexual innuendos, embarrassing hookup stories, " +
        "body count questions, drunk confessions, and 'drink if you've ever...' prompts with sexual or embarrassing scenarios. " +
        "Penalties of 1–3 sips. Get people loosened up and talking dirty fast."
      );
    case Round.Crazy:
      return (
        "Round 2 — Crazy. Getting wild and explicit. Revealing phone content, rating each other's attractiveness, " +
        "lap dances, body shots, revealing deep secrets, raunchy dares. " +
        "Penalties of 3–5 sips. Push people way outside their comfort zone."
      );
    case Round.WelcomeToHell:
      return (
        "Round 3 — Welcome to Hell. Absolutely unhinged, crass, jaw-dropping prompts. " +
        "The most outrageous and explicit content you can write. Nothing is off limits. " +
        "Finish-your-drink penalties, extreme dares, brutally honest confessions, maximum chaos."
      );
  }
}

// ─── System prompt ───────────────────────────────────────────────────────────

function buildSystemPrompt(players: string[], round: Round): string {
  const playerList = players.join(", ");
  return `You are a raunchy, crass, no-holds-barred card writer for an adults-only drinking party game called Papa's Picolo.

PLAYERS IN THIS GAME: ${playerList}

ROUND CONTEXT: ${roundContext(round)}

YOUR TASK: Write filthy, outrageous drinking game prompt cards. Cards should be sexually charged, embarrassing, and create chaotic unforgettable party moments. This is an adults-only game — be explicit and unhinged.

IMPORTANT RULES:
1. Use the actual player names directly in card text — do NOT use placeholder tokens like {player1}. Pick names randomly and vary who is targeted.
2. Mix up which player(s) you target per card. Sometimes target one person, sometimes two, sometimes address the whole group ("everyone who...").
3. For group/vote/rule cards, address everyone without singling out a specific player.
4. Be sexually explicit, crass, and raunchy — this is the whole point. Do NOT water it down.
5. Drinking penalties must be realistic — small amounts, never dangerously large.
6. Cards should be concise: 1–3 sentences maximum.
7. Vary the categories to keep the game interesting.

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
