'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import FloatingNav from '@/components/FloatingNav'

export default function AnalyticsCourse() {
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
      developer: 'Analyst',
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
      developer: 'Analyst',
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">

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
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Data Analytics
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Аналитика <span className="text-purple-600">данных</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t.description}
              </p>
              
                             {/* Stats */}
               <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                 <div className="text-center">
                   <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                   <div className="text-gray-600">{t.months}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                   <div className="text-gray-600">{t.students}</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
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
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => {
                  const message = language === 'ru' 
                    ? 'Привет! Хочу записаться на курс Аналитика данных в CodeMastersPRO. Можете рассказать подробнее?'
                    : 'Сәлем! CodeMastersPRO-та деректер талдауы курсына тіркелгім келеді. Толығырақ айта аласыз ба?';
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
                className="bg-purple-50 rounded-xl p-6 text-center hover:bg-purple-100 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
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
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whyAnalytics}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Database className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.highSalary}</h3>
                              <p className="text-gray-600">{t.highSalaryDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Принятие решений</h3>
              <p className="text-gray-600">Помогаете компаниям принимать обоснованные решения на основе данных</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Будущее технологий</h3>
              <p className="text-gray-600">AI и машинное обучение - это будущее всех отраслей</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
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
              className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = 'Привет! Хочу записаться на курс Аналитика данных в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?';
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
