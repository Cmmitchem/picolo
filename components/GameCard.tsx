"use client";

import { useGame } from "@/lib/game-context";
import { CardCategory, Round } from "@/types/game";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Helpers ────────────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  CardCategory,
  { label: string; color: string; textColor: string }
> = {
  [CardCategory.Truth]: {
    label: "TRUTH",
    color: "#2563eb",
    textColor: "#3b82f6",
  },
  [CardCategory.Confess]: {
    label: "CONFESS",
    color: "#dc2626",
    textColor: "#ef4444",
  },
  [CardCategory.Challenge]: {
    label: "CHALLENGE",
    color: "#ea580c",
    textColor: "#f97316",
  },
  [CardCategory.Group]: {
    label: "GROUP",
    color: "#16a34a",
    textColor: "#22c55e",
  },
  [CardCategory.Vote]: {
    label: "VOTE",
    color: "#7c3aed",
    textColor: "#a855f7",
  },
  [CardCategory.Rule]: {
    label: "RULE",
    color: "#ca8a04",
    textColor: "#eab308",
  },
};

const ROUND_CONFIG: Record<
  Round,
  { label: string; color: string; announcement: string }
> = {
  [Round.HeatingUp]: {
    label: "Round 1: Heating Up",
    color: "#0d9488",
    announcement: "Round 1\nHeating Up",
  },
  [Round.Crazy]: {
    label: "Round 2: Crazy",
    color: "#ea580c",
    announcement: "Round 2\nCrazy",
  },
  [Round.WelcomeToHell]: {
    label: "Round 3: Welcome to Hell",
    color: "#db2777",
    announcement: "Round 3\nWelcome to Hell",
  },
};

/**
 * Returns an interpolated progress-bar color that transitions:
 *   0% → teal (#0d9488)  50% → orange (#ea580c)  100% → pink (#db2777)
 */
function progressBarColor(progress: number): string {
  // Clamp 0–1
  const p = Math.max(0, Math.min(1, progress));

  if (p <= 0.5) {
    // teal → orange
    const t = p * 2;
    const r = Math.round(13 + t * (234 - 13));
    const g = Math.round(148 + t * (88 - 148));
    const b = Math.round(136 + t * (12 - 136));
    return `rgb(${r},${g},${b})`;
  } else {
    // orange → pink
    const t = (p - 0.5) * 2;
    const r = Math.round(234 + t * (219 - 234));
    const g = Math.round(88 + t * (39 - 88));
    const b = Math.round(12 + t * (119 - 12));
    return `rgb(${r},${g},${b})`;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GameCard() {
  const { state, dispatch } = useGame();

  const { deck, currentCardIndex, currentRound, cardsPerRound } = state;

  const card = deck[currentCardIndex] ?? null;

  // Track the displayed round separately so we can show a banner when it changes
  const [displayedRound, setDisplayedRound] = useState<Round>(currentRound);
  const [showRoundBanner, setShowRoundBanner] = useState(false);

  // Animation key — incrementing this forces a re-render of the card with
  // the enter animation each time we advance.
  const [animKey, setAnimKey] = useState(0);

  // Whether the card is in the "press" (scale-down) state
  const [pressed, setPressed] = useState(false);

  // Ref to prevent double-firing on rapid taps
  const advancingRef = useRef(false);

  // Detect round change and show the banner
  useEffect(() => {
    if (currentRound !== displayedRound) {
      setShowRoundBanner(true);
      const timer = setTimeout(() => {
        setShowRoundBanner(false);
        setDisplayedRound(currentRound);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [currentRound, displayedRound]);

  const handleAdvance = useCallback(() => {
    if (advancingRef.current || showRoundBanner) return;
    advancingRef.current = true;

    // Brief press animation before advancing
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      setAnimKey((k) => k + 1);
      dispatch({ type: "NEXT_CARD" });
      setTimeout(() => {
        advancingRef.current = false;
      }, 350);
    }, 120);
  }, [dispatch, showRoundBanner]);

  // Keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space" || e.code === "ArrowRight" || e.code === "Enter") {
        e.preventDefault();
        handleAdvance();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleAdvance]);

  if (!card) return null;

  const categoryConfig = CATEGORY_CONFIG[card.category];
  const roundConfig = ROUND_CONFIG[displayedRound];
  const totalCards = deck.length;
  const cardNumber = currentCardIndex + 1;

  // Progress bar: 0–1 across the entire deck
  const progressFraction = totalCards > 0 ? currentCardIndex / totalCards : 0;
  const progressPercent = Math.round(progressFraction * 100);
  const barColor = progressBarColor(progressFraction);

  return (
    <div className="relative flex h-full flex-col" style={{ background: "#0d0d12" }}>
      {/* ── Overall progress bar (very top, full width) ── */}
      <div
        className="w-full"
        style={{ height: "3px", background: "#1e1e28" }}
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Game progress"
      >
        <div
          style={{
            height: "100%",
            width: `${progressPercent}%`,
            background: barColor,
            transition: "width 0.4s ease, background-color 0.6s ease",
          }}
        />
      </div>

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: `2px solid ${roundConfig.color}22` }}
      >
        <span
          className="text-sm font-bold uppercase tracking-widest"
          style={{ color: roundConfig.color }}
        >
          {roundConfig.label}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-zinc-500">
            {cardNumber}/{totalCards}
          </span>

          {/* Refresh deck */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "REFRESH_DECK" });
              setAnimKey((k) => k + 1);
            }}
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300 active:scale-90"
            aria-label="Refresh cards"
            title="Shuffle new cards"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </button>

          {/* End game */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "RESTART_GAME" });
            }}
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-red-400 active:scale-90"
            aria-label="End game"
            title="End game"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card body — tappable */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleAdvance}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleAdvance();
        }}
        className="flex flex-1 cursor-pointer select-none flex-col"
        aria-label="Tap to see next card"
        style={{
          transform: pressed ? "scale(0.975)" : "scale(1)",
          transition: "transform 0.12s ease-in-out",
        }}
      >
        {/* Colored top accent border */}
        <div
          className="mx-4 mt-4 rounded-t-2xl"
          style={{
            height: "4px",
            background: `linear-gradient(90deg, ${categoryConfig.color}, ${categoryConfig.textColor})`,
          }}
        />

        {/* Card surface */}
        <div
          key={animKey}
          className="animate-card-enter mx-4 flex flex-1 flex-col rounded-b-2xl rounded-t-none pb-6"
          style={{ background: "#18181f" }}
        >
          {/* Category badge */}
          <div className="px-5 pt-5">
            <span
              className="rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest"
              style={{
                background: `${categoryConfig.color}22`,
                color: categoryConfig.textColor,
                border: `1px solid ${categoryConfig.color}44`,
              }}
            >
              {categoryConfig.label}
            </span>
          </div>

          {/* Card text */}
          <div className="flex flex-1 items-center justify-center px-6 py-8">
            <p className="text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
              {card.text}
            </p>
          </div>
        </div>

        {/* Tap prompt — pulses subtly */}
        <p className="animate-tap-pulse py-4 text-center text-xs font-medium text-zinc-500">
          Tap anywhere to continue
        </p>
      </div>

      {/* Round transition overlay */}
      {showRoundBanner && (
        <div
          className="animate-fade-in absolute inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "#0d0d12ee", backdropFilter: "blur(4px)" }}
        >
          <div className="animate-round-banner flex flex-col items-center gap-4">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: ROUND_CONFIG[currentRound].color }}
            >
              Next up
            </span>
            <p
              className="text-center text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {ROUND_CONFIG[currentRound].announcement}
            </p>
            {/* Coloured underline */}
            <div
              className="mt-2 h-1 w-24 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${ROUND_CONFIG[currentRound].color}, transparent)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
