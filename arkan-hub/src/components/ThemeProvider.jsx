'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  // Load initial saved theme once on mount
  useEffect(() => {
    const saved = localStorage.getItem('arkan-theme')
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(saved)
      // Use requestAnimationFrame so it does not run synchronously during render phase
      requestAnimationFrame(() => setTheme(saved))
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('arkan-theme', next)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`arkan ${theme}`} suppressHydrationWarning>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
