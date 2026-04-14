import { CardFeedback } from "@/types/game";

/**
 * Submits card feedback to the server. Never throws — fire-and-forget.
 */
export async function submitCardFeedback(
  feedback: Omit<CardFeedback, "timestamp">
): Promise<boolean> {
  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    return res.ok;
  } catch {
    console.warn("[feedback] Failed to submit feedback");
    return false;
  }
}
