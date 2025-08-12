'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme) {
      // User has manually set a preference
      setTheme(savedTheme)
      console.log('Theme loaded from localStorage:', savedTheme)
    } else {
      // Check system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const systemTheme = mediaQuery.matches ? 'dark' : 'light'
      setTheme(systemTheme)
      console.log('System theme detected:', systemTheme, 'Media query matches:', mediaQuery.matches)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      console.log('Dark theme applied to document')
    } else {
      root.classList.remove('dark')
      console.log('Light theme applied to document')
    }
    
    // Save to localStorage only if mounted to avoid hydration issues
    if (mounted) {
      localStorage.setItem('theme', theme)
      console.log('Theme saved to localStorage:', theme)
    }
  }, [theme, mounted])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        console.log('System theme changed to:', newTheme, 'Media query matches:', e.matches)
      } else {
        console.log('System theme changed but user preference exists, keeping:', localStorage.getItem('theme'))
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      console.log('Theme manually toggled to:', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
