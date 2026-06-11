import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Directory from './pages/Directory'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import HubPage from './pages/HubPage'
import ResourcePage from './pages/ResourcePage'
import { Privacy, Terms, NotFound } from './pages/SimplePage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('arkan-theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('arkan-theme', theme)
  }, [theme])

  return (
    <div className={`arkan ${theme}`}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />}>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hub/:slug" element={<HubPage />} />
          <Route path="/resource/:slug" element={<ResourcePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
