export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy', '/terms'],
    },
    sitemap: 'https://www.arkansofislam.com/sitemap.xml',
  }
}
