# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Papa's Picolo — a drinking card game web application.

## Status

Phases 1–5 complete. Core game logic, UI, Claude AI integration, and polish/PWA implemented.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 — NO `tailwind.config.ts`. All theme customisation lives in `app/globals.css` inside `@theme inline {}`.
- **AI**: Claude API via `@anthropic-ai/sdk` (model: claude-opus-4-5)
- **Runtime**: Node.js

## Dev Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build + type-check
npm run lint     # ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your key:

```
ANTHROPIC_API_KEY=your-api-key-here
```

`.env.local` is excluded from git via `.gitignore` (`.env*` rule). Never commit it.

## Project Structure

```
app/
  globals.css                      # Tailwind v4 @theme inline tokens + global body styles
  layout.tsx                       # Root layout — metadata, fonts, GameProvider wrapper
  page.tsx                         # Phase switch: Start / PlayerEntry / Playing / GameOver
  api/
    generate-cards/
      route.ts                     # POST endpoint — calls Claude to generate AI cards

types/
  game.ts                          # All TypeScript enums and interfaces

lib/
  data/
    cards.ts                       # Static deck of ~70 CardTemplate objects
  card-engine.ts                   # hydrateCard() — substitutes {player1} etc. with real names
  deck-builder.ts                  # buildDeck() + buildHybridDeck() + shuffle<T>()
  game-reducer.ts                  # gameReducer() + createInitialState() + GameAction types
  game-context.tsx                 # GameProvider + useGame() + startGameWithAI() + loading
  ai-cards.ts                      # generateAICards() — client-side fetch wrapper, never throws

components/
  StartScreen.tsx
  PlayerEntry.tsx                  # Shows spinner + "Generating…" while AI is in flight
  GameCard.tsx
  GameOver.tsx
```

## Key Conventions

- `{player1}`, `{player2}`, `{player3}` are the placeholder tokens in card templates.
- `playerCount: 0` on a CardTemplate means "addresses everyone" — no substitution.
- Card categories: truth, confess, challenge, group, vote, rule (NO dare category).
- Card IDs follow the pattern `w-truth-01` (w=heating up, h=crazy, c=welcome to hell). AI cards use `ai-r{round}-{timestamp}-{index}`.
- All client components that consume game state must use `useGame()` inside `<GameProvider>`.
- The app is always dark-themed — no light mode / no `prefers-color-scheme` media query.

## AI Integration (Phase 4)

### Flow

1. Player taps "Start Game" in `PlayerEntry`.
2. `startGameWithAI()` (from context) fires `generateAICards()` for all 3 rounds in parallel.
3. A shared `AbortController` enforces an 8-second timeout across all three requests.
4. Results are combined and passed to `START_GAME_WITH_AI_CARDS`, which calls `buildHybridDeck()`.
5. If AI returns zero cards (all failed / timed out), falls back to `START_GAME` (pure static deck).

### Hybrid Deck

`buildHybridDeck()` in `lib/deck-builder.ts`:
- For each round: hydrate static templates + collect AI cards for that round, then shuffle together.
- Guarantees round order is preserved (Heating Up → Crazy → Welcome to Hell) while cards within each round are randomised.
- 5 AI cards are requested per round (constant `AI_CARDS_PER_ROUND` in `game-context.tsx`).

### API Route

`app/api/generate-cards/route.ts` — POST `{ players: string[], round: number, count: number }`:
- Builds a system prompt with round-specific intensity instructions and player names.
- Asks Claude to return a raw JSON array: `[{ text, category }]`.
- Strips optional markdown fences from Claude's response before parsing.
- Returns `{ cards: GeneratedCard[] }` on success or an error JSON with appropriate HTTP status.

## Phase 5 — Polish & PWA

### PWA Files
- `public/manifest.json` — Web App Manifest (standalone, portrait, theme #0d0d12)
- `public/icon-192.svg` and `public/icon-512.svg` — SVG icons with brand gradient "P"
- `app/layout.tsx` — exports `manifest` + `appleWebApp` metadata; `themeColor` in Viewport export

### New CSS Animations (`app/globals.css`)
- `animate-card-exit` / `card-exit-left` — swipe-out departing card (translateX + rotate)
- `animate-card-press` / `card-press` — tactile scale-down on tap
- `animate-shake` / `shake` — invalid/duplicate name input feedback
- `animate-pulse-glow` / `pulse-glow` — pulsing glow behind Start button
- `animate-tap-pulse` / `tap-pulse` — subtle "Tap anywhere" text pulse
- `animate-slide-in` / `slide-in-right` — player list item entrance
- `confetti-particle` class + 4 `confetti-fall-*` keyframes for GameOver screen

### Component Polish
- `StartScreen` — pulsing glow layer behind CTA; "18+ Adults Only" badge
- `PlayerEntry` — shake animation on empty/duplicate add; slide-in for player rows
- `GameCard` — full-width progress bar at top (color interpolates teal→orange→pink); inline press scale; tap-pulse footer
- `GameOver` — 28 deterministic CSS confetti particles; "N cards played" stat

### Deployment
- `next.config.ts` — `reactStrictMode: true`; security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy); cache headers for manifest and icons
- No hardcoded localhost URLs anywhere in the codebase
- Deploy to Vercel: `ANTHROPIC_API_KEY` env var required; API route is a serverless function (dynamic)
