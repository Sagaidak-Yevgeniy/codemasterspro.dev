'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import FloatingNav from '@/components/FloatingNav'
import ProgressBar from '@/components/ProgressBar'

export default function GolangCourse() {
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
      description: 'Изучите Go с нуля до создания высокопроизводительных приложений. Освойте микросервисы, контейнеризацию и станьте востребованным Go разработчиком.',
      months: 'месяцев',
      students: 'студентов',
      success: 'успешность',
      enroll: 'Записаться на курс',
      features: [
        'Goroutines и каналы',
        'Микросервисная архитектура',
        'REST API разработка',
        'Docker контейнеризация',
        'Базы данных',
        'Тестирование',
        'CI/CD пайплайны',
        'Облачные сервисы'
      ],
      whatYouWillLearn: 'Что вы изучите',
      featuresDescription: 'Современные технологии для высокопроизводительной разработки',
      curriculum: 'Программа обучения',
      curriculumDescription: '5 месяцев интенсивного обучения с фокусом на микросервисы',
      whyGo: 'Почему Go?',
      whyGoDescription: 'Язык программирования для высоконагруженных систем',
      highPerformance: 'Высокая производительность',
      highPerformanceDesc: 'Go обеспечивает отличную производительность и эффективность',
      concurrency: 'Параллелизм',
      concurrencyDesc: 'Встроенная поддержка горутин и каналов',
      simplicity: 'Простота',
      simplicityDesc: 'Чистый и понятный синтаксис, быстрая компиляция',
      readyToBecome: 'Готовы стать Go разработчиком?',
      readyToBecomeDesc: 'Присоединяйтесь к нашему курсу и начните свой путь в Go разработке',
      curriculumModules: [
        {
          module: 'Модуль 1: Основы Go',
          topics: ['Синтаксис и типы данных', 'Функции и методы', 'Структуры и интерфейсы', 'Обработка ошибок']
        },
        {
          module: 'Модуль 2: Параллелизм',
          topics: ['Goroutines', 'Каналы', 'Select', 'Синхронизация']
        },
        {
          module: 'Модуль 3: Веб-разработка',
          topics: ['HTTP серверы', 'REST API', 'Middleware', 'Роутинг']
        },
        {
          module: 'Модуль 4: Базы данных',
          topics: ['SQL и GORM', 'NoSQL', 'Кэширование', 'Миграции']
        },
        {
          module: 'Модуль 5: Микросервисы',
          topics: ['Архитектура', 'gRPC', 'Docker', 'Kubernetes']
        },
        {
          module: 'Модуль 6: Проект',
          topics: ['Полноценное приложение', 'Деплой', 'Мониторинг']
        }
      ]
    },
    kk: {
      backToCourses: 'Курстарға қайту',
      developer: 'Developer',
      description: 'Go-ды нөлден жоғары өнімді қосымшалар жасауға дейін үйреніңіз. Микросервистер, контейнеризация меңгеріп, сұранысты Go бағдарламашысы болыңыз.',
      months: 'ай',
      students: 'студент',
      success: 'сәттілік',
      enroll: 'Курсқа тіркелу',
      features: [
        'Goroutines және каналдар',
        'Микросервистік архитектура',
        'REST API даму',
        'Docker контейнеризация',
        'Дерекқорлар',
        'Тестілеу',
        'CI/CD пайплайндар',
        'Бұлттық сервистер'
      ],
      whatYouWillLearn: 'Сіз не үйренесіз',
      featuresDescription: 'Жоғары өнімді даму үшін заманауи технологиялар',
      curriculum: 'Оқу бағдарламасы',
      curriculumDescription: 'Микросервистерге бағытталған 5 айлық интенсивті оқу',
      whyGo: 'Неге Go?',
      whyGoDescription: 'Жоғары жүктемелі жүйелер үшін бағдарламалау тілі',
      highPerformance: 'Жоғары өнімділік',
      highPerformanceDesc: 'Go керемет өнімділік пен тиімділікті қамтамасыз етеді',
      concurrency: 'Параллелизм',
      concurrencyDesc: 'Горутиндер мен каналдардың кіріктірілген қолдауы',
      simplicity: 'Қарапайымдылық',
      simplicityDesc: 'Таза және түсінікті синтаксис, жылдам компиляция',
      readyToBecome: 'Go бағдарламашысы болуға дайынсыз ба?',
      readyToBecomeDesc: 'Біздің курсқа қосылыңыз және Go дамуындағы жолыңызды бастаңыз',
      curriculumModules: [
        {
          module: 'Модуль 1: Go негіздері',
          topics: ['Синтаксис және деректер типтері', 'Функциялар және әдістер', 'Құрылымдар және интерфейстер', 'Қателерді өңдеу']
        },
        {
          module: 'Модуль 2: Параллелизм',
          topics: ['Goroutines', 'Каналдар', 'Select', 'Синхронизация']
        },
        {
          module: 'Модуль 3: Веб-даму',
          topics: ['HTTP серверлер', 'REST API', 'Middleware', 'Роутинг']
        },
        {
          module: 'Модуль 4: Дерекқорлар',
          topics: ['SQL және GORM', 'NoSQL', 'Кэшлеу', 'Миграциялар']
        },
        {
          module: 'Модуль 5: Микросервистер',
          topics: ['Архитектура', 'gRPC', 'Docker', 'Kubernetes']
        },
        {
          module: 'Модуль 6: Жоба',
          topics: ['Толық қосымша', 'Орналастыру', 'Мониторинг']
        }
      ]
    }
  }

  const t = translations[language]

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
              <div className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Golang Developer
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Golang <span className="text-cyan-600">{t.developer}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t.description}
              </p>
              
                             {/* Stats */}
               <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                 <div className="text-center">
                   <div className="text-3xl font-bold text-cyan-600 mb-2">5</div>
                   <div className="text-gray-600">{t.months}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-cyan-600 mb-2">10+</div>
                   <div className="text-gray-600">{t.students}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                   <div className="text-gray-600">{t.success}</div>
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
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                 onClick={() => {
                   const message = language === 'ru' 
                     ? 'Привет! Хочу записаться на курс Golang Developer в CodeMastersPRO. Можете рассказать подробнее?'
                     : 'Сәлем! CodeMastersPRO-та Golang Developer курсына тіркелгім келеді. Толығырақ айта аласыз ба?';
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
                className="bg-cyan-50 rounded-xl p-6 text-center hover:bg-cyan-100 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
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
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whyGo}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyGoDescription}
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
              <Zap className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.highPerformance}</h3>
              <p className="text-gray-600">{t.highPerformanceDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Globe className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.concurrency}</h3>
              <p className="text-gray-600">{t.concurrencyDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.simplicity}</h3>
              <p className="text-gray-600">{t.simplicityDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
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
              className="bg-white text-cyan-600 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на курс Golang Developer в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?'
                  : 'Сәлем! CodeMastersPRO-та Golang Developer курсына тіркелгім келеді. Бағдарлама және құны туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {t.enroll}
            </motion.button>
          </motion.div>
        </div>
      </section>
      <FloatingNav language={language} />
    </div>
  )
}
