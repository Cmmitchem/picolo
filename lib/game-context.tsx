"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { GameState, Round } from "@/types/game";
import { createInitialState, GameAction, gameReducer } from "./game-reducer";
import { generateAICards } from "./ai-cards";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Cards to request per round from the AI */
const AI_CARDS_PER_ROUND = 5;

/** Maximum time (ms) to wait for AI card generation before falling back */
const AI_TIMEOUT_MS = 8000;

// ─── Context Types ────────────────────────────────────────────────────────────

interface GameContextValue {
  state: GameState;
  dispatch: Dispatch<GameAction>;
  /**
   * Generates AI cards for all three rounds, then starts the game with a
   * hybrid deck (AI + static cards interleaved). Falls back to the static-only
   * deck if AI generation fails or times out.
   */
  startGameWithAI: () => Promise<void>;
  /** True while AI card generation is in flight */
  loading: boolean;
  /** Regenerates the deck mid-game with fresh AI cards */
  refreshDeckWithAI: () => Promise<void>;
  /** True while refresh AI generation is in flight */
  refreshing: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const GameContext = createContext<GameContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const startGameWithAI = useCallback(async () => {
    if (state.players.length < 2) return;

    setLoading(true);

    // Set up a shared abort controller that fires after AI_TIMEOUT_MS
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);

    try {
      // Generate cards for all three rounds in parallel
      const [heatingUpCards, crazyCards, hellCards] = await Promise.all([
        generateAICards(
          state.players,
          Round.HeatingUp,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
        generateAICards(
          state.players,
          Round.Crazy,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
        generateAICards(
          state.players,
          Round.WelcomeToHell,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
      ]);

      const aiCards = [...heatingUpCards, ...crazyCards, ...hellCards];

      if (aiCards.length > 0) {
        dispatch({
          type: "START_GAME_WITH_AI_CARDS",
          payload: { aiCards },
        });
      } else {
        // AI returned nothing (all three failed) — use static deck
        console.warn("[game-context] No AI cards received — using static deck");
        dispatch({ type: "START_GAME" });
      }
    } catch (err) {
      // Unexpected top-level error — fall back to static deck
      console.error("[game-context] startGameWithAI failed:", err);
      dispatch({ type: "START_GAME" });
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [state.players]);

  const refreshDeckWithAI = useCallback(async () => {
    if (state.players.length < 2) return;

    setRefreshing(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);

    try {
      const [heatingUpCards, crazyCards, hellCards] = await Promise.all([
        generateAICards(
          state.players,
          Round.HeatingUp,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
        generateAICards(
          state.players,
          Round.Crazy,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
        generateAICards(
          state.players,
          Round.WelcomeToHell,
          AI_CARDS_PER_ROUND,
          controller.signal
        ),
      ]);

      const aiCards = [...heatingUpCards, ...crazyCards, ...hellCards];

      if (aiCards.length > 0) {
        dispatch({
          type: "REFRESH_DECK_WITH_AI_CARDS",
          payload: { aiCards },
        });
      } else {
        console.warn("[game-context] No AI cards on refresh — using static deck");
        dispatch({ type: "REFRESH_DECK" });
      }
    } catch (err) {
      console.error("[game-context] refreshDeckWithAI failed:", err);
      dispatch({ type: "REFRESH_DECK" });
    } finally {
      clearTimeout(timeoutId);
      setRefreshing(false);
    }
  }, [state.players, dispatch]);

  return (
    <GameContext.Provider value={{ state, dispatch, startGameWithAI, loading, refreshDeckWithAI, refreshing }}>
      {children}
    </GameContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Access game state, dispatch, and AI helpers from any client component.
 * Must be used inside a <GameProvider>.
 */
export function useGame(): GameContextValue {
  const context = useContext(GameContext);

  if (context === null) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
}
