import './globals.css'
import ThemeProvider from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: {
    default: 'Arkan Directory Hub',
    template: '%s | Arkan Directory Hub',
  },
  description: 'A structured library of Islamic knowledge for every step of your journey.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet" />
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
