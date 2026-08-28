import Link from 'next/link'
import { WHY_POINTS } from '../../data/content'
import { BookIcon, DeviceIcon, ToolsIcon } from '../../components/Icons'

export const metadata = {
  title: 'About',
  description: 'Learn what Arkans of Islam is — a free, structured library of authentic Islamic guides, duas, calculators, and downloadable resources for everyday practice.',
}

const WHY_ICONS = [BookIcon, DeviceIcon, ToolsIcon]

export default function About() {
  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">About</p>
        <h1 className="page-title">What Arkans of Islam is</h1>
        <div className="hero-rule" aria-hidden="true" />
      </div>

      <div className="article-body">
        <p>
          Arkans of Islam is a structured library of Islamic knowledge. Instead of scattered articles,
          everything lives inside clear hubs — the core pillars of worship, practical guides for daily life,
          relationships and family, travel and heritage, history and prophetic stories, hadith, health, and
          a complete Umrah companion.
        </p>
        <p>
          The directory is connected to the future Arkan mobile app. The guides, checklists, and tools you
          find here are being built to travel with you — readable on any screen and printable when paper
          works better.
        </p>
        <p>
          Every resource is written in plain language and aims to be practical from the first read. Where a
          topic involves religious rulings, we encourage you to verify the details with qualified scholars —
          this library is an educational companion, not a final authority.
        </p>
      </div>

      <div className="why-grid about-why">
        {WHY_POINTS.map((p, i) => {
          const Icon = WHY_ICONS[i]
          return (
            <div key={p.title} className="why-card">
              <span className="why-icon"><Icon /></span>
              <h3 className="why-title">{p.title}</h3>
              <p className="why-desc">{p.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="article-back">
        <Link href="/directory" className="text-link">Browse the directory →</Link>
      </div>
    </section>
  )
}
