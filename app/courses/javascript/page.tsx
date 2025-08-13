'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import CourseFloatingNav from '@/components/CourseFloatingNav'
import ProgressBar from '@/components/ProgressBar'

export default function JavaScriptCourse() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Read language from localStorage on component mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const translations = {
    ru: {
      backToCourses: 'Назад к курсам',
      developer: 'разработчик',
      description: 'Создавайте крутые веб-сайты и приложения! Изучите JavaScript для разработки игр, интерактивных сайтов и мобильных приложений. Отлично для школьников!',
      months: 'месяцев',
      students: 'студентов',
      success: 'успешность',
      enroll: 'Записаться на курс',
      whatYouWillLearn: 'Что вы изучите',
      featuresDescription: 'Полный стек технологий для современной веб-разработки',
      curriculum: 'Программа обучения',
      curriculumDescription: '7 месяцев интенсивного обучения с практическими проектами',
      whyJavaScript: 'Почему JavaScript?',
      whyJavaScriptDescription: 'Самый популярный язык программирования для веб-разработки',
      highDemand: 'Высокий спрос',
      highDemandDesc: 'JavaScript разработчики очень востребованы на рынке',
      versatility: 'Универсальность',
      versatilityDesc: 'Фронтенд, бэкенд, мобильные приложения',
      easyStart: 'Легкий старт',
      easyStartDesc: 'Простой синтаксис и множество ресурсов для изучения',
      readyToBecome: 'Готовы стать JavaScript разработчиком?',
      readyToBecomeDesc: 'Присоединяйтесь к нашему курсу и начните свой путь в веб-разработке',
      features: [
        'Основы JavaScript',
        'Создание игр на Canvas',
        'Веб-разработка',
        'Мобильные приложения',
        'Интерактивные сайты',
        'Чат-боты и API',
        'Создание проектов',
        'Портфолио для поступления'
      ],
      curriculumModules: [
        {
          module: 'Модуль 1: Основы JavaScript',
          topics: ['Переменные и функции', 'Условия и циклы', 'Объекты и массивы', 'Работа с DOM']
        },
        {
          module: 'Модуль 2: Создание игр',
          topics: ['Canvas API', 'Создание простых игр', 'Анимация и графика', 'Звуковые эффекты']
        },
        {
          module: 'Модуль 3: Веб-разработка',
          topics: ['HTML и CSS', 'Интерактивные элементы', 'Формы и валидация', 'Адаптивный дизайн']
        },
        {
          module: 'Модуль 4: Мобильные приложения',
          topics: ['React Native', 'Создание мобильных приложений', 'Нативные компоненты', 'Публикация в App Store']
        },
        {
          module: 'Модуль 5: Продвинутые проекты',
          topics: ['Создание чат-ботов', 'Интеграция с API', 'Работа с базами данных', 'Деплой проектов']
        },
        {
          module: 'Модуль 6: Финальный проект',
          topics: ['Создание собственного проекта', 'Портфолио', 'Подготовка к поступлению в ВУЗ']
        }
      ]
    },
    kk: {
      backToCourses: 'Курстарға қайту',
      developer: 'бағдарламашы',
      description: 'Керемет веб-сайттар мен қосымшалар жасаңыз! Ойындар, интерактивті сайттар және мобильді қосымшалар дамуы үшін JavaScript үйреніңіз. Мектеп оқушылары үшін өте жақсы!',
      months: 'ай',
      students: 'студент',
      success: 'сәттілік',
      enroll: 'Курсқа тіркелу',
      whatYouWillLearn: 'Сіз не үйренесіз',
      featuresDescription: 'Заманауи веб-дамуының толық технологиялық стекі',
      curriculum: 'Оқу бағдарламасы',
      curriculumDescription: 'Практикалық жобалармен 7 айлық интенсивті оқу',
      whyJavaScript: 'Неге JavaScript?',
      whyJavaScriptDescription: 'Веб-даму үшін ең танымал бағдарламалау тілі',
      highDemand: 'Жоғары сұраныс',
      highDemandDesc: 'JavaScript бағдарламашылары нарықта өте сұранысты',
      versatility: 'Әмбебаптылық',
      versatilityDesc: 'Фронтенд, бэкенд, мобильді қосымшалар',
      easyStart: 'Оңай бастау',
      easyStartDesc: 'Қарапайым синтаксис және оқуға көп ресурстар',
      readyToBecome: 'JavaScript бағдарламашысы болуға дайынсыз ба?',
      readyToBecomeDesc: 'Біздің курсқа қосылыңыз және веб-дамуындағы жолыңызды бастаңыз',
      features: [
        'React & Vue.js фреймворктері',
        'Node.js серверлік даму',
        'TypeScript типтеу',
        'Next.js және Nuxt.js',
        'REST API және GraphQL',
        'MongoDB дерекқорлары',
        'Docker және деплой',
        'Jest тестілеу'
      ],
      curriculumModules: [
        {
          module: 'Модуль 1: JavaScript негіздері',
          topics: ['ES6+ синтаксисі', 'Функциялар және жабықтықтар', 'Объектілер және прототиптер', 'Асинхрондылық']
        },
        {
          module: 'Модуль 2: Frontend даму',
          topics: ['React.js', 'Hooks және компоненттер', 'State management', 'Роутинг']
        },
        {
          module: 'Модуль 3: Backend даму',
          topics: ['Node.js', 'Express.js', 'REST API', 'Middleware']
        },
        {
          module: 'Модуль 4: TypeScript',
          topics: ['Типтер және интерфейстер', 'Generics', 'Декораторлар', 'Қатаң типтеу']
        },
        {
          module: 'Модуль 5: Жоғары технологиялар',
          topics: ['Next.js', 'GraphQL', 'MongoDB', 'Docker']
        },
        {
          module: 'Модуль 6: Жоба',
          topics: ['Full-stack қосымша', 'Деплой', 'Оңтайландыру', 'Жұмысқа дайындық']
        }
      ]
    }
  }

  const t = translations[language]

  if (!mounted) {
    return null;
  }

  return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ProgressBar />
      
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.backToCourses}
            </Link>
          </div>
        </div>
      </nav>



      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Ultra-modern animated background elements */}
        
        {/* 3D Gradient Mesh Background */}
        <motion.div
          animate={{ 
            rotateX: [0, 5, 0],
            rotateY: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            y: scrollY * 0.1,
            transformStyle: 'preserve-3d'
          }}
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-orange-400/3 to-amber-400/5"
        />
        
        {/* 3D Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            rotateX: [0, 360, 0],
            rotateY: [0, 180, 0],
            rotateZ: [0, 90, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            rotateX: { duration: 30, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            y: scrollY * 0.5,
            transformStyle: 'preserve-3d'
          }}
          className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-400/40 to-orange-400/30 rounded-2xl blur-2xl"
        />
        
        <motion.div
          animate={{ 
            rotateX: [0, -360, 0],
            rotateY: [0, -180, 0],
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{ 
            rotateX: { duration: 35, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 },
            opacity: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          style={{ 
            y: scrollY * 0.3,
            transformStyle: 'preserve-3d'
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tl from-amber-400/35 to-yellow-400/25 rounded-full blur-2xl"
        />
        
        {/* Morphing Wave Effects */}
        <motion.div
          animate={{ 
            scaleX: [1, 1.2, 0.8, 1],
            scaleY: [1, 0.8, 1.2, 1],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.4, 0.2, 0.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          style={{ y: scrollY * 0.2 }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-300/30 to-orange-300/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            scaleX: [1, 0.8, 1.2, 1],
            scaleY: [1, 1.2, 0.8, 1],
            rotate: [0, -8, 8, 0],
            opacity: [0.2, 0.5, 0.3, 0.2]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          style={{ y: scrollY * 0.4 }}
          className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-l from-orange-300/35 to-yellow-300/25 rounded-full blur-xl"
        />
        
        {/* Dynamic Light Rays */}
        <motion.div
          animate={{ 
            scaleX: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
        />
        
        <motion.div
          animate={{ 
            scaleY: [0, 1.8, 0],
            opacity: [0, 0.4, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-orange-400/40 to-transparent"
        />
        
        {/* Interactive Particle System */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.8, 0.1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 8 + i * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.3
            }}
            whileHover={{
              scale: 2,
              opacity: 1,
              transition: { duration: 0.3 }
            }}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} bg-yellow-400/50 rounded-full cursor-pointer`}
            style={{
              top: `${20 + (i * 7) % 60}%`,
              left: `${10 + (i * 8) % 80}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        
        {/* Glowing Orb Effects */}
        <motion.div
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.05, 0.3, 0.05],
            filter: ['blur(20px)', 'blur(40px)', 'blur(20px)']
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          style={{ y: scrollY * 0.1 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/10 rounded-full -translate-x-32 -translate-y-32"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.08, 0.25, 0.08],
            filter: ['blur(15px)', 'blur(30px)', 'blur(15px)']
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          style={{ y: scrollY * 0.2 }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-amber-400/15 to-yellow-400/8 rounded-full"
        />
        
        {/* Animated Grid Pattern */}
        <motion.div
          animate={{ 
            opacity: [0.02, 0.08, 0.02],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.1)_1px,transparent_0)] bg-[length:50px_50px]"
        />
        
        {/* Floating Code Symbols */}
        {['()', '{}', '[]', '=>', '&&', '||', '//', '/*'].map((symbol, i) => (
          <motion.div
            key={symbol}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.cos(i) * 15, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: 10 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute text-yellow-400/30 text-lg font-mono font-bold"
            style={{
              top: `${15 + (i * 12) % 70}%`,
              left: `${5 + (i * 10) % 90}%`,
              fontSize: `${14 + (i % 3) * 4}px`
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-4 h-4 mr-2" />
                </motion.div>
                JavaScript {t.developer}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                JavaScript <motion.span 
                  className="text-yellow-600 dark:text-yellow-400"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #ca8a04, #eab308, #ca8a04)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {t.developer}
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t.description}
              </motion.p>
              
              {/* Stats with staggered animation */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: '7', label: t.months },
                  { value: '40+', label: t.students },
                  { value: '95%', label: t.success }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-yellow-200 dark:border-yellow-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-700/30 shadow-lg max-w-md mx-auto">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {language === 'ru' ? 'Стоимость обучения' : 'Оқу құны'}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl text-gray-500 dark:text-gray-400 line-through">
                      30 000 ₸
                    </span>
                    <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                      24 000 ₸
                    </span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'ru' ? 'Скидка 20%' : '20% жеңілдік'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {language === 'ru' ? '/ месяц' : '/ ай'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const message = language === 'ru' 
                    ? 'Привет! Хочу записаться на курс JavaScript разработчик в CodeMastersPRO. Можете рассказать подробнее?'
                    : 'Сәлем! CodeMastersPRO-та JavaScript бағдарламашы курсына тіркелгім келеді. Толығырақ айта аласыз ба?';
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {t.enroll}
                </motion.span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.whatYouWillLearn}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.featuresDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-yellow-100 dark:hover:bg-gray-700 transition-all duration-300 border border-yellow-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
              >
                <CheckCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-3" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.curriculum}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.curriculumDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.curriculumModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.whyJavaScript}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.whyJavaScriptDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-yellow-50 dark:bg-gray-800 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Globe className="w-16 h-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.versatility}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.versatilityDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-yellow-50 dark:bg-gray-800 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="w-16 h-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.highDemand}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.highDemandDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-yellow-50 dark:bg-gray-800 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Award className="w-16 h-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Большое сообщество</h3>
              <p className="text-gray-600 dark:text-gray-300">Множество библиотек, фреймворков и готовых решений</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">{t.readyToBecome}</h2>
                          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {t.readyToBecomeDesc}
              </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-yellow-600 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на курс JavaScript разработчик в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?'
                  : 'Сәлем! CodeMastersPRO-та JavaScript бағдарламашы курсына тіркелгім келеді. Бағдарлама және құны туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </section>
              <CourseFloatingNav 
                language={language} 
                courseColor="bg-yellow-600" 
                courseName={`JavaScript ${t.developer}`}
              />
    </div>
  )
}
