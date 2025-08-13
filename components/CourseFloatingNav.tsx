'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, BookOpen, Target, MessageCircle, ArrowUp, Code, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CourseFloatingNavProps {
  language: 'ru' | 'kk'
  courseColor: string
  courseName: string
}

export default function CourseFloatingNav({ language, courseColor, courseName }: CourseFloatingNavProps) {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Navigate to main page for home button
      router.push('/')
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsExpanded(false)
  }

  const navItems = [
    { id: 'home', icon: Home, label: language === 'ru' ? 'Главная' : 'Басты бет' },
    { id: 'features', icon: Code, label: language === 'ru' ? 'Технологии' : 'Технологиялар' },
    { id: 'curriculum', icon: BookOpen, label: language === 'ru' ? 'Программа' : 'Бағдарлама' },
    { id: 'benefits', icon: Target, label: language === 'ru' ? 'Преимущества' : 'Артықшылықтар' },
    { id: 'enroll', icon: MessageCircle, label: language === 'ru' ? 'Записаться' : 'Тіркелу' }
  ]

  const translations = {
    ru: {
      menu: 'Меню',
      close: 'Закрыть',
      backToTop: 'Наверх'
    },
    kk: {
      menu: 'Мәзір',
      close: 'Жабу',
      backToTop: 'Жоғары'
    }
  }

  const t = translations[language]

  // Get color values for animations
  const getColorValues = () => {
    const colorMap: { [key: string]: { bg: string, hover: string } } = {
      'bg-emerald-600': { bg: 'rgba(5, 150, 105, 0.1)', hover: 'rgba(5, 150, 105, 0.2)' },
      'bg-yellow-600': { bg: 'rgba(202, 138, 4, 0.1)', hover: 'rgba(202, 138, 4, 0.2)' },
      'bg-blue-600': { bg: 'rgba(37, 99, 235, 0.1)', hover: 'rgba(37, 99, 235, 0.2)' },
      'bg-purple-600': { bg: 'rgba(147, 51, 234, 0.1)', hover: 'rgba(147, 51, 234, 0.2)' }
    }
    return colorMap[courseColor] || { bg: 'rgba(59, 130, 246, 0.1)', hover: 'rgba(59, 130, 246, 0.2)' }
  }

  const colorValues = getColorValues()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
            className={`relative ${courseColor} rounded-full p-3 shadow-2xl cursor-pointer backdrop-blur-sm border-2 border-white/20 transition-opacity duration-300`}
            style={{ opacity: 0.85 }}
            whileHover={{ scale: 1.1, rotate: 5, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              boxShadow: isHovered
                ? `0 20px 40px ${courseColor.replace('bg-', '').replace('-', '-')}40`
                : `0 10px 30px ${courseColor.replace('bg-', '').replace('-', '-')}30`
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
                {/* Course name header */}
                <div className="text-center mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`inline-flex items-center ${courseColor} text-white px-2 py-1 rounded-full text-xs font-medium mb-1`}
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    {courseName}
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
                        backgroundColor: colorValues.hover
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group text-sm"
                    >
                      <div className={`p-1.5 rounded-md ${courseColor} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item.label}</span>
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
                  className={`w-full mt-2 flex items-center justify-center space-x-2 ${courseColor} text-white py-1.5 px-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm`}
                >
                  <ArrowUp className="w-3 h-3" />
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
                className="absolute inset-0 rounded-full blur-xl opacity-30 pointer-events-none"
                style={{
                  background: courseColor.replace('bg-', '').replace('-', '-'),
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
