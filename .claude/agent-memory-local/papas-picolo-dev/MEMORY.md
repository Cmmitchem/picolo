# Papa's Picolo — Agent Memory

## Project Root
`/Users/carolinemitchem/Desktop/Personal/picolo`

## Critical: Tailwind CSS v4
NO `tailwind.config.ts`. All theme tokens go in `app/globals.css` inside `@theme inline {}`.
Do NOT generate a tailwind config file. Do NOT use `tailwind.config.js/ts`.
`animate-spin` is NOT auto-included — define it manually in `app/globals.css`.

## Key File Paths
- `app/globals.css` — Tailwind v4 theme tokens + global dark body styles + all keyframes
- `app/layout.tsx` — Root layout with GameProvider wrapper
- `app/api/generate-cards/route.ts` — POST endpoint; calls Claude to generate AI cards
- `types/game.ts` — All enums and interfaces (CardCategory, Round, GamePhase, etc.)
- `lib/data/cards.ts` — Static 70-card deck (CardTemplate[])
- `lib/card-engine.ts` — hydrateCard() with Fisher-Yates player selection
- `lib/deck-builder.ts` — buildDeck() + buildHybridDeck() + shuffle<T>()
- `lib/game-reducer.ts` — gameReducer, createInitialState, GameAction union type
- `lib/game-context.tsx` — GameProvider, useGame(), startGameWithAI(), loading bool
- `lib/ai-cards.ts` — generateAICards() client fetch wrapper (never throws)

## Card Template Conventions
- Placeholders: `{player1}`, `{player2}`, `{player3}`
- `playerCount: 0` = group card, no substitution
- ID format: `w-truth-01` (w=round1/crazy, h=round2/heating-up, c=round3/welcome-to-hell)
- AI card IDs: `ai-r{round}-{timestamp}-{index}`
- 3 rounds: Round.Crazy=1, Round.HeatingUp=2, Round.WelcomeToHell=3

## Game State
- GamePhase: Start → PlayerEntry → Playing → GameOver
- Min 2 players, max 10
- Deck ordered: Crazy cards → HeatingUp cards → WelcomeToHell cards
- cardsPerRound = floor(deck.length / 3), roundCardCount resets on round advance

## AI Integration (Phase 4)
- Model: `claude-opus-4-5`
- 5 AI cards requested per round (AI_CARDS_PER_ROUND in game-context.tsx)
- 8-second AbortController timeout shared across all 3 parallel requests
- Falls back to static-only START_GAME if AI returns 0 cards
- buildHybridDeck() merges static + AI cards per round, shuffled together
- API route strips markdown fences from Claude response before JSON.parse
- generateAICards() returns [] on any error (AbortError, network, parse)
- PlayerEntry shows spinner + "Generating…" label while loading=true

## Styling Conventions
- App is always dark — no prefers-color-scheme, no light mode
- Brand: primary=#c026d3 (magenta), secondary=#7c3aed (purple), bg=#0d0d12
- Use inline style for gradients (Tailwind v4 doesn't easily support arbitrary gradient-stops)

## Dev Commands
- `npm run dev` — dev server
- `npm run build` — build + typecheck
- `npm run lint` — ESLint

## Next.js Version
16.1.6 with App Router. Uses Turbopack for build.

## Phase 3 UI Components (complete)
- `components/StartScreen.tsx` — dispatches SET_PHASE → PlayerEntry
- `components/PlayerEntry.tsx` — ADD_PLAYER / REMOVE_PLAYER; calls startGameWithAI(); shows spinner
- `components/GameCard.tsx` — full-screen tap-to-advance; round banner overlay on round change (1.6 s); animKey tricks React into re-running .animate-card-enter
- `components/GameOver.tsx` — RESTART_GAME / GO_TO_PLAYER_ENTRY
- `app/page.tsx` — "use client" switch on state.phase; exhaustive never check for TypeScript safety

## Animation Approach
- Keyframes defined in `app/globals.css`: card-enter, fade-in, round-banner-in, spin
- Phase 5 additions: card-exit-left, card-press, shake, pulse-glow, tap-pulse, slide-in-right, confetti-fall-1..4
- CSS classes: `.animate-card-enter`, `.animate-fade-in`, `.animate-round-banner`, `.animate-spin`, `.animate-shake`, `.animate-pulse-glow`, `.animate-tap-pulse`, `.animate-slide-in`, `.confetti-particle`
- No external animation library; pure CSS transitions + React key trick for re-trigger
- Card press effect: inline `style={{ transform: pressed ? "scale(0.975)" : "scale(1)", transition: "..." }}` — simpler than a CSS class because it needs React state

## Component Patterns
- Use inline `style` for all gradient backgrounds and category/round colors (Tailwind v4 can't do arbitrary gradient stops)
- Category colors: truth=#2563eb, dare=#dc2626, challenge=#ea580c, group=#16a34a, vote=#7c3aed, rule=#ca8a04
- Round colors: crazy(r1)=#0d9488, heatingUp(r2)=#ea580c, welcomeToHell(r3)=#db2777
- All screens use `h-full` (never min-h-screen) to fill the `.app-shell`
- advancingRef guard pattern in GameCard prevents double-tap advancing two cards
- Shake on invalid input: `shakeKey` state increments to force React to re-mount input and re-run animation; `shakeActive` bool adds class; reset after 400 ms

## PWA (Phase 5)
- `public/manifest.json` — Web App Manifest; SVG icons at `/icon-192.svg`, `/icon-512.svg`
- `app/layout.tsx` — `metadata.manifest`, `metadata.appleWebApp`; `viewport.themeColor`
- Icons: simple SVG with brand gradient (no PNG needed for modern browsers/Safari)

## Vercel Deployment
- Set `ANTHROPIC_API_KEY` env var in Vercel project settings
- `next.config.ts` has security headers + cache headers; `reactStrictMode: true`
- `/api/generate-cards` is a dynamic serverless function (marked ƒ in build output)
- No hardcoded localhost URLs anywhere

## Progress Bar Pattern (GameCard)
- `progressFraction = currentCardIndex / deck.length`; color interpolated teal→orange→pink via `progressBarColor()` helper
- Uses CSS `transition: width + background-color` for smooth updates on each card advance

See `CLAUDE.md` in project root for full project structure overview.
