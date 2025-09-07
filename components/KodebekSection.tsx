'use client'

import { motion } from 'framer-motion'
import { MessageCircle, BookOpen, Lightbulb, Code, Star, Users, Zap, Instagram, Youtube, Sparkles, Target, Heart, Award, Rocket, Brain, Coffee, Bot, CreditCard, Calendar, Trophy, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface KodebekSectionProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Познакомьтесь с Кодбеком',
    subtitle: 'Ваш дружелюбный проводник в мире программирования',
    description: 'Привет! Я Кодбек — ваш персональный IT-наставник и официальный представитель школы CodeMastersPRO! 🚀 Я не просто помогаю студентам, я создаю целую экосистему знаний для всех, кто мечтает покорить мир технологий. А еще у меня есть крутой Telegram бот! 🤖',
    role: 'IT-Наставник & Представитель школы',
    features: [
      {
        icon: Brain,
        title: 'Ваш IT-мозг',
        description: 'Помогаю разобраться в сложных концепциях программирования простым языком'
      },
      {
        icon: Rocket,
        title: 'Запускаю карьеры',
        description: 'Направляю студентов на правильный путь в IT-индустрии'
      },
      {
        icon: Coffee,
        title: 'Дружеские советы',
        description: 'Делимся кофе и практическими советами от опытного программиста'
      },
      {
        icon: Zap,
        title: 'Энергия знаний',
        description: 'Заряжаю энтузиазмом и мотивацией на пути к успеху'
      },
      {
        icon: Bot,
        title: 'Telegram бот',
        description: 'Управление обучением, платежами, расписанием и квестами'
      }
    ],
    social: {
      title: 'Ведет крутые рубрики в Instagram',
      description: 'Каждый день делится полезным контентом и вдохновляет на изучение IT',
      rubrics: [
        '💻 Языки программирования',
        '🎯 IT-факты и новости',
        '🚀 Советы для начинающих',
        '📚 Обзоры курсов и книг',
        '💡 Лайфхаки программиста',
        '🌟 Истории успеха'
      ]
    },
    personality: {
      title: 'Почему Кодбек особенный?',
      traits: [
        'Дружелюбный и всегда готов помочь',
        'Объясняет сложное простыми словами',
        'Знает все тренды в IT-индустрии',
        'Вдохновляет на достижение целей'
      ]
    },
    telegramBot: {
      title: '🤖 Telegram бот CodeMastersPRO',
      subtitle: 'Все возможности обучения в одном месте',
      description: 'Мой персональный помощник поможет вам управлять всем процессом обучения!',
      features: [
        {
          icon: CreditCard,
          title: 'Управление платежами',
          description: 'Оплата курсов, отслеживание баланса, история транзакций'
        },
        {
          icon: Calendar,
          title: 'Расписание занятий',
          description: 'Просмотр расписания, уведомления о занятиях, переносы'
        },
        {
          icon: MessageCircle,
          title: 'Общение с преподавателями',
          description: 'Быстрая связь с наставниками, вопросы и консультации'
        },
        {
          icon: BookOpen,
          title: 'Домашние задания',
          description: 'Получение заданий, отправка решений, проверка результатов'
        },
        {
          icon: Trophy,
          title: 'Квесты и достижения',
          description: 'Геймификация обучения, бонусы, рейтинги и награды'
        },
        {
          icon: Users,
          title: 'Поддержка 24/7',
          description: 'Круглосуточная помощь и техническая поддержка'
        }
      ],
      cta: {
        title: 'Подключить Telegram бота',
        subtitle: 'Начните управлять обучением прямо сейчас!',
        button: '🤖 Подключить бота'
      }
    }
  },
  kk: {
    title: 'Кодбекпен танысыңыз',
    subtitle: 'Бағдарламалау әлеміндегі сіздің дос жол көрсетушіңіз',
    description: 'Сәлем! Мен Кодбек — сіздің жеке IT-жол көрсетушіңіз және CodeMastersPRO мектебінің ресми өкілі! 🚀 Мен тек студенттерге көмектеспеймін, технологиялар әлемін бағындырғысы келетіндерге арналған білім экожүйесін жасаймын. Сондай-ақ менде керемет Telegram бот бар! 🤖',
    role: 'IT-Жол көрсетуші & Мектеп өкілі',
    features: [
      {
        icon: Brain,
        title: 'Сіздің IT-миыңыз',
        description: 'Бағдарламалаудың күрделі түсініктерін қарапайым тілмен түсіндіруге көмектесемін'
      },
      {
        icon: Rocket,
        title: 'Мансаптарды іске қосамын',
        description: 'Студенттерді IT-индустриясындағы дұрыс жолға бағыттаймын'
      },
      {
        icon: Coffee,
        title: 'Дос кеңестері',
        description: 'Кофе бөлісіп, тәжірибелі бағдарламашыдан практикалық кеңестер береміз'
      },
      {
        icon: Zap,
        title: 'Білім энергиясы',
        description: 'Сәттілікке жолдағы энтузиазм мен мотивациямен зарядтаймын'
      },
      {
        icon: Bot,
        title: 'Telegram бот',
        description: 'Оқу басқару, төлемдер, кесте және квесттер'
      }
    ],
    social: {
      title: 'Instagram-да керемет рубрикалар жүргізеді',
      description: 'Күн сайын пайдалы контентпен бөлісіп, IT-ді оқуға шабыттандырады',
      rubrics: [
        '💻 Бағдарламалау тілдері',
        '🎯 IT-фактілер және жаңалықтар',
        '🚀 Жаңадан бастаушыларға кеңестер',
        '📚 Курстар мен кітаптар шолуы',
        '💡 Бағдарламашының лайфхактары',
        '🌟 Сәттілік тарихтары'
      ]
    },
    personality: {
      title: 'Кодбек неге ерекше?',
      traits: [
        'Досқан және әрқашан көмектесуге дайын',
        'Күрделіні қарапайым сөздермен түсіндіреді',
        'IT-индустриясындағы барлық трендтерді біледі',
        'Мақсаттарға жетуге шабыттандырады'
      ]
    },
    telegramBot: {
      title: '🤖 Telegram бот CodeMastersPRO',
      subtitle: 'Оқу барлық мүмкіндіктері бір жерде',
      description: 'Менің жеке көмекшім оқу процесін басқаруға көмектеседі!',
      features: [
        {
          icon: CreditCard,
          title: 'Төлемдерді басқару',
          description: 'Курстарды төлеу, балансты бақылау, транзакциялар тарихы'
        },
        {
          icon: Calendar,
          title: 'Сабақ кестесі',
          description: 'Кестені көру, сабақ туралы хабарландырулар, ауыстырулар'
        },
        {
          icon: MessageCircle,
          title: 'Оқытушылармен байланыс',
          description: 'Жол көрсетушілермен жылдам байланыс, сұрақтар және кеңестер'
        },
        {
          icon: BookOpen,
          title: 'Үй тапсырмалары',
          description: 'Тапсырмаларды алу, шешімдерді жіберу, нәтижелерді тексеру'
        },
        {
          icon: Trophy,
          title: 'Квесттер және жетістіктер',
          description: 'Оқуды ойындау, бонустар, рейтингтер және марапаттар'
        },
        {
          icon: Users,
          title: 'Қолдау 24/7',
          description: 'Тұтас тәулік көмек және техникалық қолдау'
        }
      ],
      cta: {
        title: 'Telegram ботын қосу',
        subtitle: 'Қазір оқуды басқаруды бастаңыз!',
        button: '🤖 Ботты қосу'
      }
    }
  }
}

export default function KodebekSection({ language }: KodebekSectionProps) {
  const t = translations[language]

  return (
    <section id="kodebek" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Simplified Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-4 py-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>{t.role}</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Kodebek Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Kodebek Image with Enhanced Animation */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/Kodebek1.png"
                  alt="Кодбек"
                  width={400}
                  height={480}
                  className="w-full max-w-md mx-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </motion.div>

              {/* Simplified Floating Elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
                  style={{
                    top: `${25 + (i * 15)}%`,
                    left: `${20 + (i * 20)}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

            </div>
          </motion.div>

          {/* Right Side - Features and Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
                         {/* Features */}
             <div>
                               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center sm:text-left">
                  {language === 'ru' ? 'Что делает Кодбека особенным?' : 'Кодбека не ерекше ететін?'}
                </h3>
                                                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center sm:text-left">
                {t.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                                         className="group p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-md"
                   >
                                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                       <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                     </div>
                                           <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base text-center sm:text-left">{feature.title}</h4>
                                           <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

                         {/* Social Media Section */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               viewport={{ once: true }}
               className="p-6 sm:p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
             >
                             <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                   <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">{t.social.title}</h4>
                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t.social.description}</p>
                 </div>
               </div>

                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                 {t.social.rubrics.map((rubric, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                     viewport={{ once: true }}
                     className="flex items-center space-x-2 p-2 sm:p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg sm:rounded-xl text-xs sm:text-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                   >
                     <span className="text-base sm:text-lg">{rubric.split(' ')[0]}</span>
                     <span className="text-gray-700 dark:text-gray-300">{rubric.split(' ').slice(1).join(' ')}</span>
                   </motion.div>
                 ))}
               </div>

                             {/* CTA Button */}
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => window.open('https://www.instagram.com/code_masterspro?igsh=M2NxcW4zc2Jhd3l5&utm_source=qr', '_blank')}
                 className="w-full inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
               >
                 <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                 <span>{language === 'ru' ? 'Подписаться на Instagram' : 'Instagram-ға жазылу'}</span>
               </motion.button>
            </motion.div>

            {/* Mobile Personality Traits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">
                {t.personality.title}
              </h4>
              <ul className="space-y-2">
                {t.personality.traits.map((trait, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0" />
                    <span>{trait}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Telegram Bot Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-4 sm:p-6 border border-blue-200/50 dark:border-blue-700/50">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-3 sm:mb-4 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.telegramBot.title}
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                {t.telegramBot.subtitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {t.telegramBot.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {t.telegramBot.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-4 sm:p-6 text-white">
                <h4 className="text-lg sm:text-xl font-bold mb-2">
                  {t.telegramBot.cta.title}
                </h4>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm">
                  {t.telegramBot.cta.subtitle}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto group"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу подключить Telegram бота CodeMastersPRO для управления обучением. Можете помочь?'
                      : 'Сәлем! CodeMastersPRO Telegram ботын оқу басқару үшін қосқым келеді. Көмектесе аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://t.me/CodeMastersPRO_bot?start=${encodedMessage}`, '_blank');
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.div>
                  <span className="text-sm">{t.telegramBot.cta.button}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
