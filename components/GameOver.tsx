"use client";

import { useGame } from "@/lib/game-context";

// ─── Confetti particle definitions ──────────────────────────────────────────

interface ConfettiParticle {
  id: number;
  color: string;
  left: string;
  top: string;
  width: number;
  height: number;
  animationName: string;
  animationDuration: string;
  animationDelay: string;
  borderRadius: string;
}

const CONFETTI_COLORS = [
  "#c026d3",
  "#7c3aed",
  "#ec4899",
  "#f97316",
  "#0d9488",
  "#eab308",
  "#3b82f6",
  "#22c55e",
];

const CONFETTI_ANIMATIONS = [
  "confetti-fall-1",
  "confetti-fall-2",
  "confetti-fall-3",
  "confetti-fall-4",
];

// Deterministic-ish particle list (avoids hydration mismatches from Math.random())
const PARTICLES: ConfettiParticle[] = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${((i * 37 + 5) % 96) + 2}%`,
  top: `${((i * 17 + 8) % 60) + 5}%`,
  width: 6 + (i % 5) * 2,
  height: 6 + ((i + 2) % 4) * 2,
  animationName: CONFETTI_ANIMATIONS[i % CONFETTI_ANIMATIONS.length],
  animationDuration: `${1.8 + (i % 7) * 0.3}s`,
  animationDelay: `${(i % 9) * 0.18}s`,
  borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "2px" : "1px",
}));

// ─── Component ───────────────────────────────────────────────────────────────

export default function GameOver() {
  const { state, dispatch } = useGame();

  const cardsPlayed = Math.min(state.currentCardIndex, state.deck.length);

  function handlePlayAgain() {
    dispatch({ type: "RESTART_GAME" });
  }

  function handleNewPlayers() {
    dispatch({ type: "GO_TO_PLAYER_ENTRY" });
  }

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden px-6">
      {/* ── CSS confetti particles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="confetti-particle"
            style={{
              backgroundColor: p.color,
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              borderRadius: p.borderRadius,
              animationName: p.animationName,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in",
              animationFillMode: "both",
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative flex flex-col items-center gap-8 text-center">
        {/* Trophy icon */}
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full text-5xl"
          style={{ background: "linear-gradient(135deg, #c026d3, #7c3aed)" }}
          aria-hidden="true"
        >
          🏆
        </div>

        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-5xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #c026d3, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Game Over!
          </h1>
          <p className="text-lg text-zinc-400">Hope you had a blast!</p>

          {/* Cards played count */}
          {cardsPlayed > 0 && (
            <p className="mt-1 text-sm font-semibold text-zinc-500">
              {cardsPlayed} card{cardsPlayed !== 1 ? "s" : ""} played
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex w-full max-w-xs flex-col gap-3">
          <button
            type="button"
            onClick={handlePlayAgain}
            style={{ background: "linear-gradient(135deg, #c026d3, #7c3aed)" }}
            className="w-full rounded-2xl px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform active:scale-95"
          >
            Play Again
          </button>
          <button
            type="button"
            onClick={handleNewPlayers}
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-800/60 px-8 py-4 text-xl font-bold text-zinc-200 shadow transition-transform active:scale-95 hover:bg-zinc-700"
          >
            New Players
          </button>
        </div>
      </div>
    </div>
  );
}
