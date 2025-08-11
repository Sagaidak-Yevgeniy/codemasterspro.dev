'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Code, Database, Globe, Zap, CheckCircle, Play, BookOpen, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import FloatingNav from '@/components/FloatingNav'

export default function PythonCourse() {
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
      description: 'Изучите Python с нуля до профессионального уровня. Создавайте веб-приложения, API, автоматизируйте процессы и станьте востребованным разработчиком.',
      months: 'месяцев',
      students: 'студентов',
      success: 'успешность',
      enroll: 'Записаться на курс',
      features: [
        'Django & Flask фреймворки',
        'REST API разработка',
        'Базы данных PostgreSQL',
        'Автоматизация процессов',
        'Веб-скрапинг',
        'Машинное обучение',
        'Docker контейнеризация',
        'Git система контроля версий'
      ],
      whatYouWillLearn: 'Что вы изучите',
      featuresDescription: 'Полный стек технологий для современной Python разработки',
      curriculum: 'Программа обучения',
      curriculumDescription: '6 месяцев интенсивного обучения с практическими проектами',
      whyPython: 'Почему Python?',
      whyPythonDescription: 'Один из самых популярных и востребованных языков программирования',
      highSalary: 'Высокая зарплата',
      highSalaryDesc: 'Python разработчики получают одни из самых высоких зарплат в IT',
      versatility: 'Универсальность',
      versatilityDesc: 'Веб-разработка, AI, автоматизация, анализ данных',
      easyToLearn: 'Простота изучения',
      easyToLearnDesc: 'Читаемый синтаксис делает Python идеальным для начинающих',
      readyToBecome: 'Готовы стать Python разработчиком?',
      readyToBecomeDesc: 'Присоединяйтесь к нашему курсу и начните свой путь в IT уже сегодня',
      curriculumModules: [
        {
          module: 'Модуль 1: Основы Python',
          topics: ['Синтаксис и структуры данных', 'Функции и классы', 'Обработка исключений', 'Работа с файлами']
        },
        {
          module: 'Модуль 2: Веб-разработка',
          topics: ['Django фреймворк', 'Модели и ORM', 'Шаблоны и формы', 'Аутентификация']
        },
        {
          module: 'Модуль 3: API и интеграции',
          topics: ['REST API', 'JSON и XML', 'Внешние API', 'Асинхронное программирование']
        },
        {
          module: 'Модуль 4: Базы данных',
          topics: ['PostgreSQL', 'SQL запросы', 'Миграции', 'Оптимизация']
        },
        {
          module: 'Модуль 5: DevOps',
          topics: ['Docker', 'Git', 'CI/CD', 'Деплой на сервер']
        },
        {
          module: 'Модуль 6: Проект',
          topics: ['Полноценное веб-приложение', 'Портфолио', 'Подготовка к трудоустройству']
        }
      ]
    },
    kk: {
      backToCourses: 'Курстарға қайту',
      developer: 'Developer',
      description: 'Python-ды нөлден кәсіби деңгейге дейін үйреніңіз. Веб-қосымшалар, API жасаңыз, процестерді автоматтандырыңыз және сұранысты бағдарламашы болыңыз.',
      months: 'ай',
      students: 'студент',
      success: 'сәттілік',
      enroll: 'Курсқа тіркелу',
      features: [
        'Django & Flask фреймворктері',
        'REST API даму',
        'PostgreSQL дерекқорлары',
        'Процестерді автоматтандыру',
        'Веб-скрапинг',
        'Машиналық оқыту',
        'Docker контейнеризация',
        'Git нұсқаларды басқару жүйесі'
      ],
      whatYouWillLearn: 'Сіз не үйренесіз',
      featuresDescription: 'Заманауи Python дамуының толық технологиялық стекі',
      curriculum: 'Оқу бағдарламасы',
      curriculumDescription: 'Практикалық жобалармен 6 айлық интенсивті оқу',
      whyPython: 'Неге Python?',
      whyPythonDescription: 'Ең танымал және сұранысты бағдарламалау тілдерінің бірі',
      highSalary: 'Жоғары жалақы',
      highSalaryDesc: 'Python бағдарламашылары IT-де ең жоғары жалақылардың бірін алады',
      versatility: 'Әмбебаптылық',
      versatilityDesc: 'Веб-даму, AI, автоматтандыру, деректер талдауы',
      easyToLearn: 'Оқу оңайлығы',
      easyToLearnDesc: 'Оқуға оңай синтаксис Python-ды бастаушылар үшін идеалды етеді',
      readyToBecome: 'Python бағдарламашысы болуға дайынсыз ба?',
      readyToBecomeDesc: 'Біздің курсқа қосылыңыз және IT-дегі жолыңызды бүгін бастаңыз',
      curriculumModules: [
        {
          module: 'Модуль 1: Python негіздері',
          topics: ['Синтаксис және деректер құрылымы', 'Функциялар және класстар', 'Ерекше жағдайларды өңдеу', 'Файлдармен жұмыс']
        },
        {
          module: 'Модуль 2: Веб-даму',
          topics: ['Django фреймворк', 'Модельдер және ORM', 'Үлгілер және формалар', 'Аутентификация']
        },
        {
          module: 'Модуль 3: API және интеграциялар',
          topics: ['REST API', 'JSON және XML', 'Сыртқы API', 'Асинхронды бағдарламалау']
        },
        {
          module: 'Модуль 4: Дерекқорлар',
          topics: ['PostgreSQL', 'SQL сұраулар', 'Миграциялар', 'Оңтайландыру']
        },
        {
          module: 'Модуль 5: DevOps',
          topics: ['Docker', 'Git', 'CI/CD', 'Серверге орналастыру']
        },
        {
          module: 'Модуль 6: Жоба',
          topics: ['Толық веб-қосымша', 'Портфолио', 'Жұмысқа орналасуға дайындық']
        }
      ]
    }
  }

  const t = translations[language]

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800">

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
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Python Developer
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Python <span className="text-emerald-600">{t.developer}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
                  <div className="text-gray-600">{t.months}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">30+</div>
                  <div className="text-gray-600">{t.students}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => {
                  const message = 'Привет! Хочу записаться на курс Python Developer в CodeMastersPRO. Можете рассказать подробнее?';
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
                className="bg-emerald-50 rounded-xl p-6 text-center hover:bg-emerald-100 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whyPython}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyPythonDescription}
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
              <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
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
              <Globe className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.versatility}</h3>
              <p className="text-gray-600">{t.versatilityDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.easyToLearn}</h3>
              <p className="text-gray-600">{t.easyToLearnDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
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
              className="bg-white text-emerald-600 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = 'Привет! Хочу записаться на курс Python Developer в CodeMastersPRO. Можете рассказать подробнее о программе и стоимости?';
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
