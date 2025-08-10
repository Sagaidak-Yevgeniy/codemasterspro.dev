'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap, Clock, Users, Star, ArrowRight } from 'lucide-react'

interface CoursesProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Наши направления',
    subtitle: 'Выберите свой путь в программировании',
    courses: {
      python: {
        title: 'Python',
        subtitle: 'Веб-разработка и автоматизация',
        description: 'Изучите Django, Flask, FastAPI. Создавайте веб-приложения, API и автоматизируйте процессы.',
        duration: '6 месяцев',
        students: '30+ студентов',
        level: 'Начинающий',
        features: ['Django & Flask', 'API разработка', 'Автоматизация', 'Базы данных'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверная разработка',
        description: 'Освойте высокопроизводительный Go. Создавайте микросервисы и масштабируемые приложения.',
        duration: '5 месяцев',
        students: '10+ студентов',
        level: 'Средний',
        features: ['Микросервисы', 'Goroutines', 'REST API', 'Docker'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд разработка',
        description: 'Изучите React, Vue, Node.js. Создавайте современные веб-приложения и интерфейсы.',
        duration: '7 месяцев',
        students: '40+ студентов',
        level: 'Начинающий',
        features: ['React & Vue', 'Node.js', 'TypeScript', 'Next.js'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Аналитика данных',
        subtitle: 'Data Science & Analytics',
        description: 'Изучите Python для анализа данных, машинное обучение и визуализацию.',
        duration: '6 месяцев',
        students: '20+ студентов',
        level: 'Средний',
        features: ['Pandas & NumPy', 'Машинное обучение', 'Визуализация', 'SQL'],
        color: 'from-purple-500 to-indigo-600',
        icon: Database,
      }
    },
    enroll: 'Записаться',
    learnMore: 'Узнать больше',
  },
  kk: {
    title: 'Біздің бағыттар',
    subtitle: 'Бағдарламалаудағы жолыңызды таңдаңыз',
    courses: {
      python: {
        title: 'Python',
        subtitle: 'Веб-даму және автоматтандыру',
        description: 'Django, Flask, FastAPI үйреніңіз. Веб-қосымшалар, API жасаңыз және процестерді автоматтандырыңыз.',
        duration: '6 ай',
        students: '150+ студент',
        level: 'Бастаушы',
        features: ['Django & Flask', 'API даму', 'Автоматтандыру', 'Дерекқорлар'],
        color: 'from-emerald-500 to-green-600',
        icon: Code,
      },
      golang: {
        title: 'Golang',
        subtitle: 'Серверлік даму',
        description: 'Жоғары өнімді Go-ны меңгеріңіз. Микросервистер мен масштабталатын қосымшалар жасаңыз.',
        duration: '5 ай',
        students: '80+ студент',
        level: 'Орташа',
        features: ['Микросервистер', 'Goroutines', 'REST API', 'Docker'],
        color: 'from-cyan-500 to-blue-500',
        icon: Zap,
      },
      javascript: {
        title: 'JavaScript',
        subtitle: 'Фронтенд даму',
        description: 'React, Vue, Node.js үйреніңіз. Заманауи веб-қосымшалар мен интерфейстер жасаңыз.',
        duration: '7 ай',
        students: '200+ студент',
        level: 'Бастаушы',
        features: ['React & Vue', 'Node.js', 'TypeScript', 'Next.js'],
        color: 'from-yellow-500 to-orange-500',
        icon: Globe,
      },
      analytics: {
        title: 'Деректер талдауы',
        subtitle: 'Data Science & Analytics',
        description: 'Деректер талдауы, машиналық оқыту және визуализация үшін Python үйреніңіз.',
        duration: '6 ай',
        students: '100+ студент',
        level: 'Орташа',
        features: ['Pandas & NumPy', 'Машиналық оқыту', 'Визуализация', 'SQL'],
        color: 'from-purple-500 to-indigo-600',
        icon: Database,
      }
    },
    enroll: 'Тіркелу',
    learnMore: 'Толығырақ',
  }
}

export default function Courses({ language }: CoursesProps) {
  const t = translations[language]

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(t.courses).map(([key, course], index) => {
            const IconComponent = course.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 flex items-center justify-center mb-4">
                        {key === 'python' ? (
                          <img 
                            src="/images/Python.png" 
                            alt="Python" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : key === 'golang' ? (
                          <img 
                            src="/images/Go.png" 
                            alt="Golang" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : key === 'javascript' ? (
                          <img 
                            src="/images/JavaScript.png" 
                            alt="JavaScript" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-white/90 text-sm">{course.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span className="text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-secondary-500" />
                        <span className="text-gray-600">{course.students}</span>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Начинающий' || course.level === 'Бастаушы'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        <Star className="w-3 h-3 mr-1" />
                        {course.level}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                        {language === 'ru' ? 'Что изучаете:' : 'Не үйренесіз:'}
                      </h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-xl"
                      onClick={() => window.open('https://wa.me/77773323676', '_blank')}
                    >
                      <span>{t.enroll}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Не можете выбрать направление?' 
                : 'Бағытты таңдай алмайсыз ба?'
              }
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Свяжитесь с нами, и мы поможем выбрать подходящий курс для ваших целей'
                : 'Бізбен байланысыңыз, мақсаттарыңызға сәйкес курс таңдауға көмектесеміз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.open('https://wa.me/77773323676', '_blank')}
            >
              {language === 'ru' ? 'Получить консультацию' : 'Кеңес алу'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
