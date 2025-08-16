'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Target, Clock, CheckCircle, Award, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

const translations = {
  title: 'Подготовка к ЕНТ',
  subtitle: 'Успешная сдача ЕНТ по информатике с нашими экспертами',
  backButton: 'Назад',
  hero: {
    title: 'Готовьтесь к ЕНТ с профессионалами',
    description: 'Наши опытные преподаватели помогут вам освоить все необходимые темы по информатике и успешно сдать ЕНТ.',
    stats: [
      { number: '95%', label: 'успешная сдача' },
      { number: '150+', label: 'студентов' },
      { number: '4', label: 'года опыта' }
    ]
  },
  sections: {
    overview: {
      title: 'Что включает подготовка к ЕНТ',
      description: 'Комплексная подготовка по всем разделам информатики, включенным в программу ЕНТ',
      topics: [
        'Основы информатики и вычислительной техники',
        'Алгоритмизация и программирование',
        'Базы данных и информационные системы',
        'Компьютерные сети и интернет',
        'Информационная безопасность',
        'Технологии обработки информации'
      ]
    },
    program: {
      title: 'Программа подготовки',
      description: 'Структурированный курс, рассчитанный на систематическую подготовку к экзамену',
      modules: [
        {
          title: 'Модуль 1: Основы информатики',
          duration: '4 недели',
          topics: ['Информация и информационные процессы', 'Системы счисления', 'Логические основы компьютеров']
        },
        {
          title: 'Модуль 2: Алгоритмизация',
          duration: '6 недель',
          topics: ['Алгоритмы и их свойства', 'Блок-схемы', 'Основы программирования на Python']
        },
        {
          title: 'Модуль 3: Программирование',
          duration: '8 недель',
          topics: ['Структуры данных', 'Алгоритмы сортировки и поиска', 'Решение задач ЕНТ']
        },
        {
          title: 'Модуль 4: Базы данных',
          duration: '4 недели',
          topics: ['Основы БД', 'SQL запросы', 'Проектирование БД']
        },
        {
          title: 'Модуль 5: Сети и безопасность',
          duration: '3 недели',
          topics: ['Компьютерные сети', 'Интернет технологии', 'Информационная безопасность']
        },
        {
          title: 'Модуль 6: Практика ЕНТ',
          duration: '5 недель',
          topics: ['Решение вариантов ЕНТ', 'Анализ ошибок', 'Стратегии сдачи экзамена']
        }
      ]
    },
    benefits: {
      title: 'Преимущества нашей подготовки',
      items: [
        {
          icon: Users,
          title: 'Опытные преподаватели',
          description: 'Преподаватели с опытом подготовки к ЕНТ и работы в IT'
        },
        {
          icon: Target,
          title: 'Индивидуальный подход',
          description: 'Программа адаптируется под ваш уровень знаний'
        },
        {
          icon: BookOpen,
          title: 'Практические задания',
          description: 'Много практики с реальными задачами ЕНТ'
        },
        {
          icon: Clock,
          title: 'Гибкий график',
          description: 'Занятия в удобное для вас время'
        },
        {
          icon: CheckCircle,
          title: 'Регулярное тестирование',
          description: 'Проверка знаний и отслеживание прогресса'
        },
        {
          icon: Award,
          title: 'Гарантия результата',
          description: 'Если не сдадите ЕНТ, вернем деньги'
        }
      ]
    },
    schedule: {
      title: 'Расписание занятий',
      description: 'Выберите удобный для вас формат обучения',
      options: [
        {
          title: 'Индивидуальные занятия',
          description: 'Персональный подход и гибкий график',
          features: ['1-2 раза в неделю', '60-90 минут', 'Индивидуальная программа', 'Гибкое время']
        },
        {
          title: 'Групповые занятия',
          description: 'Обучение в небольших группах',
          features: ['2-3 раза в неделю', '90 минут', 'Группа 4-6 человек', 'Фиксированное время']
        },
        {
          title: 'Интенсивный курс',
          description: 'Быстрая подготовка за короткий срок',
          features: ['5 раз в неделю', '120 минут', 'Ускоренная программа', 'Утренние/вечерние группы']
        }
      ]
    }
  },
  cta: {
    title: 'Начните подготовку к ЕНТ уже сегодня',
    subtitle: 'Запишитесь на бесплатную консультацию и получите план подготовки',
    button: 'Получить консультацию'
  }
}

export default function EntPreparationPage() {
  const t = translations

  const handleConsultation = () => {
    const message = 'Привет! Хочу получить консультацию по подготовке к ЕНТ по информатике в CMPro. Можете рассказать подробнее?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container-custom px-4 py-4">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>{t.backButton}</span>
          </Link>
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
            {t.sections.overview.topics.map((topic, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-dark dark:text-gray-300">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Program Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.program.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.program.description}</p>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {t.sections.program.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-primary-dark dark:text-white">{module.title}</h3>
                  <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">{module.duration}</span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-sm text-secondary-dark dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.benefits.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sections.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary-dark dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-secondary-dark dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">{t.sections.schedule.title}</h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">{t.sections.schedule.description}</p>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {t.sections.schedule.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-primary-dark dark:text-white mb-2">{option.title}</h3>
                <p className="text-sm text-secondary-dark dark:text-gray-300 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary-dark dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
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
