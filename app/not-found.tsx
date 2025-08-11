'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search, Code } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const [mounted, setMounted] = useState(false)

  // Read language from localStorage on component mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      title: 'Страница не найдена',
      subtitle: '404',
      description: 'К сожалению, запрашиваемая страница не существует или была перемещена.',
      backHome: 'Вернуться на главную',
      backCourses: 'Перейти к курсам',
      searchCourses: 'Найти курс',
      or: 'или'
    },
    kk: {
      title: 'Бет табылмады',
      subtitle: '404',
      description: 'Өкінішке орай, сұралған бет жоқ немесе жылжытылған.',
      backHome: 'Басты бетке қайту',
      backCourses: 'Курстарға өту',
      searchCourses: 'Курс табу',
      or: 'немесе'
    }
  }

  const t = translations[language]

  // Prevent hydration mismatch
           if (!mounted) {
           return (
             <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
               <div className="text-center">
                 <img 
                   src="/images/Logo.png" 
                   alt="CMPro Logo" 
                   className="w-32 h-32 animate-ping"
                 />
               </div>
             </div>
           )
         }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
              className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4"
            >
              {t.subtitle}
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-lg mx-auto"
          >
            {t.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                  : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.searchCourses}</span>
            </motion.button>

            <div className="text-gray-500 dark:text-gray-400">{t.or}</div>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.backHome}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 sm:mt-16"
          >
            <div className="flex justify-center space-x-2 sm:space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center"
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-200 dark:bg-secondary-800 rounded-full flex items-center justify-center"
              >
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="w-11 h-11 sm:w-14 sm:h-14 bg-accent-200 dark:bg-accent-800 rounded-full flex items-center justify-center"
              >
                <Code className="w-5 h-5 sm:w-7 sm:h-7 text-accent-600 dark:text-accent-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
