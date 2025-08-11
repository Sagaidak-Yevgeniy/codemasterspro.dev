'use client'

import { motion } from 'framer-motion'
import { Users, Code, Award, Clock } from 'lucide-react'

interface StatsProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    stats: [
      {
        number: '100+',
        label: 'студентов',
        description: 'обучаем программированию',
        icon: Users,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        number: '4',
        label: 'направления',
        description: 'Python, Go, JS, Analytics',
        icon: Code,
        color: 'from-green-500 to-emerald-500'
      },
      {
        number: '95%',
        label: 'успешность',
        description: 'выпускников',
        icon: Award,
        color: 'from-purple-500 to-pink-500'
      },
      {
        number: '24/7',
        label: 'поддержка',
        description: 'всегда на связи',
        icon: Clock,
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  kk: {
    stats: [
      {
        number: '100+',
        label: 'студент',
        description: 'бағдарламалауды оқытамыз',
        icon: Users,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        number: '4',
        label: 'бағыт',
        description: 'Python, Go, JS, Analytics',
        icon: Code,
        color: 'from-green-500 to-emerald-500'
      },
      {
        number: '95%',
        label: 'сәттілік',
        description: 'түлектер',
        icon: Award,
        color: 'from-purple-500 to-pink-500'
      },
      {
        number: '24/7',
        label: 'қолдау',
        description: 'әрқашан байланыста',
        icon: Clock,
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
}

export default function Stats({ language }: StatsProps) {
  const t = translations[language]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {language === 'ru' ? 'Наши достижения' : 'Біздің жетістіктеріміз'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'ru' 
              ? 'Результаты, которыми мы гордимся'
              : 'Біз мақтан ететін нәтижелер'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="text-xl font-semibold mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-gray-300 text-sm">
                    {stat.description}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' 
                ? 'Готовы присоединиться к нашим успехам?' 
                : 'Біздің сәттіліктерімізге қосылуға дайынсыз ба?'
              }
            </h3>
            <p className="text-gray-300 mb-6">
              {language === 'ru'
                ? 'Начните свой путь к успеху в IT вместе с нами'
                : 'Бізбен бірге IT-дегі сәттілік жолын бастаңыз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу присоединиться к CodeMastersPRO и начать свой путь в IT'
                  : 'Сәлем! CodeMastersPRO-ға қосылып, IT жолын бастағым келеді';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Начать обучение' : 'Оқуды бастау'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
