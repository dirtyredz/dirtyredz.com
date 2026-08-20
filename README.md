# dirtyredz.com

My personal site — game mods & servers, software I build for fun, and the story
behind the name. Built with **Vite + React 18**, deployed on **Netlify**.

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

Most content lives in plain data files — no need to touch components:

| What                 | File                  |
| -------------------- | --------------------- |
| Mods & servers       | `src/data/mods.js`    |
| Software projects    | `src/data/projects.js`|
| Name, tagline, socials | `src/data/site.js`  |

Add images to `public/img/` and reference them as `/img/yourfile.png`
(set the `image` field on a mod to show a screenshot on its card).

Pages live in `src/pages/`, shared UI in `src/components/`, and the design
tokens (colors, fonts, spacing) are all CSS variables at the top of
`src/styles/global.css`.

## Deploy

`netlify.toml` is configured (`npm run build` → publish `dist/`, with an SPA
redirect for React Router). Push to the connected branch and Netlify builds it.
