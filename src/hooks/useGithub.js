import { useState, useEffect } from 'react'
import { fetchRepos, splitRepos } from '../lib/github.js'
import { mods as fallbackMods } from '../data/mods.js'
import { projects as fallbackProjects } from '../data/projects.js'

// Fetches repos from GitHub, split into mods/projects.
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
        const { mods, projects } = splitRepos(items)
        setState({ loading: false, error: null, usingFallback: false, mods, projects })
      })
      .catch((err) => {
        if (!alive) return
        setState({
          loading: false,
          error: err.message,
          usingFallback: true,
          mods: fallbackMods,
          projects: fallbackProjects,
        })
      })
    return () => {
      alive = false
    }
  }, [])

  return state
}
