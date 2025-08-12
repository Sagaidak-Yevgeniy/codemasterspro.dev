'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award, Gift } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import CourseFloatingNav from '@/components/CourseFloatingNav'
import ProgressBar from '@/components/ProgressBar'

export default function AnalyticsCourse() {
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
      developer: 'аналитик',
      description: 'Изучите аналитику данных с нуля до профессионального уровня. Освойте Python, SQL, машинное обучение и станьте востребованным аналитиком данных.',
      months: 'месяцев',
      students: 'студентов',
      success: 'успешность',
      enroll: 'Записаться на курс',
      whatYouWillLearn: 'Что вы изучите',
      featuresDescription: 'Полный стек технологий для современной аналитики данных',
      curriculum: 'Программа обучения',
      curriculumDescription: '6 месяцев интенсивного обучения с практическими проектами',
      whyAnalytics: 'Почему аналитика данных?',
      whyAnalyticsDescription: 'Одна из самых быстрорастущих областей в IT',
      highSalary: 'Высокая зарплата',
      highSalaryDesc: 'Аналитики данных получают одни из самых высоких зарплат',
      growingField: 'Растущая область',
      growingFieldDesc: 'Постоянно растущий спрос на специалистов по данным',
      diverseOpportunities: 'Разнообразные возможности',
      diverseOpportunitiesDesc: 'Работа в различных отраслях и компаниях',
      readyToBecome: 'Готовы стать аналитиком данных?',
      readyToBecomeDesc: 'Присоединяйтесь к нашему курсу и начните свой путь в аналитике',
      features: [
        'Python для анализа данных',
        'Pandas и NumPy',
        'Машинное обучение',
        'Визуализация данных',
        'SQL и базы данных',
        'Статистический анализ',
        'Deep Learning',
        'Big Data технологии'
      ],
      curriculumModules: [
        {
          module: 'Модуль 1: Основы Python',
          topics: ['Синтаксис Python', 'Структуры данных', 'Функции и классы', 'Работа с файлами']
        },
        {
          module: 'Модуль 2: Анализ данных',
          topics: ['Pandas библиотека', 'NumPy массивы', 'Очистка данных', 'Исследовательский анализ']
        },
        {
          module: 'Модуль 3: Визуализация',
          topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Интерактивные графики']
        },
        {
          module: 'Модуль 4: SQL и базы данных',
          topics: ['SQL запросы', 'PostgreSQL', 'Оптимизация', 'ETL процессы']
        },
        {
          module: 'Модуль 5: Машинное обучение',
          topics: ['Scikit-learn', 'Алгоритмы ML', 'Валидация моделей', 'Feature Engineering']
        },
        {
          module: 'Модуль 6: Проект',
          topics: ['Полный анализ данных', 'Портфолио проектов', 'Подготовка к работе', 'Презентация результатов']
        }
      ]
    },
    kk: {
      backToCourses: 'Курстарға қайту',
      developer: 'талдаушы',
      description: 'Деректер талдауын нөлден кәсіби деңгейге дейін үйреніңіз. Python, SQL, машиналық оқыту меңгеріп, сұранысты деректер талдаушысы болыңыз.',
      months: 'ай',
      students: 'студент',
      success: 'сәттілік',
      enroll: 'Курсқа тіркелу',
      whatYouWillLearn: 'Сіз не үйренесіз',
      featuresDescription: 'Заманауи деректер талдауының толық технологиялық стекі',
      curriculum: 'Оқу бағдарламасы',
      curriculumDescription: 'Практикалық жобалармен 6 айлық интенсивті оқу',
      whyAnalytics: 'Неге деректер талдауы?',
      whyAnalyticsDescription: 'IT-дегі ең жылдам өсетін салалардың бірі',
      highSalary: 'Жоғары жалақы',
      highSalaryDesc: 'Деректер талдаушылары ең жоғары жалақылардың бірін алады',
      growingField: 'Өсетін сала',
      growingFieldDesc: 'Деректер бойынша мамандарға үздіксіз өсетін сұраныс',
      diverseOpportunities: 'Әртүрлі мүмкіндіктер',
      diverseOpportunitiesDesc: 'Әртүрлі салалар мен компанияларда жұмыс',
      readyToBecome: 'Деректер талдаушысы болуға дайынсыз ба?',
      readyToBecomeDesc: 'Біздің курсқа қосылыңыз және талдаудағы жолыңызды бастаңыз',
      features: [
        'Деректер талдауы үшін Python',
        'Pandas және NumPy',
        'Машиналық оқыту',
        'Деректерді көрсету',
        'SQL және дерекқорлар',
        'Статистикалық талдау',
        'Deep Learning',
        'Big Data технологиялары'
      ],
      curriculumModules: [
        {
          module: 'Модуль 1: Python негіздері',
          topics: ['Python синтаксисі', 'Деректер құрылымы', 'Функциялар және класстар', 'Файлдармен жұмыс']
        },
        {
          module: 'Модуль 2: Деректер талдауы',
          topics: ['Pandas кітапханасы', 'NumPy массивтері', 'Деректерді тазалау', 'Зерттеу талдауы']
        },
        {
          module: 'Модуль 3: Көрсету',
          topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Интерактивті графиктер']
        },
        {
          module: 'Модуль 4: SQL және дерекқорлар',
          topics: ['SQL сұраулары', 'PostgreSQL', 'Оңтайландыру', 'ETL процестері']
        },
        {
          module: 'Модуль 5: Машиналық оқыту',
          topics: ['Scikit-learn', 'ML алгоритмдері', 'Модельдерді тексеру', 'Feature Engineering']
        },
        {
          module: 'Модуль 6: Жоба',
          topics: ['Толық деректер талдауы', 'Жобалар портфолиосы', 'Жұмысқа дайындық', 'Нәтижелерді көрсету']
        }
      ]
    }
  }

  const t = translations[language]

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ProgressBar />
      
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
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
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-xl"
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
                className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Database className="w-4 h-4 mr-2" />
                </motion.div>
                Аналитик данных
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Аналитик <motion.span 
                  className="text-purple-600 dark:text-purple-400"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #9333ea, #a855f7, #9333ea)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  данных
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                {t.description}
              </motion.p>
              
              {/* Stats with staggered animation */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: '6', label: t.months },
                  { value: '20+', label: t.students },
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
                    className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-purple-200 dark:border-purple-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
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
                      className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
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
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const message = language === 'ru' 
                    ? 'Привет! Хочу записаться на курс Аналитика данных в CodeMastersPRO. Можете рассказать подробнее?'
                    : 'Сәлем! CodeMastersPRO-та деректер талдауы курсына тіркелгім келеді. Толығырақ айта аласыз ба?';
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
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
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
                className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-800"
              >
                <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3" />
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
      <section id="benefits" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.whyAnalytics}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.whyAnalyticsDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Database className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.highSalary}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.highSalaryDesc}</p>
            </motion.div>

                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               viewport={{ once: true }}
               className="text-center"
             >
               <Gift className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Принятие решений</h3>
               <p className="text-gray-600 dark:text-gray-300">Помогаете компаниям принимать обоснованные решения на основе данных</p>
             </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Будущее технологий</h3>
              <p className="text-gray-600 dark:text-gray-300">AI и машинное обучение - это будущее всех отраслей</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700">
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
              className="bg-white text-purple-600 dark:bg-gray-100 dark:text-purple-700 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на курс Аналитика данных в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?'
                  : 'Сәлем! CodeMastersPRO-та деректер талдауы курсына тіркелгім келеді. Бағдарлама және құны туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {t.enroll}
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <CourseFloatingNav 
        language={language} 
        courseColor="bg-purple-600" 
        courseName="Аналитик данных"
      />
    </div>
  )
}
