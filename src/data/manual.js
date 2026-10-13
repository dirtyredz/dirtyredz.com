// ============================================================
//  MANUAL ENTRIES
//  Things you want shown on the site that AREN'T in the public
//  GitHub feed — private repos, client work, off-GitHub projects.
//
//  These merge in alongside the auto-pulled repos. If a title here
//  matches a public repo, this entry wins (lets you override a
//  public repo's card too).
//
//  Fields:
//    category : 'mod' | 'project'   (which section it shows in)
//    private  : true                 -> shows a "Private" badge, no repo link
//    title, blurb, year
//    tag      : small label (kicker). For mods this is the language/kind.
//    game     : (mods only) e.g. 'Avorion', 'Skyrim SE'
//    stack    : (projects only) chips, e.g. ['React', 'Node']
//    status   : 'live' | 'wip' | 'archived'  (optional; ignored if private)
//    links    : [{ label, href }]    (omit or leave [] for private repos)
// ============================================================

// Private repos (they carry the "Private" badge; the public GitHub auto-pull can't see private
// repos). The client fetches the *public* API with no token, so these can't be pulled at runtime;
// list them here. Each carries an owner-approved blurb, year and stack (2026-10-13).
const priv = (title, { blurb, year, stack }) => ({
  id: 'manual-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  category: 'project',
  title,
  tag: 'Project',
  year,
  private: true,
  blurb,
  stack,
  links: [],
})

/** @type {import('../lib/github.js').CardItem[]} (`category` required here: mergeManual filters on it) */
export const manualEntries = [
  // VelvetEmberX is the repo behind VEX, so it is not repeated here.
  priv('VEX', {
    blurb: 'A multi-tenant web platform I’m building — Next.js, Postgres, Docker.',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Docker'],
  }),
  priv('Agentic-Harness', {
    blurb: 'My personal Claude Code setup: hooks, agents, skills and review gates for AI-assisted development.',
    year: '2026',
    stack: ['Node', 'PowerShell', 'Python'],
  }),
  priv('Maoin', {
    blurb: 'A personal budgeting PWA that models when money is available, replacing a spreadsheet cash-flow workflow.',
    year: '2026',
    stack: ['React', 'TypeScript', 'Cloudflare'],
  }),
  priv('Family-HQ', {
    blurb: 'A family command-center PWA for a wall touchscreen and phones, with chores, routines and a calendar.',
    year: '2026',
    stack: ['React', 'TypeScript', 'Cloudflare D1'],
  }),
  priv('Grotti', {
    blurb: 'A top-down 2D factory game in the Factorio tradition, set in Norse myth, with a C# simulation core.',
    year: '2026',
    stack: ['C#', 'Lua'],
  }),
  priv('Resumes', {
    blurb: 'A versioned archive of résumé drafts and job-search tooling.',
    year: '2026',
    stack: ['Markdown', 'JavaScript'],
  }),
  priv('Mia-Sync', {
    blurb: 'A headless service that syncs grades, attendance and assignments from a K-12 school parent portal.',
    year: '2026',
    stack: ['TypeScript', 'Node'],
  }),
  priv('MoonlightTogether', {
    blurb: 'A planned multiplayer mod for Moonlight Peaks that shows friends as live ghost players over Steam.',
    year: '2026',
    stack: ['C#', 'Steam'],
  }),
  priv('DigitalRedz-Command-Center', {
    blurb: 'A Sims 4 mod toolchain in Python with Node scripts to build and copy mod files into the game.',
    year: '2019–2023',
    stack: ['Python', 'Node'],
  }),
  priv('Orange_Notification_Killer', {
    blurb: "A small tool that silences a popular Sims 4 mod's error pop-ups for players who don't want them.",
    year: '2018–2019',
    stack: ['Python', 'JavaScript'],
  }),
  priv('paypal-bot', {
    blurb: 'An AWS Lambda function that creates and runs PayPal payments and subscriptions.',
    year: '2018',
    stack: ['Node', 'AWS Lambda', 'PayPal'],
  }),
]
