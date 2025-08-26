'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, LogIn, UserPlus } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import AuthModal from './AuthModal'

interface HeaderProps {
  language: 'ru' | 'kk'
  setLanguage: (lang: 'ru' | 'kk') => void
}

const translations = {
  ru: {
    home: 'Главная',
    courses: 'Курсы',
    mentorship: 'Менторство',
    about: 'О нас',
    benefits: 'Преимущества',
    team: 'Команда',
    timeline: 'История',
    faq: 'FAQ',
    contact: 'Контакты',
  },
  kk: {
    home: 'Басты бет',
    courses: 'Курстар',
    mentorship: 'Менторлық',
    about: 'Біз туралы',
    benefits: 'Артықшылықтар',
    team: 'Команда',
    timeline: 'Тарих',
    faq: 'Сұрақтар',
    contact: 'Байланыс',
  }
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [activeSection, setActiveSection] = useState('home')

  // Helper function to check if element is in viewport
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top <= 100 && // Consider section active when it's near the top
      rect.bottom >= 100
    )
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Check which section is currently active
      const sections = ['home', 'courses', 'mentorship', 'about', 'benefits', 'team', 'timeline', 'faq', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && isInViewport(element)) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const mobileMenu = document.querySelector('[data-mobile-menu]')
      const mobileMenuButton = document.querySelector('[data-mobile-menu-button]')
      
      if (isOpen && mobileMenu && mobileMenuButton) {
        // Check if click is outside both the menu and the button
        if (!mobileMenu.contains(target) && !mobileMenuButton.contains(target)) {
          setIsOpen(false)
        }
      }
    }

    // Close menu when pressing Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  const t = translations[language]

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl">
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-20 lg:h-20 px-4 sm:px-0">
            <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      }`}
    >
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-20 lg:h-20 px-4 sm:px-0">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14">
              <img 
                src="/images/Logo.png" 
                alt="CodeMasters PRO Logo" 
                className="w-full h-full object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="relative">
              <h1 className="text-xl lg:text-2xl font-bold gradient-text dark:gradient-text-dark">
                CodeMastersPRO
              </h1>
              <p className="text-xs text-muted-dark hidden sm:block">
                {language === 'ru' ? 'Школа программирования' : 'Бағдарламау мектебі'}
              </p>
              
              {/* Rising bubbles from header title */}
              {[
                { left: '10%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-blue-400 to-purple-400', delay: 0, duration: 3 },
                { left: '20%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-purple-400 to-pink-400', delay: 0.6, duration: 3.5 },
                { left: '30%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-cyan-400 to-blue-400', delay: 1.2, duration: 4 },
                { left: '40%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-pink-400 to-rose-400', delay: 0.3, duration: 3.8 },
                { left: '50%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-indigo-400 to-purple-400', delay: 0.9, duration: 3.2 },
                { left: '60%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-blue-400 to-cyan-400', delay: 1.5, duration: 4.2 },
                { left: '70%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-purple-400 to-pink-400', delay: 0.4, duration: 3.6 },
                { left: '80%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-rose-400 to-pink-400', delay: 1.1, duration: 3.9 },
                { left: '90%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-cyan-400 to-blue-400', delay: 0.7, duration: 3.4 },
                { left: '15%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-indigo-400 to-purple-400', delay: 1.8, duration: 4.1 },
                { left: '25%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-blue-400 to-purple-400', delay: 0.2, duration: 3.7 },
                { left: '35%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-purple-400 to-pink-400', delay: 1.3, duration: 3.3 },
                { left: '45%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-cyan-400 to-blue-400', delay: 0.8, duration: 4.3 },
                { left: '55%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-pink-400 to-rose-400', delay: 1.6, duration: 3.1 },
                { left: '65%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-indigo-400 to-purple-400', delay: 0.5, duration: 3.8 }
              ].map((bubble, i) => (
                <motion.div
                  key={`header-bubble-${i}`}
                  className={`absolute ${bubble.size} rounded-full bg-gradient-to-r ${bubble.color}`}
                  style={{
                    top: '50%',
                    left: bubble.left,
                    boxShadow: '0 0 4px rgba(59, 130, 246, 0.3)',
                    filter: 'blur(0.3px)',
                    zIndex: 10
                  }}
                  animate={{
                    y: [0, -50, -100, -150],
                    x: [0, Math.random() * 10 - 5, Math.random() * 15 - 7.5, Math.random() * 20 - 10],
                    scale: [0, 1, 1.1, 0.7],
                    opacity: [0, 1, 0.8, 0]
                  }}
                  transition={{
                    duration: bubble.duration,
                    repeat: Infinity,
                    delay: bubble.delay,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.a>

                    {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Ultra Compact Navigation - All Items */}
            <div className="flex items-center space-x-2">
              <a href="#courses" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'courses' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.courses}
              </a>
              <a href="#mentorship" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'mentorship' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.mentorship}
              </a>
              <a href="#about" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'about' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.about}
              </a>
              <a href="#benefits" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'benefits' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.benefits}
              </a>
              <a href="#team" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'team' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.team}
              </a>
              <a href="#timeline" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'timeline' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.timeline}
              </a>
              <a href="#faq" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'faq' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.faq}
              </a>
              <a href="#contact" className={`px-1.5 py-0.5 font-medium transition-all duration-300 text-xs ${
                activeSection === 'contact' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-primary-dark hover:text-primary-600 dark:hover:text-primary-400'
              }`}>
                {t.contact}
              </a>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-dark" />
              <button
                onClick={() => {
                  const newLanguage = language === 'ru' ? 'kk' : 'ru'
                  setLanguage(newLanguage)
                  localStorage.setItem('selectedLanguage', newLanguage)
                }}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-primary-dark"
              >
                {language === 'ru' ? 'KK' : 'RU'}
              </button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setAuthMode('login')
                  setAuthModalOpen(true)
                }}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span>{language === 'ru' ? 'Войти' : 'Кіру'}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setAuthMode('register')
                  setAuthModalOpen(true)
                }}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <UserPlus className="w-4 h-4" />
                <span>{language === 'ru' ? 'Регистрация' : 'Тіркелу'}</span>
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-mobile-menu-button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            {isOpen ? <X className="w-6 h-6 text-primary-dark" /> : <Menu className="w-6 h-6 text-primary-dark" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              data-mobile-menu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 absolute top-full left-0 right-0 z-[9999] shadow-xl"
            >
            <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto bg-white dark:bg-gray-800">
              <div className="grid grid-cols-2 gap-1 px-4">
                <a
                  href="#courses"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.courses}
                </a>
                <a
                  href="#mentorship"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.mentorship}
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.about}
                </a>
                <a
                  href="#benefits"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.benefits}
                </a>
                <a
                  href="#team"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.team}
                </a>
                <a
                  href="#timeline"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.timeline}
                </a>
                <a
                  href="#faq"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.faq}
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2.5 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t.contact}
                </a>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2 mb-3">
                  <button
                    onClick={() => {
                      setAuthMode('login')
                      setAuthModalOpen(true)
                      setIsOpen(false)
                    }}
                    className="flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>{language === 'ru' ? 'Войти в аккаунт' : 'Есепке кіру'}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setAuthMode('register')
                      setAuthModalOpen(true)
                      setIsOpen(false)
                    }}
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>{language === 'ru' ? 'Создать аккаунт' : 'Есеп жасау'}</span>
                  </button>
                </div>
              </div>
              
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-muted-dark" />
                    <button
                      onClick={() => {
                        const newLanguage = language === 'ru' ? 'kk' : 'ru'
                        setLanguage(newLanguage)
                        localStorage.setItem('selectedLanguage', newLanguage)
                      }}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 transition-colors"
                    >
                      {language === 'ru' ? 'KK' : 'RU'}
                    </button>
                  </div>
                  {/* Theme Toggle for Mobile */}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        language={language}
      />
    </motion.header>
  )
}
