'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Wrapped in queueMicrotask/timeout to prevent synchronous cascading render lint error
    const saved = localStorage.getItem('arkan-theme')
    if (saved === 'light' || saved === 'dark') {
      setTimeout(() => setTheme(saved), 0)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem('arkan-theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`arkan ${mounted ? theme : 'dark'}`} suppressHydrationWarning>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
