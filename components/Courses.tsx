'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap, Clock, Users, Star, ArrowRight, CheckCircle, Play, Gift } from 'lucide-react'
import Link from 'next/link'

interface CoursesProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Наши направления',
    subtitle: 'Выберите свой путь в программировании',
    courses: {
      python: {
        title: 'Python',
        subtitle: 'Веб-разработка и автоматизация',
        description: 'Идеально для школьников! Изучите Python с нуля - от простых программ до создания веб-сайтов, игр и автоматизации задач. Подходит для ЕНТ по информатике.',
        duration: '6 месяцев',
        students: '30+ студентов',
        level: 'Начинающий',
        features: ['Основы программирования', 'Веб-разработка', 'Создание игр', 'Автоматизация'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверная разработка',
        description: 'Для продвинутых школьников! Изучите современный язык Go для создания быстрых приложений, игр и систем. Отлично для олимпиад по программированию.',
        duration: '5 месяцев',
        students: '10+ студентов',
        level: 'Средний',
        features: ['Высокая производительность', 'Создание игр', 'Системное программирование', 'Олимпиады'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд разработка',
        description: 'Создавайте крутые веб-сайты и приложения! Изучите JavaScript для разработки игр, интерактивных сайтов и мобильных приложений.',
        duration: '7 месяцев',
        students: '40+ студентов',
        level: 'Начинающий',
        features: ['Веб-разработка', 'Создание игр', 'Мобильные приложения', 'Интерактивные сайты'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Аналитика данных',
        subtitle: 'Data Science & Analytics',
        description: 'Будущее за данными! Изучите анализ данных, создание графиков и предсказательных моделей. Отлично для научных проектов и олимпиад.',
        duration: '6 месяцев',
        students: '20+ студентов',
        level: 'Средний',
        features: ['Анализ данных', 'Создание графиков', 'Машинное обучение', 'Научные проекты'],
        color: 'from-purple-500 to-indigo-600',
        icon: Database,
      }
    },
    enroll: 'Записаться',
    learnMore: 'Узнать больше',
  },
  kk: {
    title: 'Біздің бағыттар',
    subtitle: 'Бағдарламалаудағы жолыңызды таңдаңыз',
    courses: {
      python: {
        title: 'Python',
        subtitle: 'Веб-даму және автоматтандыру',
          description: 'Мектеп оқушылары үшін тамаша! Python-ды нөлден үйреніңіз - қарапайым бағдарламалардан веб-сайттар, ойындар және тапсырмаларды автоматтандыруға дейін. Информатика бойынша ЕНТ-ке жарамды.',
        duration: '6 ай',
        students: '150+ студент',
        level: 'Бастаушы',
          features: ['Бағдарламалау негіздері', 'Веб-даму', 'Ойын жасау', 'Автоматтандыру'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверлік даму',
          description: 'Жетілген мектеп оқушылары үшін! Жылдам қосымшалар, ойындар және жүйелер жасау үшін заманауи Go тілін үйреніңіз. Бағдарламалау олимпиадаларына өте жақсы.',
        duration: '5 ай',
        students: '80+ студент',
        level: 'Орташа',
          features: ['Жоғары өнімділік', 'Ойын жасау', 'Жүйелік бағдарламалау', 'Олимпиадалар'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд даму',
          description: 'Керемет веб-сайттар мен қосымшалар жасаңыз! Ойындар, интерактивті сайттар және мобильді қосымшалар дамуы үшін JavaScript үйреніңіз.',
        duration: '7 ай',
        students: '200+ студент',
        level: 'Бастаушы',
          features: ['Веб-даму', 'Ойын жасау', 'Мобильді қосымшалар', 'Интерактивті сайттар'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Деректер талдауы',
        subtitle: 'Data Science & Analytics',
        description: 'Болашақ деректерде! Деректер талдауын, графиктер жасауды және болжамдық модельдерді үйреніңіз. Ғылыми жобалар мен олимпиадаларға өте жақсы.',
        duration: '6 ай',
        students: '100+ студент',
        level: 'Орташа',
        features: ['Деректер талдауы', 'Графиктер жасау', 'Машиналық оқыту', 'Ғылыми жобалар'],
        color: 'from-purple-500 to-indigo-600',
        icon: Database,
      }
    },
    enroll: 'Тіркелу',
    learnMore: 'Толығырақ',
  }
}

export default function Courses({ language }: CoursesProps) {
  const t = translations[language]

  return (
    <section id="courses" className="section-padding bg-section-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-secondary-dark max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          
          {/* Free Trial Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -1 }}
              className="relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white px-3 sm:px-4 py-3 sm:py-4 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm"
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
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0 lg:space-x-4">
                  {/* Left side - Main content */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:text-left w-full lg:w-auto">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="font-bold text-sm sm:text-base lg:text-lg mb-1"
                      >
                        {language === 'ru' ? '🎉 Первое занятие БЕСПЛАТНО!' : '🎉 Алғашқы сабақ ТЕГІН!'}
                      </motion.div>
                      <div className="text-xs opacity-90 mb-1">
                        {language === 'ru' ? 'Для школьников и взрослых' : 'Мектеп оқушылары және ересектер үшін'}
                      </div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs opacity-80">
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

                  {/* Right side - CTA button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.01, 
                      y: -1,
                      boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 4px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-medium py-1.5 px-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-1.5 text-xs w-full sm:w-auto sm:min-w-[140px] relative overflow-hidden group"
                    onClick={() => {
                      const message = language === 'ru' 
                        ? 'Привет! Хочу записаться на бесплатное пробное занятие'
                        : 'Сәлем! Тегін сынақ сабағына жазылғым келеді';
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                    }}
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(t.courses).map(([key, course], index) => {
            const IconComponent = course.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/courses/${key}`}>
                  <motion.div 
                    whileHover={{ 
                      y: -15, 
                      scale: 1.03,
                      rotateY: 2,
                      rotateX: 1
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="card-dark card-dark-hover rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-700 overflow-hidden h-full flex flex-col cursor-pointer group relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                    {/* Enhanced animated background elements */}
                    
                    {/* 3D Floating Geometric Shapes */}
                    <motion.div
                      animate={{ 
                        rotateX: [0, 360, 0],
                        rotateY: [0, 180, 0],
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ 
                        rotateX: { duration: 25, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute top-2 right-2 w-32 h-32 bg-white/25 rounded-xl -translate-y-16 translate-x-16 blur-sm"
                    />
                    
                    <motion.div
                      animate={{ 
                        rotateX: [0, -360, 0],
                        rotateY: [0, -180, 0],
                        scale: [1, 1.4, 1],
                        opacity: [0.15, 0.5, 0.15]
                      }}
                      transition={{ 
                        rotateX: { duration: 30, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                      }}
                      className="absolute bottom-2 left-2 w-28 h-28 bg-white/20 rounded-full translate-y-14 -translate-x-14 blur-sm"
                    />
                    
                    {/* Enhanced Gradient Orbs */}
                    <motion.div
                      animate={{ 
                        y: [0, -25, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.25, 0.6, 0.25]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-white/30 to-white/8 rounded-full -translate-x-18 -translate-y-18 blur-md"
                    />
                    
                    <motion.div
                      animate={{ 
                        y: [0, 20, 0],
                        x: [0, -12, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                      className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-white/25 to-white/5 rounded-full blur-md"
                    />
                    
                    {/* Dynamic Light Rays */}
                    <motion.div
                      animate={{ 
                        scaleX: [0, 1.5, 0],
                        opacity: [0, 0.5, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    
                    <motion.div
                      animate={{ 
                        scaleY: [0, 1.8, 0],
                        opacity: [0, 0.4, 0],
                        rotate: [0, -8, 0]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2.5
                      }}
                      className="absolute top-0 right-1/3 w-1.5 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    />
                    
                    {/* Interactive Particle System */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -20, 0],
                          x: [0, Math.sin(i) * 15, 0],
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 6 + i * 0.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                        className={`absolute w-${2 + (i % 2)} h-${2 + (i % 2)} bg-white/50 rounded-full`}
                        style={{
                          top: `${15 + (i * 10) % 70}%`,
                          left: `${10 + (i * 12) % 80}%`,
                          filter: 'blur(0.5px)'
                        }}
                      />
                    ))}
                    
                    {/* Glowing Orb Effects */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.6, 1],
                        opacity: [0.1, 0.4, 0.1],
                        filter: ['blur(8px)', 'blur(16px)', 'blur(8px)']
                      }}
                      transition={{ 
                        duration: 15, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-white/20 to-white/5 rounded-full -translate-x-20 -translate-y-20"
                    />
                    
                    {/* Animated Grid Pattern */}
                    <motion.div
                      animate={{ 
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:30px_30px]"
                    />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {key === 'python' ? (
                          <img 
                            src="/images/Python.png" 
                            alt="Python" 
                            className="w-12 h-12 object-contain group-hover:drop-shadow-lg transition-all duration-500"
                          />
                        ) : key === 'golang' ? (
                          <img 
                            src="/images/Go.png" 
                            alt="Golang" 
                            className="w-12 h-12 object-contain group-hover:drop-shadow-lg transition-all duration-500"
                          />
                        ) : key === 'javascript' ? (
                          <img 
                            src="/images/JavaScript.png" 
                            alt="JavaScript" 
                            className="w-12 h-12 object-contain group-hover:drop-shadow-lg transition-all duration-500"
                          />
                        ) : (
                          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                            <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                      </div>
                                              <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 group-hover:translate-x-2 transition-all duration-500">{course.title}</h3>
                        <p className="text-white/90 text-sm group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-500">{course.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-secondary-dark mb-6 text-sm leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                        <span className="text-secondary-dark">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-secondary-500 dark:text-secondary-400" />
                        <span className="text-secondary-dark">{course.students}</span>
                      </div>
                    </div>



                    {/* Features */}
                    <div className="mb-6">
                                          <h4 className="font-semibold text-primary-dark mb-3 text-sm">
                      {language === 'ru' ? 'Что изучаете:' : 'Не үйренесіз:'}
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-secondary-dark group-hover:translate-x-1 transition-all duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                            <div className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full group-hover:scale-125 group-hover:bg-primary-600 dark:group-hover:bg-primary-300 transition-all duration-300" />
                            <span className="group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700/30 group-hover:scale-105 group-hover:shadow-lg group-hover:border-green-300 dark:group-hover:border-green-600 transition-all duration-500">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {language === 'ru' ? 'Стоимость обучения:' : 'Оқу құны:'}
                        </span>
                        <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full font-medium">
                          -20%
                        </span>
                      </div>
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 group-hover:text-green-700 dark:group-hover:text-green-300 transition-all duration-500">
                          24 000 ₸
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-500">
                          {language === 'ru' ? '/ месяц' : '/ ай'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                          30 000 ₸
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {language === 'ru' ? '/ месяц' : '/ ай'}
                        </span>
                      </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-500 flex items-center justify-center space-x-2 shadow-md group-hover:shadow-2xl group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-700"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const courseName = course.title;
                          const message = language === 'ru' 
                            ? `Привет! Хочу записаться на курс "${courseName}" в CMPro. Можете рассказать подробнее об этом направлении?`
                            : `Сәлем! CMPro-да "${courseName}" курсына тіркелгім келеді. Бұл бағыт туралы толығырақ айта аласыз ба?`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                        }}
                      >
                        <span>{t.enroll}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white dark:bg-gray-700 border-2 border-medium text-gray-700 dark:text-gray-200 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 flex items-center justify-center space-x-2 shadow-sm group-hover:shadow-lg group-hover:border-primary-600 dark:group-hover:border-primary-300"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.location.href = `/courses/${key}`
                        }}
                      >
                        <span>{t.learnMore}</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-light">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              {language === 'ru' 
                ? 'Не можете выбрать направление?' 
                : 'Бағытты таңдай алмайсыз ба?'
              }
            </h3>
            <p className="text-secondary-dark mb-6 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Свяжитесь с нами, и мы поможем выбрать подходящий курс для ваших целей'
                : 'Бізбен байланысыңыз, мақсаттарыңызға сәйкес курс таңдауға көмектесеміз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Не могу выбрать подходящий курс программирования. Можете помочь с выбором и дать консультацию?'
                  : 'Сәлем! Сәйкес бағдарламалау курсын таңдай алмаймын. Таңдауға көмектесіп, кеңес бере аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Получить консультацию' : 'Кеңес алу'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

