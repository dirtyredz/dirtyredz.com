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

export const manualEntries = [
  {
    id: 'manual-vex',
    category: 'project',
    title: 'VEX',
    tag: 'Project',
    year: '2026',
    private: true,
    // TODO: replace with a one-line description of what VEX is.
    blurb: 'A private project I’m building. Details under wraps for now.',
    stack: [],
    links: [], // private: no public repo link
  },
]
