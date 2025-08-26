'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Briefcase, TrendingUp, DollarSign, Globe, Clock, Users, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const translations = {
  title: 'Карьера в IT',
  subtitle: 'Постройте успешную карьеру в сфере информационных технологий',
  backButton: 'Назад',
  hero: {
    title: 'IT - самая перспективная отрасль',
    description: 'Информационные технологии развиваются стремительно, создавая множество возможностей для карьерного роста и высокого дохода.',
    stats: [
      { number: '15%', label: 'рост зарплат' },
      { number: '500K+', label: 'вакансий' },
      { number: '95%', label: 'удаленная работа' }
    ]
  },
  sections: {
    overview: {
      title: 'Почему IT - лучший выбор для карьеры',
      description: 'Сфера информационных технологий предлагает уникальные возможности для профессионального развития',
      reasons: [
        'Высокие зарплаты и быстрый карьерный рост',
        'Возможность работать удаленно из любой точки мира',
        'Постоянное развитие и изучение новых технологий',
        'Высокий спрос на специалистов',
        'Гибкий график работы',
        'Возможность работать в международных компаниях'
      ]
    },
    positions: {
      title: 'Популярные IT-профессии',
      description: 'Выберите направление, которое подходит именно вам',
      jobs: [
        {
          title: 'Frontend Developer',
          description: 'Разработка пользовательских интерфейсов',
          salary: 'от 300,000 ₸',
          skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js'],
          demand: 'Высокий'
        },
        {
          title: 'Backend Developer',
          description: 'Разработка серверной части приложений',
          salary: 'от 400,000 ₸',
          skills: ['Python', 'Node.js', 'Java', 'Databases'],
          demand: 'Очень высокий'
        },
        {
          title: 'Full Stack Developer',
          description: 'Полный цикл разработки приложений',
          salary: 'от 500,000 ₸',
          skills: ['Frontend + Backend', 'DevOps', 'Architecture'],
          demand: 'Очень высокий'
        },
        {
          title: 'Data Scientist',
          description: 'Анализ данных и машинное обучение',
          salary: 'от 600,000 ₸',
          skills: ['Python', 'Statistics', 'ML', 'SQL'],
          demand: 'Высокий'
        },
        {
          title: 'DevOps Engineer',
          description: 'Автоматизация процессов разработки',
          salary: 'от 450,000 ₸',
          skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud'],
          demand: 'Высокий'
        },
        {
          title: 'QA Engineer',
          description: 'Тестирование и обеспечение качества',
          salary: 'от 250,000 ₸',
          skills: ['Manual Testing', 'Automation', 'Selenium'],
          demand: 'Средний'
        }
      ]
    },
    roadmap: {
      title: 'Карьерный путь в IT',
      description: 'Пошаговый план развития от новичка до профессионала',
      stages: [
        {
          title: 'Этап 1: Основы',
          duration: '3-6 месяцев',
          description: 'Изучение основ программирования и выбранного языка',
          tasks: ['Изучить основы программирования', 'Освоить один язык программирования', 'Создать первые проекты']
        },
        {
          title: 'Этап 2: Специализация',
          duration: '6-12 месяцев',
          description: 'Углубленное изучение выбранного направления',
          tasks: ['Изучить фреймворки и библиотеки', 'Работать с базами данных', 'Изучить Git и командную строку']
        },
        {
          title: 'Этап 3: Практика',
          duration: '6-12 месяцев',
          description: 'Получение реального опыта разработки',
          tasks: ['Создать портфолио проектов', 'Участвовать в open source', 'Найти первую работу или стажировку']
        },
        {
          title: 'Этап 4: Профессионал',
          duration: '1-2 года',
          description: 'Развитие как опытного специалиста',
          tasks: ['Углубить знания архитектуры', 'Изучить DevOps практики', 'Развивать soft skills']
        },
        {
          title: 'Этап 5: Эксперт',
          duration: '2+ года',
          description: 'Достижение уровня эксперта в своей области',
          tasks: ['Менторинг других разработчиков', 'Участие в архитектурных решениях', 'Выступление на конференциях']
        }
      ]
    },
    skills: {
      title: 'Ключевые навыки для IT-специалиста',
      description: 'Технические и soft skills, необходимые для успешной карьеры',
      categories: [
        {
          title: 'Технические навыки',
          skills: [
            'Знание языков программирования',
            'Работа с базами данных',
            'Версионирование кода (Git)',
            'Понимание архитектуры приложений',
            'Знание алгоритмов и структур данных',
            'Работа с API и веб-сервисами'
          ]
        },
        {
          title: 'Soft Skills',
          skills: [
            'Коммуникация и работа в команде',
            'Решение проблем и критическое мышление',
            'Управление временем и приоритетами',
            'Постоянное обучение и адаптация',
            'Аналитическое мышление',
            'Креативность и инновационность'
          ]
        },
        {
          title: 'Дополнительные навыки',
          skills: [
            'Английский язык (B2+)',
            'Понимание бизнес-процессов',
            'Работа с Agile/Scrum методологиями',
            'Управление проектами',
            'Презентационные навыки',
            'Сетевое взаимодействие'
          ]
        }
      ]
    },
    companies: {
      title: 'Топ IT-компаний в Казахстане',
      description: 'Компании, где можно построить успешную карьеру',
      list: [
        {
          name: 'Kaspi.kz',
          description: 'Крупнейший финтех в Казахстане',
          benefits: ['Высокие зарплаты', 'Современные технологии', 'Карьерный рост']
        },
        {
          name: 'Chocofamily',
          description: 'E-commerce и digital решения',
          benefits: ['Интересные проекты', 'Гибкий график', 'Молодая команда']
        },
        {
          name: 'DAR',
          description: 'Разработка мобильных приложений',
          benefits: ['Международные проекты', 'Удаленная работа', 'Обучение']
        },
        {
          name: 'Zero.kz',
          description: 'Digital агентство',
          benefits: ['Креативные проекты', 'Разнообразные технологии', 'Быстрый рост']
        },
        {
          name: 'Jusan',
          description: 'Банковский сектор',
          benefits: ['Стабильность', 'Социальный пакет', 'Развитие']
        }
      ]
    }
  },
  cta: {
    title: 'Начните свою IT-карьеру сегодня',
    subtitle: 'Получите консультацию по выбору направления и плану развития',
    button: 'Получить консультацию'
  }
}

export default function CareerItPage() {
  const t = translations

  const handleConsultation = () => {
    const message = 'Привет! Хочу получить консультацию по построению карьеры в IT в CMPro. Можете рассказать подробнее?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container-custom px-4 py-4">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>{t.backButton}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-secondary-dark dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {t.hero.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                <div className="text-sm text-secondary-dark dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white mb-4">{t.sections.overview.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 mb-6">{t.sections.overview.description}</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {t.sections.overview.reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-dark dark:text-gray-300">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Positions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.positions.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.positions.description}</p>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {t.sections.positions.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-primary-dark dark:text-white text-lg">{job.title}</h3>
                    <p className="text-sm text-secondary-dark dark:text-gray-300">{job.description}</p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    job.demand === 'Очень высокий' 
                      ? 'bg-red-100 text-red-700' 
                      : job.demand === 'Высокий'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {job.demand}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-lg font-bold text-primary-600 mb-2">
                    <DollarSign className="w-5 h-5 mr-2" />
                    {job.salary}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary-dark dark:text-white mb-2">Навыки:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                                              <span key={skillIndex} className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.roadmap.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.roadmap.description}</p>
          
          <div className="space-y-6">
            {t.sections.roadmap.stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-primary-dark dark:text-white text-lg">{stage.title}</h3>
                                              <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">{stage.duration}</span>
                    </div>
                    <p className="text-secondary-dark dark:text-gray-300 mb-4">{stage.description}</p>
                    <ul className="space-y-2">
                      {stage.tasks.map((task, taskIndex) => (
                                                  <li key={taskIndex} className="flex items-start text-sm text-secondary-dark dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.skills.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.skills.description}</p>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {t.sections.skills.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-primary-dark dark:text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                                            <li key={skillIndex} className="flex items-start text-sm text-secondary-dark dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.companies.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.companies.description}</p>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {t.sections.companies.list.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-primary-dark dark:text-white text-lg mb-2">{company.name}</h3>
                                  <p className="text-secondary-dark dark:text-gray-300 mb-4">{company.description}</p>
                <div>
                                      <h4 className="font-medium text-primary-dark dark:text-white mb-2">Преимущества:</h4>
                  <ul className="space-y-1">
                    {company.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-secondary-dark dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.cta.title}</h2>
          <p className="text-lg mb-6 opacity-90">{t.cta.subtitle}</p>
          <button
            onClick={handleConsultation}
            className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {t.cta.button}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
