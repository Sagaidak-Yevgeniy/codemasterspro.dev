'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Award, Rocket, Target, Star } from 'lucide-react'

interface TimelineProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Наша история',
    subtitle: 'Путь развития CodeMastersPRO',
    description: 'От небольшой группы энтузиастов до ведущей школы программирования в Павлодаре',
    events: [
      {
        year: '2024',
        month: 'Январь',
        title: 'Основание школы',
        description: 'Создание CodeMastersPRO с целью обучения современным IT технологиям',
        icon: Rocket,
        achievements: ['Первые 10 студентов', 'Запуск курса Python', 'Партнерство с IT компаниями']
      },
      {
        year: '2024',
        month: 'Март',
        title: 'Расширение программ',
        description: 'Добавление курсов JavaScript и Golang в программу обучения',
        icon: Target,
        achievements: ['50+ студентов', '3 направления обучения', 'Первые выпускники']
      },
      {
        year: '2024',
        month: 'Июнь',
        title: 'Курс аналитики данных',
        description: 'Запуск специализированного курса по Data Science и аналитике',
        icon: Award,
        achievements: ['100+ студентов', '4 направления', 'Трудоустройство выпускников']
      },
      {
        year: '2024',
        month: 'Сентябрь',
        title: 'Новые достижения',
        description: 'Достижение важных вех в развитии школы программирования',
        icon: Star,
        achievements: ['150+ студентов', '95% успешных выпускников', 'Партнерская сеть']
      }
    ]
  },
  kk: {
    title: 'Біздің тарих',
    subtitle: 'CodeMastersPRO даму жолы',
    description: 'Кішкентай энтузиастар тобынан Павлодардағы жетекші бағдарламалау мектебіне дейін',
    events: [
      {
        year: '2024',
        month: 'Қаңтар',
        title: 'Мектеп негізін қалу',
        description: 'Заманауи IT технологияларын оқыту мақсатында CodeMastersPRO құрылуы',
        icon: Rocket,
        achievements: ['Алғашқы 10 студент', 'Python курсын іске қосу', 'IT компаниялармен серіктестік']
      },
      {
        year: '2024',
        month: 'Наурыз',
        title: 'Бағдарламаларды кеңейту',
        description: 'JavaScript және Golang курстарын оқу бағдарламасына қосу',
        icon: Target,
        achievements: ['50+ студент', '3 оқу бағыты', 'Алғашқы түлектер']
      },
      {
        year: '2024',
        month: 'Маусым',
        title: 'Деректер талдауы курсы',
        description: 'Data Science және талдау бойынша мамандандырылған курс іске қосу',
        icon: Award,
        achievements: ['100+ студент', '4 бағыт', 'Түлектерді жұмысқа орналастыру']
      },
      {
        year: '2024',
        month: 'Қыркүйек',
        title: 'Жаңа жетістіктер',
        description: 'Бағдарламалау мектебінің дамуындағы маңызды шегінің жетуі',
        icon: Star,
        achievements: ['150+ студент', '95% сәтті түлектер', 'Серіктестік желісі']
      }
    ]
  }
}

export default function Timeline({ language }: TimelineProps) {
  const t = translations[language]

  return (
    <section id="timeline" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 hidden lg:block origin-top"
            />
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {t.events.map((event, index) => {
                const IconComponent = event.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:space-x-8 space-y-6 lg:space-y-0`}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"
                    />
                    
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        {/* Header */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-primary-600 font-semibold">
                              {event.month} {event.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {event.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {event.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary-500 rounded-full" />
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for mobile */}
                    <div className="lg:hidden" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Будущее CodeMastersPRO' : 'CodeMastersPRO болашағы'}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {language === 'ru' 
                ? 'Мы продолжаем развиваться и планируем открыть новые направления обучения, расширить географию и стать ведущей IT школой в регионе'
                : 'Біз дамуды жалғастырамыз және жаңа оқу бағыттарын ашу, географияны кеңейту және аймақтағы жетекші IT мектебі болу жоспарларын жасаймыз'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-sm text-white/80">
                  {language === 'ru' ? 'студентов к 2025' : '2025 жылға дейін студент'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">10+</div>
                <div className="text-sm text-white/80">
                  {language === 'ru' ? 'направлений обучения' : 'оқу бағыты'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">3</div>
                <div className="text-sm text-white/80">
                  {language === 'ru' ? 'города присутствия' : 'қаладағы өкілдік'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
