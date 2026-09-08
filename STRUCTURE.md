# STRUCTURE — dirtyredz.com

## Overview

Personal portfolio site for David "Dirtyredz" McClain — game mods & servers, software
projects, and an about page. **Vite 5 + React 18 + react-router-dom 6**, plain CSS (no
CSS framework, no state library, no test runner). Static SPA deployed on **Netlify**
(`netlify.toml`: `npm run build` → publish `dist/`, with a `/*` → `/index.html` fallback
so React Router owns client-side routes).

The distinguishing idea: the portfolio **auto-pulls itself from the GitHub API** rather
than being hand-maintained. `src/lib/github.js` fetches public repos, classifies each as
a *mod* or a *project* by language/keyword/topic heuristics, and caches to
`localStorage`. `src/hooks/useGithub.js` merges in hand-written entries (private/off-GitHub
work) and falls back to the curated static lists in `src/data/` when the API is
unreachable. Every page renders the same `Card` component off that one shape.

## Layout

```
.                        # config + docs only (package.json, vite.config.js, netlify.toml, index.html, README)
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
| Data access | Fetch/classify GitHub repos; merge manual entries; fall back offline | `src/lib/github.js`, `src/hooks/useGithub.js` | `data/manual.js`, `data/mods.js`, `data/projects.js`, `localStorage` |
| Presentation behaviour | Scroll-into-view reveal animation | `src/hooks/useReveal.js` | IntersectionObserver |
| Content | Everything editable without touching a component | `src/data/*.js` | — |
| Styling | Design tokens + base rules; page/component CSS co-located with its JSX | `src/styles/global.css`, `src/**/*.css` | — |
| Build & deploy | Dev server (tunnel hosts allowed), production build, SPA redirect | `vite.config.js`, `netlify.toml`, `public/_redirects` | Vite, Netlify |

## Structural debt

**None material.** 17 source modules, largest is 192 lines, no directory holds more than
5 code files, and the dependency direction is clean (`pages → hooks → lib → data`, never
the reverse). Four minor notes, none worth acting on today:

- `src/lib/github.js` (192 lines) carries two jobs: the HTTP/cache client and the
  mod-vs-project classification heuristics (regexes, overrides, game inference). If the
  heuristics keep growing, split the classifier out as `src/lib/classify.js`; at this size
  the seam is not worth the file.
- `github.js` holds **four** parallel `repo-name → X` override maps (`OVERRIDES`,
  `GAME_OVERRIDES`, `BLURB_OVERRIDES`, `MOD_PAGE`), each with its own `map[r.name]` lookup.
  `MOD_PAGE` is `{ label, href }` and spans hosts (Nexus, Factorio Mod Portal, Avorion/Boxelware
  forum) so a new host does NOT add a map. Fine at four; if a fifth axis appears, collapse them into one
  `REPO_OVERRIDES = { name: { category, game, blurb, modPage } }` rather than adding another map.
- `src/data/` holds both hand-authored content (`site.js`, `manual.js`) and *offline
  fallback copies* of GitHub data (`mods.js`, `projects.js`). Those fallbacks can silently
  drift from reality since nothing regenerates them. A comment in each naming them as
  stale-tolerant snapshots would cost nothing.
- No test setup and no linter at all — deliberate for a static personal site, but worth
  knowing before anything non-trivial is added to `lib/`.
