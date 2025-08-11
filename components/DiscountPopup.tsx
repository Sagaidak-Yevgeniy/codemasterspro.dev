'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Clock, Users, Star } from 'lucide-react'
import { useState } from 'react'

interface DiscountPopupProps {
  language: 'ru' | 'kk'
  isVisible: boolean
  onClose: () => void
}

const translations = {
  ru: {
    title: 'Скидка 20%! 🎁',
    subtitle: 'Получите скидку 20% на первый месяц обучения',
    description: 'Оставьте заявку прямо сейчас и получите специальное предложение для новых студентов',
    cta: 'Получить скидку',
    close: 'Закрыть',
    features: [
      'Персональная консультация',
      'Пробное занятие бесплатно',
      'Гибкий график обучения',
      'Сертификат по окончании'
    ],
    urgency: 'Предложение ограничено!'
  },
  kk: {
    title: '20% жеңілдік! 🎁',
    subtitle: 'Оқудың алғашқы айына 20% жеңілдік алыңыз',
    description: 'Дәл қазір өтініш қалдырыңыз және жаңа студенттерге арналған арнайы ұсыныс алыңыз',
    cta: 'Жеңілдік алу',
    close: 'Жабу',
    features: [
      'Жеке кеңесшілік',
      'Тегін сынақ сабағы',
      'Икемді оқу кестесі',
      'Аяқтағаннан кейін сертификат'
    ],
    urgency: 'Ұсыныс шектеулі!'
  }
}

export default function DiscountPopup({ language, isVisible, onClose }: DiscountPopupProps) {
  const t = translations[language]

  const handleGetDiscount = () => {
    const message = language === 'ru' 
      ? 'Привет! Хочу получить скидку 20% на обучение в CodeMastersPRO. Можете рассказать подробнее о курсах и условиях скидки?'
      : 'Сәлем! CodeMastersPRO-та оқуға 20% жеңілдік алғым келеді. Курстар және жеңілдік шарттары туралы толығырақ айта аласыз ба?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
    onClose();
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full max-h-[95vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 sm:p-4 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold truncate">{t.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm truncate">{t.subtitle}</p>
                  </div>
                </div>
                
                {/* Urgency indicator */}
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-2 py-1">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">{t.urgency}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{t.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-3 sm:mb-4">
                  {t.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {language === 'ru' ? 'студентов' : 'студент'}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {language === 'ru' ? 'успешных' : 'сәтті'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGetDiscount}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{t.cta}</span>
                </motion.button>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-full mt-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-xs"
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
