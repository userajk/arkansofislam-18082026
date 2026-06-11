import { Link, useParams } from 'react-router-dom'
import { getHub, slugify } from '../data/content'
import { FileIcon, KaabaIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, BookOpenIcon, HeartIcon, ScrollIcon, ChecklistIcon } from '../components/Icons'

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

export default function HubPage() {
  const { slug } = useParams()
  const hub = getHub(slug)

  if (!hub) {
    return (
      <section className="page">
        <div className="page-head">
          <h1 className="page-title">Hub not found</h1>
          <p className="page-lede">That hub does not exist. <Link to="/directory" className="text-link">Browse the directory</Link> instead.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="page">
      <div className="page-head">
        <p className="section-eyebrow">Hub {hub.num}</p>
        <h1 className="page-title">{hub.title}</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="page-lede">{hub.intro}</p>
      </div>

      <div className="res-grid">
        {hub.items.map(item => {
          const itemSlug = slugify(item.title)
          const Icon = getResourceIcon(itemSlug, hub.title)
          return (
            <Link key={item.title} to={`/resource/${itemSlug}`} className="res-card">
              <span className="res-icon"><Icon /></span>
              <span className="res-category">{hub.title}</span>
              <h3 className="res-title">{item.title}</h3>
              <p className="res-desc">{item.desc}</p>
              <span className="res-more">Read more <span aria-hidden="true">→</span></span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
