import { CardTemplate, HydratedCard, Player, Round } from "@/types/game";
import { hydrateCard } from "./card-engine";

/**
 * Builds a deck that interleaves AI-generated cards with hydrated static cards.
 *
 * For each round:
 *   1. Hydrate the static templates for that round.
 *   2. Collect AI cards for that round (already hydrated — player names are
 *      baked in by the API).
 *   3. Shuffle the combined pool and concatenate into the final deck.
 *
 * If `aiCards` is empty, the result is identical to `buildDeck`.
 */
export function buildHybridDeck(
  players: Player[],
  templates: CardTemplate[],
  aiCards: HydratedCard[]
): HydratedCard[] {
  const rounds: Round[] = [Round.HeatingUp, Round.Crazy, Round.WelcomeToHell];

  return rounds.flatMap((round) => {
    // Static cards for this round — hydrate (substitute player names)
    const roundTemplates = templates.filter((t) => t.round === round);
    shuffle(roundTemplates);
    const hydratedStatic = roundTemplates.map((t) => hydrateCard(t, players));

    // AI cards for this round (already hydrated)
    const roundAI = aiCards.filter((c) => c.round === round);

    // Merge and shuffle together so AI cards are spread throughout
    const combined = shuffle([...hydratedStatic, ...roundAI]);
    return combined;
  });
}

/**
 * In-place Fisher-Yates shuffle. Returns the same array reference.
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Builds a fully hydrated, shuffled deck ordered by round (Warmup → Heated → Crazy).
 *
 * Each round's cards are independently shuffled before being concatenated,
 * so the overall round order is preserved while cards within each round
 * are randomised.
 */
export function buildDeck(
  players: Player[],
  templates: CardTemplate[]
): HydratedCard[] {
  const rounds: Round[] = [Round.HeatingUp, Round.Crazy, Round.WelcomeToHell];

  return rounds.flatMap((round) => {
    const roundTemplates = templates.filter((t) => t.round === round);
    shuffle(roundTemplates);
    return roundTemplates.map((template) => hydrateCard(template, players));
  });
}
