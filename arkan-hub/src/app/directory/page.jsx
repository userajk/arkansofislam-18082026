'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { HUBS, DIRECTORY_ITEMS } from '../../data/content'
import { SearchIcon, FileIcon, KaabaIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, BookOpenIcon, HeartIcon, ScrollIcon, ChecklistIcon } from '../../components/Icons'

const getResourceIcon = (slug, category) => {
  const categoryMap = {
    'baby': BabyIcon, 'nikah': RingIcon, 'salah': KaabaIcon, 'dua': FileIcon,
    'zakat': FileIcon, 'ramadan': ScrollIcon, 'travel': MapPinIcon, 'mosque': MapPinIcon,
    'hadith': QuranIcon, 'health': HeartIcon, 'seerah': ScrollIcon,
    'checklist': ChecklistIcon, 'worksheet': ChecklistIcon, 'guide': BookOpenIcon,
  }
  for (const [key, Icon] of Object.entries(categoryMap)) {
    if (slug?.includes(key) || category?.toLowerCase().includes(key)) return Icon
  }
  return FileIcon
}

function DirectoryContent() {
  const params = useSearchParams()
  const [q, setQ] = useState(params.get('q') || '')
  const [hubFilter, setHubFilter] = useState('all')

  const needle = q.trim().toLowerCase()
  const items = DIRECTORY_ITEMS.filter(i =>
    (hubFilter === 'all' || i.hubSlug === hubFilter) &&
    (!needle || `${i.title} ${i.desc} ${i.hub}`.toLowerCase().includes(needle))
  )

  return (
    <>
      <form className="finder" onSubmit={e => e.preventDefault()} role="search">
        <input
          className="finder-input"
          placeholder="Search baby names, duas, salah guides, travel rules..."
          aria-label="Search the directory"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <button className="finder-btn" type="submit" aria-label="Search"><SearchIcon /></button>
      </form>

      <div className="chips filter-chips">
        <button className={`chip${hubFilter === 'all' ? ' chip-active' : ''}`} onClick={() => setHubFilter('all')}>All hubs</button>
        {HUBS.map(h => (
          <button key={h.slug} className={`chip${hubFilter === h.slug ? ' chip-active' : ''}`} onClick={() => setHubFilter(h.slug)}>{h.title}</button>
        ))}
      </div>

      <p className="result-count">{items.length} {items.length === 1 ? 'result' : 'results'}</p>

      {items.length === 0 ? (
        <p className="empty-note">Nothing matches that search yet. Try a different word, or browse a hub below.</p>
      ) : (
        <div className="res-grid">
          {items.map(i => {
            const Icon = getResourceIcon(i.slug, i.hub)
            return (
              <Link key={`${i.hubSlug}-${i.slug}`} href={`/resource/${i.slug}`} className="res-card">
                <span className="res-icon"><Icon /></span>
                <span className="res-category">{i.hub}</span>
                <h3 className="res-title">{i.title}</h3>
                <p className="res-desc">{i.desc}</p>
                <span className="res-more">Read more <span aria-hidden="true">→</span></span>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default function Directory() {
  return (
    <section className="page">
      <div className="page-head">
        <p className="section-eyebrow">Directory</p>
        <h1 className="page-title">Browse everything</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="page-lede">Search and filter every guide, tool, and resource across the key hubs.</p>
      </div>
      <Suspense>
        <DirectoryContent />
      </Suspense>
    </section>
  )
}
