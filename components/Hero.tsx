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
    audience: 'Для школьников и взрослых • Подготовка к ЕНТ и карьере в IT',
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
    audience: 'Мектеп оқушылары және ересектер үшін • ЕНТ-ке және IT-дегі мансапқа дайындық',
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
            loading="eager"
            fetchPriority="high"
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-20">
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
              className="text-base sm:text-lg md:text-xl text-secondary-dark mb-4 max-w-2xl mx-auto lg:mx-0"
            >
              {t.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base text-primary-600 dark:text-primary-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              {t.audience}
            </motion.p>

            {/* Modern Free Trial Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -1 }}
                className="relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white p-2 sm:p-3 lg:p-4 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm"
              >
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <motion.div
                    animate={{ 
                      x: [0, 40, 0],
                      y: [0, -20, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, -30, 0],
                      y: [0, 15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-2 left-2 w-6 h-6 bg-white/10 rounded-full"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between space-y-2 sm:space-y-3 lg:space-y-0 lg:space-x-4">
                    {/* Left side - Main content */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-1.5 sm:space-y-0 sm:space-x-3 text-center sm:text-left w-full lg:w-auto">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                      >
                        <Gift className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="font-bold text-xs sm:text-sm lg:text-base xl:text-lg mb-0.5 sm:mb-1"
                        >
                          {language === 'ru' ? '🎉 Первое занятие БЕСПЛАТНО!' : '🎉 Алғашқы сабақ ТЕГІН!'}
                        </motion.div>
                        <div className="text-xs opacity-90 mb-0.5 sm:mb-1">
                          {language === 'ru' ? 'Для школьников и взрослых' : 'Мектеп оқушылары және ересектер үшін'}
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-1.5 text-xs opacity-80">
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-2.5 h-2.5 text-green-300" />
                            <span>{language === 'ru' ? 'Практика' : 'Тәжірибе'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-2.5 h-2.5 text-green-300" />
                            <span>{language === 'ru' ? 'Сертификат' : 'Сертификат'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-2.5 h-2.5 text-green-300" />
                            <span>{language === 'ru' ? 'Поддержка' : 'Қолдау'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - CTA buttons */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 w-full sm:w-auto sm:min-w-[140px]">
                      <motion.button
                        whileHover={{ 
                          scale: 1.01, 
                          y: -1,
                          boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 4px -2px rgba(0, 0, 0, 0.05)"
                        }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-medium py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-1.5 text-xs w-full sm:w-auto relative overflow-hidden group"
                        onClick={handleTrialLesson}
                      >
                        {/* Animated background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <motion.div
                          animate={{ rotate: [0, 3, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Play className="w-2.5 h-2.5" />
                        </motion.div>
                        <motion.span
                          animate={{ x: [0, 0.5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {language === 'ru' ? 'Попробовать бесплатно' : 'Тегін сынап көріңіз'}
                        </motion.span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ 
                          scale: 1.01, 
                          y: -1,
                          boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 4px -2px rgba(0, 0, 0, 0.05)"
                        }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 hover:from-orange-600 hover:via-pink-600 hover:to-rose-600 text-white font-medium py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-1.5 text-xs w-full sm:w-auto relative overflow-hidden group"
                        onClick={handleGetDiscount}
                      >
                        {/* Animated background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <motion.div
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Gift className="w-2.5 h-2.5" />
                        </motion.div>
                        <motion.span
                          animate={{ x: [0, 0.5, 0] }}
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
              {/* Stickers Container */}
              <div className="absolute -top-2 sm:-top-4 lg:-top-8 -right-4 flex flex-row lg:flex-col gap-2 z-30">
                {/* Best School Sticker */}
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  <Star className="w-3 h-3 inline mr-1" />
                  {language === 'ru' ? 'Лучшая школа' : 'Үздік мектеп'}
                </div>
                
                {/* Pavlodar Sticker */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full inline mr-1" />
                  {language === 'ru' ? '📍 Павлодар' : '📍 Павлодар'}
                </div>
                
                {/* Offline Sticker */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  <Users className="w-3 h-3 inline mr-1" />
                  {language === 'ru' ? '💻 Офлайн' : '💻 Офлайн'}
                </div>
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
                <div className="space-y-3 sm:space-y-4 md:space-y-6 relative z-1 flex flex-col items-center lg:items-start mt-4 sm:mt-0">
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
                   <div className="flex-1">
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">Python</h3>
                     <p className="text-xs text-secondary-dark mb-1">{language === 'ru' ? 'Автоматизация' : 'Автоматтандыру'}</p>
                     <div className="flex items-center space-x-2">
                       <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">24 000 ₸</span>
                       <span className="text-xs text-gray-400 dark:text-gray-500 line-through">30 000 ₸</span>
                       <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-[10px]">-20%</span>
                     </div>
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
                   <div className="flex-1">
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">Golang</h3>
                     <p className="text-xs text-secondary-dark mb-1">{language === 'ru' ? 'Серверная разработка' : 'Серверлік даму'}</p>
                     <div className="flex items-center space-x-2">
                       <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">24 000 ₸</span>
                       <span className="text-xs text-gray-400 dark:text-gray-500 line-through">30 000 ₸</span>
                       <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-[10px]">-20%</span>
                     </div>
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
                   <div className="flex-1">
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">JavaScript</h3>
                                           <p className="text-xs text-secondary-dark mb-1">{language === 'ru' ? 'Веб-разработка' : 'Веб-даму'}</p>
                     <div className="flex items-center space-x-2">
                       <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">24 000 ₸</span>
                       <span className="text-xs text-gray-400 dark:text-gray-500 line-through">30 000 ₸</span>
                       <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-[10px]">-20%</span>
                     </div>
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
                   <div className="flex-1">
                     <h3 className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{language === 'ru' ? 'Аналитика данных' : 'Деректер талдауы'}</h3>
                     <p className="text-xs text-secondary-dark mb-1">{language === 'ru' ? 'Data Science' : 'Data Science'}</p>
                     <div className="flex items-center space-x-2">
                       <span className="text-xs font-bold text-purple-600 dark:text-purple-400">24 000 ₸</span>
                       <span className="text-xs text-gray-400 dark:text-gray-500 line-through">30 000 ₸</span>
                       <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-[10px]">-20%</span>
                     </div>
                   </div>
                   </motion.div>
                 </Link>
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
