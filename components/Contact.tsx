'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  ArrowRight,
  Send
} from 'lucide-react'

interface ContactProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Свяжитесь с нами',
    subtitle: 'Готовы начать обучение? Свяжитесь с нами любым удобным способом',
    contactInfo: {
      title: 'Контактная информация',
      location: 'Павлодар, ул. Е. Бекмаханова 115/2 (угол улиц Назарбаева и Естая)',
      locationDesc: 'Удобное расположение в центре города',
      schedule: 'Пн-Пт: 9:00 - 19:00',
      scheduleDesc: 'Сб: 10:00 - 15:00',
      phone: '+7 777 332 36 76',
      phoneDesc: 'WhatsApp и звонки',
      email: 'info@codemasterspro.kz',
      emailDesc: 'Электронная почта'
    },
    social: {
      title: 'Мы в социальных сетях',
      whatsapp: 'Написать в WhatsApp',
      instagram: 'Подписаться в Instagram',
      whatsappDesc: 'Быстрые ответы на вопросы',
      instagramDesc: 'Новости и проекты студентов'
    },
    cta: {
      title: 'Начните обучение прямо сейчас!',
      subtitle: 'Оставьте заявку и получите бесплатную консультацию',
      button: 'Оставить заявку',
      buttonWhatsapp: 'Написать в WhatsApp'
    }
  },
  kk: {
    title: 'Бізбен байланысыңыз',
    subtitle: 'Оқуға бастауға дайынсыз ба? Бізбен ыңғайлы тәсілмен байланысыңыз',
    contactInfo: {
      title: 'Байланыс ақпараты',
      location: 'Павлодар, көш. Е. Бекмаханова 115/2 (Назарбаев және Естая көшелерінің қиылысы)',
      locationDesc: 'Қала орталығындағы ыңғайлы орналасу',
      schedule: 'Дс-Жм: 9:00 - 19:00',
      scheduleDesc: 'Сн: 10:00 - 15:00',
      phone: '+7 777 332 36 76',
      phoneDesc: 'WhatsApp және қоңыраулар',
      email: 'info@codemasterspro.kz',
      emailDesc: 'Электрондық пошта'
    },
    social: {
      title: 'Әлеуметтік желілерде',
      whatsapp: 'WhatsApp-та жазу',
      instagram: 'Instagram-да жазылу',
      whatsappDesc: 'Сұрақтарға жылдам жауаптар',
      instagramDesc: 'Жаңалықтар мен студенттердің жобалары'
    },
    cta: {
      title: 'Қазір оқуға бастаңыз!',
      subtitle: 'Өтініш қалдырыңыз және тегін кеңес алыңыз',
      button: 'Өтініш қалдыру',
      buttonWhatsapp: 'WhatsApp-та жазу'
    }
  }
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contactInfo.title}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.contactInfo.location}</h4>
                    <p className="text-gray-600 text-sm">{t.contactInfo.locationDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.contactInfo.schedule}</h4>
                    <p className="text-gray-600 text-sm">{t.contactInfo.scheduleDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.contactInfo.phone}</h4>
                    <p className="text-gray-600 text-sm">{t.contactInfo.phoneDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.contactInfo.email}</h4>
                    <p className="text-gray-600 text-sm">{t.contactInfo.emailDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.social.title}
              </h3>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
                  onClick={() => window.open('https://wa.me/77773323676', '_blank')}
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6" />
                    <div className="text-left">
                      <div className="font-semibold">{t.social.whatsapp}</div>
                      <div className="text-sm text-green-100">{t.social.whatsappDesc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
                  onClick={() => window.open('https://www.instagram.com/code_masterspro?igsh=M2NxcW4zc2Jhd3l5&utm_source=qr', '_blank')}
                >
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-6 h-6" />
                    <div className="text-left">
                      <div className="font-semibold">{t.social.instagram}</div>
                      <div className="text-sm text-pink-100">{t.social.instagramDesc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main CTA */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                  {t.cta.title}
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  {t.cta.subtitle}
                </p>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-primary-600 font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                    onClick={() => window.open('https://wa.me/77773323676', '_blank')}
                  >
                    <Send className="w-5 h-5" />
                    <span>{t.cta.buttonWhatsapp}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
                    onClick={() => window.open('https://wa.me/77773323676', '_blank')}
                  >
                    {t.cta.button}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'ru' ? 'Быстрый старт' : 'Жылдам бастау'}
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'ru' ? 'Свяжитесь с нами' : 'Бізбен байланысыңыз'}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-secondary-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'ru' ? 'Выберите курс' : 'Курсты таңдаңыз'}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'ru' ? 'Начните обучение' : 'Оқуға бастаңыз'}
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-accent-50 to-orange-50 rounded-2xl p-6 border border-accent-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'ru' ? 'Срочные вопросы?' : 'Шұғыл сұрақтар?'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {language === 'ru' ? 'Звоните прямо сейчас' : 'Қазір қоңырау шалыңыз'}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-accent-500 text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent-600 transition-colors duration-300"
                onClick={() => window.open('tel:+77773323676', '_blank')}
              >
                +7 777 332 36 76
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
