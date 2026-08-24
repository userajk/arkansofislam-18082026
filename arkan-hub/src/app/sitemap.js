import { HUBS, RESOURCE_MAP, CONTENT_PAGES } from '../data/content'

const BASE = 'https://www.arkansofislam.com'

const NOINDEX_PAGES = new Set(['halal-lifestyle', 'dua-with-salah'])

export default function sitemap() {
  const staticPages = [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const resourcePages = Object.keys(RESOURCE_MAP)
    .filter(slug => CONTENT_PAGES.has(slug) && !NOINDEX_PAGES.has(slug))
    .map(slug => ({
      url: `${BASE}/resource/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  return [...staticPages, ...resourcePages]
}
