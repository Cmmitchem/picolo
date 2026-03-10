"use client";

import GameCard from "@/components/GameCard";
import GameOver from "@/components/GameOver";
import PlayerEntry from "@/components/PlayerEntry";
import StartScreen from "@/components/StartScreen";
import { useGame } from "@/lib/game-context";
import { GamePhase } from "@/types/game";

export default function Home() {
  const { state } = useGame();

  switch (state.phase) {
    case GamePhase.Start:
      return <StartScreen />;
    case GamePhase.PlayerEntry:
      return <PlayerEntry />;
    case GamePhase.Playing:
      return <GameCard />;
    case GamePhase.GameOver:
      return <GameOver />;
    default: {
      // Exhaustive — TypeScript will catch any unhandled phase
      const _exhaustive: never = state.phase;
      return _exhaustive;
    }
  }
}
