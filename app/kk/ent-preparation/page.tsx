'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Target, Clock, Award, Users, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  title: 'ЕНТ-ке дайындық',
  subtitle: 'Информатика бойынша жоғары балл алыңыз',
  backButton: 'Артқа',
  description: 'Біздің ЕНТ-ке дайындық курсы информатика бойынша жоғары балл алуға көмектеседі. Тәжірибелі оқытушылармен және тиімді әдістермен.',
  sections: {
    overview: {
      title: 'Курс туралы',
      description: 'ЕНТ-ке дайындық курсы информатика пәні бойынша жоғары балл алуға бағытталған. Біз теориялық білімді практикалық дағдылармен біріктіреміз.',
      features: [
        'Информатика бойынша толық дайындық',
        'ЕНТ форматтағы тесттер',
        'Жеке тәсіл',
        'Тәжірибелі оқытушылар',
        'Қателерді талдау',
        'Стратегиялар мен кеңестер'
      ]
    },
    program: {
      title: 'Оқу бағдарламасы',
      modules: [
        {
          title: 'Алгоритмдер мен логика',
          topics: ['Алгоритмдерді талдау', 'Логикалық есептер', 'Алгоритмдік ойлау', 'Кодты оқу және жазу'],
          duration: '4 апта'
        },
        {
          title: 'Бағдарламалау тілдері',
          topics: ['Python негіздері', 'Синтаксис', 'Деректер типтері', 'Функциялар мен циклдер'],
          duration: '6 апта'
        },
        {
          title: 'Деректер қоры',
          topics: ['SQL негіздері', 'Сұраулар', 'Деректер құрылымы', 'Нормализация'],
          duration: '3 апта'
        },
        {
          title: 'Желілер мен интернет',
          topics: ['Интернет протоколдары', 'Веб-технологиялар', 'Қауіпсіздік', 'Байланыс'],
          duration: '3 апта'
        }
      ]
    },
    practice: {
      title: 'Практикалық жұмыс',
      description: 'Әр модульден кейін студенттер ЕНТ форматтағы тесттерді тапсырады және қателерін талдайды.',
      benefits: [
        'ЕНТ форматтағы тесттер',
        'Нақты уақытта тапсыру',
        'Егжей-тегжейлі талдау',
        'Қателерді түзету',
        'Стратегияларды жақсарту'
      ]
    }
  },
  teachers: {
    title: 'Оқытушылар',
    description: 'Біздің оқытушылар информатика саласындағы жоғары білікті мамандар.',
    features: [
      'Информатика саласындағы жоғары білім',
      'ЕНТ-ке дайындық тәжірибесі',
      'Жоғары нәтижелер',
      'Жеке тәсіл'
    ]
  },
  results: {
    title: 'Нәтижелер',
    description: 'Біздің студенттердің орташа баллы:',
    stats: [
      { label: 'Орташа балл', value: '85+', description: 'Информатика бойынша' },
      { label: 'Жоғары балл', value: '95+', description: 'Ең жақсы студенттер' },
      { label: 'Қанағаттану', value: '98%', description: 'Студенттердің' }
    ]
  },
  cta: {
    title: 'ЕНТ-ке дайындықты бастаңыз',
    subtitle: 'Тегін консультацияға тіркеліңіз',
    button: 'Консультацияға тіркелу'
  }
}

export default function EntPreparationPage() {
  const t = translations

  const handleConsultation = () => {
    const message = 'Сәлем! ЕНТ-ке дайындық курсы туралы консультация алғым келеді. Толығырақ айта аласыз ба?';
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
          <p className="text-secondary-dark dark:text-gray-400 mt-4 max-w-4xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark dark:text-white">{t.sections.overview.title}</h2>
            </div>
          </div>
          
          <p className="text-secondary-dark dark:text-gray-300 mb-6">{t.sections.overview.description}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.sections.overview.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-secondary-dark dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Program Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">
            {t.sections.program.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.sections.program.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-white">{module.title}</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-secondary-dark dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t.sections.practice.title}</h2>
            </div>
          </div>
          
          <p className="mb-6 opacity-90">{t.sections.practice.description}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.sections.practice.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Teachers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark dark:text-white">{t.teachers.title}</h2>
              <p className="text-secondary-dark dark:text-gray-300">{t.teachers.description}</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {t.teachers.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-secondary-dark dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">
            {t.results.title}
          </h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8">
            {t.results.description}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.results.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-primary-dark dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-dark dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
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
