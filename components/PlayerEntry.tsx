"use client";

import { useGame } from "@/lib/game-context";
import { GamePhase } from "@/types/game";
import { useCallback, useEffect, useRef, useState } from "react";

const MAX_PLAYERS = 10;
const MIN_PLAYERS = 2;

export default function PlayerEntry() {
  const { state, dispatch, startGameWithAI, loading } = useGame();
  const [inputValue, setInputValue] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  const [shakeActive, setShakeActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const triggerShake = useCallback(() => {
    setShakeActive(true);
    setShakeKey((k) => k + 1);
    // Reset so the animation can re-trigger next time
    setTimeout(() => setShakeActive(false), 400);
    inputRef.current?.focus();
  }, []);

  function handleAdd() {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      triggerShake();
      return;
    }
    if (state.players.length >= MAX_PLAYERS) return;

    // Duplicate name check (case-insensitive)
    const isDuplicate = state.players.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (isDuplicate) {
      triggerShake();
      return;
    }

    dispatch({ type: "ADD_PLAYER", payload: { name: trimmed } });
    setInputValue("");
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  }

  function handleRemove(id: string) {
    dispatch({ type: "REMOVE_PLAYER", payload: { id } });
  }

  async function handleStartGame() {
    if (state.players.length < MIN_PLAYERS || loading) return;
    await startGameWithAI();
  }

  function handleBack() {
    dispatch({ type: "SET_PHASE", payload: { phase: GamePhase.Start } });
  }

  const canStart = state.players.length >= MIN_PLAYERS && !loading;
  const atMax = state.players.length >= MAX_PLAYERS;

  return (
    <div className="flex h-full flex-col" style={{ background: "#0d0d12" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-4">
        <button
          type="button"
          onClick={handleBack}
          disabled={loading}
          aria-label="Back to start"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95 disabled:opacity-40"
        >
          {/* Left chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h2 className="flex-1 text-2xl font-extrabold text-white">
          Add Players
        </h2>

        <span className="text-sm font-semibold text-zinc-500">
          {state.players.length}/{MAX_PLAYERS}
        </span>
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <input
          key={shakeKey}
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={atMax ? "Max players reached" : "Enter a name…"}
          disabled={atMax || loading}
          maxLength={20}
          className={`flex-1 rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-base text-white placeholder-zinc-500 outline-none transition-colors focus:border-fuchsia-600 focus:ring-2 focus:ring-fuchsia-600/30 disabled:opacity-40${shakeActive ? " animate-shake" : ""}`}
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={!inputValue.trim() || atMax || loading}
          style={
            !inputValue.trim() || atMax || loading
              ? {}
              : { background: "linear-gradient(135deg, #c026d3, #7c3aed)" }
          }
          className="h-12 w-12 flex-shrink-0 rounded-xl text-xl font-bold text-white shadow transition-transform active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-500"
        >
          +
        </button>
      </div>

      {/* Player list — scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {state.players.length === 0 ? (
          <p className="mt-4 text-center text-sm text-zinc-600">
            Add at least {MIN_PLAYERS} players to get started.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {state.players.map((player, index) => (
              <li
                key={player.id}
                className="animate-slide-in flex items-center justify-between rounded-xl bg-zinc-800/60 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {/* Numbered avatar */}
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #c026d3, #7c3aed)",
                    }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-base font-semibold text-white">
                    {player.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(player.id)}
                  disabled={loading}
                  aria-label={`Remove ${player.name}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-700 hover:text-zinc-200 active:scale-95 disabled:opacity-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Start game button — pinned to bottom */}
      <div className="px-4 pb-6 pt-2">
        {!canStart && state.players.length > 0 && !loading && (
          <p className="mb-2 text-center text-xs text-zinc-500">
            Add one more player to start
          </p>
        )}

        {loading && (
          <p className="mb-2 text-center text-xs text-zinc-400">
            Generating personalised cards with AI…
          </p>
        )}

        <button
          type="button"
          onClick={handleStartGame}
          disabled={!canStart}
          style={
            canStart
              ? { background: "linear-gradient(135deg, #c026d3, #7c3aed)" }
              : {}
          }
          className="flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
        >
          {loading ? (
            <>
              {/* Inline SVG spinner */}
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Generating…
            </>
          ) : (
            "Start Game"
          )}
        </button>
      </div>
    </div>
  );
}
