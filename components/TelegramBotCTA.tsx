'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  MessageCircle, 
  CreditCard, 
  Calendar, 
  Users, 
  Trophy, 
  BookOpen,
  ArrowRight,
  Sparkles,
  Zap,
  Star
} from 'lucide-react'

interface TelegramBotCTAProps {
  language: 'ru' | 'kk'
  variant?: 'hero' | 'contact' | 'compact'
  className?: string
}

const translations = {
  ru: {
    title: 'Telegram Бот',
    titleHighlight: 'CodeMastersPRO',
    subtitle: 'Удобство и коммуникация',
    description: 'Управление платежами, расписание, общение, домашние задания, квесты и многое другое',
    features: {
      payments: 'Управление платежами',
      schedule: 'Расписание занятий',
      communication: 'Общение с преподавателями',
      homework: 'Домашние задания',
      quests: 'Квесты и достижения',
      support: 'Поддержка 24/7'
    },
    cta: {
      primary: 'Подключить бота',
      secondary: 'Узнать больше',
      description: 'Все возможности в одном месте'
    },
    benefits: {
      convenience: 'Удобство',
      communication: 'Коммуникация',
      management: 'Управление'
    }
  },
  kk: {
    title: 'Telegram Бот',
    titleHighlight: 'CodeMastersPRO',
    subtitle: 'Ыңғайлылық және байланыс',
    description: 'Төлемдерді басқару, кесте, байланыс, үй тапсырмалары, квесттер және тағы басқалары',
    features: {
      payments: 'Төлемдерді басқару',
      schedule: 'Сабақ кестесі',
      communication: 'Оқытушылармен байланыс',
      homework: 'Үй тапсырмалары',
      quests: 'Квесттер және жетістіктер',
      support: 'Қолдау 24/7'
    },
    cta: {
      primary: 'Ботты қосу',
      secondary: 'Толығырақ білу',
      description: 'Барлық мүмкіндіктер бір жерде'
    },
    benefits: {
      convenience: 'Ыңғайлылық',
      communication: 'Байланыс',
      management: 'Басқару'
    }
  }
}

export default function TelegramBotCTA({ 
  language, 
  variant = 'hero', 
  className = '' 
}: TelegramBotCTAProps) {
  const t = translations[language]

  const handleConnectBot = () => {
    const message = language === 'ru' 
      ? 'Привет! Хочу подключить Telegram бота CodeMastersPRO для управления обучением. Можете помочь?'
      : 'Сәлем! CodeMastersPRO Telegram ботын оқу басқару үшін қосқым келеді. Көмектесе аласыз ба?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/CodeMastersPRO_bot?start=${encodedMessage}`, '_blank');
  }

  const handleLearnMore = () => {
    const message = language === 'ru' 
      ? 'Расскажите подробнее о возможностях Telegram бота CodeMastersPRO'
      : 'CodeMastersPRO Telegram ботының мүмкіндіктері туралы толығырақ айтыңыз';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative ${className}`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={handleConnectBot}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Bot className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">{t.title}</h4>
              <p className="text-xs text-white/80">{t.cta.description}</p>
            </div>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'contact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative ${className}`}
      >
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Bot className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.subtitle}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: CreditCard, text: t.features.payments, color: 'from-green-500 to-emerald-500' },
              { icon: Calendar, text: t.features.schedule, color: 'from-blue-500 to-cyan-500' },
              { icon: MessageCircle, text: t.features.communication, color: 'from-purple-500 to-pink-500' },
              { icon: BookOpen, text: t.features.homework, color: 'from-orange-500 to-red-500' },
              { icon: Trophy, text: t.features.quests, color: 'from-yellow-500 to-orange-500' },
              { icon: Users, text: t.features.support, color: 'from-indigo-500 to-purple-500' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg"
              >
                <div className={`w-6 h-6 bg-gradient-to-r ${feature.color} rounded-md flex items-center justify-center`}>
                  <feature.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={handleConnectBot}
            >
              <Bot className="w-4 h-4" />
              <span>{t.cta.primary}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold py-2 px-4 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={handleLearnMore}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.cta.secondary}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Hero variant (default)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -3 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
        onClick={handleConnectBot}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-2 left-2 w-6 h-6 bg-white/10 rounded-full"
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-3">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-bold text-white text-sm sm:text-base mb-1"
              >
                {t.title} <span className="text-blue-200">{t.titleHighlight}</span>
              </motion.h3>
              <p className="text-xs sm:text-sm text-white/80">{t.subtitle}</p>
            </div>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/90 mb-3 leading-relaxed">
            {t.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {[
              { icon: CreditCard, text: t.features.payments },
              { icon: Calendar, text: t.features.schedule },
              { icon: MessageCircle, text: t.features.communication },
              { icon: BookOpen, text: t.features.homework }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-1 bg-white/10 rounded-lg px-2 py-1"
              >
                <feature.icon className="w-3 h-3 text-white/80" />
                <span className="text-xs text-white/80">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="flex items-center space-x-1"
              >
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span className="text-xs text-white/80">{t.benefits.convenience}</span>
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="flex items-center space-x-1"
              >
                <Zap className="w-3 h-3 text-blue-300" />
                <span className="text-xs text-white/80">{t.benefits.communication}</span>
              </motion.div>
            </div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="flex items-center space-x-1 bg-white/10 rounded-lg px-2 py-1"
            >
              <Star className="w-3 h-3 text-yellow-300" />
              <span className="text-xs text-white/80">{t.benefits.management}</span>
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2 right-6 w-1.5 h-1.5 bg-white/60 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-4 right-12 w-1 h-1 bg-white/40 rounded-full"
        />
      </motion.div>
    </motion.div>
  )
}
