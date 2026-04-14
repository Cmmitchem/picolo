import { GamePhase, GameState, HydratedCard, Player, Round } from "@/types/game";
import { cardTemplates } from "./data/cards";
import { buildDeck, buildHybridDeck } from "./deck-builder";

// ─── Action Types ───────────────────────────────────────────────────────────

export type GameAction =
  | { type: "ADD_PLAYER"; payload: { name: string } }
  | { type: "REMOVE_PLAYER"; payload: { id: string } }
  | { type: "START_GAME" }
  | { type: "START_GAME_WITH_AI_CARDS"; payload: { aiCards: HydratedCard[] } }
  | { type: "NEXT_CARD" }
  | { type: "REFRESH_DECK" }
  | { type: "REFRESH_DECK_WITH_AI_CARDS"; payload: { aiCards: HydratedCard[] } }
  | { type: "RESTART_GAME" }
  | { type: "GO_TO_PLAYER_ENTRY" }
  | { type: "SET_PHASE"; payload: { phase: GamePhase } };

// ─── Initial State ───────────────────────────────────────────────────────────

export function createInitialState(): GameState {
  return {
    phase: GamePhase.Start,
    players: [],
    currentRound: Round.HeatingUp,
    deck: [] as HydratedCard[],
    currentCardIndex: 0,
    cardsPerRound: 0,
    roundCardCount: 0,
  };
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "ADD_PLAYER": {
      const trimmedName = action.payload.name.trim();

      // Validation: non-empty name
      if (!trimmedName) return state;

      // Validation: max 10 players
      if (state.players.length >= 10) return state;

      const newPlayer: Player = {
        id: crypto.randomUUID(),
        name: trimmedName,
      };

      return {
        ...state,
        players: [...state.players, newPlayer],
      };
    }

    case "REMOVE_PLAYER": {
      return {
        ...state,
        players: state.players.filter((p) => p.id !== action.payload.id),
      };
    }

    case "START_GAME": {
      if (state.players.length < 2) return state;

      const deck = buildDeck(state.players, cardTemplates);
      const cardsPerRound = Math.floor(deck.length / 3);

      return {
        ...state,
        phase: GamePhase.Playing,
        deck,
        currentCardIndex: 0,
        currentRound: Round.HeatingUp,
        cardsPerRound,
        roundCardCount: 0,
      };
    }

    case "START_GAME_WITH_AI_CARDS": {
      if (state.players.length < 2) return state;

      const deck = buildHybridDeck(
        state.players,
        cardTemplates,
        action.payload.aiCards
      );
      const cardsPerRound = Math.floor(deck.length / 3);

      return {
        ...state,
        phase: GamePhase.Playing,
        deck,
        currentCardIndex: 0,
        currentRound: Round.HeatingUp,
        cardsPerRound,
        roundCardCount: 0,
      };
    }

    case "NEXT_CARD": {
      const nextIndex = state.currentCardIndex + 1;
      const nextRoundCardCount = state.roundCardCount + 1;

      // Game over — we've shown every card
      if (nextIndex >= state.deck.length) {
        return {
          ...state,
          phase: GamePhase.GameOver,
          currentCardIndex: nextIndex,
          roundCardCount: nextRoundCardCount,
        };
      }

      // Determine whether we should advance to the next round
      let newRound = state.currentRound;

      if (state.cardsPerRound > 0 && nextRoundCardCount >= state.cardsPerRound) {
        if (state.currentRound === Round.HeatingUp) {
          newRound = Round.Crazy;
        } else if (state.currentRound === Round.Crazy) {
          newRound = Round.WelcomeToHell;
        }
        // WelcomeToHell → stays WelcomeToHell; game will end when cards run out
      }

      return {
        ...state,
        currentCardIndex: nextIndex,
        roundCardCount:
          newRound !== state.currentRound ? 0 : nextRoundCardCount,
        currentRound: newRound,
      };
    }

    case "REFRESH_DECK": {
      if (state.players.length < 2) return state;

      const freshDeck = buildDeck(state.players, cardTemplates);
      const cardsPerRound = Math.floor(freshDeck.length / 3);

      return {
        ...state,
        deck: freshDeck,
        currentCardIndex: 0,
        currentRound: Round.HeatingUp,
        cardsPerRound,
        roundCardCount: 0,
      };
    }

    case "REFRESH_DECK_WITH_AI_CARDS": {
      if (state.players.length < 2) return state;

      const freshDeck = buildHybridDeck(
        state.players,
        cardTemplates,
        action.payload.aiCards
      );
      const cardsPerRound = Math.floor(freshDeck.length / 3);

      return {
        ...state,
        deck: freshDeck,
        currentCardIndex: 0,
        currentRound: Round.HeatingUp,
        cardsPerRound,
        roundCardCount: 0,
      };
    }

    case "RESTART_GAME": {
      return createInitialState();
    }

    case "GO_TO_PLAYER_ENTRY": {
      return {
        ...createInitialState(),
        phase: GamePhase.PlayerEntry,
      };
    }

    case "SET_PHASE": {
      return {
        ...state,
        phase: action.payload.phase,
      };
    }

    default: {
      // Exhaustive check — TypeScript will error if a case is unhandled
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}
