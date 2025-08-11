'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
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
    setMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: language === 'ru'
          ? 'Спасибо за ваше сообщение! Наш специалист свяжется с вами в ближайшее время.'
          : 'Хабарламаңыз үшін рахмет! Біздің маман жақын арада сізбен байланысады.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
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

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: language === 'ru'
          ? 'Отлично! Для получения подробной информации свяжитесь с нами по WhatsApp или телефону.'
          : 'Керемет! Толық ақпарат алу үшін WhatsApp немесе телефон арқылы бізбен байланысыңыз.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleWhatsApp = () => {
    const message = language === 'ru' 
      ? 'Привет! Нужна консультация по курсам CodeMastersPRO'
      : 'Сәлем! CodeMastersPRO курстары туралы кеңесшілік қажет';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Chat support"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[60] sm:hidden"
              onClick={handleBackdropClick}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-16 left-2 right-2 sm:bottom-20 sm:left-6 sm:right-auto z-[70] w-auto sm:w-80 h-80 sm:h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 sm:p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{t.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 truncate">{t.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200 transition-colors ml-2 flex-shrink-0"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-48 sm:h-64 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] sm:max-w-xs px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg ${
                        msg.isUser
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed break-words">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="px-3 sm:px-4 pb-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {t.quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors break-words"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={t.placeholder}
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <button
                    onClick={handleWhatsApp}
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
