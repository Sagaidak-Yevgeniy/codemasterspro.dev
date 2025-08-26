'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Home, BookOpen, Users, Award, MessageCircle, HelpCircle, Clock, Menu, X, Sparkles } from 'lucide-react'
import { useNavigation } from './NavigationContext'

interface MainFloatingNavProps {
  language: 'ru' | 'kk'
}

export default function MainFloatingNav({ language }: MainFloatingNavProps) {
  const { isNavigationVisible } = useNavigation()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

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
      menu: 'Меню',
      close: 'Закрыть',
      backToTop: 'Наверх'
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
      menu: 'Меню',
      close: 'Жабу',
      backToTop: 'Жоғары'
    }
  }

  const t = translations[language]

  const navItems = [
    { id: 'home', icon: Home, color: 'from-blue-500 to-blue-600', title: t.home },
    { id: 'courses', icon: BookOpen, color: 'from-emerald-500 to-emerald-600', title: t.courses },
    { id: 'mentorship', icon: Sparkles, color: 'from-indigo-500 to-indigo-600', title: t.mentorship },
    { id: 'about', icon: Award, color: 'from-purple-500 to-purple-600', title: t.about },
    { id: 'benefits', icon: Users, color: 'from-cyan-500 to-cyan-600', title: t.benefits },
    { id: 'team', icon: Users, color: 'from-yellow-500 to-yellow-600', title: t.team },
    { id: 'timeline', icon: Clock, color: 'from-indigo-500 to-indigo-600', title: t.timeline },
    { id: 'faq', icon: HelpCircle, color: 'from-pink-500 to-pink-600', title: t.faq },
    { id: 'contact', icon: MessageCircle, color: 'from-orange-500 to-orange-600', title: t.contact }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsExpanded(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsExpanded(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  // Auto-hide on mobile when scrolling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleScroll = () => {
      if (isExpanded) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          setIsExpanded(false)
        }, 3000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [isExpanded])

  return (
    <AnimatePresence>
      {isNavigationVisible && (
        <motion.div
          ref={navRef}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed right-4 bottom-4 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main floating button */}
          <motion.div
            className="relative bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-3 shadow-2xl cursor-pointer backdrop-blur-sm border-2 border-white/20 transition-opacity duration-300"
            style={{ opacity: 0.85 }}
            whileHover={{ scale: 1.1, rotate: 5, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              boxShadow: isHovered
                ? '0 20px 40px rgba(59, 130, 246, 0.4)'
                : '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse" />

            {/* Icon */}
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating particles */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    top: `${20 + (i * 20)}%`,
                    left: `${20 + (i * 20)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -8, 0],
                    x: [0, Math.random() * 6 - 3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Expanded navigation */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute bottom-full right-0 mb-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 min-w-[180px]"
              >
                {/* Header */}
                <div className="text-center mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium mb-1"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    {language === 'ru' ? 'Навигация' : 'Навигация'}
                  </motion.div>
                </div>

                {/* Navigation items */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group text-sm"
                    >
                      <div className={`p-1.5 rounded-md bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Back to top button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="w-full mt-2 flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-1.5 px-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <ChevronUp className="w-3 h-3" />
                  <span>{t.backToTop}</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Background glow effect */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-full blur-xl opacity-30 pointer-events-none bg-gradient-to-r from-primary-500 to-secondary-500"
                style={{
                  transform: 'scale(2)'
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
