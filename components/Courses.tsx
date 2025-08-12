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
        description: 'Изучите Django, Flask, FastAPI. Создавайте веб-приложения, API и автоматизируйте процессы.',
        duration: '6 месяцев',
        students: '30+ студентов',
        level: 'Начинающий',
        features: ['Django & Flask', 'API разработка', 'Автоматизация', 'Базы данных'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверная разработка',
        description: 'Освойте высокопроизводительный Go. Создавайте микросервисы и масштабируемые приложения.',
        duration: '5 месяцев',
        students: '10+ студентов',
        level: 'Средний',
        features: ['Микросервисы', 'Goroutines', 'REST API', 'Docker'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд разработка',
        description: 'Изучите React, Vue, Node.js. Создавайте современные веб-приложения и интерфейсы.',
        duration: '7 месяцев',
        students: '40+ студентов',
        level: 'Начинающий',
        features: ['React & Vue', 'Node.js', 'TypeScript', 'Next.js'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Аналитика данных',
        subtitle: 'Data Science & Analytics',
        description: 'Изучите Python для анализа данных, машинное обучение и визуализацию.',
        duration: '6 месяцев',
        students: '20+ студентов',
        level: 'Средний',
        features: ['Pandas & NumPy', 'Машинное обучение', 'Визуализация', 'SQL'],
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
        description: 'Django, Flask, FastAPI үйреніңіз. Веб-қосымшалар, API жасаңыз және процестерді автоматтандырыңыз.',
        duration: '6 ай',
        students: '150+ студент',
        level: 'Бастаушы',
        features: ['Django & Flask', 'API даму', 'Автоматтандыру', 'Дерекқорлар'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверлік даму',
        description: 'Жоғары өнімді Go-ны меңгеріңіз. Микросервистер мен масштабталатын қосымшалар жасаңыз.',
        duration: '5 ай',
        students: '80+ студент',
        level: 'Орташа',
        features: ['Микросервистер', 'Goroutines', 'REST API', 'Docker'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд даму',
        description: 'React, Vue, Node.js үйреніңіз. Заманауи веб-қосымшалар мен интерфейстер жасаңыз.',
        duration: '7 ай',
        students: '200+ студент',
        level: 'Бастаушы',
        features: ['React & Vue', 'Node.js', 'TypeScript', 'Next.js'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Деректер талдауы',
        subtitle: 'Data Science & Analytics',
        description: 'Деректер талдауы, машиналық оқыту және визуализация үшін Python үйреніңіз.',
        duration: '6 ай',
        students: '100+ студент',
        level: 'Орташа',
        features: ['Pandas & NumPy', 'Машиналық оқыту', 'Визуализация', 'SQL'],
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
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm"
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
                        className="font-bold text-base sm:text-lg mb-1"
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

                  {/* Right side - CTA button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      x: 2,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm w-full sm:w-auto sm:min-w-[200px] relative overflow-hidden group"
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
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card-dark card-dark-hover rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer"
                  >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 flex items-center justify-center mb-4">
                        {key === 'python' ? (
                          <img 
                            src="/images/Python.png" 
                            alt="Python" 
                            className="w-12 h-12 object-contain"
                          />
                        ) : key === 'golang' ? (
                          <img 
                            src="/images/Go.png" 
                            alt="Golang" 
                            className="w-12 h-12 object-contain"
                          />
                        ) : key === 'javascript' ? (
                          <img 
                            src="/images/JavaScript.png" 
                            alt="JavaScript" 
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-white/90 text-sm">{course.subtitle}</p>
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

                    {/* Level Badge */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Начинающий' || course.level === 'Бастаушы'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      }`}>
                        <Star className="w-3 h-3 mr-1" />
                        {course.level}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                                          <h4 className="font-semibold text-primary-dark mb-3 text-sm">
                      {language === 'ru' ? 'Что изучаете:' : 'Не үйренесіз:'}
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-secondary-dark">
                          <div className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white dark:bg-gray-700 border-2 border-medium text-gray-700 dark:text-gray-200 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
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

