'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, Mail, Minimize2, Maximize2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigation } from './NavigationContext'

interface ChatSupportProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Поддержка',
    subtitle: 'Задайте вопрос нашему специалисту',
    placeholder: 'Введите ваше сообщение...',
    send: 'Отправить',
    close: 'Закрыть',
    minimize: 'Свернуть',
    expand: 'Развернуть',
    phone: '+7 (777) 332-36-76',
    email: 'info@cmpro.kz',
    quickReplies: [
      'Хочу записаться на курсы',
      'У меня есть вопросы',
      'Нужна консультация',
      'Стоимость обучения'
    ]
  },
  kk: {
    title: 'Қолдау',
    subtitle: 'Біздің маманға сұрақ қойыңыз',
    placeholder: 'Хабарламаңызды енгізіңіз...',
    send: 'Жіберу',
    close: 'Жабу',
    minimize: 'Жіктеу',
    expand: 'Кеңейту',
    phone: '+7 (777) 332-36-76',
    email: 'info@cmpro.kz',
    quickReplies: [
      'Курстарға жазылғым келеді',
      'Сұрақтарым бар',
      'Кеңесшілік қажет',
      'Оқу құны'
    ]
  }
}

export default function ChatSupport({ language }: ChatSupportProps) {
  const { isNavigationVisible } = useNavigation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{
    id: string
    text: string
    isUser: boolean
    timestamp: Date
  }>>([])
  const t = translations[language]

  useEffect(() => {
    // Add welcome message
    setMessages([
      {
        id: '1',
        text: language === 'ru' 
          ? 'Здравствуйте! Чем могу помочь?' 
          : 'Сәлем! Қалай көмектесе аламын?',
        isUser: false,
        timestamp: new Date()
      }
    ])
  }, [language])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const userText = message.toLowerCase()
    setMessage('')

    // Smart bot response based on user message
    setTimeout(() => {
      let botResponse = ''
      let shouldOfferWhatsApp = false

      // Check for cost/price related questions
      if (userText.includes('стоимость') || userText.includes('цена') || userText.includes('сколько стоит') || 
          userText.includes('құны') || userText.includes('бағасы') || userText.includes('қанша тұрады')) {
        botResponse = language === 'ru'
          ? 'Все курсы стоят 30,000 тенге в месяц без учета действующих скидок! 🎓\n\nХотите узнать подробности и записаться? Можете перейти в WhatsApp для быстрой связи или задать другие вопросы здесь!'
          : 'Барлық курстар айына 30,000 теңге, жұмыс істеп тұрған жеңілдіктерді есепке алмағанда! 🎓\n\nТолық ақпарат алып, жазылғыңыз келетінін білгіңіз келе ме? Жылдам байланыс үшін WhatsApp-қа өтуге немесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for course registration
      else if (userText.includes('записаться') || userText.includes('записаться на курсы') || 
               userText.includes('жазылу') || userText.includes('курстарға жазылу')) {
        botResponse = language === 'ru'
          ? 'Отлично! Для записи на курсы свяжитесь с нами в WhatsApp. Наш менеджер поможет выбрать подходящий курс и оформить заявку! 📚\n\nИли можете задать другие вопросы здесь!'
          : 'Керемет! Курстарға жазылу үшін WhatsApp арқылы бізбен байланысыңыз. Біздің менеджер сізге сәйкес курсты таңдауға және өтінішті ресімдеуге көмектеседі! 📚\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for consultation requests
      else if (userText.includes('консультация') || userText.includes('консультацию') || 
               userText.includes('кеңесшілік') || userText.includes('кеңес')) {
        botResponse = language === 'ru'
          ? 'Конечно! Наш специалист готов ответить на все ваши вопросы. Переходите в WhatsApp для бесплатной консультации! 💬\n\nИли можете задать другие вопросы здесь!'
          : 'Әрине! Біздің маман сіздің барлық сұрақтарыңызға жауап беруге дайын. Тегін кеңесшілік үшін WhatsApp-қа өтіңіз! 💬\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for general questions
      else if (userText.includes('вопрос') || userText.includes('сұрақ')) {
        botResponse = language === 'ru'
          ? 'С удовольствием отвечу на ваши вопросы! Для более подробной информации и быстрого ответа можете перейти в WhatsApp! 🤔\n\nИли можете задать другие вопросы здесь!'
          : 'Сіздің сұрақтарыңызға қуана-қуана жауап беремін! Толық ақпарат және жылдам жауап үшін WhatsApp-қа өтуге болады! 🤔\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Default response
      else {
        botResponse = language === 'ru'
          ? 'Спасибо за ваше сообщение! Для получения подробной информации и быстрого ответа можете перейти в WhatsApp! 📱\n\nИли можете задать другие вопросы здесь!'
          : 'Хабарламаңыз үшін рахмет! Толық ақпарат және жылдам жауап алу үшін WhatsApp-қа өтуге болады! 📱\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }

      const botResponseObj = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponseObj])

      // Auto-redirect to WhatsApp ONLY if user typed their own message (not using quick replies)
      if (shouldOfferWhatsApp) {
        setTimeout(() => {
          const redirectMessage = language === 'ru'
            ? 'Переходим в WhatsApp...'
            : 'WhatsApp-қа өтіп жатырмыз...'
          
          const redirectObj = {
            id: (Date.now() + 2).toString(),
            text: redirectMessage,
            isUser: false,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, redirectObj])

          setTimeout(() => {
            // Send personalized WhatsApp message based on context
            let whatsappMessage = ''
            if (userText.includes('стоимость') || userText.includes('цена') || userText.includes('сколько стоит') || 
                userText.includes('құны') || userText.includes('бағасы') || userText.includes('қанша тұрады')) {
              whatsappMessage = language === 'ru'
                ? 'Привет! Интересует стоимость обучения в CodeMastersPRO. Все курсы по 30,000 тенге в месяц. Хочу узнать подробности!'
                : 'Сәлем! CodeMastersPRO-да оқу құны қызықтырады. Барлық курстар айына 30,000 теңге. Толық ақпарат алғым келеді!'
            } else if (userText.includes('записаться') || userText.includes('жазылу')) {
              whatsappMessage = language === 'ru'
                ? 'Привет! Хочу записаться на курсы в CodeMastersPRO. Помогите выбрать подходящий курс!'
                : 'Сәлем! CodeMastersPRO-да курстарға жазылғым келеді. Сәйкес курсты таңдауға көмектесіңіз!'
            } else {
              whatsappMessage = language === 'ru'
                ? 'Привет! Нужна консультация по курсам CodeMastersPRO'
                : 'Сәлем! CodeMastersPRO курстары туралы кеңесшілік қажет'
            }
            handleWhatsApp(whatsappMessage)
          }, 1500)
        }, 2000)
      }
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    const userMessage = {
      id: Date.now().toString(),
      text: reply,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const replyText = reply.toLowerCase()

    // Smart bot response based on quick reply
    setTimeout(() => {
      let botResponse = ''
      let shouldOfferWhatsApp = false

      // Check for cost/price related quick replies
      if (replyText.includes('стоимость') || replyText.includes('құны')) {
        botResponse = language === 'ru'
          ? 'Все курсы стоят 30,000 тенге в месяц без учета действующих скидок! 🎓\n\nХотите узнать подробности и записаться? Можете перейти в WhatsApp для быстрой связи или задать другие вопросы здесь!'
          : 'Барлық курстар айына 30,000 теңге, жұмыс істеп тұрған жеңілдіктерді есепке алмағанда! 🎓\n\nТолық ақпарат алып, жазылғыңыз келетінін білгіңіз келе ме? Жылдам байланыс үшін WhatsApp-қа өтуге немесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for course registration
      else if (replyText.includes('записаться') || replyText.includes('жазылғым')) {
        botResponse = language === 'ru'
          ? 'Отлично! Для записи на курсы свяжитесь с нами в WhatsApp. Наш менеджер поможет выбрать подходящий курс и оформить заявку! 📚\n\nИли можете задать другие вопросы здесь!'
          : 'Керемет! Курстарға жазылу үшін WhatsApp арқылы бізбен байланысыңыз. Біздің менеджер сізге сәйкес курсты таңдауға және өтінішті ресімдеуге көмектеседі! 📚\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for consultation requests
      else if (replyText.includes('консультация') || replyText.includes('кеңесшілік')) {
        botResponse = language === 'ru'
          ? 'Конечно! Наш специалист готов ответить на все ваши вопросы. Переходите в WhatsApp для бесплатной консультации! 💬\n\nИли можете задать другие вопросы здесь!'
          : 'Әрине! Біздің маман сіздің барлық сұрақтарыңызға жауап беруге дайын. Тегін кеңесшілік үшін WhatsApp-қа өтіңіз! 💬\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }
      // Check for general questions
      else if (replyText.includes('вопрос') || replyText.includes('сұрақ')) {
        botResponse = language === 'ru'
          ? 'С удовольствием отвечу на ваши вопросы! Для более подробной информации и быстрого ответа можете перейти в WhatsApp! 🤔\n\nИли можете задать другие вопросы здесь!'
          : 'Сіздің сұрақтарыңызға қуана-қуана жауап беремін! Толық ақпарат және жылдам жауап үшін WhatsApp-қа өтуге болады! 🤔\n\nНемесе мұнда басқа сұрақтар қоюға болады!'
        shouldOfferWhatsApp = true
      }

      const botResponseObj = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponseObj])

      // For quick replies, show additional options instead of auto-redirecting
      if (shouldOfferWhatsApp) {
        setTimeout(() => {
          const additionalOptionsMessage = language === 'ru'
            ? 'Что еще вас интересует?'
            : 'Сізді тағы не қызықтырады?'
          
          const additionalOptionsObj = {
            id: (Date.now() + 2).toString(),
            text: additionalOptionsMessage,
            isUser: false,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, additionalOptionsObj])
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
              className="relative w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm transition-opacity duration-300"
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
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-16 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto z-[70] w-auto sm:w-80 max-w-[calc(100vw-1rem)] bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-custom overflow-hidden pointer-events-auto border border-light transition-all duration-300"
              style={{
                height: isMinimized ? '60px' : '400px',
                opacity: isHovered ? 1 : 0.95
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 text-white">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm truncate">{t.title}</h3>
                    {!isMinimized && (
                      <p className="text-xs text-white/80 truncate">{t.subtitle}</p>
                    )}
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
                <>
                  {/* Messages */}
                  <div className="h-48 overflow-y-auto p-3 space-y-2">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-lg ${
                            msg.isUser
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-primary-dark'
                          }`}
                        >
                          <p className="text-sm leading-relaxed break-words whitespace-pre-line">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Replies */}
                  {(messages.length === 1 || (messages.length > 1 && messages[messages.length - 1].text.includes('Что еще вас интересует?') || messages[messages.length - 1].text.includes('Сізді тағы не қызықтырады?'))) && (
                    <div className="px-3 pb-2">
                      <div className="flex flex-wrap gap-1">
                        {t.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-primary-dark text-xs rounded-full transition-colors break-words"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Button - Show after bot responses to quick replies */}
                  {messages.length > 1 && (messages[messages.length - 1].text.includes('Что еще вас интересует?') || messages[messages.length - 1].text.includes('Сізді тағы не қызықтырады?')) && (
                    <div className="px-3 pb-2">
                      <button
                        onClick={() => handleWhatsApp()}
                        className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{language === 'ru' ? 'Перейти в WhatsApp' : 'WhatsApp-қа өту'}</span>
                      </button>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-3 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={t.placeholder}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white dark:bg-gray-700 text-primary-dark"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="px-3 pb-3">
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
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
