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

// Private repos shown by NAME ONLY (they carry the "Private" badge; the public GitHub auto-pull
// can't see private repos). The client fetches the *public* API with no token, so these can't be
// pulled at runtime — list them here. Name only, no blurb, per the owner's request (2026-09-07).
const priv = (title) => ({
  id: 'manual-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  category: 'project',
  title,
  tag: 'Project',
  private: true,
  links: [],
})

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
  // VelvetEmberX is the repo behind VEX above, so it is not repeated here.
  priv('Agentic-Harness'),
  priv('Maoin'),
  priv('Family-HQ'),
  priv('Grotti'),
  priv('Resumes'),
  priv('Mia-Sync'),
  priv('Moonlight-Peaks-Agentic-Modding'),
  priv('MoonlightTogether'),
  priv('DigitalRedz-Command-Center'),
  priv('dr_pet_needs'),
  priv('starbucks_take_home'),
  priv('Orange_Notification_Killer'),
  priv('GrytFit-app'),
  priv('paypal-bot'),
  priv('DirtyBot'),
  priv('api.dirtyredz.com'),
]
