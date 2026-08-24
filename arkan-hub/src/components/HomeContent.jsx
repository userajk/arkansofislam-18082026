'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HUBS, FEATURED, EVERYDAY_GUIDES, DOWNLOADS, QUICK_CHIPS, WHY_POINTS } from '../data/content'
import { SearchIcon, FileIcon, DownloadIcon, BookIcon, DeviceIcon, ToolsIcon, AppleIcon, PlayIcon, KaabaIcon, BookOpenIcon, FamilyIcon, PlaneIcon, ScrollIcon, CompassIcon, HeartIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, ChecklistIcon, DuaIcon } from './Icons'
import Logo from './Logo'

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

const PILLARS = [
  {
    num: '01', arabic: 'الشهادة', name: 'Shahadah', title: 'Declaration of Faith',
    desc: '"La ilaha illallah, Muhammadur Rasulullah" — there is no god but Allah, and Muhammad is His Messenger. Saying this with sincere belief is the first step into Islam.',
  },
  {
    num: '02', arabic: 'الصلاة', name: 'Salah', title: 'Five Daily Prayers',
    desc: 'Five obligatory prayers each day — Fajr, Dhuhr, Asr, Maghrib, and Isha. Each involves standing, bowing, and prostrating while reciting from the Quran.',
  },
  {
    num: '03', arabic: 'الزكاة', name: 'Zakat', title: 'Obligatory Charity',
    desc: 'Muslims whose savings exceed the nisab threshold give 2.5% of their wealth annually to those in need. Zakat purifies wealth and supports the community.',
  },
  {
    num: '04', arabic: 'الصوم', name: 'Sawm', title: 'Fasting in Ramadan',
    desc: 'Abstaining from food, drink, and other physical needs from dawn to sunset during the month of Ramadan. Fasting builds self-discipline and gratitude.',
  },
  {
    num: '05', arabic: 'الحج', name: 'Hajj', title: 'Pilgrimage to Makkah',
    desc: 'Every Muslim who is physically and financially able must perform Hajj at least once. It takes place in Dhul Hijjah and includes Tawaf, standing at Arafah, and other rites.',
  },
]

const PILLARS_FAQ = [
  {
    q: 'What are the 5 pillars of Islam?',
    a: 'The five pillars of Islam are Shahadah (declaration of faith), Salah (five daily prayers), Zakat (obligatory charity of 2.5% on savings), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Makkah). Every Muslim is expected to fulfill these five obligations.',
  },
  {
    q: 'What are the five pillars of Islam in order?',
    a: 'In order, the five pillars are: (1) Shahadah — declaring that there is no god but Allah and Muhammad is His Messenger, (2) Salah — performing the five daily prayers, (3) Zakat — giving 2.5% of qualifying wealth to those in need, (4) Sawm — fasting from dawn to sunset during Ramadan, and (5) Hajj — making the pilgrimage to Makkah once in a lifetime if able.',
  },
  {
    q: 'Why are the pillars of Islam important?',
    a: 'The five pillars provide the structure for a Muslim’s worship and daily life. They establish the acts of faith — from the declaration that begins one’s journey in Islam, through daily prayer, annual charity, fasting, and the once-in-a-lifetime pilgrimage — that connect the individual to Allah and to the Muslim community.',
  },
  {
    q: 'What is Zakat in Islam?',
    a: 'Zakat is obligatory charity, the third pillar of Islam. Muslims whose wealth exceeds the nisab (minimum threshold) must give 2.5% of their accumulated savings annually. Zakat is distributed to eight categories of recipients specified in the Quran, including the poor, the needy, and those in debt.',
  },
  {
    q: 'How much Zakat is due on gold?',
    a: 'Zakat on gold is 2.5% of the total value, provided the gold held meets or exceeds the nisab of 87.48 grams (approximately 7.5 tola). Gold jewelry that is regularly worn is treated differently across the schools of jurisprudence — the Hanafi school requires Zakat on it, while others may exempt it.',
  },
  {
    q: 'What is Hajj?',
    a: 'Hajj is the annual Islamic pilgrimage to the Kaaba in Makkah, Saudi Arabia. It is the fifth pillar of Islam and is obligatory once in a lifetime for every Muslim who has the physical health and financial means. Hajj takes place during the 8th to 12th of Dhul Hijjah, the last month of the Islamic calendar.',
  },
  {
    q: 'What are the 6 pillars of Iman?',
    a: 'The six pillars of Iman (faith) are: belief in (1) Allah, (2) the Angels, (3) the revealed Books, (4) the Prophets and Messengers, (5) the Day of Judgment, and (6) Divine Decree (Qadr). These pillars of Iman relate to belief, while the five pillars of Islam relate to practice and action.',
  },
  {
    q: 'How many times a day do Muslims pray?',
    a: 'Muslims pray five times each day. The five obligatory prayers are Fajr (before sunrise), Dhuhr (after midday), Asr (late afternoon), Maghrib (after sunset), and Isha (night). Salah is the second pillar of Islam and each prayer involves specific recitations and physical postures including standing, bowing, and prostration.',
  },
]

export default function HomeContent() {
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PILLARS_FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="arkan-hero">
        <div className="hero-logo">
          <Logo size={96} />
        </div>
        <p className="hero-eyebrow">Islamic knowledge, structured</p>
        <h1 className="hero-title">Arkans of Islam</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-subtitle">
          Your guide to the five pillars of Islam &mdash; with practical resources, duas, and checklists for everyday Muslim life.
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
                <span className="hub-explore">Explore <span aria-hidden="true">&rarr;</span></span>
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
                <span className="res-more">Read more <span aria-hidden="true">&rarr;</span></span>
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
                <span className="res-more">Read more <span aria-hidden="true">&rarr;</span></span>
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
                  <DownloadIcon /> {d.slug === 'zakat' ? 'Calculate Now' : 'Download'}
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
          <p className="section-eyebrow">Why Arkans of Islam</p>
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

      <section className="home-section bordered pillars-section">
        <div className="section-head">
          <p className="section-eyebrow">The Foundation of Islam</p>
          <h2 className="section-title">The Five Pillars of Islam</h2>
        </div>
        <p className="pillars-intro">
          The five pillars of Islam (<em>arkan al-Islam</em>) are the core acts of worship that define Muslim life. Rooted in the Quran and the Sunnah of the Prophet Muhammad (peace be upon him), these five obligations form the foundation of faith and practice for every Muslim.
        </p>
        <div className="pillars-grid">
          {PILLARS.map(p => (
            <div key={p.num} className="pillar-card">
              <span className="pillar-num">{p.num}</span>
              <span className="pillar-arabic">{p.arabic}</span>
              <h3 className="pillar-name">{p.name}</h3>
              <p className="pillar-title">{p.title}</p>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section pillars-faq-section">
        <div className="section-head">
          <p className="section-eyebrow">Common Questions</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {PILLARS_FAQ.map((f, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{f.q}</h3>
              <p className="faq-answer">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section bordered newsletter">
        <div className="section-head">
          <p className="section-eyebrow">Stay updated</p>
          <h2 className="section-title">Get new Islamic guides and resources</h2>
        </div>
        {subscribed ? (
          <p className="form-success">Thank you &mdash; you are on the list. New guides will reach your inbox.</p>
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
