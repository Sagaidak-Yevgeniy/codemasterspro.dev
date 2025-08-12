'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, Gift, CheckCircle, Database } from 'lucide-react'
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
          <motion.img 
            src="/images/Logo.png" 
            alt="CMPro Logo" 
            className="w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-200 dark:bg-primary-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      <div className="absolute top-40 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-200 dark:bg-secondary-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      <div className="absolute -bottom-8 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent-200 dark:bg-accent-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
      
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

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-4 leading-tight">
                {t.title}{' '}
                <span className="gradient-text dark:gradient-text-dark">{t.titleHighlight}</span>{' '}
                {t.titleEnd}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-secondary-dark mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.subtitle}
            </motion.p>

            {/* Modern Free Trial Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm"
              >
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <motion.div
                    animate={{ 
                      x: [0, 60, 0],
                      y: [0, -30, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-3 right-3 w-12 h-12 bg-white/10 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, -40, 0],
                      y: [0, 20, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-3 left-3 w-8 h-8 bg-white/10 rounded-full"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-6">
                    {/* Left side - Main content */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left w-full xl:w-auto">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                      >
                        <Gift className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="font-bold text-base sm:text-lg md:text-xl mb-1"
                        >
                          {language === 'ru' ? '🎉 Первое занятие БЕСПЛАТНО!' : '🎉 Алғашқы сабақ ТЕГІН!'}
                        </motion.div>
                        <div className="text-xs sm:text-sm opacity-90 mb-2">
                          {language === 'ru' ? 'Без обязательств • Без скрытых платежей' : 'Міндеттемесіз • Жасырын төлемдерсіз'}
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs opacity-80">
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3 text-green-300" />
                            <span>{language === 'ru' ? 'Практика' : 'Тәжірибе'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3 text-green-300" />
                            <span>{language === 'ru' ? 'Сертификат' : 'Сертификат'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3 text-green-300" />
                            <span>{language === 'ru' ? 'Поддержка' : 'Қолдау'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - CTA buttons */}
                    <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05, 
                          x: 2,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm w-full sm:w-auto relative overflow-hidden group"
                        onClick={handleTrialLesson}
                      >
                        {/* Animated background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Play className="w-4 h-4" />
                        </motion.div>
                        <motion.span
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {language === 'ru' ? 'Попробовать бесплатно' : 'Тегін сынап көріңіз'}
                        </motion.span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ 
                          scale: 1.05, 
                          x: 2,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 hover:from-orange-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm w-full sm:w-auto relative overflow-hidden group"
                        onClick={handleGetDiscount}
                      >
                        {/* Animated background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Gift className="w-4 h-4" />
                        </motion.div>
                        <motion.span
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {language === 'ru' ? '🎁 Получить скидку' : '🎁 Жеңілдік алу'}
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-2 right-6 w-1.5 h-1.5 bg-white/60 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 right-12 w-1 h-1 bg-white/40 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">{t.stats.students}</div>
                <div className="text-xs sm:text-sm text-secondary-dark">{t.stats.studentsText}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-1">{t.stats.courses}</div>
                <div className="text-xs sm:text-sm text-secondary-dark">{t.stats.coursesText}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">{t.stats.success}</div>
                <div className="text-xs sm:text-sm text-secondary-dark">{t.stats.successText}</div>
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
            <div className="relative card-enhanced-dark rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 transform rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                {language === 'ru' ? 'Лучшая школа' : 'Үздік мектеп'}
              </div>
              
              <div className="relative">
                {/* Background Logo */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block z-30">
                  {/* Modern trending logo animation */}
                  <div className="relative">
                    {/* Single gradient ring with smooth transparency transition */}
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/8 to-pink-500/6 animate-pulse"></div>
                    <div className="absolute inset-2 lg:inset-4 w-28 h-28 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/12 to-pink-500/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-4 lg:inset-8 w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/18 to-pink-500/15 animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Rotating gradient border - modern style */}
                    <div className="absolute inset-0 w-32 h-32 lg:w-64 lg:h-64 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border animate-spin" style={{ animationDuration: '6s' }}></div>

                    {/* Inner glow effect */}
                    <div className="absolute inset-4 lg:inset-8 w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse" style={{ animationDelay: '0.3s' }}></div>

                    {/* Logo with modern glow */}
                    <div className="relative z-20 w-32 h-32 lg:w-64 lg:h-64 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-lg animate-pulse"></div>
                      <img 
                        src="/images/Logo.png" 
                        alt="CMPro Logo" 
                        className="w-32 h-32 lg:w-64 lg:h-64 object-contain relative z-10 drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>

                    {/* Random floating bubbles around the logo */}
                    {[
                      { top: '15%', left: '20%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-blue-400 to-purple-400', delay: 0, duration: 3 },
                      { top: '25%', left: '75%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-purple-400 to-pink-400', delay: 0.5, duration: 4 },
                      { top: '45%', left: '10%', size: 'w-2.5 h-2.5 lg:w-4 lg:h-4', color: 'from-blue-400 to-cyan-400', delay: 1, duration: 3.5 },
                      { top: '65%', left: '80%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-pink-400 to-rose-400', delay: 1.5, duration: 2.5 },
                      { top: '85%', left: '25%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-purple-400 to-indigo-400', delay: 2, duration: 4 },
                      { top: '10%', left: '60%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-cyan-400 to-blue-400', delay: 0.3, duration: 3.2 },
                      { top: '35%', left: '85%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-indigo-400 to-purple-400', delay: 0.8, duration: 3.8 },
                      { top: '75%', left: '15%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-rose-400 to-pink-400', delay: 1.2, duration: 2.8 },
                      { top: '55%', left: '70%', size: 'w-2.5 h-2.5 lg:w-4 lg:h-4', color: 'from-blue-400 to-purple-400', delay: 0.7, duration: 4.2 },
                      { top: '20%', left: '40%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-purple-400 to-pink-400', delay: 1.8, duration: 3.1 },
                      { top: '80%', left: '50%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-cyan-400 to-blue-400', delay: 0.4, duration: 3.6 },
                      { top: '30%', left: '30%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-pink-400 to-rose-400', delay: 1.1, duration: 2.9 },
                      { top: '70%', left: '35%', size: 'w-2.5 h-2.5 lg:w-4 lg:h-4', color: 'from-indigo-400 to-purple-400', delay: 0.6, duration: 4.1 },
                      { top: '40%', left: '55%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-blue-400 to-cyan-400', delay: 1.3, duration: 3.3 },
                      { top: '90%', left: '70%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-purple-400 to-pink-400', delay: 0.9, duration: 3.7 },
                      { top: '5%', left: '45%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-rose-400 to-pink-400', delay: 1.6, duration: 2.7 },
                      { top: '60%', left: '25%', size: 'w-2.5 h-2.5 lg:w-4 lg:h-4', color: 'from-cyan-400 to-blue-400', delay: 0.2, duration: 4.3 },
                      { top: '15%', left: '85%', size: 'w-1.5 h-1.5 lg:w-2 lg:h-2', color: 'from-indigo-400 to-purple-400', delay: 1.4, duration: 3.4 },
                      { top: '50%', left: '90%', size: 'w-2 h-2 lg:w-3 lg:h-3', color: 'from-purple-400 to-pink-400', delay: 0.1, duration: 3.9 },
                      { top: '25%', left: '5%', size: 'w-1 h-1 lg:w-1.5 lg:h-1.5', color: 'from-blue-400 to-cyan-400', delay: 1.7, duration: 2.6 }
                    ].map((bubble, i) => (
                      <motion.div
                        key={`bubble-${i}`}
                        className={`absolute ${bubble.size} rounded-full bg-gradient-to-r ${bubble.color}`}
                        style={{
                          top: bubble.top,
                          left: bubble.left,
                          boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)',
                          filter: 'blur(0.5px)'
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          x: [-3, 3, -3],
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: bubble.duration,
                          repeat: Infinity,
                          delay: bubble.delay,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Small sparkle bubbles */}
                    {[
                      { top: '12%', left: '35%', delay: 0.2 },
                      { top: '28%', left: '65%', delay: 0.7 },
                      { top: '42%', left: '20%', delay: 1.1 },
                      { top: '58%', left: '75%', delay: 0.4 },
                      { top: '72%', left: '30%', delay: 0.9 },
                      { top: '88%', left: '60%', delay: 1.3 },
                      { top: '8%', left: '80%', delay: 0.6 },
                      { top: '35%', left: '15%', delay: 1.0 },
                      { top: '62%', left: '85%', delay: 0.3 },
                      { top: '78%', left: '45%', delay: 0.8 }
                    ].map((sparkle, i) => (
                      <motion.div
                        key={`sparkle-${i}`}
                        className="absolute w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-white"
                        style={{
                          top: sparkle.top,
                          left: sparkle.left,
                          boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                          filter: 'blur(0.3px)'
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                          y: [-2, 2, -2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: sparkle.delay,
                          ease: "easeInOut"
                        }}
                      />
                    ))}


                  </div>
                </div>
                
                {/* Directions */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6 relative z-1">
                 <Link href="/courses/python">
                   <motion.div 
                     className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                   >
                   <motion.div 
                     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-r from-emerald-500/80 to-green-600/80 rounded-lg shadow-sm dark:shadow-lg"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/Python.png" 
                       alt="Python" 
                       className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">Python</h3>
                     <p className="text-xs text-secondary-dark">{language === 'ru' ? 'Веб-разработка' : 'Веб-даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/golang">
                   <motion.div 
                     className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                   >
                   <motion.div 
                     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-r from-cyan-500/80 to-blue-500/80 rounded-lg shadow-sm dark:shadow-lg"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/Go.png" 
                       alt="Golang" 
                       className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">Golang</h3>
                     <p className="text-xs text-secondary-dark">{language === 'ru' ? 'Серверная разработка' : 'Серверлік даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/javascript">
                   <motion.div 
                     className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                   >
                   <motion.div 
                     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-r from-yellow-500/80 to-orange-500/80 rounded-lg shadow-sm dark:shadow-lg"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img 
                       src="/images/JavaScript.png" 
                       alt="JavaScript" 
                       className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                     />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">JavaScript</h3>
                     <p className="text-xs text-secondary-dark">{language === 'ru' ? 'Фронтенд разработка' : 'Фронтенд даму'}</p>
                   </div>
                   </motion.div>
                 </Link>
                 
                 <Link href="/courses/analytics">
                   <motion.div 
                     className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer"
                     whileHover={{ scale: 1.02, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                   >
                   <motion.div 
                     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500/80 to-indigo-600/80 rounded-lg flex items-center justify-center shadow-sm dark:shadow-lg"
                     whileHover={{ rotate: 5, scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                   </motion.div>
                   <div>
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{language === 'ru' ? 'Аналитика данных' : 'Деректер талдауы'}</h3>
                     <p className="text-xs text-secondary-dark">{language === 'ru' ? 'Data Science' : 'Data Science'}</p>
                   </div>
                   </motion.div>
                 </Link>
               </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  {/* Location Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-3 py-2 rounded-full border border-blue-200 dark:border-blue-700/30"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-3 h-3 bg-blue-500 rounded-full"
                    />
                    <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                      {language === 'ru' ? '📍 Павлодар' : '📍 Павлодар'}
                    </span>
                  </motion.div>

                  {/* Offline Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 px-3 py-2 rounded-full border border-emerald-200 dark:border-emerald-700/30"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                      {language === 'ru' ? '💻 Офлайн' : '💻 Офлайн'}
                    </span>
                  </motion.div>
                </div>


              </motion.div>
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
