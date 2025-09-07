'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, GraduationCap, Briefcase, Clock, Target } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  title: 'Курстар кімдерге арналған',
  subtitle: 'Бағдарламалау әркімге қолжетімді',
  backButton: 'Артқа',
  sections: {
    students: {
      title: 'Мектеп оқушылары',
      subtitle: 'IT саласындағы жолыңызды ерте бастаңыз',
      description: 'Біздің курсар мектеп оқушыларына арналған, логикалық ойлауды дамытуға және бағдарламалаудың практикалық дағдыларын алуға көмектеседі.',
      benefits: [
        'Логикалық ойлауды дамыту',
        'Информатика бойынша ЕНТ-ке дайындық',
        'Практикалық жобалар',
        'Заманауи технологиялар',
        'Икемді сабақ кестесі',
        'Нұсқаушылардың қолдауы'
      ],
      ageGroups: [
        { range: '10-13 жас', description: 'Бағдарламалаудың негіздері, логика, алгоритмдер' },
        { range: '14-16 жас', description: 'Python, веб-даму, ЕНТ-ке дайындық' },
        { range: '17-18 жас', description: 'Жоғары технологиялар, жоба жұмысы' }
      ]
    },
    adults: {
      title: 'Ересектер',
      subtitle: 'Кәсіпті өзгертіңіз немесе біліктілікті арттырыңыз',
      description: 'Бағдарламалауды үйренуге ешқашан кеш емес. Біздің курсар жаңа кәсіпті меңгеруге немесе қолдағы дағдыларды жақсартуға көмектеседі.',
      benefits: [
        'IT-де кәсіп өзгерту',
        'Біліктілікті арттыру',
        'Қашықтан жұмыс',
        'Жоғары жалақы',
        'Икемді кесте',
        'Практикалық дағдылар'
      ],
      categories: [
        { name: 'Жаңадан бастаушылар', description: 'Бағдарламалауда тәжірибесіз' },
        { name: 'Сарапшылар', description: 'Жаңа технологияларды меңгергісі келеді' },
        { name: 'Менеджерлер', description: 'Жобаларды басқару үшін IT түсінігі' }
      ]
    }
  },
  features: {
    title: 'Неліктен бізді таңдайды',
    items: [
      {
        icon: Target,
        title: 'Жеке тәсіл',
        description: 'Бағдарлама сіздің деңгейіңізге және мақсаттарыңызға бейімделеді'
      },
      {
        icon: Clock,
        title: 'Икемді кесте',
        description: 'Сізге ыңғайлы уақытта сабақтар'
      },
      {
        icon: Users,
        title: 'Тәжірибелі оқытушылар',
        description: 'Оқыту тәжірибесі бар практик сарапшылар'
      },
      {
        icon: GraduationCap,
        title: 'Практикалық жобалар',
        description: 'Портфолио үшін нақты тапсырмалар мен жобалар'
      }
    ]
  },
  cta: {
    title: 'Бастауға дайынсыз ба?',
    subtitle: 'Тегін сынақ сабағына тіркеліңіз',
    button: 'Сынақ сабағына тіркелу'
  }
}

export default function AudiencePage() {
  const t = translations

  const handleTrialLesson = () => {
    const message = 'Сәлем! CMPro-да бағдарламалау бойынша сынақ сабағына тіркелгім келеді. Толығырақ айта аласыз ба?';
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
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Артықшылықтар:</h3>
              <ul className="space-y-2">
                {t.sections.students.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-secondary-dark dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Жастық топтар:</h3>
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
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Артықшылықтар:</h3>
              <ul className="space-y-2">
                {t.sections.adults.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-secondary-dark dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-dark dark:text-white mb-3">Санаттар:</h3>
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
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button
              onClick={handleTrialLesson}
              className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {t.cta.button}
            </button>
            
            {/* Telegram Bot Button */}
            <button
              onClick={() => {
                const message = 'Сәлем! CodeMastersPRO Telegram ботын оқу басқару үшін қосқым келеді. Көмектесе аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://t.me/CodeMastersPRO_bot?start=${encodedMessage}`, '_blank');
              }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>🤖 Telegram бот</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
