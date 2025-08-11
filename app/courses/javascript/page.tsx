'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import FloatingNav from '@/components/FloatingNav'
import ProgressBar from '@/components/ProgressBar'

export default function JavaScriptCourse() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const [mounted, setMounted] = useState(false)

  // Read language from localStorage on component mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      backToCourses: 'Назад к курсам',
      developer: 'Developer',
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
      developer: 'Developer',
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <ProgressBar />

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.backToCourses}
            </Link>
          </div>
        </div>
      </nav>



      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                JavaScript Developer
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                JavaScript <span className="text-yellow-600">Developer</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {t.description}
              </p>
              
                             {/* Stats */}
               <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                 <div className="text-center">
                   <div className="text-3xl font-bold text-yellow-600 mb-2">7</div>
                                       <div className="text-gray-600 dark:text-gray-300">{t.months}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-yellow-600 mb-2">40+</div>
                                       <div className="text-gray-600 dark:text-gray-300">{t.students}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
                                       <div className="text-gray-600 dark:text-gray-300">{t.success}</div>
                 </div>
               </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => {
                  const message = language === 'ru' 
                    ? 'Привет! Хочу записаться на курс JavaScript Developer в CodeMastersPRO. Можете рассказать подробнее?'
                    : 'Сәлем! CodeMastersPRO-та JavaScript Developer курсына тіркелгім келеді. Толығырақ айта аласыз ба?';
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                }}
              >
                <span>{t.enroll}</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </motion.button>
              

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whatYouWillLearn}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-yellow-50 rounded-xl p-6 text-center hover:bg-yellow-100 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.curriculum}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
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
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whyJavaScript}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyJavaScriptDescription}
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
              <Globe className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.versatility}</h3>
                              <p className="text-gray-600">{t.versatilityDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.highSalary}</h3>
                              <p className="text-gray-600">{t.highDemandDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Большое сообщество</h3>
              <p className="text-gray-600">Множество библиотек, фреймворков и готовых решений</p>
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
                const message = 'Привет! Хочу записаться на курс JavaScript Developer в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </section>
      <FloatingNav language={language} />
    </div>
  )
}
