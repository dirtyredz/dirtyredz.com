# DECISIONS — dirtyredz.com

Architecture decisions and their rationale, newest first. Each entry records what was
chosen, why, and what was rejected — the rejected alternatives are the point, since a
decision without them is just a description.

Reconstructed from git history and code during the 2026-09-17 baseline review. Dates are
commit dates. Entries before 2026-08 are inferred from the historical tree and marked as such.

---

## 2026-09-07 — One `REPO_OVERRIDES` map, not parallel maps per axis

**Decision.** Per-repo hand overrides live in a single map keyed by repo name:
`REPO_OVERRIDES = { name: { category, game, title, blurb, modPage } }`.

**Why.** It started as separate `name → category`, `name → game`, `name → blurb` maps. When
a fourth axis (`title`) appeared in `64e49b3`, a repo's overrides were spread across four
lookups in four places, and adding an axis meant adding a map. One map means one lookup and
one place to read a repo's full story.

**Rejected.** Keeping parallel maps — cheap diff at the time, but the cost compounds per
axis. A per-repo config file — real overkill at ~10 overrides.

**Note.** `modPage` is `{ label, href }` rather than a per-host field, so a new mod host
(Nexus, Factorio Mod Portal, Boxelware forum) adds a row, not a map. Reviewed 2026-09-17
and confirmed still cohesive, not a grab-bag.

---

## 2026-08-19 — Auto-pull the portfolio from the GitHub API

**Decision.** The site fetches public repos at runtime and classifies each as a mod or a
project by heuristics, rather than reading a hand-maintained list (`a43836f`).

**Why.** A hand-maintained portfolio is always out of date, because updating it is a
separate chore from doing the work. Pushing a repo *is* the update.

**Rejected.**
- *Hand-maintained lists* — the previous design; the thing being fixed.
- *Build-time fetch* — would pin content to deploy time and require a rebuild per repo
  change, losing the main benefit.
- *A server or serverless proxy* — would solve rate limiting and allow a token, but adds
  infrastructure to a site whose entire appeal is having none.

**Consequences.** Runtime dependency on a third-party API from the browser; per-IP rate
limiting; the need for a fallback path and for heuristics that can be wrong. All live and
documented in [`GOTCHAS.md`](GOTCHAS.md).

---

## 2026-08-19 — Unauthenticated API, no token in the bundle

**Decision.** Call GitHub with no credentials, accepting 60 requests/hour per IP.

**Why.** A token embedded in a static bundle is a published token. There is no server to
hold one.

**Rejected.** Shipping a scoped read-only token — still public, still harvestable. Adding a
proxy to hold it — rejected above, adds infrastructure.

**Consequences.** Rate limiting is a real failure mode, which forces the fallback design
below.

---

## 2026-08-19 — Fall back to bundled snapshots, not to a stale cache

**Decision.** When the API fails, serve the committed lists in `src/data/mods.js` and
`src/data/projects.js`, and flag it with `usingFallback`.

**Why.** The site must render something true-ish offline, on a rate limit, or if GitHub is
down. Bundled data ships with the app and cannot itself fail.

**Rejected.** Serving the last cached response — the cache may be empty on a cold tab
(`sessionStorage`), and an expired entry is deliberately discarded. Rendering an error
state — a portfolio showing an error is worse than one showing slightly old content.

**Consequences.** The snapshots drift silently, since nothing regenerates them. Accepted
knowingly; see [`GOTCHAS.md`](GOTCHAS.md) and B1 in [`BACKLOG.md`](BACKLOG.md).

---

## 2026-08-19 — Manual entries merged in, winning on title collision

**Decision.** `src/data/manual.js` holds entries that are not public GitHub repos (private
work, off-GitHub projects). They merge ahead of fetched repos and override any public repo
sharing a title (`5664a70`, extended in `64e49b3`).

**Why.** Not everything worth showing is a public repo. Manual-wins means a hand-written
description can always correct the auto-pulled one.

**Rejected.** Making everything manual — defeats the auto-pull. A separate "private" page —
fragments the portfolio over an implementation detail.

---

## 2026-08-19 — Cloudflare Pages, with the SPA fallback in-repo

**Decision.** Deploy to Cloudflare Pages, project `dirtyredz-com`, production branch
`master`. Node pinned via `.node-version`; SPA fallback via `public/_redirects` (`1be1b7e`).

**Why.** Static hosting with a free tier and Git-push deploys, which suits a repo with no
backend.

**Rejected.** Netlify — a `netlify.toml` lingered until `30d6608` and was removed as dead
config once the deploy docs were corrected.

**Consequences.** Build command, output directory and production branch live in the
Cloudflare dashboard, not in any repo file. Grepping for deploy config finds only
`_redirects` and `.node-version`.

---

## 2026-08-19 — Rebuild on Vite + React 18; drop Create React App

**Decision.** Rebuild the site from scratch as Vite 5 + React 18 (`2e84d85`, shipped as
`package.json` v3.0.0).

**Why.** The prior incarnation was CRA, whose maintenance had stalled by 2023. The repo's
2020–2023 history is almost entirely Dependabot bumps against `react-scripts` and its
transitive tree (`44359af`, `63590b3`, `2d307e1`). The dependency surface cost more upkeep
than the site itself did.

**Rejected.** Incremental migration off CRA — the site was small enough that a rebuild was
cheaper. Next.js — SSR/SSG solves problems this site does not have.

---

## 2026-08-19 — Plain CSS with custom properties; no framework, no CSS-in-JS

**Decision.** Design tokens as CSS variables at the top of `src/styles/global.css`; page and
component CSS co-located beside its JSX.

**Why.** No build-time styling dependency, no runtime styling cost, and tokens in one file
give theming without a system.

**Rejected.** *styled-components* — actually adopted in 2018 (`f76f487`, "Transition to
Styled Components") and dropped in the rebuild; a runtime CSS-in-JS dependency was not
earning its place. Tailwind and similar — a class vocabulary to learn for a five-page site.

---

## 2026-08-19 — No state management library

**Decision.** Component state plus one custom hook (`useGithub`). No Redux, no Zustand, no
Context for app state.

**Why.** There is one piece of shared async state and one consumer pattern. A store would be
ceremony.

**Rejected.** *Redux* — used in 2018 and already abandoned once in favour of Context
(`b37c2bd`, "Swapped redux for context"); the rebuild dropped that too.

---

## 2026-08-19 — No test runner and no linter

**Decision.** Ship with `npm run build` as the only automated check.

**Why.** A static personal portfolio with no backend, no auth and no business logic. The
cost of maintaining a test suite exceeded its value to a single developer who sees every
change rendered.

**Rejected.** ESLint — present in 2018 and visibly a source of friction then (`02e44f5`
"LINTING!!!!!!!!!!", `a9e9d08` "ESLINTING!!!!!!!!!!!!", `ad79950` "This is why i should have
my eslint active...."). Vitest/Jest — never adopted.

**Consequences.** Accepted in full, and the main reason [`GOTCHAS.md`](GOTCHAS.md) exists.
The classification heuristics in `lib/github.js` are the one place with real logic and no
coverage; if that file grows, revisit. Recorded in the watch list at the foot of
[`BACKLOG.md`](BACKLOG.md), with "real logic accumulates in `lib/github.js`" as the trigger.

---

## 2026-08-19 — Link GitHub only; no social media

**Decision.** One external link, to GitHub (`2573cad` removed the rest).

**Why.** The owner is not on social media. `src/data/site.js` states it plainly: "Not on
social media. The only place to find me elsewhere is my code."

---

## Pre-2026 (inferred from history, not decisions of the current codebase)

- **2018-09** — migrated to **Gatsby v2** (`082e1d6`), with MDX content and markdown-driven
  project pages (`cb84314`, `6d08f4d`). Later replaced by CRA, then by the Vite rebuild.
- **2018-09** — substantial effort spent on **IE11 support** (`19127df`, `345ead9`,
  `029fbb8`) before abandoning it (`a5eb4bb`, "Ignoring ie11 for the moment"). No polyfills
  or legacy build targets survive today.
