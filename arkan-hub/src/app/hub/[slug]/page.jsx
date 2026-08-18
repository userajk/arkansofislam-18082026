import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HUBS, getHub, slugify } from '../../../data/content'
import { FileIcon, KaabaIcon, BabyIcon, RingIcon, MapPinIcon, QuranIcon, BookOpenIcon, HeartIcon, ScrollIcon, ChecklistIcon } from '../../../components/Icons'

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

export function generateStaticParams() {
  return HUBS.map(h => ({ slug: h.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const hub = getHub(slug)
  if (!hub) return { title: 'Hub Not Found' }
  return {
    title: hub.title,
    description: hub.desc,
  }
}

export default async function HubPage({ params }) {
  const { slug } = await params
  const hub = getHub(slug)

  if (!hub) notFound()

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
            <Link key={item.title} href={`/resource/${itemSlug}`} className="res-card">
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
