"use client";

import { useGame } from "@/lib/game-context";
import { GamePhase } from "@/types/game";

export default function StartScreen() {
  const { dispatch } = useGame();

  function handleStart() {
    dispatch({ type: "SET_PHASE", payload: { phase: GamePhase.PlayerEntry } });
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Papa&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c026d3, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Picolo
            </span>
          </h1>
          <p className="text-lg text-zinc-400">
            The ultimate drinking card game
          </p>
          {/* Adults-only badge */}
          <span
            className="mt-1 inline-block rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-widest"
            style={{
              borderColor: "#c026d355",
              color: "#c026d3",
              background: "#c026d310",
            }}
          >
            18+ Adults Only
          </span>
        </div>

        {/* Start button with pulsing glow */}
        <div className="relative mt-4 w-full max-w-xs">
          {/* Glow layer — sits behind the button */}
          <div
            className="animate-pulse-glow absolute inset-0 rounded-2xl"
            aria-hidden="true"
            style={{
              background: "linear-gradient(135deg, #c026d3, #7c3aed)",
              filter: "blur(8px)",
              opacity: 0.7,
            }}
          />
          <button
            type="button"
            onClick={handleStart}
            style={{
              background: "linear-gradient(135deg, #c026d3, #7c3aed)",
            }}
            className="relative w-full rounded-2xl px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform active:scale-95"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
