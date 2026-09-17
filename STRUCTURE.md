# STRUCTURE — dirtyredz.com

## Overview

Personal portfolio site for David "Dirtyredz" McClain — game mods & servers, software
projects, and an about page. **Vite 5 + React 18 + react-router-dom 6**, plain CSS (no
CSS framework, no state library, no test runner). Static SPA deployed on **Cloudflare
Pages** (project `dirtyredz-com`, production branch `master`: `npm run build` → publish
`dist/`, Node pinned via `.node-version`; `public/_redirects` provides the `/*` →
`/index.html` SPA fallback so React Router owns client-side routes). Build command,
output dir and production branch live in the CF Pages dashboard, not in a repo file.

The distinguishing idea: the portfolio **auto-pulls itself from the GitHub API** rather
than being hand-maintained. `src/lib/github.js` fetches public repos, classifies each as
a *mod* or a *project* by language/keyword/topic heuristics, and caches to
`sessionStorage`. `src/hooks/useGithub.js` merges in hand-written entries (private/off-GitHub
work) and falls back to the curated static lists in `src/data/` when the API is
unreachable. Every page renders the same `Card` component off that one shape.

## Layout

```
.                        # config + docs only (package.json, vite.config.js, .node-version, index.html, README, STRUCTURE.md)
├── docs/                # the living-doc set (ARCHITECTURE, DECISIONS, FEATURES, ROADMAP, BACKLOG, GOTCHAS)
├── public/              # served verbatim at / — fonts, img, favicon, manifest, _redirects
└── src/
    ├── main.jsx         # Vite entry: mounts <App> in <BrowserRouter>, imports global.css
    ├── App.jsx          # app shell: Nav + <Routes> + Footer, ScrollToTop on navigation
    ├── pages/           # one default-export component per route (+ its co-located .css)
    │   ├── Home.jsx/.css  About.jsx/.css  Mods.jsx/.css
    │   └── Projects.jsx  NotFound.jsx
    ├── components/      # shared UI reused across pages (each with co-located .css)
    │   ├── Nav.jsx/.css   Footer.jsx/.css
    │   └── Card.jsx/.css  # + CardSkeleton loading state
    ├── hooks/           # React behaviour, no markup
    │   ├── useGithub.js   # fetch → classify → merge manual → fallback
    │   └── useReveal.js   # IntersectionObserver scroll-in animation
    ├── data/            # hand-edited content — the files you touch to change the site
    │   ├── site.js       # identity, tagline, github link
    │   ├── manual.js     # entries not in the public GitHub feed (wins on title collision)
    │   └── mods.js  projects.js   # offline fallback lists
    ├── lib/             # external-service clients + their domain rules
    │   └── github.js     # GitHub API fetch, mod/project heuristics, overrides, cache
    └── styles/
        └── global.css   # design tokens (CSS vars) + base/layout rules
```

**Enforced homes:**

- `src/pages/` — one route component per file, plus its co-located page CSS
- `src/components/` — shared UI reused by more than one page, plus its co-located CSS
- `src/hooks/` — reusable React hooks (data fetching, DOM behaviour); no markup
- `src/data/` — hand-edited content and offline fallback lists; no logic
- `src/lib/` — external-service clients and their domain rules (GitHub API + classification)
- `src/styles/` — global CSS: design tokens and base/layout rules
- `docs/` — the living-doc set; only `README.md` and `STRUCTURE.md` stay at the root
- `src/main.jsx` — Vite's mandated entry module, referenced by `index.html`
- `src/App.jsx` — router shell; the only place routes are declared

Everything else at the repo root is configuration or documentation. `public/` is served
verbatim and holds assets only, never code.

## Components

| Component | Responsibility | Key files | Depends on |
|---|---|---|---|
| Entry / shell | Mount React, declare routes, scroll-reset, frame every page | `src/main.jsx`, `src/App.jsx` | react-router-dom, `components/`, `pages/`, `styles/global.css` |
| Pages | One per route; compose cards + copy, own their page CSS | `src/pages/*.jsx` | `hooks/`, `components/Card.jsx`, `data/site.js` |
| Shared UI | Nav (scroll state, mobile menu), Footer, Card + CardSkeleton | `src/components/*.jsx` | react-router-dom, `data/site.js` |
| Data access | Fetch/classify GitHub repos; merge manual entries; fall back offline | `src/lib/github.js`, `src/hooks/useGithub.js` | `data/manual.js`, `data/mods.js`, `data/projects.js`, `sessionStorage` |
| Presentation behaviour | Scroll-into-view reveal animation | `src/hooks/useReveal.js` | IntersectionObserver |
| Content | Everything editable without touching a component | `src/data/*.js` | — |
| Styling | Design tokens + base rules; page/component CSS co-located with its JSX | `src/styles/global.css`, `src/**/*.css` | — |
| Build & deploy | Dev server (tunnel hosts allowed), production build, SPA redirect | `vite.config.js`, `.node-version`, `public/_redirects` | Vite, Cloudflare Pages |

## Structural debt

**Last full review: 2026-09-17** — baseline, whole codebase. Three Claude lenses
(componentization, abstraction, topology) plus a Codex `gpt-5.6-sol` cross-model sign-off,
which returned **PASS with no P0**.

17 JS modules, largest is `lib/github.js` at 200 lines — nothing near the 800-line cap. No
directory holds more than 5 code files. Dependency graph verified acyclic, with nothing in
`lib/` or `data/` importing upward: `pages → hooks → {lib, data}`, plus pages → components
and pages → `data/site.js`. Note `lib/github.js` imports nothing at all — the older
`pages → hooks → lib → data` shorthand in this file implied a `lib → data` edge that has
never existed, and was corrected at the 2026-09-17 sign-off. The Layout block above was
checked against the real tree in both directions and matches.

**The structure is sound.** Every deferred finding is tracked in
[`docs/BACKLOG.md`](docs/BACKLOG.md) — P0 is empty and that is the correct state. In summary:

- **P1 ×3** — the `data/mods.js` / `projects.js` snapshots are undocumented stale-tolerant
  fallbacks (B1); the card item shape is re-asserted by four producers with no TypeScript
  or test to catch drift (B2); `fetchRepos` has no request timeout, so a *hanging* GitHub
  request never reaches the fallback the way a *failing* one does (B3).
- **P2 ×5** — `sessionStorage` cache scope (B4), the 100-repo fetch ceiling (B5), GitHub
  identity split across sources (B6), and two earned-but-deferred extractions: `CardGrid`
  (B7) and `PageHeader` (B8).

**Examined and deliberately left alone** — recorded in BACKLOG's watch list with the
trigger that would change each verdict, so a future baseline need not re-litigate them:

- Splitting `lib/github.js` into HTTP client + classifier. The two jobs are ~35 and ~65
  lines and share the same `REPO_OVERRIDES` / `blob()` helpers, so a split today yields two
  files that always change together. Revisit if the classifier grows materially.
- Renaming `src/lib/` to `src/github/`. The topology lens flagged `lib/` as a generic
  bucket; the Codex sign-off overruled it — the folder has a precise responsibility in the
  Layout above, and a second client is not required to justify a conventional
  external-integration boundary. Revisit when a second client appears.
- Extracting the duplicated `usingFallback` / empty-state block. Two four-line call sites;
  both the abstraction lens and Codex declined to extract at this size. Revisit at a third
  list page.
- Adding a test runner or linter — a decision, not an oversight. See
  [`docs/DECISIONS.md`](docs/DECISIONS.md).

**Fixed during the baseline itself:** the `sessionStorage` / `localStorage` error in this
file (caught independently by two lenses), `Nav.jsx` bypassing the `data/site.js` seam with
two hardcoded URLs, the README pointing contributors at the fallback files as though they
were primary content, and a stray tracked `.claude-launch-tmp` at the repo root.
