# FEATURES — dirtyredz.com

What the site actually does. Status is `live` unless noted.

## Routes

| Route | Page | What it shows |
|---|---|---|
| `/` | `Home.jsx` | Hero, plus the first 3 mods and first 3 projects of the merged list |
| `/mods` | `Mods.jsx` | All mods & servers, grouped by game |
| `/projects` | `Projects.jsx` | All software projects, including private/name-only entries |
| `/about` | `About.jsx` | Bio — Marine vet, self-taught dev, the story behind the name |
| `*` | `NotFound.jsx` | 404 |

> **On Home's "first 3":** repos fetched from GitHub are sorted by `pushed_at`, but
> `mergeManual()` *prepends* manual entries before `Home.jsx` takes `.slice(0, 3)`. So with
> three or more manual entries in a category, Home shows only those — recency is not
> preserved across the merge. Fine today at the current entry count; worth knowing before
> adding manual entries in bulk.

## Capabilities

| Capability | Where | Notes |
|---|---|---|
| **GitHub auto-pull** | `lib/github.js` | Fetches public repos at runtime; the site updates itself when you push. The defining feature. |
| **Mod vs project classification** | `categorize()` | Topic → fork → language → keyword precedence. Heuristics are data, so a new rule is one line. |
| **Game detection** | `detectGame()` | Avorion, Skyrim SE, Moonlight Peaks, Factorio, The Sims 4; falls back to a language guess, then the literal `'Game'`. |
| **Per-repo overrides** | `REPO_OVERRIDES` | Force a category, game, title, blurb, or mod-page link when the heuristics get it wrong. |
| **Mod-host deep links** | `modPage` override | Links a mod to where players actually get it — Nexus, Factorio Mod Portal, Boxelware/Avorion forum. Leads the link list. |
| **Manual & private entries** | `data/manual.js` | Work that is not a public repo. Merges ahead of fetched repos; wins on title collision. |
| **Offline fallback** | `data/mods.js`, `projects.js` | Bundled snapshots served when the API fails, with a `usingFallback` notice. See B1 in [`BACKLOG.md`](BACKLOG.md). |
| **Response caching** | `sessionStorage` | 30-min TTL, per tab. See [`GOTCHAS.md`](GOTCHAS.md). |
| **Loading skeletons** | `CardSkeleton` | Mirrors `Card`'s DOM so layout does not shift on load. |
| **Scroll-reveal animation** | `useReveal.js` | IntersectionObserver; progressive enhancement. |
| **Mobile navigation** | `Nav.jsx` | Scroll-state styling plus a mobile menu. |
| **Scroll reset on navigate** | `ScrollToTop` in `App.jsx` | Client-side routing otherwise preserves scroll position across pages. |
| **SPA deep links** | `public/_redirects` | Makes `/mods` resolve on a static host. Load-bearing. |

## Deliberately absent

Not gaps — choices. See [`DECISIONS.md`](DECISIONS.md).

- No backend, database, or auth
- No test runner, linter, or typechecker
- No state management library
- No CSS framework or CSS-in-JS
- No social links beyond GitHub
- No analytics
- No blog or CMS *(Gatsby + MDX had one in 2018; dropped in the rebuild)*
