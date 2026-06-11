import { Link } from 'react-router-dom'
import { FEATURED, DOWNLOADS } from '../data/content'
import { FileIcon, DownloadIcon, KaabaIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, BookOpenIcon, HeartIcon, ScrollIcon, ChecklistIcon } from '../components/Icons'

const getResourceIcon = (slug, category) => {
  const categoryMap = {
    'baby': BabyIcon,
    'nikah': RingIcon,
    'salah': KaabaIcon,
    'dua': FileIcon,
    'zakat': FileIcon,
    'ramadan': ScrollIcon,
    'travel': MapPinIcon,
    'mosque': MapPinIcon,
    'hadith': QuranIcon,
    'health': HeartIcon,
    'seerah': ScrollIcon,
    'checklist': ChecklistIcon,
    'worksheet': ChecklistIcon,
    'guide': BookOpenIcon,
  }

  for (const [key, Icon] of Object.entries(categoryMap)) {
    if (slug?.includes(key) || category?.toLowerCase().includes(key)) {
      return Icon
    }
  }
  return FileIcon
}

export default function Resources() {
  return (
    <section className="page">
      <div className="page-head">
        <p className="section-eyebrow">Resources</p>
        <h1 className="page-title">Featured resources and downloads</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="page-lede">Hand-picked guides to start with, and a printable library you can use offline.</p>
      </div>

      <div className="section-head left">
        <h2 className="section-title">Featured resources</h2>
      </div>
      <div className="res-grid">
        {FEATURED.map(r => {
          const Icon = getResourceIcon(r.slug, r.category)
          return (
            <Link key={r.slug} to={`/resource/${r.slug}`} className="res-card">
              <span className="res-icon"><Icon /></span>
              <span className="res-category">{r.category}</span>
              <h3 className="res-title">{r.title}</h3>
              <p className="res-desc">{r.desc}</p>
              <span className="res-more">Read more <span aria-hidden="true">→</span></span>
            </Link>
          )
        })}
      </div>

      <div className="section-head left spaced">
        <h2 className="section-title">Downloadable library</h2>
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
              <Link to={`/resource/${d.slug}`} className="dl-btn">
                <DownloadIcon /> Download
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
