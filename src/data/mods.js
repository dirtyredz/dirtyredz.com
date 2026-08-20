// ============================================================
//  MODS & SERVERS
//  Edit this list to add your game mods, modpacks, and servers.
//  status: 'live' | 'wip' | 'archived'
//  Drop screenshots in /public/img and reference them as "/img/yourfile.png"
// ============================================================

export const mods = [
  {
    id: 'dirty-server-manager',
    title: 'Dirty Server Manager',
    game: 'Game Servers',
    tag: 'Tooling',
    status: 'archived',
    year: '2017',
    blurb:
      'A control panel I built to spin up, monitor, and manage game servers without living in the terminal. The project that kicked off the whole "Dirtyredz runs servers" thing.',
    links: [{ label: 'GitHub', href: 'https://github.com/dirtyredz' }],
    image: null,
  },
  {
    id: 'example-modpack',
    title: 'Your Modpack Name',
    game: 'Minecraft', // change to whatever game you mod
    tag: 'Modpack',
    status: 'wip',
    year: '2026',
    blurb:
      'Placeholder — swap this for a real modpack or mod. Describe what it changes, who it is for, and why it is fun. Add a download or workshop link below.',
    links: [{ label: 'Details', href: '#' }],
    image: null,
  },
  {
    id: 'example-server',
    title: 'Your Community Server',
    game: 'Server',
    tag: 'Live Server',
    status: 'live',
    year: '2026',
    blurb:
      'Placeholder — describe a server you host: the game, the vibe, the mods running on it, and how people join. Put the connect address or Discord invite in the links.',
    links: [{ label: 'Join', href: '#' }],
    image: null,
  },
]
