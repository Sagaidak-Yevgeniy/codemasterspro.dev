'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, BookOpen, Target, Award, Users, MessageCircle } from 'lucide-react'

interface FloatingNavProps {
  language: 'ru' | 'kk'
}

export default function FloatingNav({ language }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false)

  const translations = {
    ru: {
      features: 'Что изучаем',
      curriculum: 'Программа',
      benefits: 'Преимущества',
      enroll: 'Записаться'
    },
    kk: {
      features: 'Не үйренеміз',
      curriculum: 'Бағдарлама',
      benefits: 'Артықшылықтар',
      enroll: 'Тіркелу'
    }
  }

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 hidden md:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 p-2">
            <div className="flex flex-col space-y-2">
              <button
                onClick={scrollToTop}
                className="p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={language === 'ru' ? 'Наверх' : 'Жоғары'}
              >
                <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={() => scrollToSection('features')}
                className="p-2 md:p-3 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                title={t.features}
              >
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </button>
              
              <button
                onClick={() => scrollToSection('curriculum')}
                className="p-2 md:p-3 rounded-full bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                title={t.curriculum}
              >
                <Target className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
              </button>
              
              <button
                onClick={() => scrollToSection('benefits')}
                className="p-2 md:p-3 rounded-full bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                title={t.benefits}
              >
                <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" />
              </button>
              
              <button
                onClick={() => scrollToSection('enroll')}
                className="p-2 md:p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                title={t.enroll}
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 dark:text-yellow-400" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
