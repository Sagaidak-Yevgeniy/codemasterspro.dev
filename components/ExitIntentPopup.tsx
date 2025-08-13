'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Clock, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ExitIntentPopupProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Скидка 20%! 🎁',
    subtitle: 'Получите скидку 20% на первый месяц обучения',
    description: 'Оставьте заявку прямо сейчас и получите специальное предложение',
    cta: 'Получить скидку',
    close: 'Закрыть',
    features: [
      'Персональная консультация',
      'Пробное занятие бесплатно',
      'Гибкий график обучения'
    ]
  },
  kk: {
    title: '20% жеңілдік! 🎁',
    subtitle: 'Оқудың алғашқы айына 20% жеңілдік алыңыз',
    description: 'Дәл қазір өтініш қалдырыңыз және арнайы ұсыныс алыңыз',
    cta: 'Жеңілдік алу',
    close: 'Жабу',
    features: [
      'Жеке кеңесшілік',
      'Тегін сынақ сабағы',
      'Икемді оқу кестесі'
    ]
  }
}

export default function ExitIntentPopup({ language }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const t = translations[language]

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('exitIntentShown')
    if (hasShownPopup) {
      setHasShown(true)
      return
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }, 10000)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    const handleShowDiscountPopup = () => {
      setIsVisible(true)
    }

    // Show popup when user scrolls to 50% of page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('showDiscountPopup', handleShowDiscountPopup)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('showDiscountPopup', handleShowDiscountPopup)
      clearTimeout(timer)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleGetDiscount = () => {
    const message = language === 'ru' 
      ? 'Привет! Хочу получить скидку 20% на обучение в CodeMastersPRO. Можете рассказать подробнее о курсах и условиях скидки?'
      : 'Сәлем! CodeMastersPRO-та оқуға 20% жеңілдік алғым келеді. Курстар және жеңілдік шарттары туралы толығырақ айта аласыз ба?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
    setIsVisible(false);
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            onClick={handleBackdropClick}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 pointer-events-none"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md w-full max-h-[95vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 sm:p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold truncate">{t.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm truncate">{t.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">{t.description}</p>
                
                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {t.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-3 h-3 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGetDiscount}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-2 px-3 rounded-lg hover:shadow-md transition-all duration-300 text-xs"
                >
                  {t.cta}
                </motion.button>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="w-full mt-2 sm:mt-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-xs sm:text-sm"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
