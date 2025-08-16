'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Briefcase, TrendingUp, DollarSign, Globe, Users, CheckCircle, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  title: 'IT-де карьера',
  subtitle: 'Программист болып жұмыс істеңіз',
  backButton: 'Артқа',
  description: 'IT саласындағы карьера - бұл жоғары жалақы, қашықтан жұмыс және даму мүмкіндіктері. Біздің курстар сізді нарыққа дайындайды.',
  sections: {
    overview: {
      title: 'IT саласы туралы',
      description: 'Информациялық технологиялар саласы әлемдегі ең жылдам өсетін салалардың бірі. Программистерге сұраныс үнемі артып келеді.',
      features: [
        'Жоғары жалақы',
        'Қашықтан жұмыс мүмкіндігі',
        'Үздіксіз даму',
        'Халықаралық мүмкіндіктер',
        'Жұмыс-өмір балансы',
        'Жобаларды таңдау еркіндігі'
      ]
    },
    careers: {
      title: 'Карьера бағыттары',
      careers: [
        {
          title: 'Веб-дамушы',
          description: 'Веб-сайттар мен қосымшалар жасау',
          skills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'Node.js', 'Python/Django'],
          salary: '300,000 - 800,000 тг',
          demand: 'Жоғары'
        },
        {
          title: 'Мобильді дамушы',
          description: 'Android және iOS қосымшалары',
          skills: ['Kotlin/Java', 'Swift', 'React Native', 'Flutter', 'Firebase'],
          salary: '400,000 - 1,000,000 тг',
          demand: 'Жоғары'
        },
        {
          title: 'Backend дамушы',
          description: 'Серверлік қосымшалар және API',
          skills: ['Python', 'Java', 'Go', 'Node.js', 'PostgreSQL/MongoDB'],
          salary: '350,000 - 900,000 тг',
          demand: 'Жоғары'
        },
        {
          title: 'Деректер аналитигі',
          description: 'Деректерді талдау және көрсеткіштер',
          skills: ['Python', 'SQL', 'Pandas', 'Tableau', 'Machine Learning'],
          salary: '400,000 - 1,200,000 тг',
          demand: 'Өте жоғары'
        }
      ]
    },
    skills: {
      title: 'Қажетті дағдылар',
      description: 'IT саласында сәтті болу үшін қажетті негізгі дағдылар:',
      technical: [
        'Бағдарламалау тілдері (Python, JavaScript, Java)',
        'Деректер қоры (SQL, NoSQL)',
        'Git және версияларды басқару',
        'API және микросервистер',
        'Контейнерлер (Docker)',
        'Cloud платформалар (AWS, Azure)'
      ],
      soft: [
        'Командада жұмыс істеу',
        'Проблемаларды шешу',
        'Үздіксіз үйрену',
        'Уақытты басқару',
        'Коммуникация',
        'Адаптивтілік'
      ]
    },
    market: {
      title: 'Нарық талдауы',
      description: 'Қазақстандағы IT нарығының көрсеткіштері:',
      stats: [
        { label: 'Орташа жалақы', value: '450,000 тг', description: 'Junior деңгейде' },
        { label: 'Жұмыс орындары', value: '15,000+', description: 'Ашық вакансиялар' },
        { label: 'Өсу қарқыны', value: '25%', description: 'Жылдық' }
      ]
    }
  },
  courses: {
    title: 'Біздің курстар',
    description: 'IT саласындағы карьераға дайындайтын курстар:',
    items: [
      {
        title: 'Python дамушы',
        duration: '6 ай',
        description: 'Python тілінде толық даму курсы',
        features: ['Web даму', 'API жасау', 'Деректер қоры', 'Django framework']
      },
      {
        title: 'JavaScript дамушы',
        duration: '5 ай',
        description: 'Веб-дамуға арналған JavaScript курсы',
        features: ['Frontend даму', 'React/Vue.js', 'Node.js', 'Full-stack даму']
      },
      {
        title: 'Мобильді даму',
        duration: '7 ай',
        description: 'Android және iOS қосымшалары',
        features: ['React Native', 'Flutter', 'App Store', 'Google Play']
      }
    ]
  },
  cta: {
    title: 'IT карьерасын бастаңыз',
    subtitle: 'Тегін консультацияға тіркеліңіз',
    button: 'Консультацияға тіркелу'
  }
}

export default function CareerItPage() {
  const t = translations

  const handleConsultation = () => {
    const message = 'Сәлем! IT саласындағы карьера туралы консультация алғым келеді. Толығырақ айта аласыз ба?';
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
              <TrendingUp className="w-6 h-6 text-white" />
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

        {/* Careers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">
            {t.sections.careers.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.sections.careers.careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-white">{career.title}</h3>
                  <span className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                    {career.demand}
                  </span>
                </div>
                <p className="text-secondary-dark dark:text-gray-300 mb-4">{career.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-dark dark:text-white mb-2">Дағдылар:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-secondary-dark dark:text-gray-400">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>{career.salary}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t.sections.skills.title}</h2>
              <p className="opacity-90">{t.sections.skills.description}</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Техникалық дағдылар:</h3>
              <ul className="space-y-2">
                {t.sections.skills.technical.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                    <span className="opacity-90">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Жұмсақ дағдылар:</h3>
              <ul className="space-y-2">
                {t.sections.skills.soft.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                    <span className="opacity-90">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Market Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark dark:text-white">{t.sections.market.title}</h2>
              <p className="text-secondary-dark dark:text-gray-300">{t.sections.market.description}</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {t.sections.market.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-primary-dark dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-dark dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white text-center mb-8">
            {t.courses.title}
          </h2>
          <p className="text-secondary-dark dark:text-gray-300 text-center mb-8">
            {t.courses.description}
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {t.courses.items.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-white">{course.title}</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <p className="text-secondary-dark dark:text-gray-300 mb-4">{course.description}</p>
                <ul className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-secondary-dark dark:text-gray-300">{feature}</span>
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
