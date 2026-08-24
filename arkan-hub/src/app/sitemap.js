import { HUBS, RESOURCE_MAP, CONTENT_PAGES } from '../data/content'

const BASE = 'https://www.arkansofislam.com'

export default function sitemap() {
  const staticPages = [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/directory`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/resources`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const hubPages = HUBS.map(h => ({
    url: `${BASE}/hub/${h.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const resourcePages = Object.keys(RESOURCE_MAP)
    .filter(slug => CONTENT_PAGES.has(slug))
    .map(slug => ({
      url: `${BASE}/resource/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  return [...staticPages, ...hubPages, ...resourcePages]
}
