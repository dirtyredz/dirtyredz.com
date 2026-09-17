# dirtyredz.com

My personal site — game mods & servers, software I build for fun, and the story
behind the name. Built with **Vite + React 18**, deployed on **Cloudflare Pages**.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## Editing content

**Most of the site edits itself.** Mods and projects are pulled live from the
GitHub API and sorted automatically — push a repo and it shows up. You usually
do not edit anything here.

When you do need to intervene, work down this list:

| What you want | Where |
| ------------- | ----- |
| Add a mod or project | **Push it to GitHub.** That is the whole step. |
| Fix how a repo is classified or labelled | GitHub topics (`mod`, `project`, `hidden`), or `REPO_OVERRIDES` in `src/lib/github.js` for a forced category, game, title, blurb, or mod-page link |
| Show something that is not a public repo | `src/data/manual.js` — private or off-GitHub work; wins on title collision |
| Name, tagline, location, GitHub link | `src/data/site.js` |
| Offline fallback lists | `src/data/mods.js`, `src/data/projects.js` — see below |

> ⚠️ `src/data/mods.js` and `src/data/projects.js` are **not** where content
> lives. They are stale-tolerant snapshots shown only when the GitHub API is
> unreachable or rate-limited. Editing them has no visible effect while GitHub
> is working, and nothing regenerates them — so they drift. See
> [`docs/GOTCHAS.md`](docs/GOTCHAS.md).

Add images to `public/img/` and reference them as `/img/yourfile.png`
(set the `image` field on a mod to show a screenshot on its card).

Pages live in `src/pages/`, shared UI in `src/components/`, and the design
tokens (colors, fonts, spacing) are all CSS variables at the top of
`src/styles/global.css`.

## Docs

| | |
|---|---|
| [`STRUCTURE.md`](STRUCTURE.md) | where the code lives |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | how it works |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | why it is built this way |
| [`docs/FEATURES.md`](docs/FEATURES.md) | what it does |
| [`docs/GOTCHAS.md`](docs/GOTCHAS.md) | what bites |
| [`docs/BACKLOG.md`](docs/BACKLOG.md) | what is next |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | the plan (there isn't one, deliberately) |

## Deploy

Deployed on **Cloudflare Pages** (project `dirtyredz-com`, production branch
`master`). Build command `npm run build`, output `dist/`, Node pinned via
`.node-version`; `public/_redirects` provides the SPA redirect for React Router.
Push to `master` and Cloudflare Pages auto-builds and deploys. Build settings
(command, output dir, production branch) live in the CF Pages dashboard.
