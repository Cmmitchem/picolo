import { CardTemplate, HydratedCard, Player } from "@/types/game";

/**
 * Picks `count` distinct players from the array using a partial Fisher-Yates
 * shuffle so that each call returns a different random selection.
 */
function pickRandomPlayers(players: Player[], count: number): Player[] {
  if (count === 0 || players.length === 0) return [];

  const available = [...players];
  const picked: Player[] = [];
  const n = Math.min(count, available.length);

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * (available.length - i)) + i;
    // Swap chosen element to position i
    [available[i], available[randomIndex]] = [available[randomIndex], available[i]];
    picked.push(available[i]);
  }

  return picked;
}

/**
 * Hydrates a card template by substituting {player1}, {player2}, etc.
 * with randomly selected player names.
 *
 * If playerCount is 0 (group card), the template text is returned as-is.
 */
export function hydrateCard(
  template: CardTemplate,
  players: Player[]
): HydratedCard {
  let text = template.template;

  if (template.playerCount > 0 && players.length > 0) {
    const selected = pickRandomPlayers(players, template.playerCount);

    selected.forEach((player, index) => {
      const placeholder = new RegExp(`\\{player${index + 1}\\}`, "g");
      text = text.replace(placeholder, player.name);
    });
  }

  return {
    id: template.id,
    text,
    category: template.category,
    round: template.round,
  };
}
