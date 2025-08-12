'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface NavigationContextType {
  isNavigationVisible: boolean
  setIsNavigationVisible: (visible: boolean) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 200
      setIsNavigationVisible(shouldBeVisible)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavigationContext.Provider value={{ isNavigationVisible: mounted ? isNavigationVisible : false, setIsNavigationVisible }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
