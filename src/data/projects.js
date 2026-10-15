// ============================================================
//  PROJECTS — OFFLINE FALLBACK SNAPSHOT
//  GENERATED FILE — do not hand-edit. Written by scripts/generate-fallback.mjs;
//  regenerate with `npm run gen:fallback` and commit the result (like a lockfile).
//  Output is the site's own classification of a live GitHub fetch, in the
//  same order the live site shows it.
//
//  Not the project list the site shows. src/lib/github.js pulls your
//  public repos from the GitHub API and every non-hidden one it doesn't
//  classify as a mod becomes a project (repos hidden by topic or by
//  override never reach either bucket, and forks are hidden by default
//  unless an override or a `mod`/`project` topic classifies them first);
//  useGithub.js drops back to this list only when that fetch throws — no
//  network, or GitHub's unauthenticated 60-requests/hour-per-IP limit
//  exhausted — and sets usingFallback.
//  Any other time, this file is invisible. It is only as fresh as the
//  last regeneration, so rerun the script after meaningful changes.
//  To change a real project, push it to GitHub (its About text and
//  topics drive the card), tune REPO_OVERRIDES in src/lib/github.js, or
//  list it in src/data/manual.js for private / off-GitHub work.
// ============================================================

/** @type {import('../lib/github.js').CardItem[]} */
export const projects = [
  {
    id: 'gh-1389541121',
    category: 'project',
    title: 'evil-eye-pack',
    tag: 'JavaScript',
    stack: ['JavaScript'],
    year: '2026',
    blurb: 'Evil Eye Minecraft pack (Forge 1.20.1) - packwiz',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/evil-eye-pack',
      },
    ],
    stars: 0,
    pushed: '2026-10-13T01:32:04Z',
  },
  {
    id: 'gh-1405748921',
    category: 'project',
    title: 'Docket',
    tag: 'JavaScript',
    stack: ['JavaScript'],
    year: '2026',
    blurb:
      'Per-repo markdown work items for AI-agent workflows: one file per item, dk CLI, last-good pre-push gate',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/Docket',
      },
    ],
    stars: 0,
    pushed: '2026-10-12T16:13:57Z',
  },
  {
    id: 'gh-1349198166',
    category: 'project',
    title: 'Sanas',
    tag: 'TypeScript',
    stack: ['TypeScript'],
    year: '2026',
    blurb: 'A TypeScript project.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/Sanas',
      },
    ],
    stars: 0,
    pushed: '2026-10-05T18:51:26Z',
  },
  {
    id: 'gh-1356130677',
    category: 'project',
    title: 'Factorio-BP',
    tag: 'HTML',
    stack: ['HTML'],
    year: '2026',
    blurb: 'A HTML project.',
    links: [
      {
        label: 'Site',
        href: 'https://factorio-bp-tools.dirtyredz.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/Factorio-BP',
      },
    ],
    stars: 0,
    pushed: '2026-10-05T18:50:17Z',
  },
  {
    id: 'gh-78586643',
    category: 'project',
    title: 'dirtyredz.com',
    tag: 'JavaScript',
    stack: ['JavaScript', '★ 11'],
    year: '2017',
    blurb: 'My personal website',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/dirtyredz.com',
      },
    ],
    stars: 11,
    pushed: '2026-10-05T18:50:12Z',
  },
  {
    id: 'gh-777524209',
    category: 'project',
    title: 'sims-4-mod-manager',
    tag: 'TypeScript',
    stack: ['TypeScript'],
    year: '2024',
    blurb: 'A TypeScript project.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/sims-4-mod-manager',
      },
    ],
    stars: 0,
    pushed: '2024-03-26T02:28:45Z',
  },
  {
    id: 'gh-176958987',
    category: 'project',
    title: 'Browns Karate Academy',
    tag: 'JavaScript',
    stack: ['JavaScript'],
    year: '2019',
    blurb: 'BrownsKarateAcademy.com',
    links: [
      {
        label: 'Site',
        href: 'https://www.brownskarateacademy.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/BrownsKarateAcademy.com',
      },
    ],
    stars: 0,
    pushed: '2023-01-03T18:15:46Z',
  },
  {
    id: 'gh-191194189',
    category: 'project',
    title: 'StopOnInn',
    tag: 'JavaScript',
    stack: ['JavaScript'],
    year: '2019',
    blurb:
      'A Gatsby + React website built from an Adobe XD design — image-forward and fully responsive, with star ratings, modal galleries, a slide-out menu, and smooth reveal animations.',
    links: [
      {
        label: 'Site',
        href: 'https://stoponinn.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/StopOnInn',
      },
    ],
    stars: 0,
    pushed: '2021-05-06T16:34:26Z',
  },
  {
    id: 'gh-76582103',
    category: 'project',
    title: 'react-scroll-up-button',
    tag: 'JavaScript',
    stack: ['JavaScript', '★ 50'],
    year: '2016',
    blurb: 'React Component for a fixed scroll to top button.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/react-scroll-up-button',
      },
    ],
    stars: 50,
    pushed: '2020-05-26T10:25:22Z',
  },
  {
    id: 'gh-91394103',
    category: 'project',
    title: 'Dirty-Server-Manager',
    tag: 'PHP',
    stack: ['PHP', '★ 11'],
    year: '2017',
    blurb: 'The Unofficial Avorion Linux Server Manager',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/Dirty-Server-Manager',
      },
    ],
    stars: 11,
    pushed: '2019-06-20T13:22:30Z',
  },
  {
    id: 'gh-120062867',
    category: 'project',
    title: 'rusty-universe.com',
    tag: 'JavaScript',
    stack: ['JavaScript'],
    year: '2018',
    blurb: 'A JavaScript project.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/rusty-universe.com',
      },
    ],
    stars: 0,
    pushed: '2018-07-07T12:57:30Z',
  },
  {
    id: 'gh-106483657',
    category: 'project',
    title: 'autocomplete-avorion',
    tag: 'JavaScript',
    stack: ['JavaScript', '★ 1'],
    year: '2017',
    blurb: 'A JavaScript project.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/autocomplete-avorion',
      },
    ],
    stars: 1,
    pushed: '2017-10-16T18:47:25Z',
  },
  {
    id: 'gh-81618946',
    category: 'project',
    title: 'CodeIgniter-HTML5-Boilerplate',
    tag: 'PHP',
    stack: ['PHP', '★ 2'],
    year: '2017',
    blurb: 'Boilerplate for Codeigniter',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/CodeIgniter-HTML5-Boilerplate',
      },
    ],
    stars: 2,
    pushed: '2017-04-12T03:13:45Z',
  },
  {
    id: 'gh-78691510',
    category: 'project',
    title: 'react-boilerplate-dirtyredz',
    tag: 'JavaScript',
    stack: ['JavaScript', '★ 2'],
    year: '2017',
    blurb: 'A JavaScript project.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/dirtyredz/react-boilerplate-dirtyredz',
      },
    ],
    stars: 2,
    pushed: '2017-02-10T19:00:14Z',
  },
]
