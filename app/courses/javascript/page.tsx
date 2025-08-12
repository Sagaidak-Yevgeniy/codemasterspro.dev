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
      description: 'Изучите JavaScript с нуля до создания современных веб-приложений. Освойте React, Vue, Node.js и станьте востребованным фронтенд разработчиком.',
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
        'React & Vue.js фреймворки',
        'Node.js серверная разработка',
        'TypeScript типизация',
        'Next.js и Nuxt.js',
        'REST API и GraphQL',
        'Базы данных MongoDB',
        'Docker и деплой',
        'Тестирование Jest'
      ],
      curriculumModules: [
        {
          module: 'Модуль 1: Основы JavaScript',
          topics: ['Синтаксис ES6+', 'Функции и замыкания', 'Объекты и прототипы', 'Асинхронность']
        },
        {
          module: 'Модуль 2: Frontend разработка',
          topics: ['React.js', 'Hooks и компоненты', 'State management', 'Роутинг']
        },
        {
          module: 'Модуль 3: Backend разработка',
          topics: ['Node.js', 'Express.js', 'REST API', 'Middleware']
        },
        {
          module: 'Модуль 4: TypeScript',
          topics: ['Типы и интерфейсы', 'Generics', 'Декораторы', 'Строгая типизация']
        },
        {
          module: 'Модуль 5: Продвинутые технологии',
          topics: ['Next.js', 'GraphQL', 'MongoDB', 'Docker']
        },
        {
          module: 'Модуль 6: Проект',
          topics: ['Full-stack приложение', 'Деплой', 'Оптимизация', 'Подготовка к работе']
        }
      ]
    },
    kk: {
      backToCourses: 'Курстарға қайту',
      developer: 'бағдарламашы',
      description: 'JavaScript-ті нөлден заманауи веб-қосымшалар жасауға дейін үйреніңіз. React, Vue, Node.js меңгеріп, сұранысты фронтенд бағдарламашысы болыңыз.',
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
      <section className="py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ y: scrollY * 0.5 }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          style={{ y: scrollY * 0.3 }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-xl"
        />
        
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
