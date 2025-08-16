'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, GraduationCap, Briefcase, Clock, Target } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  title: 'Для кого наши курсы',
  subtitle: 'Программирование доступно каждому',
  backButton: 'Назад',
  sections: {
    students: {
      title: 'Школьники',
      subtitle: 'Начните свой путь в IT с ранних лет',
      description: 'Наши курсы специально адаптированы для школьников, помогая развить логическое мышление и получить практические навыки программирования.',
      benefits: [
        'Развитие логического мышления',
        'Подготовка к ЕНТ по информатике',
        'Практические проекты',
        'Современные технологии',
        'Гибкий график занятий',
        'Поддержка наставников'
      ],
      ageGroups: [
        { range: '10-13 лет', description: 'Основы программирования, логика, алгоритмы' },
        { range: '14-16 лет', description: 'Python, веб-разработка, подготовка к ЕНТ' },
        { range: '17-18 лет', description: 'Продвинутые технологии, проектная работа' }
      ]
    },
    adults: {
      title: 'Взрослые',
      subtitle: 'Смените профессию или повысьте квалификацию',
      description: 'Никогда не поздно начать изучать программирование. Наши курсы помогут вам освоить новую профессию или улучшить существующие навыки.',
      benefits: [
        'Смена профессии в IT',
        'Повышение квалификации',
        'Удаленная работа',
        'Высокая зарплата',
        'Гибкий график',
        'Практические навыки'
      ],
      categories: [
        { name: 'Новички', description: 'Без опыта в программировании' },
        { name: 'Специалисты', description: 'Хотят освоить новые технологии' },
        { name: 'Менеджеры', description: 'Понимание IT для управления проектами' }
      ]
    }
  },
  features: {
    title: 'Почему выбирают нас',
    items: [
      {
        icon: Target,
        title: 'Индивидуальный подход',
        description: 'Программа адаптируется под ваш уровень и цели'
      },
      {
        icon: Clock,
        title: 'Гибкий график',
        description: 'Занятия в удобное для вас время'
      },
      {
        icon: Users,
        title: 'Опытные преподаватели',
        description: 'Практикующие специалисты с опытом преподавания'
      },
      {
        icon: GraduationCap,
        title: 'Практические проекты',
        description: 'Реальные задачи и проекты для портфолио'
      }
    ]
  },
  cta: {
    title: 'Готовы начать?',
    subtitle: 'Запишитесь на бесплатное пробное занятие',
    button: 'Записаться на пробное занятие'
  }
}

export default function AudiencePage() {
  const t = translations

  const handleTrialLesson = () => {
    const message = 'Привет! Хочу записаться на пробное занятие по программированию в CMPro. Можете рассказать подробнее?';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-secondary-dark dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Audience Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Students Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-dark dark:text-white">{t.sections.students.title}</h2>
                <p className="text-secondary-dark dark:text-gray-300">{t.sections.students.subtitle}</p>
              </div>
            </div>
            
            <p className="text-secondary-dark dark:text-gray-300 mb-6">{t.sections.students.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Преимущества:</h3>
              <ul className="space-y-2">
                {t.sections.students.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-secondary-dark dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Возрастные группы:</h3>
              <div className="space-y-3">
                {t.sections.students.ageGroups.map((group, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="font-medium text-primary-dark dark:text-white">{group.range}</div>
                    <div className="text-sm text-secondary-dark dark:text-gray-300">{group.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Adults Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-dark dark:text-white">{t.sections.adults.title}</h2>
                <p className="text-secondary-dark dark:text-gray-300">{t.sections.adults.subtitle}</p>
              </div>
            </div>
            
            <p className="text-secondary-dark dark:text-gray-300 mb-6">{t.sections.adults.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Преимущества:</h3>
              <ul className="space-y-2">
                {t.sections.adults.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-secondary-dark dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Категории:</h3>
              <div className="space-y-3">
                {t.sections.adults.categories.map((category, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="font-medium text-primary-dark dark:text-white">{category.name}</div>
                    <div className="text-sm text-secondary-dark dark:text-gray-300">{category.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">
            {t.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary-dark dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary-dark dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.cta.title}</h2>
          <p className="text-lg mb-6 opacity-90">{t.cta.subtitle}</p>
          <button
            onClick={handleTrialLesson}
            className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {t.cta.button}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
