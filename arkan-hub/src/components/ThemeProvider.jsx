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
    const saved = localStorage.getItem('arkan-theme')
    if (saved === 'light' || saved === 'dark') setTheme(saved)
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
