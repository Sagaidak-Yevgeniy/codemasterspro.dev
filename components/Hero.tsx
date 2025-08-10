'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react'

interface HeroProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Стань',
    titleHighlight: 'PRO',
    titleEnd: 'программистом',
    subtitle: 'Обучаем Python, Golang, JavaScript и аналитике данных в Павлодаре. Офлайн занятия с опытными преподавателями.',
    cta: 'Начать обучение',
    stats: {
      students: '100+',
      studentsText: 'студентов',
      courses: '4',
      coursesText: 'направления',
      success: '95%',
      successText: 'успешных выпускников',
    },
    watchVideo: 'Смотреть видео',
  },
  kk: {
    title: 'Бағдарламашы',
    titleHighlight: 'PRO',
    titleEnd: 'бол',
    subtitle: 'Павлодарда Python, Golang, JavaScript және деректер талдауын оқытамыз. Тәжірибелі оқытушылармен жүзбелі сабақтар.',
    cta: 'Оқуға бастау',
    stats: {
      students: '100+',
      studentsText: 'студент',
      courses: '4',
      coursesText: 'бағыт',
      success: '95%',
      successText: 'сәтті түлектер',
    },
    watchVideo: 'Бейнені көру',
  }
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

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
                className="btn-primary flex items-center justify-center space-x-2"
                onClick={() => window.open('https://wa.me/77773323676', '_blank')}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{t.watchVideo}</span>
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
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 inline mr-1" />
                {language === 'ru' ? 'Лучшая школа' : 'Үздік мектеп'}
              </div>
              
                             <div className="space-y-6">
                 <div className="flex items-center space-x-3">
                   <div className="w-14 h-14 flex items-center justify-center">
                     <img 
                       src="/images/Python.png" 
                       alt="Python" 
                       className="w-10 h-10 object-contain"
                     />
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-900">Python</h3>
                     <p className="text-sm text-gray-600">{language === 'ru' ? 'Веб-разработка' : 'Веб-даму'}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-3">
                   <div className="w-14 h-14 flex items-center justify-center">
                     <img 
                       src="/images/Go.png" 
                       alt="Golang" 
                       className="w-10 h-10 object-contain"
                     />
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-900">Golang</h3>
                     <p className="text-sm text-gray-600">{language === 'ru' ? 'Серверная разработка' : 'Серверлік даму'}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-3">
                   <div className="w-14 h-14 flex items-center justify-center">
                     <img 
                       src="/images/JavaScript.png" 
                       alt="JavaScript" 
                       className="w-10 h-10 object-contain"
                     />
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-900">JavaScript</h3>
                     <p className="text-sm text-gray-600">{language === 'ru' ? 'Фронтенд разработка' : 'Фронтенд даму'}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-3">
                   <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                     </svg>
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-900">{language === 'ru' ? 'Аналитика данных' : 'Деректер талдауы'}</h3>
                     <p className="text-sm text-gray-600">{language === 'ru' ? 'Data Science' : 'Data Science'}</p>
                   </div>
                 </div>
               </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{language === 'ru' ? 'Павлодар' : 'Павлодар'}</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-primary-500" />
                    <span className="text-primary-600 font-medium">Офлайн</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
