'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, Gift } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DiscountPopup from './DiscountPopup'

interface HeroProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Станьте',
    titleHighlight: 'PRO',
    titleEnd: 'программистом',
    subtitle: 'Изучите современные технологии программирования с опытными преподавателями',
    description: 'Получите практические навыки разработки и станьте востребованным специалистом в IT-индустрии',
    cta: 'Пробное занятие',
    trial: 'Пробное занятие',
    stats: {
      students: '150+',
      studentsText: 'студентов',
      courses: '4',
      coursesText: 'курса',
      success: '95%',
      successText: 'успешных'
    }
  },
  kk: {
    title: 'Болыңыз',
    titleHighlight: 'PRO',
    titleEnd: 'бағдарламашы',
    subtitle: 'Тәжірибелі оқытушылармен заманауи бағдарламалау технологияларын үйреніңіз',
    description: 'Дамудың практикалық дағдыларын алыңыз және IT-өнеркәсібінде сұранысты маман болыңыз',
    cta: 'Сынақ сабағы',
    trial: 'Сынақ сабағы',
    stats: {
      students: '150+',
      studentsText: 'студент',
      courses: '4',
      coursesText: 'курс',
      success: '95%',
      successText: 'сәтті'
    }
  }
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]
  const [showDiscountPopup, setShowDiscountPopup] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        <div className="text-center">
          <img 
            src="/images/Logo.png" 
            alt="CMPro Logo" 
            className="w-32 h-32 animate-ping"
          />
        </div>
      </section>
    )
  }

  const handleGetDiscount = () => {
    setShowDiscountPopup(true)
    // Show toast notification only for discount
    if (typeof window !== 'undefined' && window.showToast) {
      window.showToast('success', language === 'ru' ? '🎉 Скидка 20% активирована!' : '🎉 20% жеңілдік белсендірілді!')
    }
  }

  const handleTrialLesson = () => {
    const message = language === 'ru' 
      ? 'Привет! Хочу записаться на пробное занятие по программированию в CMPro. Можете рассказать подробнее?'
      : 'Сәлем! CMPro-да бағдарламалау бойынша сынақ сабағына тіркелгім келеді. Толығырақ айта аласыз ба?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce-slow">
        <div className="w-4 h-4 bg-primary-500 rounded-full" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-secondary-500 rounded-full" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce-slow" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-accent-500 rounded-full" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                {t.title}{' '}
                <span className="gradient-text">{t.titleHighlight}</span>{' '}
                {t.titleEnd}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.subtitle}
            </motion.p>

            {/* Free Trial Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-lg">
                <Award className="w-5 h-5" />
                <span className="font-semibold">
                  {language === 'ru' ? '🎉 Первое пробное занятие БЕСПЛАТНО!' : '🎉 Алғашқы сынақ сабағы ТЕГІН!'}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={handleGetDiscount}
              >
                <Gift className="w-5 h-5" />
                <span>🎁 Получить скидку</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2"
                onClick={handleTrialLesson}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{t.stats.students}</div>
                <div className="text-sm text-gray-600">{t.stats.studentsText}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">{t.stats.courses}</div>
                <div className="text-sm text-gray-600">{t.stats.coursesText}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">{t.stats.success}</div>
                <div className="text-sm text-gray-600">{t.stats.successText}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 inline mr-1" />
                {language === 'ru' ? 'Лучшая школа' : 'Үздік мектеп'}
              </div>
              
              <div className="relative">
                {/* Background Logo */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block z-30">
                  {/* Animated rings around logo */}
                  <div className="relative">
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 border-2 border-primary-200 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 border-2 border-secondary-200 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 border-2 border-accent-200 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
                    
                    {/* Rotating gradient ring */}
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
                    
                    {/* Logo */}
                    <img 
                      src="/images/Logo.png" 
                      alt="CMPro Logo" 
                      className="w-32 h-32 lg:w-64 lg:h-64 object-contain relative z-20"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Directions */}
                <div className="space-y-4 md:space-y-6 relative z-1">
                 <Link href="/courses/python">
                   <motion.div 
                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                   >
                   <motion.div 
                     className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg shadow-sm"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/Python.png" 
                       alt="Python" 
                       className="w-8 h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Python</h3>
                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{language === 'ru' ? 'Веб-разработка' : 'Веб-даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/golang">
                   <motion.div 
                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                   >
                   <motion.div 
                     className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-lg shadow-sm"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/Go.png" 
                       alt="Golang" 
                       className="w-8 h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Golang</h3>
                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{language === 'ru' ? 'Серверная разработка' : 'Серверлік даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/javascript">
                   <motion.div 
                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                   >
                   <motion.div 
                     className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg shadow-sm"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/JavaScript.png" 
                       alt="JavaScript" 
                       className="w-8 h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">JavaScript</h3>
                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{language === 'ru' ? 'Фронтенд разработка' : 'Фронтенд даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/analytics">
                   <motion.div 
                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                   >
                   <motion.div 
                     className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                     </svg>
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{language === 'ru' ? 'Аналитика данных' : 'Деректер талдауы'}</h3>
                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{language === 'ru' ? 'Data Science' : 'Data Science'}</p>
                   </div>
                   </motion.div>
                 </Link>
               </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">{language === 'ru' ? 'Павлодар' : 'Павлодар'}</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    <span className="text-primary-600 dark:text-primary-400 font-medium">Офлайн</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Discount Popup */}
      <DiscountPopup 
        language={language}
        isVisible={showDiscountPopup}
        onClose={() => setShowDiscountPopup(false)}
      />
    </section>
  )
}
