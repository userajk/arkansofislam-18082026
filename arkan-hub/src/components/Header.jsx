'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SearchIcon, SunIcon, MoonIcon, MenuIcon } from './Icons'
import { useTheme } from './ThemeProvider'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Directory', href: '/directory' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

  const submitSearch = e => {
    e.preventDefault()
    const q = query.trim()
    router.push(q ? `/directory?q=${encodeURIComponent(q)}` : '/directory')
    setQuery('')
    setMenuOpen(false)
  }

  const isActive = href => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="arkan-nav">
        <Link href="/" className="nav-brand">
          <Logo size={40} />
          <span className="nav-brand-text">Arkan</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <form className="search-box" onSubmit={submitSearch} role="search">
            <input
              className="search-input"
              placeholder="Search the directory..."
              aria-label="Search the directory"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="search-btn" type="submit" aria-label="Search"><SearchIcon /></button>
          </form>
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link href="/contact" className="nav-cta">Get the app</Link>
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
            <Link key={l.href} href={l.href} className={`mobile-link${isActive(l.href) ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
