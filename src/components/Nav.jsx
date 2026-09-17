import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { github } from '../data/site.js'
import './Nav.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/mods', label: 'Mods' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">DR</span>
          <span className="nav__word">dirtyredz</span>
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            className="nav__link nav__link--out"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
        <a
          className="nav__mobile-link"
          href={github}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
