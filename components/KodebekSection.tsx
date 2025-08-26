'use client'

import { motion } from 'framer-motion'
import { MessageCircle, BookOpen, Lightbulb, Code, Star, Users, Zap, Instagram, Youtube, Sparkles, Target, Heart, Award, Rocket, Brain, Coffee } from 'lucide-react'
import Image from 'next/image'

interface KodebekSectionProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Познакомьтесь с Кодбеком',
    subtitle: 'Ваш дружелюбный проводник в мире программирования',
    description: 'Привет! Я Кодбек — ваш персональный IT-наставник и официальный представитель школы CodeMastersPRO! 🚀 Я не просто помогаю студентам, я создаю целую экосистему знаний для всех, кто мечтает покорить мир технологий.',
    role: 'IT-Наставник & Представитель школы',
    features: [
      {
        icon: Brain,
        title: 'Ваш IT-мозг',
        description: 'Помогаю разобраться в сложных концепциях программирования простым языком'
      },
      {
        icon: Rocket,
        title: 'Запускаю карьеры',
        description: 'Направляю студентов на правильный путь в IT-индустрии'
      },
      {
        icon: Coffee,
        title: 'Дружеские советы',
        description: 'Делимся кофе и практическими советами от опытного программиста'
      },
      {
        icon: Zap,
        title: 'Энергия знаний',
        description: 'Заряжаю энтузиазмом и мотивацией на пути к успеху'
      }
    ],
    social: {
      title: 'Ведет крутые рубрики в Instagram',
      description: 'Каждый день делится полезным контентом и вдохновляет на изучение IT',
      rubrics: [
        '💻 Языки программирования',
        '🎯 IT-факты и новости',
        '🚀 Советы для начинающих',
        '📚 Обзоры курсов и книг',
        '💡 Лайфхаки программиста',
        '🌟 Истории успеха'
      ]
    },
    personality: {
      title: 'Почему Кодбек особенный?',
      traits: [
        'Дружелюбный и всегда готов помочь',
        'Объясняет сложное простыми словами',
        'Знает все тренды в IT-индустрии',
        'Вдохновляет на достижение целей'
      ]
    }
  },
  kk: {
    title: 'Кодбекпен танысыңыз',
    subtitle: 'Бағдарламалау әлеміндегі сіздің дос жол көрсетушіңіз',
    description: 'Сәлем! Мен Кодбек — сіздің жеке IT-жол көрсетушіңіз және CodeMastersPRO мектебінің ресми өкілі! 🚀 Мен тек студенттерге көмектеспеймін, технологиялар әлемін бағындырғысы келетіндерге арналған білім экожүйесін жасаймын.',
    role: 'IT-Жол көрсетуші & Мектеп өкілі',
    features: [
      {
        icon: Brain,
        title: 'Сіздің IT-миыңыз',
        description: 'Бағдарламалаудың күрделі түсініктерін қарапайым тілмен түсіндіруге көмектесемін'
      },
      {
        icon: Rocket,
        title: 'Мансаптарды іске қосамын',
        description: 'Студенттерді IT-индустриясындағы дұрыс жолға бағыттаймын'
      },
      {
        icon: Coffee,
        title: 'Дос кеңестері',
        description: 'Кофе бөлісіп, тәжірибелі бағдарламашыдан практикалық кеңестер береміз'
      },
      {
        icon: Zap,
        title: 'Білім энергиясы',
        description: 'Сәттілікке жолдағы энтузиазм мен мотивациямен зарядтаймын'
      }
    ],
    social: {
      title: 'Instagram-да керемет рубрикалар жүргізеді',
      description: 'Күн сайын пайдалы контентпен бөлісіп, IT-ді оқуға шабыттандырады',
      rubrics: [
        '💻 Бағдарламалау тілдері',
        '🎯 IT-фактілер және жаңалықтар',
        '🚀 Жаңадан бастаушыларға кеңестер',
        '📚 Курстар мен кітаптар шолуы',
        '💡 Бағдарламашының лайфхактары',
        '🌟 Сәттілік тарихтары'
      ]
    },
    personality: {
      title: 'Кодбек неге ерекше?',
      traits: [
        'Досқан және әрқашан көмектесуге дайын',
        'Күрделіні қарапайым сөздермен түсіндіреді',
        'IT-индустриясындағы барлық трендтерді біледі',
        'Мақсаттарға жетуге шабыттандырады'
      ]
    }
  }
}

export default function KodebekSection({ language }: KodebekSectionProps) {
  const t = translations[language]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.role}</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Side - Kodebek Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Kodebek Image with Enhanced Animation */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/Kodebek1.png"
                  alt="Кодбек"
                  width={500}
                  height={600}
                  className="w-full max-w-lg mx-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                  }}
                />
              </motion.div>

              {/* Enhanced Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  style={{
                    top: `${15 + (i * 12)}%`,
                    left: `${8 + (i * 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                    y: [0, -30, 0],
                    x: [0, Math.random() * 15 - 7.5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}

                             {/* Personality Traits */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 viewport={{ once: true }}
                 className="absolute -bottom-8 -right-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 max-w-xs hidden lg:block"
               >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                  {t.personality.title}
                </h4>
                <ul className="space-y-2">
                  {t.personality.traits.map((trait, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0" />
                      <span>{trait}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Features and Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
                         {/* Features */}
             <div>
                               <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center sm:text-left">
                  {language === 'ru' ? 'Что делает Кодбека особенным?' : 'Кодбека не ерекше ететін?'}
                </h3>
                                                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center sm:text-left">
                {t.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                                         className="group p-4 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                   >
                                           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                       <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                     </div>
                                           <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-base sm:text-lg text-center sm:text-left">{feature.title}</h4>
                                           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

                         {/* Social Media Section */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               viewport={{ once: true }}
               className="p-6 sm:p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
             >
                             <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                   <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">{t.social.title}</h4>
                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t.social.description}</p>
                 </div>
               </div>

                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                 {t.social.rubrics.map((rubric, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                     viewport={{ once: true }}
                     className="flex items-center space-x-2 p-2 sm:p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg sm:rounded-xl text-xs sm:text-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                   >
                     <span className="text-base sm:text-lg">{rubric.split(' ')[0]}</span>
                     <span className="text-gray-700 dark:text-gray-300">{rubric.split(' ').slice(1).join(' ')}</span>
                   </motion.div>
                 ))}
               </div>

                             {/* CTA Button */}
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => window.open('https://www.instagram.com/code_masterspro?igsh=M2NxcW4zc2Jhd3l5&utm_source=qr', '_blank')}
                 className="w-full inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
               >
                 <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                 <span>{language === 'ru' ? 'Подписаться на Instagram' : 'Instagram-ға жазылу'}</span>
               </motion.button>
            </motion.div>

            {/* Mobile Personality Traits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">
                {t.personality.title}
              </h4>
              <ul className="space-y-2">
                {t.personality.traits.map((trait, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0" />
                    <span>{trait}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
