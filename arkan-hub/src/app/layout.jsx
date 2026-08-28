import './globals.css'
import ThemeProvider from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.arkansofislam.com'),
  title: {
    default: 'Arkans of Islam',
    template: '%s | Arkans of Islam',
  },
  description: 'A structured library of Islamic guides, duas, and resources covering the five pillars of Islam, daily worship, and Muslim family life.',
  openGraph: {
    type: 'website',
    siteName: 'Arkans of Islam',
    locale: 'en_US',
    url: 'https://www.arkansofislam.com',
    images: [
      {
        url: '/arkan-logo-2.png',
        width: 384,
        height: 384,
        alt: 'Arkans of Islam',
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: ['/arkan-logo-2.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Arkans of Islam',
              url: 'https://www.arkansofislam.com',
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
