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
  Send,
  Star
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
      telegram: 'Написать в Telegram',
      instagram: 'Подписаться в Instagram',
      whatsappDesc: 'Быстрые ответы на вопросы',
      telegramDesc: 'Быстрые ответы на вопросы',
      instagramDesc: 'Новости и проекты студентов'
    },
    cta: {
      title: 'Начните обучение прямо сейчас!',
      subtitle: 'Оставьте заявку и получите бесплатную консультацию',
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
      telegram: 'Telegram-да жазу',
      instagram: 'Instagram-да жазылу',
      whatsappDesc: 'Сұрақтарға жылдам жауаптар',
      telegramDesc: 'Сұрақтарға жылдам жауаптар',
      instagramDesc: 'Жаңалықтар мен студенттердің жобалары'
    },
    cta: {
      title: 'Қазір оқуға бастаңыз!',
      subtitle: 'Өтініш қалдырыңыз және тегін кеңес алыңыз',
      buttonWhatsapp: 'WhatsApp-та жазу'
    }
  }
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]

  return (
    <section id="contact" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="card-dark rounded-2xl p-6 shadow-custom h-full">
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {t.contactInfo.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold text-primary-dark cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                      onClick={() => {
                        const address = language === 'ru' 
                          ? 'Павлодар, ул. Е. Бекмаханова 115/2'
                          : 'Павлодар, көш. Е. Бекмаханова 115/2';
                        const encodedAddress = encodeURIComponent(address);
                        window.open(`https://2gis.kz/pavlodar/search/${encodedAddress}`, '_blank');
                      }}
                    >
                      {t.contactInfo.location}
                    </h4>
                    <p className="text-secondary-dark text-xs">{t.contactInfo.locationDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">{t.contactInfo.schedule}</h4>
                    <p className="text-secondary-dark text-xs">{t.contactInfo.scheduleDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">{t.contactInfo.phone}</h4>
                    <p className="text-secondary-dark text-xs">{t.contactInfo.phoneDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">{t.contactInfo.email}</h4>
                    <p className="text-secondary-dark text-xs">{t.contactInfo.emailDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="card-dark rounded-2xl p-6 shadow-custom h-full">
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {t.social.title}
              </h3>
              
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-between group text-sm"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                      : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">{t.social.whatsapp}</div>
                      <div className="text-xs text-green-100">{t.social.whatsappDesc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-between group text-sm"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                      : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://t.me/+77773323676?text=${encodedMessage}`, '_blank');
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <div className="text-left">
                      <div className="font-semibold">{t.social.telegram}</div>
                      <div className="text-xs text-blue-100">{t.social.telegramDesc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-between group text-sm"
                  onClick={() => window.open('https://www.instagram.com/code_masterspro?igsh=M2NxcW4zc2Jhd3l5&utm_source=qr', '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <Instagram className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">{t.social.instagram}</div>
                      <div className="text-xs text-pink-100">{t.social.instagramDesc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white h-full flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">
                  {t.cta.title}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {t.cta.subtitle}
                </p>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-primary-600 font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group text-sm"
                    onClick={() => {
                      const message = language === 'ru' 
                        ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                        : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.cta.buttonWhatsapp}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Reviews CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold">
                  {language === 'ru' ? 'Поделитесь своим опытом!' : 'Тәжірибеңізді бөлісіңіз!'}
                </h3>
              </div>
              <p className="text-white/90 mb-4 text-sm">
                {language === 'ru' 
                  ? 'Оставьте отзыв в 2GIS и помогите другим сделать правильный выбор'
                  : '2GIS-те пікір қалдырыңыз және басқаларға дұрыс таңдау жасауға көмектесіңіз'
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto text-xs"
                onClick={() => {
                  window.open('https://2gis.kz/pavlodar/search/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BA%D1%83%D1%80%D1%81%D1%8B/rubricId/678/page/2/firm/70000001083544695/76.968865%2C52.283134/tab/reviews/addreview?m=76.9667%2C52.283504%2F10.72', '_blank');
                }}
              >
                <Star className="w-3 h-3" />
                <span>{language === 'ru' ? 'Оставить отзыв' : 'Пікір қалдыру'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-accent-50 to-orange-50 dark:from-accent-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-accent-200 dark:border-accent-700 h-full flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {language === 'ru' ? 'Срочные вопросы?' : 'Шұғыл сұрақтар?'}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {language === 'ru' ? 'Звоните прямо сейчас' : 'Қазір қоңырау шалыңыз'}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-accent-600 transition-colors duration-300 text-sm"
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
