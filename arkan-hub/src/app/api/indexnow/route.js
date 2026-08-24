import { HUBS, RESOURCE_MAP, CONTENT_PAGES } from '../../../data/content'

const BASE = 'https://www.arkansofislam.com'
const KEY = '85bc7f32132344b88682ed510dd7730a'
const NOINDEX_PAGES = new Set(['halal-lifestyle', 'dua-with-salah'])

function getAllUrls() {
  const urls = [
    BASE,
    `${BASE}/about`,
    `${BASE}/contact`,
  ]

  for (const slug of Object.keys(RESOURCE_MAP)) {
    if (CONTENT_PAGES.has(slug) && !NOINDEX_PAGES.has(slug)) {
      urls.push(`${BASE}/resource/${slug}`)
    }
  }

  return urls
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('key') !== KEY) {
    return Response.json({ error: 'Invalid key' }, { status: 401 })
  }

  const urls = getAllUrls()

  const payload = {
    host: 'www.arkansofislam.com',
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })

    return Response.json({
      status: response.status,
      submitted: urls.length,
      urls,
    })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
