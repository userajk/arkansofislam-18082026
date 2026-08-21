import Link from 'next/link'
import { HUBS } from '../data/content'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Directory', href: '/directory' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="arkan-footer">
      <div className="footer-cols">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand-header">
            <Logo size={44} />
            <p className="footer-brand">Arkans of Islam</p>
          </div>
          <p className="footer-tagline">A structured library of Islamic knowledge for every step of your journey.</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Hubs</p>
          {HUBS.map(h => (
            <Link key={h.slug} href={`/hub/${h.slug}`} className="footer-link">{h.title}</Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="footer-heading">Explore</p>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="footer-heading">Legal</p>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </div>
      </div>
      <p className="footer-disclaimer">
        Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
      </p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Arkans of Islam</p>
    </footer>
  )
}
