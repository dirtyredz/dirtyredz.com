// ============================================================
//  PROJECTS — OFFLINE FALLBACK SNAPSHOT
//  Not the project list the site shows. src/lib/github.js pulls your
//  public repos from the GitHub API and every non-hidden one it doesn't
//  classify as a mod becomes a project (repos hidden by topic or by
//  override never reach either bucket, and forks are hidden by default
//  unless an override or a `mod`/`project` topic classifies them first);
//  useGithub.js drops back to this list only when that fetch throws — no
//  network, or GitHub's unauthenticated 60-requests/hour-per-IP limit
//  exhausted — and sets usingFallback.
//  Any other time, editing this file changes nothing you can see.
//  Nothing regenerates it either, so it goes stale quietly and the
//  fallback then serves an out-of-date portfolio that still reads real.
//  To change a real project, push it to GitHub (its About text and
//  topics drive the card), tune REPO_OVERRIDES in src/lib/github.js, or
//  list it in src/data/manual.js for private / off-GitHub work.
// ============================================================

export const projects = [
  {
    id: 'react-scroll-up-button',
    title: 'react-scroll-up-button',
    tag: 'Open Source',
    stack: ['React', 'npm'],
    year: '2016',
    blurb:
      'A little React component that adds a smooth scroll-to-top button. Published to npm and picked up by other developers — my first taste of shipping something people actually used.',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/react-scroll-up-button' },
      { label: 'GitHub', href: 'https://github.com/dirtyredz' },
    ],
  },
  {
    id: 'dirtyredz-com',
    title: 'dirtyredz.com',
    tag: 'This Site',
    stack: ['React', 'Vite'],
    year: '2026',
    blurb:
      'The site you are looking at. Rebuilt from a 2017 Create React App portfolio into a modern Vite + React personal site. Less resume, more me.',
    links: [{ label: 'GitHub', href: 'https://github.com/dirtyredz/dirtyredz.com' }],
  },
  {
    id: 'placeholder-project',
    title: 'Something You Built',
    tag: 'Tool',
    stack: ['Node', 'CLI'],
    year: '2025',
    blurb:
      'Placeholder — add a project here. A script, a tool, a bot, a game, whatever. Say what it does and why you made it.',
    links: [{ label: 'GitHub', href: '#' }],
  },
]
