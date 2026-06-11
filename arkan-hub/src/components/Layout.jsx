import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { HUBS } from '../data/content'
import { SearchIcon, SunIcon, MoonIcon, MenuIcon } from './Icons'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Directory', to: '/directory' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Layout({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const submitSearch = e => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/directory?q=${encodeURIComponent(q)}` : '/directory')
    setQuery('')
    setMenuOpen(false)
  }

  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <>
      <header className="arkan-nav">
        <Link to="/" className="nav-brand">
          <Logo size={28} />
          <span className="nav-brand-text">Arkan</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={navClass} end={l.to === '/'}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <form className="search-box" onSubmit={submitSearch} role="search">
            <input
              className="search-input"
              placeholder="Search the directory…"
              aria-label="Search the directory"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="search-btn" type="submit" aria-label="Search"><SearchIcon /></button>
          </form>
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link to="/contact" className="nav-cta">Get the app</Link>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className="mobile-link" onClick={() => setMenuOpen(false)} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}

      <main>
        <Outlet />
      </main>

      <footer className="arkan-footer">
        <div className="footer-cols">
          <div className="footer-col footer-brand-col">
            <div className="footer-brand-header">
              <Logo size={32} />
              <p className="footer-brand">Arkan</p>
            </div>
            <p className="footer-tagline">A structured library of Islamic knowledge for every step of your journey.</p>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Hubs</p>
            {HUBS.map(h => (
              <Link key={h.slug} to={`/hub/${h.slug}`} className="footer-link">{h.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-heading">Legal</p>
            <Link to="/privacy" className="footer-link">Privacy</Link>
            <Link to="/terms" className="footer-link">Terms</Link>
          </div>
        </div>
        <p className="footer-disclaimer">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Arkan</p>
      </footer>
    </>
  )
}
