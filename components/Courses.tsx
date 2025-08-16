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
        description: 'Идеально для школьников! Изучите Python с нуля - от простых программ до создания веб-сайтов и автоматизации задач. Подходит для ЕНТ по информатике и олимпиад.',
        duration: '6 месяцев',
        students: '35+ студентов',
        level: 'Начинающий',
        features: ['Основы программирования', 'Веб-разработка', 'Автоматизация', 'ЕНТ подготовка'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверная разработка',
        description: 'Для продвинутых школьников! Изучите современный язык Go для создания быстрых приложений, микросервисов и систем. Отлично для олимпиад по программированию.',
        duration: '5 месяцев',
        students: '15+ студентов',
        level: 'Средний',
        features: ['Высокая производительность', 'Микросервисы', 'Системное программирование', 'Олимпиады'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд разработка',
        description: 'Создавайте крутые веб-сайты и приложения! Изучите JavaScript для веб-разработки и создания интерактивных сайтов.',
        duration: '7 месяцев',
        students: '40+ студентов',
        level: 'Начинающий',
        features: ['Веб-разработка', 'Интерактивные сайты', 'Работа с API'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Аналитика данных',
        subtitle: 'Data Science & Analytics',
        description: 'Будущее за данными! Изучите анализ данных, создание графиков и предсказательных моделей. Отлично для научных проектов и олимпиад.',
        duration: '6 месяцев',
        students: '25+ студентов',
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
        description: 'Мектеп оқушылары үшін тамаша! Python-ды нөлден үйреніңіз - қарапайым бағдарламалардан веб-сайттар және тапсырмаларды автоматтандыруға дейін. Информатика бойынша ЕНТ-ке және олимпиадаларға жарамды.',
        duration: '6 ай',
        students: '35+ студент',
        level: 'Бастаушы',
        features: ['Бағдарламалау негіздері', 'Веб-даму', 'Автоматтандыру', 'ЕНТ дайындық'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверлік даму',
        description: 'Жетілген мектеп оқушылары үшін! Жылдам қосымшалар, микросервистер және жүйелер жасау үшін заманауи Go тілін үйреніңіз. Бағдарламалау олимпиадаларына өте жақсы.',
        duration: '5 ай',
        students: '15+ студент',
        level: 'Орташа',
        features: ['Жоғары өнімділік', 'Микросервистер', 'Жүйелік бағдарламалау', 'Олимпиадалар'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд даму',
        description: 'Керемет веб-сайттар мен қосымшалар жасаңыз! Веб-даму және интерактивті сайттар жасау үшін JavaScript үйреніңіз.',
        duration: '7 ай',
        students: '40+ студент',
        level: 'Бастаушы',
        features: ['Веб-даму', 'Интерактивті сайттар', 'API жұмысы'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Деректер талдауы',
        subtitle: 'Data Science & Analytics',
        description: 'Болашақ деректерде! Деректер талдауын, графиктер жасауды және болжамдық модельдерді үйреніңіз. Ғылыми жобалар мен олимпиадаларға өте жақсы.',
        duration: '6 ай',
        students: '25+ студент',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.entries(t.courses).map(([key, course], index) => {
            const IconComponent = course.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/courses/${key}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-0 group-hover:shadow-2xl h-full flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Modern Header with Glassmorphism */}
                    <div className={`relative h-40 bg-gradient-to-br ${course.color} overflow-hidden`}>
                      {/* Animated mesh gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 animate-pulse"></div>
                      
                      {/* Floating geometric shapes */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            y: [0, -15, 0],
                            x: [0, Math.sin(i) * 8, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{ 
                            duration: 4 + i, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.3
                          }}
                          className="absolute bg-white/20 backdrop-blur-sm rounded-full"
                          style={{
                            width: `${8 + (i % 3) * 4}px`,
                            height: `${8 + (i % 3) * 4}px`,
                            top: `${15 + (i * 20) % 70}%`,
                            left: `${10 + (i * 15) % 80}%`
                          }}
                        />
                      ))}
                      
                      {/* Modern Icon Container */}
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-20 h-20 bg-white/25 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30"
                        >
                          {key === 'python' ? (
                            <img 
                              src="/images/Python.png" 
                              alt="Python" 
                              className="w-12 h-12 object-contain drop-shadow-lg"
                            />
                          ) : key === 'golang' ? (
                            <img 
                              src="/images/Go.png" 
                              alt="Golang" 
                              className="w-12 h-12 object-contain drop-shadow-lg"
                            />
                          ) : key === 'javascript' ? (
                            <img 
                              src="/images/JavaScript.png" 
                              alt="JavaScript" 
                              className="w-12 h-12 object-contain drop-shadow-lg"
                            />
                          ) : (
                            <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                          )}
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-sm"></div>
                        </motion.div>
                      </div>
                      
                      {/* Corner badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/30">
                        {language === 'ru' ? 'Популярно' : 'Танымал'}
                      </div>
                    </div>

                    {/* Modern Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      {/* Title with gradient text */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                          {course.description}
                        </p>
                      </div>
                      
                      {/* Course Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>4.9</span>
                        </div>
                      </div>
                      
                      {/* Modern Pricing Section */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 border border-gray-200/50 dark:border-gray-600/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              24 000 ₸
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 line-through">
                              30 000 ₸
                            </span>
                          </div>
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            -20%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{language === 'ru' ? '/ месяц' : '/ ай'}</span>
                          <span>• {language === 'ru' ? 'Офлайн' : 'Офлайн'}</span>
                        </div>
                      </div>
                      
                      {/* Features Preview */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {language === 'ru' ? 'Что изучаете:' : 'Не үйренесіз:'}
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {course.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                              <div className="w-1 h-1 bg-primary-500 dark:bg-primary-400 rounded-full" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                          {course.features.length > 3 && (
                            <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                              +{course.features.length - 3} {language === 'ru' ? 'еще' : 'тағы'}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Modern CTA Buttons */}
                    <div className="p-6 pt-0 space-y-3 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2 px-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
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
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-2 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center justify-center space-x-2"
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

