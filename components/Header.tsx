'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[language]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
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
              <p className="text-xs text-gray-600 hidden sm:block">
                {language === 'ru' ? 'Школа программирования' : 'Бағдарламалау мектебі'}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t.home}
            </a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t.courses}
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t.about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t.contact}
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage(language === 'ru' ? 'kk' : 'ru')}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-50"
              >
                {language === 'ru' ? 'KK' : 'RU'}
              </button>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.open('https://wa.me/77773323676', '_blank')}
            >
              {language === 'ru' ? 'Записаться' : 'Тіркелу'}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="py-4 space-y-4">
              <a
                href="#home"
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </a>
              <a
                href="#courses"
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.courses}
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.about}
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.contact}
              </a>
              
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <button
                    onClick={() => setLanguage(language === 'ru' ? 'kk' : 'ru')}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary-50"
                  >
                    {language === 'ru' ? 'KK' : 'RU'}
                  </button>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => {
                    window.open('https://wa.me/77773323676', '_blank')
                    setIsOpen(false)
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
