'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HUBS, FEATURED, EVERYDAY_GUIDES, DOWNLOADS, QUICK_CHIPS, WHY_POINTS } from '../data/content'
import { SearchIcon, FileIcon, DownloadIcon, BookIcon, DeviceIcon, ToolsIcon, AppleIcon, PlayIcon, KaabaIcon, BookOpenIcon, FamilyIcon, PlaneIcon, ScrollIcon, CompassIcon, HeartIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, ChecklistIcon, DuaIcon } from '../components/Icons'
import Logo from '../components/Logo'

const HUB_ICONS = {
  'core-pillars': KaabaIcon,
  'guides': BookOpenIcon,
  'relationships-family': FamilyIcon,
  'travel-heritage': PlaneIcon,
  'history-prophetic-stories': ScrollIcon,
  'hadith': QuranIcon,
  'health-islam': HeartIcon,
  'umrah-companion': CompassIcon,
  'dua': DuaIcon,
}

const getResourceIcon = (slug, category) => {
  const categoryMap = {
    'baby': BabyIcon, 'nikah': RingIcon, 'salah': KaabaIcon, 'dua': CompassIcon,
    'zakat': FileIcon, 'ramadan': ScrollIcon, 'travel': MapPinIcon, 'mosque': MapPinIcon,
    'hadith': QuranIcon, 'health': HeartIcon, 'seerah': ScrollIcon,
    'checklist': ChecklistIcon, 'worksheet': ChecklistIcon, 'guide': BookOpenIcon,
  }
  for (const [key, Icon] of Object.entries(categoryMap)) {
    if (slug?.includes(key) || category?.toLowerCase().includes(key)) return Icon
  }
  return FileIcon
}

const WHY_ICONS = [BookIcon, DeviceIcon, ToolsIcon]

export default function Home() {
  const [finder, setFinder] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const router = useRouter()

  const submitFinder = e => {
    e.preventDefault()
    const q = finder.trim()
    router.push(q ? `/directory?q=${encodeURIComponent(q)}` : '/directory')
  }

  const subscribe = e => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <>
      <section className="arkan-hero">
        <div className="hero-logo">
          <Logo size={96} />
        </div>
        <p className="hero-eyebrow">Islamic knowledge, structured</p>
        <h1 className="hero-title">Arkan Directory Hub</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-subtitle">
          A structured library of Islamic knowledge for every step of your journey.
        </p>
        <div className="hero-ctas">
          <Link href="/directory" className="btn-gold">Start exploring</Link>
          <a href="#hubs" className="btn-ghost">Browse hubs</a>
        </div>
      </section>

      <section className="home-section" id="hubs">
        <div className="section-head">
          <p className="section-eyebrow">The Key Hubs</p>
          <h2 className="section-title">Begin where you are</h2>
        </div>
        <div className="hubs-grid">
          {HUBS.map(hub => {
            const Icon = HUB_ICONS[hub.slug]
            return (
              <Link key={hub.slug} href={`/hub/${hub.slug}`} className="hub-card">
                <span className="hub-icon">{Icon && <Icon />}</span>
                <h3 className="hub-title">{hub.title}</h3>
                <p className="hub-desc">{hub.desc}</p>
                <span className="hub-explore">Explore <span aria-hidden="true">→</span></span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="home-section bordered">
        <div className="section-head">
          <p className="section-eyebrow">Quick finder</p>
          <h2 className="section-title">What are you looking for?</h2>
        </div>
        <form className="finder" onSubmit={submitFinder} role="search">
          <input
            className="finder-input"
            placeholder="Search baby names, duas, salah guides, travel rules..."
            aria-label="Search the directory"
            value={finder}
            onChange={e => setFinder(e.target.value)}
          />
          <button className="finder-btn" type="submit" aria-label="Search"><SearchIcon /></button>
        </form>
        <div className="chips">
          {QUICK_CHIPS.map(c => (
            <Link key={c.label} href={`/directory?q=${encodeURIComponent(c.q)}`} className="chip">{c.label}</Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <p className="section-eyebrow">Featured resources</p>
          <h2 className="section-title">Start with these</h2>
        </div>
        <div className="res-grid">
          {FEATURED.map(r => {
            const Icon = getResourceIcon(r.slug, r.category)
            return (
              <Link key={r.slug} href={`/resource/${r.slug}`} className="res-card">
                <span className="res-icon"><Icon /></span>
                <span className="res-category">{r.category}</span>
                <h3 className="res-title">{r.title}</h3>
                <p className="res-desc">{r.desc}</p>
                <span className="res-more">Read more <span aria-hidden="true">→</span></span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="home-section bordered">
        <div className="section-head">
          <p className="section-eyebrow">Guides for everyday life</p>
          <h2 className="section-title">Practical, from the first read</h2>
        </div>
        <div className="res-grid">
          {EVERYDAY_GUIDES.map(g => {
            const Icon = getResourceIcon(g.slug, 'Guide')
            return (
              <Link key={g.slug} href={`/resource/${g.slug}`} className="res-card">
                <span className="res-icon"><Icon /></span>
                <span className="res-category">Guide</span>
                <h3 className="res-title">{g.title}</h3>
                <p className="res-desc">{g.desc}</p>
                <span className="res-more">Read more <span aria-hidden="true">→</span></span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <p className="section-eyebrow">Downloadable library</p>
          <h2 className="section-title">Print it, use it</h2>
        </div>
        <div className="dl-grid">
          {DOWNLOADS.map(d => {
            const Icon = getResourceIcon(d.slug, 'Download')
            return (
              <div key={d.slug} className="dl-card">
                <span className="dl-icon"><Icon /></span>
                <div className="dl-body">
                  <h3 className="dl-title">{d.title}</h3>
                  <p className="dl-desc">{d.desc}</p>
                </div>
                <Link href={`/resource/${d.slug}`} className="dl-btn">
                  <DownloadIcon /> Download
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="arkan-banner">
        <div className="banner-inner">
          <div className="banner-text">
            <p className="banner-tagline">Take your worship further.</p>
            <p className="banner-sub">Download the Arkan App.</p>
          </div>
          <div className="banner-phone" aria-hidden="true">
            <div className="phone-frame"><div className="phone-screen"><span className="phone-brand">Arkan</span></div></div>
          </div>
          <div className="banner-btns">
            <button className="store-btn" onClick={e => e.preventDefault()}>
              <AppleIcon />
              <span>
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </span>
            </button>
            <button className="store-btn" onClick={e => e.preventDefault()}>
              <PlayIcon />
              <span>
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <p className="section-eyebrow">Why Arkan Directory</p>
          <h2 className="section-title">Built to be trusted</h2>
        </div>
        <div className="why-grid">
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
      </section>

      <section className="home-section bordered newsletter">
        <div className="section-head">
          <p className="section-eyebrow">Stay updated</p>
          <h2 className="section-title">Get new Islamic guides and resources</h2>
        </div>
        {subscribed ? (
          <p className="form-success">Thank you — you are on the list. New guides will reach your inbox.</p>
        ) : (
          <form className="newsletter-form" onSubmit={subscribe}>
            <input
              className="newsletter-input"
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="btn-gold" type="submit">Subscribe</button>
          </form>
        )}
      </section>
    </>
  )
}
