'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Target, 
  Users, 
  Trophy,
  Brain,
  Lightbulb,
  CheckCircle,
  Star
} from 'lucide-react'

interface MentorshipProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Менторство в информатике',
    subtitle: 'Индивидуальная помощь в изучении школьной информатики',
    description: 'Получите персональную поддержку в изучении информатики, подготовке к олимпиадам и ЕНТ от опытного преподавателя.',
    services: [
      {
        icon: BookOpen,
        title: 'Разбор школьной программы',
        description: 'Помощь в понимании сложных тем школьной информатики',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Target,
        title: 'Подготовка к ЕНТ',
        description: 'Системная подготовка к ЕНТ по информатике с разбором всех типов задач',
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Trophy,
        title: 'Олимпиадное программирование',
        description: 'Подготовка к олимпиадам по информатике и программированию',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Brain,
        title: 'Алгоритмы и структуры данных',
        description: 'Углубленное изучение алгоритмов для продвинутых школьников',
        color: 'from-orange-500 to-red-500'
      }
    ],
    benefits: [
      {
        icon: Users,
        title: 'Индивидуальный подход',
        description: 'Занятия один на один с учетом вашего уровня знаний'
      },
      {
        icon: Lightbulb,
        title: 'Практические задачи',
        description: 'Решение реальных задач и проектов для закрепления материала'
      },
      {
        icon: CheckCircle,
        title: 'Регулярная обратная связь',
        description: 'Постоянный контроль прогресса и корректировка программы'
      },
      {
        icon: Star,
        title: 'Гибкий график',
        description: 'Возможность заниматься в удобное для вас время'
      }
    ],
    cta: 'Записаться на менторство'
  },
  kk: {
    title: 'Информатика бойынша менторлық',
    subtitle: 'Мектеп информатикасын оқуда жеке көмек',
    description: 'Тәжірибелі оқытушыдан информатиканы оқуда, олимпиадалар мен ЕНТ-ке дайындықта жеке қолдау алыңыз.',
    services: [
      {
        icon: BookOpen,
        title: 'Мектеп бағдарламасын талдау',
        description: 'Мектеп информатикасының күрделі тақырыптарын түсінуде көмек',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Target,
        title: 'ЕНТ-ке дайындық',
        description: 'Барлық есеп түрлерін талдаумен информатика бойынша ЕНТ-ке жүйелі дайындық',
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Trophy,
        title: 'Олимпиадалық бағдарламалау',
        description: 'Информатика және бағдарламалау олимпиадаларына дайындық',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Brain,
        title: 'Алгоритмдер және деректер құрылымы',
        description: 'Жетілген мектеп оқушылары үшін алгоритмдерді тереңірек оқу',
        color: 'from-orange-500 to-red-500'
      }
    ],
    benefits: [
      {
        icon: Users,
        title: 'Жеке тәсіл',
        description: 'Білім деңгейіңізді ескере отырып бір-бірден сабақтар'
      },
      {
        icon: Lightbulb,
        title: 'Практикалық есептер',
        description: 'Материалды бекіту үшін нақты есептер мен жобаларды шешу'
      },
      {
        icon: CheckCircle,
        title: 'Үздіксіз кері байланыс',
        description: 'Прогресті үнемі бақылау және бағдарламаны түзету'
      },
      {
        icon: Star,
        title: 'Икемді кесте',
        description: 'Сізге ыңғайлы уақытта оқу мүмкіндігі'
      }
    ],
    cta: 'Менторлыққа жазылу'
  }
}

export default function Mentorship({ language }: MentorshipProps) {
  const t = translations[language]

  return (
    <section id="mentorship" className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tl from-pink-400/10 to-indigo-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-indigo-400/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                />
                <BookOpen className="w-12 h-12 text-white relative z-10" />
              </div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-xl -z-10"
              />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 relative"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899, #4f46e5)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.title}
            </motion.span>
          </motion.h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 8 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
              style={{
                top: `${20 + (i * 15) % 60}%`,
                left: `${10 + (i * 12) % 80}%`
              }}
            />
          ))}
          {t.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 h-full overflow-hidden group">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                  
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden`}>
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    />
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'ru' ? 'Почему выбирают менторство?' : 'Неге менторлықты таңдайды?'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-sm"
            />
            
            {/* Shimmer effect */}
            <motion.div
              animate={{ 
                x: ['-100%', '100%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Готовы к индивидуальному обучению?' : 'Жеке оқуға дайынсыз ба?'}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {language === 'ru' 
                ? 'Запишитесь на персональное менторство и достигните своих целей'
                : 'Жеке менторлыққа жазылыңыз және мақсаттарыңызға жетіңіз'
              }
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 font-semibold py-4 px-10 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на менторство по информатике в CodeMastersPRO'
                  : 'Сәлем! CodeMastersPRO-та информатика бойынша менторлыққа жазылғым келеді';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {/* Shimmer effect on button */}
              <motion.div
                animate={{ 
                  x: ['-100%', '100%']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10">{t.cta}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
