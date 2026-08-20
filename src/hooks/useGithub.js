import { useState, useEffect } from 'react'
import { fetchRepos, splitRepos } from '../lib/github.js'
import { manualEntries } from '../data/manual.js'
import { mods as fallbackMods } from '../data/mods.js'
import { projects as fallbackProjects } from '../data/projects.js'

// Merge hand-added entries (private repos, off-GitHub work) with the
// auto-pulled repos. Manual entries come first and override any public
// repo that shares the same title.
function mergeManual(mods, projects) {
  const manualMods = manualEntries.filter((e) => e.category === 'mod')
  const manualProjects = manualEntries.filter((e) => e.category === 'project')
  const claimed = new Set(manualEntries.map((e) => e.title.toLowerCase()))
  return {
    mods: [...manualMods, ...mods.filter((m) => !claimed.has(m.title.toLowerCase()))],
    projects: [
      ...manualProjects,
      ...projects.filter((p) => !claimed.has(p.title.toLowerCase())),
    ],
  }
}

// Fetches repos from GitHub, split into mods/projects, plus manual entries.
// Falls back to the curated static lists if GitHub can't be reached.
export function useGithub() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    usingFallback: false,
    mods: [],
    projects: [],
  })

  useEffect(() => {
    let alive = true
    fetchRepos()
      .then((items) => {
        if (!alive) return
        const split = splitRepos(items)
        const { mods, projects } = mergeManual(split.mods, split.projects)
        setState({ loading: false, error: null, usingFallback: false, mods, projects })
      })
      .catch((err) => {
        if (!alive) return
        const { mods, projects } = mergeManual(fallbackMods, fallbackProjects)
        setState({ loading: false, error: err.message, usingFallback: true, mods, projects })
      })
    return () => {
      alive = false
    }
  }, [])

  return state
}
