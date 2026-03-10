import { HydratedCard, Player, Round } from "@/types/game";

interface ApiCard {
  id: string;
  text: string;
  category: HydratedCard["category"];
  round: Round;
}

interface ApiResponse {
  cards: ApiCard[];
  error?: string;
}

/**
 * Calls the /api/generate-cards endpoint to generate AI-powered cards for a
 * specific round. Returns an empty array on any failure — the game falls back
 * to the static deck.
 *
 * Cards returned have IDs prefixed with "ai-" to distinguish them from static
 * card templates.
 */
export async function generateAICards(
  players: Player[],
  round: Round,
  count: number,
  signal?: AbortSignal
): Promise<HydratedCard[]> {
  try {
    const response = await fetch("/api/generate-cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        players: players.map((p) => p.name),
        round,
        count,
      }),
      signal,
    });

    if (!response.ok) {
      console.warn(
        `[ai-cards] API returned ${response.status} for round ${round}`
      );
      return [];
    }

    const data: ApiResponse = (await response.json()) as ApiResponse;

    if (!Array.isArray(data.cards)) {
      console.warn("[ai-cards] Unexpected response shape", data);
      return [];
    }

    // Cast to HydratedCard — the API already returns the correct shape
    return data.cards as HydratedCard[];
  } catch (err) {
    // AbortError is expected when the timeout fires — log at debug level only
    if (err instanceof Error && err.name === "AbortError") {
      console.warn("[ai-cards] Request aborted (timeout) for round", round);
    } else {
      console.error("[ai-cards] Unexpected error for round", round, err);
    }
    return [];
  }
}
