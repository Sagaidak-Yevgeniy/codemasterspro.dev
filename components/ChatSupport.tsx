'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, Mail, Minimize2, Maximize2, Sparkles, BookOpen, Lightbulb, TrendingUp, Code, Clock, Users, Star, Zap, Info } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useNavigation } from './NavigationContext'
import Image from 'next/image'

// CSS для скрытия скроллбара
const scrollbarStyles = `
  .chat-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .chat-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

interface ChatSupportProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Кодбек - Поддержка',
    subtitle: 'Ваш проводник в мире программирования',
    placeholder: 'Введите ваше сообщение...',
    send: 'Отправить',
    close: 'Закрыть',
    minimize: 'Свернуть',
    expand: 'Развернуть',
    phone: '+7 (777) 332-36-76',
    email: 'info@cmpro.kz',
    online: 'Онлайн',
    typing: 'печатает...',
    quickReplies: [
      'Хочу записаться на курсы',
      'У меня есть вопросы',
      'Нужна консультация',
      'Стоимость обучения',
      'Расскажи новости IT',
      'Поделись интересными фактами',
      'Расписание занятий',
      'Есть ли скидки?'
    ],
    categories: {
      courses: 'Курсы',
      support: 'Поддержка',
      info: 'Информация',
      fun: 'Интересное'
    }
  },
  kk: {
    title: 'Кодбек - Қолдау',
    subtitle: 'Бағдарламалау әлеміндегі сіздің жол көрсетушіңіз',
    placeholder: 'Хабарламаңызды енгізіңіз...',
    send: 'Жіберу',
    close: 'Жабу',
    minimize: 'Жіктеу',
    expand: 'Кеңейту',
    phone: '+7 (777) 332-36-76',
    email: 'info@cmpro.kz',
    online: 'Онлайн',
    typing: 'теріп жатыр...',
    quickReplies: [
      'Курстарға жазылғым келеді',
      'Сұрақтарым бар',
      'Кеңесшілік қажет',
      'Оқу құны',
      'IT жаңалықтарын айт',
      'Қызықты фактілерді бөліс',
      'Сабақ кестесі',
      'Жеңілдік бар ма?'
    ],
    categories: {
      courses: 'Курстар',
      support: 'Қолдау',
      info: 'Ақпарат',
      fun: 'Қызықты'
    }
  }
}

// IT новости и интересные факты
const itNews = {
  ru: [
    "🚀 Python стал самым популярным языком программирования в 2024 году!",
    "💡 Искусственный интеллект создает код быстрее человека в 10 раз",
    "🌐 Web3 и блокчейн технологии набирают огромную популярность",
    "📱 Flutter от Google доминирует в мобильной разработке",
    "⚡ Rust - самый любимый язык программирования среди разработчиков",
    "🎮 Игровая индустрия превысила $200 миллиардов в 2024 году",
    "🔒 Кибербезопасность стала приоритетом номер один для компаний",
    "☁️ Облачные технологии используются 94% предприятий"
  ],
  kk: [
    "🚀 Python 2024 жылы ең танымал бағдарламалау тілі болды!",
    "💡 Жасанды интеллект адамнан 10 есе жылдам код жазады",
    "🌐 Web3 және блокчейн технологиялары үлкен танымалдылыққа ие",
    "📱 Google-дың Flutter мобильді дамуда басым",
    "⚡ Rust - әзірлеушілер арасындағы ең сүйікті бағдарламалау тілі",
    "🎮 Ойын индустриясы 2024 жылы $200 миллиардты асырды",
    "🔒 Киберқауіпсіздік компаниялар үшін бірінші басымдық болды",
    "☁️ Бұлтты технологиялар кәсіпорындардың 94%-і қолданылады"
  ]
}

const programmingFacts = {
  ru: [
    "💻 Первая программа была написана Адой Лавлейс в 1843 году",
    "🐛 Термин 'баг' появился в 1947 году из-за мотылька в компьютере",
    "🎯 JavaScript был создан за 10 дней в 1995 году",
    "📱 Первый iPhone был разработан без App Store",
    "🌍 Интернет появился в 1989 году благодаря Тиму Бернерс-Ли",
    "🎮 Первая компьютерная игра была создана в 1958 году",
    "🔢 Бинарный код используется потому, что компьютеры понимают только 0 и 1",
    "⚡ Самый быстрый суперкомпьютер выполняет 1 квинтиллион операций в секунду"
  ],
  kk: [
    "💻 Алғашқы бағдарлама 1843 жылы Ада Лавлейс жазылды",
    "🐛 'Баг' термині 1947 жылы компьютердегі көбелектен пайда болды",
    "🎯 JavaScript 1995 жылы 10 күнде жасалды",
    "📱 Алғашқы iPhone App Store-сыз әзірленді",
    "🌍 Интернет 1989 жылы Тим Бернерс-Ли арқасында пайда болды",
    "🎮 Алғашқы компьютерлік ойын 1958 жылы жасалды",
    "🔢 Екілік код қолданылады, себебі компьютерлер тек 0 және 1-ді түсінеді",
    "⚡ Ең жылдам суперкомпьютер секундына 1 квинтиллион операция орындайды"
  ]
}

export default function ChatSupport({ language }: ChatSupportProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const chatRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { isNavigationVisible } = useNavigation()
  const t = translations[language]

  // Добавляем стили для скрытия скроллбара
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = scrollbarStyles
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize welcome message
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: language === 'ru'
          ? 'Привет! Я Кодбек, ваш проводник в мире программирования! 👨‍💻 Чем могу помочь?'
          : 'Сәлем! Мен Кодбек, бағдарламалау әлеміндегі сіздің жол көрсетушіңіз! 👨‍💻 Қалай көмектесе аламын?',
        isUser: false,
        timestamp: new Date(),
        type: 'welcome'
      }
    ])
  }, [language])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
      type: 'user'
    }

    setMessages(prev => [...prev, userMessage])
    setMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false)
      const userText = message.toLowerCase()
      let botResponse = ''
      let shouldOfferWhatsApp = false

      // Smart bot response based on user input
      if (userText.includes('записаться') || userText.includes('жазылу')) {
        botResponse = language === 'ru'
          ? '🎯 Отлично! Для записи на курсы переходите в WhatsApp, где наш менеджер поможет выбрать подходящий курс и ответит на все вопросы!'
          : '🎯 Керемет! Курстарға жазылу үшін WhatsApp-қа өтіңіз, мұнда біздің менеджер сәйкес курсты таңдауға көмектеседі және барлық сұрақтарға жауап береді!'
        shouldOfferWhatsApp = true
      }
      else if (userText.includes('стоимость') || userText.includes('цена') || userText.includes('сколько стоит') || 
               userText.includes('құны') || userText.includes('бағасы') || userText.includes('қанша тұрады')) {
        botResponse = language === 'ru'
          ? '💰 Стоимость обучения:\n• Все курсы: 30,000 тенге/месяц\n• Первое занятие БЕСПЛАТНО\n• Скидки для студентов и приведи друга\n\nПодробности в WhatsApp!'
          : '💰 Оқу құны:\n• Барлық курстар: 30,000 теңге/ай\n• Алғашқы сабақ ТЕГІН\n• Студенттерге жеңілдік\n\nТолық ақпарат WhatsApp-та!'
        shouldOfferWhatsApp = true
      }
      else if (userText.includes('консультация') || userText.includes('консультацию') || 
               userText.includes('кеңесшілік') || userText.includes('кеңес')) {
        botResponse = language === 'ru'
          ? '💡 Конечно! Наш специалист готов ответить на все ваши вопросы. Переходите в WhatsApp для бесплатной консультации!'
          : '💡 Әрине! Біздің маман сіздің барлық сұрақтарыңызға жауап беруге дайын. Тегін кеңесшілік үшін WhatsApp-қа өтіңіз!'
        shouldOfferWhatsApp = true
      }
      else if (userText.includes('вопрос') || userText.includes('сұрақ')) {
        botResponse = language === 'ru'
          ? '🤔 С удовольствием отвечу на ваши вопросы! Для более подробной информации и быстрого ответа можете перейти в WhatsApp!'
          : '🤔 Сіздің сұрақтарыңызға қуана-қуана жауап беремін! Толық ақпарат және жылдам жауап үшін WhatsApp-қа өтуге болады!'
        shouldOfferWhatsApp = true
      }
      else if (userText.includes('расписание') || userText.includes('кәсте') || userText.includes('сабақ')) {
        botResponse = language === 'ru'
          ? '📅 Занятия проходят в удобное время:\n• Утренние группы: 9:00 - 11:00\n• Дневные группы: 14:00 - 16:00\n• Вечерние группы: 18:00 - 20:00\n\nГрафик подбирается индивидуально!'
          : '📅 Сабақтар ыңғайлы уақытта өтеді:\n• Таңғы топтар: 9:00 - 11:00\n• Күндізгі топтар: 14:00 - 16:00\n• Кешкі топтар: 18:00 - 20:00\n\nКесте жеке таңдалады!'
        shouldOfferWhatsApp = true
      }
      else if (userText.includes('скидк') || userText.includes('жеңілдік')) {
        botResponse = language === 'ru'
          ? '🎉 У нас действуют отличные скидки:\n• Приведи друга - скидка 10%\n• Оплата за 3 месяца - скидка 15%\n• Студентам - скидка 20%\n\nСейчас действует акция: первое занятие БЕСПЛАТНО!'
          : '🎉 Бізде керемет жеңілдіктер бар:\n• Досын әкел - 10% жеңілдік\n• 3 айға төлем - 15% жеңілдік\n• Студенттерге - 20% жеңілдік\n\nҚазір акция: алғашқы сабақ ТЕГІН!'
        shouldOfferWhatsApp = true
      }
      else {
        botResponse = language === 'ru'
          ? 'Спасибо за ваше сообщение! Для получения подробной информации и быстрого ответа можете перейти в WhatsApp! 📱'
          : 'Хабарламаңыз үшін рахмет! Толық ақпарат және жылдам жауап алу үшін WhatsApp-қа өтуге болады! 📱'
        shouldOfferWhatsApp = true
      }

      const botResponseObj = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        type: 'response'
      }
      setMessages(prev => [...prev, botResponseObj])

      // Show helpful additional info
      if (shouldOfferWhatsApp) {
        setTimeout(() => {
          const additionalInfoMessage = language === 'ru'
            ? '💡 Совет: Вы можете задать любой вопрос в чате или сразу перейти в WhatsApp для быстрой связи с менеджером!'
            : '💡 Кеңес: Сіз чатта кез келген сұрақ қоя аласыз немесе менеджермен жылдам байланыс үшін WhatsApp-қа өтуге болады!'
          
          const additionalInfoObj = {
            id: (Date.now() + 2).toString(),
            text: additionalInfoMessage,
            isUser: false,
            timestamp: new Date(),
            type: 'tip'
          }
          setMessages(prev => [...prev, additionalInfoObj])
        }, 1000)
      }
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    const userMessage = {
      id: Date.now().toString(),
      text: reply,
      isUser: true,
      timestamp: new Date(),
      type: 'quick-reply'
    }

    setMessages(prev => [...prev, userMessage])
    const replyText = reply.toLowerCase()
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      let botResponse = ''
      let shouldOfferWhatsApp = false

      // Check for IT news requests
      if (replyText.includes('новости') || replyText.includes('жаңалық') || replyText.includes('айт')) {
        const randomNews = itNews[language][Math.floor(Math.random() * itNews[language].length)]
        botResponse = language === 'ru'
          ? `📰 ${randomNews}\n\nХотите узнать больше новостей или у вас есть другие вопросы?`
          : `📰 ${randomNews}\n\nКөбірек жаңалық білгіңіз келе ме немесе басқа сұрақтарыңыз бар ма?`
      }
      // Check for facts requests
      else if (replyText.includes('факт') || replyText.includes('интересн') || replyText.includes('қызықты')) {
        const randomFact = programmingFacts[language][Math.floor(Math.random() * programmingFacts[language].length)]
        botResponse = language === 'ru'
          ? `🎯 ${randomFact}\n\nХотите узнать еще интересные факты или у вас есть другие вопросы?`
          : `🎯 ${randomFact}\n\nТағы қызықты фактілер білгіңіз келе ме немесе басқа сұрақтарыңыз бар ма?`
      }
      // Check for course registration
      else if (replyText.includes('записаться') || replyText.includes('жазылу')) {
        botResponse = language === 'ru'
          ? '🎯 Отлично! Для записи на курсы переходите в WhatsApp, где наш менеджер поможет выбрать подходящий курс!'
          : '🎯 Керемет! Курстарға жазылу үшін WhatsApp-қа өтіңіз, мұнда біздің менеджер сәйкес курсты таңдауға көмектеседі!'
        shouldOfferWhatsApp = true
      }
      // Check for cost questions
      else if (replyText.includes('стоимость') || replyText.includes('құны')) {
        botResponse = language === 'ru'
          ? '💰 Стоимость обучения:\n• Все курсы: 30,000 тенге/месяц\n• Первое занятие БЕСПЛАТНО\n• Скидки для студентов\n\nПодробности в WhatsApp!'
          : '💰 Оқу құны:\n• Барлық курстар: 30,000 теңге/ай\n• Алғашқы сабақ ТЕГІН\n• Студенттерге жеңілдік\n\nТолық ақпарат WhatsApp-та!'
        shouldOfferWhatsApp = true
      }
      // Check for consultation requests
      else if (replyText.includes('консультация') || replyText.includes('кеңесшілік')) {
        botResponse = language === 'ru'
          ? '💡 Конечно! Наш специалист готов ответить на все ваши вопросы. Переходите в WhatsApp для бесплатной консультации!'
          : '💡 Әрине! Біздің маман сіздің барлық сұрақтарыңызға жауап беруге дайын. Тегін кеңесшілік үшін WhatsApp-қа өтіңіз!'
        shouldOfferWhatsApp = true
      }
      // Check for general questions
      else if (replyText.includes('вопрос') || replyText.includes('сұрақ')) {
        botResponse = language === 'ru'
          ? '🤔 С удовольствием отвечу на ваши вопросы! Для более подробной информации и быстрого ответа можете перейти в WhatsApp!'
          : '🤔 Сіздің сұрақтарыңызға қуана-қуана жауап беремін! Толық ақпарат және жылдам жауап үшін WhatsApp-қа өтуге болады!'
        shouldOfferWhatsApp = true
      }
      // Check for schedule questions
      else if (replyText.includes('расписание') || replyText.includes('кәсте') || replyText.includes('сабақ')) {
        botResponse = language === 'ru'
          ? '📅 Занятия проходят в удобное время:\n• Утренние группы: 9:00 - 11:00\n• Дневные группы: 14:00 - 16:00\n• Вечерние группы: 18:00 - 20:00\n\nГрафик подбирается индивидуально под каждого студента!'
          : '📅 Сабақтар ыңғайлы уақытта өтеді:\n• Таңғы топтар: 9:00 - 11:00\n• Күндізгі топтар: 14:00 - 16:00\n• Кешкі топтар: 18:00 - 20:00\n\nКесте әрбір студентке жеке таңдалады!'
        shouldOfferWhatsApp = true
      }
      // Check for discount questions
      else if (replyText.includes('скидк') || replyText.includes('жеңілдік')) {
        botResponse = language === 'ru'
          ? '🎉 У нас действуют отличные скидки:\n• Приведи друга - скидка 10%\n• Оплата за 3 месяца - скидка 15%\n• Студентам - скидка 20%\n\nСейчас действует акция: первое занятие БЕСПЛАТНО!'
          : '🎉 Бізде керемет жеңілдіктер бар:\n• Досын әкел - 10% жеңілдік\n• 3 айға төлем - 15% жеңілдік\n• Студенттерге - 20% жеңілдік\n\nҚазір акция: алғашқы сабақ ТЕГІН!'
        shouldOfferWhatsApp = true
      }

      const botResponseObj = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        type: 'response'
      }
      setMessages(prev => [...prev, botResponseObj])

      // Show helpful additional info
      if (shouldOfferWhatsApp) {
        setTimeout(() => {
          const additionalInfoMessage = language === 'ru'
            ? '💡 Совет: Вы можете задать любой вопрос в чате или сразу перейти в WhatsApp для быстрой связи с менеджером!'
            : '💡 Кеңес: Сіз чатта кез келген сұрақ қоя аласыз немесе менеджермен жылдам байланыс үшін WhatsApp-қа өтуге болады!'
          
          const additionalInfoObj = {
            id: (Date.now() + 2).toString(),
            text: additionalInfoMessage,
            isUser: false,
            timestamp: new Date(),
            type: 'tip'
          }
          setMessages(prev => [...prev, additionalInfoObj])
        }, 1000)
      }
    }, 1000)
  }

  const handleWhatsApp = (customMessage?: string) => {
    let message = customMessage
    if (!message) {
      message = language === 'ru' 
        ? 'Привет! Нужна консультация по курсам CodeMastersPRO'
        : 'Сәлем! CodeMastersPRO курстары туралы кеңесшілік қажет';
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const filteredQuickReplies = activeCategory === 'all' 
    ? t.quickReplies 
    : t.quickReplies.filter((_, index) => {
        if (activeCategory === 'courses') return index < 4
        if (activeCategory === 'support') return index >= 4 && index < 6
        if (activeCategory === 'info') return index >= 6 && index < 8
        return false
      })

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {isNavigationVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ delay: 0.1 }}
            className="fixed bottom-4 left-2 sm:left-4 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm transition-opacity duration-300 p-3"
              style={{ opacity: 0.85 }}
              animate={{
                boxShadow: isHovered
                  ? '0 20px 40px rgba(59, 130, 246, 0.4)'
                  : '0 10px 30px rgba(59, 130, 246, 0.3)'
              }}
              transition={{ duration: 0.3 }}
              aria-label="Chat support"
            >
              {/* Animated background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse" />

              {/* Icon */}
              <MessageCircle className="w-5 h-5 relative z-10" />

              {/* Online indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      top: `${20 + (i * 20)}%`,
                      left: `${20 + (i * 20)}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -8, 0],
                      x: [0, Math.random() * 6 - 3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] sm:hidden"
              onClick={handleBackdropClick}
            />
            
            <motion.div
              ref={chatRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-4 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto z-[70] w-auto sm:w-96 max-w-[calc(100vw-1rem)] bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-custom overflow-hidden pointer-events-auto border border-light transition-all duration-300 flex flex-col"
              style={{
                height: isMinimized ? '60px' : 'min(500px, 80vh)',
                opacity: isHovered ? 1 : 0.95
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 text-white">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1 flex items-center">
                    {/* Кодбек avatar */}
                    <div className="relative mr-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/kodebek.png"
                          alt="Кодбек"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                        <motion.div 
                          className="w-1.5 h-1.5 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm truncate">{t.title}</h3>
                      {!isMinimized && (
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-white/80 truncate">{t.subtitle}</p>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center space-x-1"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-sm"></div>
                            <span className="text-xs font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                              {t.online}
                            </span>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={toggleMinimize}
                      className="text-white hover:text-gray-200 transition-colors p-1"
                      title={isMinimized ? t.expand : t.minimize}
                    >
                      {isMinimized ? (
                        <Maximize2 className="w-4 h-4" />
                      ) : (
                        <Minimize2 className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-gray-200 transition-colors p-1"
                      title={t.close}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content - Hidden when minimized */}
              {!isMinimized && (
                <div className="flex flex-col flex-1 min-h-0">
                  {/* Messages - Scrollable area */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 chat-scrollbar">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        {!msg.isUser && (
                          <div className="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                            <Image
                              src="/images/kodebek.png"
                              alt="Кодбек"
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                            msg.isUser
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                              : msg.type === 'tip'
                              ? 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300'
                              : msg.type === 'welcome'
                              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300'
                              : 'bg-gray-100 dark:bg-gray-700 text-primary-dark'
                          }`}
                        >
                          <p className="text-sm leading-relaxed break-words whitespace-pre-line">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-2 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                          <Image
                            src="/images/kodebek.png"
                            alt="Кодбек"
                            width={24}
                            height={24}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-2xl">
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              />
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              />
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 ml-2">{t.typing}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Category Tabs */}
                  <div className="px-3 pb-1 border-t border-gray-200 dark:border-gray-600 pt-1 flex-shrink-0">
                        <div className="flex space-x-1 mb-1">
                      {[
                        { key: 'all', icon: Sparkles, label: language === 'ru' ? 'Все' : 'Барлығы' },
                        { key: 'courses', icon: BookOpen, label: t.categories.courses },
                        { key: 'support', icon: Users, label: t.categories.support },
                        { key: 'info', icon: Info, label: t.categories.info }
                      ].map((category) => (
                        <motion.button
                          key={category.key}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveCategory(category.key)}
                                                      className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                            activeCategory === category.key
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          <category.icon className="w-3 h-3" />
                          <span>{category.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Replies - Always visible */}
                  <div className="px-3 pb-1 flex-shrink-0">
                    <div className="mb-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {language === 'ru' ? 'Быстрые ответы:' : 'Жылдам жауаптар:'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {filteredQuickReplies.map((reply, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleQuickReply(reply)}
                            className="px-2 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 border border-primary-500/20 hover:border-primary-500/40 text-primary-700 dark:text-primary-300 text-xs rounded-full transition-all duration-300 break-words font-medium backdrop-blur-sm"
                          >
                            {reply}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button - Always visible */}
                  <div className="px-3 pb-1 flex-shrink-0">
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsApp()}
                      className="w-full px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'ru' ? 'Перейти в WhatsApp' : 'WhatsApp-қа өту'}</span>
                    </motion.button>
                  </div>

                  {/* Input - Always visible */}
                  <div className="p-2 border-t border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex-shrink-0">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={t.placeholder}
                        className="flex-1 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white dark:bg-gray-700 text-primary-dark"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Contact Info - Always visible */}
                  <div className="px-3 pb-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm flex-shrink-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <button
                        onClick={() => handleWhatsApp()}
                        className="flex items-center space-x-1 hover:text-primary-500 transition-colors flex-1 min-w-0"
                      >
                        <MessageCircle className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">WhatsApp</span>
                      </button>
                      <a
                        href={`tel:${t.phone}`}
                        className="flex items-center space-x-1 hover:text-primary-500 transition-colors flex-1 min-w-0"
                      >
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate hidden sm:inline">{t.phone}</span>
                        <span className="truncate sm:hidden">Звонок</span>
                      </a>
                      <a
                        href={`mailto:${t.email}`}
                        className="flex items-center space-x-1 hover:text-primary-500 transition-colors flex-1 min-w-0"
                      >
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate hidden sm:inline">{t.email}</span>
                        <span className="truncate sm:hidden">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
