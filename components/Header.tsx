'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  language: 'ru' | 'kk'
  setLanguage: (lang: 'ru' | 'kk') => void
}

const translations = {
  ru: {
    home: 'Главная',
    courses: 'Курсы',
    about: 'О нас',
    contact: 'Контакты',
  },
  kk: {
    home: 'Басты бет',
    courses: 'Курстар',
    about: 'Біз туралы',
    contact: 'Байланыс',
  }
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[language]

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
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
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold gradient-text">
                CodeMastersPRO
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                {language === 'ru' ? 'Школа программирования' : 'Бағдарламау мектебі'}
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

            <a href="#courses" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {t.courses}
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {t.about}
            </a>
            <a href="#team" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {language === 'ru' ? 'Команда' : 'Команда'}
            </a>
            <a href="#timeline" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {language === 'ru' ? 'История' : 'Тарих'}
            </a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {language === 'ru' ? 'FAQ' : 'FAQ'}
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              {t.contact}
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => {
                  const newLanguage = language === 'ru' ? 'kk' : 'ru'
                  setLanguage(newLanguage)
                  localStorage.setItem('selectedLanguage', newLanguage)
                }}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-50"
              >
                {language === 'ru' ? 'KK' : 'RU'}
              </button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                  : 'Сәлем! CMPro-да бағдарламау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Записаться' : 'Тіркелу'}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 absolute top-full left-0 right-0 z-50 shadow-lg"
          >
            <div className="py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              <a
                href="#courses"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.courses}
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.about}
              </a>
              <a
                href="#team"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {language === 'ru' ? 'Команда' : 'Команда'}
              </a>
              <a
                href="#timeline"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {language === 'ru' ? 'История' : 'Тарих'}
              </a>
              <a
                href="#faq"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {language === 'ru' ? 'FAQ' : 'FAQ'}
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.contact}
              </a>
              
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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
                </div>
                <button
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 text-sm"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                      : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                    setIsOpen(false);
                  }}
                >
                  {language === 'ru' ? 'Записаться' : 'Тіркелу'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
