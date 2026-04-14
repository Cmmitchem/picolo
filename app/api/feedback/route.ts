import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { CardFeedback } from "@/types/game";

const FEEDBACK_DIR = path.join(process.cwd(), "data");
const FEEDBACK_FILE = path.join(FEEDBACK_DIR, "feedback.json");
const MAX_ENTRIES = 500;

function readFeedback(): CardFeedback[] {
  try {
    if (!fs.existsSync(FEEDBACK_FILE)) return [];
    return JSON.parse(fs.readFileSync(FEEDBACK_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeFeedback(entries: CardFeedback[]): void {
  fs.mkdirSync(FEEDBACK_DIR, { recursive: true });
  // Cap at MAX_ENTRIES, drop oldest
  const capped = entries.length > MAX_ENTRIES
    ? entries.slice(entries.length - MAX_ENTRIES)
    : entries;
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(capped, null, 2), "utf-8");
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { cardId, cardText, category, round, rating, comment } = body;

  if (typeof cardText !== "string" || !cardText.trim()) {
    return NextResponse.json({ error: "cardText is required" }, { status: 400 });
  }

  if (rating !== "up" && rating !== "down") {
    return NextResponse.json({ error: "rating must be 'up' or 'down'" }, { status: 400 });
  }

  const entry: CardFeedback = {
    cardId: String(cardId),
    cardText: String(cardText),
    category: category as CardFeedback["category"],
    round: round as CardFeedback["round"],
    rating: rating as "up" | "down",
    comment: typeof comment === "string" && comment.trim() ? comment.trim() : undefined,
    timestamp: Date.now(),
  };

  const existing = readFeedback();
  existing.push(entry);
  writeFeedback(existing);

  return NextResponse.json({ success: true });
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(readFeedback());
}
