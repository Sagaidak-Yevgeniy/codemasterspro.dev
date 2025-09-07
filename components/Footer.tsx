'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  Heart,
  FileText,
  Bot
} from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    description: 'CodeMastersPRO - современная школа программирования в Павлодаре. Обучаем школьников и взрослых Python, Golang, JavaScript и аналитике данных.',
    quickLinks: {
      title: 'Быстрые ссылки',
      home: 'Главная',
      courses: 'Курсы',
      mentorship: 'Менторство',
      about: 'О нас',
      benefits: 'Преимущества',
      team: 'Команда',
      timeline: 'История',
      faq: 'FAQ',
      contact: 'Контакты',
      documents: 'Документы'
    },
    courses: {
      title: 'Направления',
      python: 'Python',
      golang: 'Golang',
      javascript: 'JavaScript',
      analytics: 'Аналитика данных'
    },
    contact: {
      title: 'Контакты',
      phone: '+7 777 332 36 76',
      email: 'info@codemasterspro.kz',
      location: 'Павлодар, ул. Е. Бекмаханова 115/2 (угол улиц Назарбаева и Естая)'
    },
    social: {
      title: 'Социальные сети',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram'
    },
    copyright: '© 2024 - 2025 CodeMastersPRO. Все права защищены.',
    madeWith: 'Сделано с',
    inKazakhstan: 'в Казахстане'
  },
  kk: {
    description: 'CodeMastersPRO - Павлодардағы заманауи бағдарламалау мектебі. Мектеп оқушылары мен ересектерге Python, Golang, JavaScript және деректер талдауын оқытамыз.',
    quickLinks: {
      title: 'Жылдам сілтемелер',
      home: 'Басты бет',
      courses: 'Курстар',
      mentorship: 'Менторлық',
      about: 'Біз туралы',
      benefits: 'Артықшылықтар',
      team: 'Команда',
      timeline: 'Тарих',
      faq: 'Сұрақтар',
      contact: 'Байланыс',
      documents: 'Құжаттар'
    },
    courses: {
      title: 'Бағыттар',
      python: 'Python',
      golang: 'Golang',
      javascript: 'JavaScript',
      analytics: 'Деректер талдауы'
    },
    contact: {
      title: 'Байланыс',
      phone: '+7 777 332 36 76',
      email: 'info@codemasterspro.kz',
      location: 'Павлодар, көш. Е. Бекмаханова 115/2 (Назарбаев және Естая көшелерінің қиылысы)'
    },
    social: {
      title: 'Әлеуметтік желілер',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram'
    },
    copyright: '© 2024 - 2025 CodeMastersPRO. Барлық құқықтар қорғалған.',
    madeWith: 'Жасалған',
    inKazakhstan: 'Қазақстанда'
  }
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  
  // Получаем текущий год
  const currentYear = new Date().getFullYear()
  
  // Вычисляем годы опыта с 2024 года, округляя к большему
  const startYear = 2024
  const yearsOfExperience = Math.ceil((currentYear - startYear) + (new Date().getMonth() + 1) / 12)



  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
                             <motion.a
                 href="#home"
                 whileHover={{ scale: 1.05 }}
                 className="flex items-center space-x-3 mb-6 cursor-pointer"
                 onClick={(e) => {
                   e.preventDefault()
                   window.scrollTo({ top: 0, behavior: 'smooth' })
                 }}
               >
                 <div className="w-12 h-12 lg:w-14 lg:h-14">
                   <img 
                     src="/images/Logo.png" 
                     alt="CodeMasters PRO Logo" 
                     className="w-full h-full object-contain"
                   />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold">CodeMastersPRO</h3>
                   <p className="text-sm text-gray-400">
                     {language === 'ru' ? 'Школа программирования' : 'Бағдарламалау мектебі'}
                   </p>
                 </div>
               </motion.a>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                {t.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                  onClick={() => {
                const message = language === 'ru' 
                                  ? 'Привет! Хочу записаться на обучение программированию в CodeMastersPRO. Можете рассказать подробнее о курсах?'
                : 'Сәлем! CodeMastersPRO-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => window.open('https://www.instagram.com/code_masterspro?igsh=M2NxcW4zc2Jhd3l5&utm_source=qr', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу подключить Telegram бота CodeMastersPRO для управления обучением. Можете помочь?'
                      : 'Сәлем! CodeMastersPRO Telegram ботын оқу басқару үшін қосқым келеді. Көмектесе аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://t.me/CodeMastersPRO_bot?start=${encodedMessage}`, '_blank');
                  }}
                >
                  <Bot className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{t.quickLinks.title}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#courses" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.courses}
                  </a>
                </li>
                <li>
                  <a href="#mentorship" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.mentorship}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.about}
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.benefits}
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.team}
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.timeline}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.faq}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                    {t.quickLinks.contact}
                  </a>
                </li>
                <li>
                  <Link href="/documents" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    {t.quickLinks.documents}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{t.courses.title}</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 dark:text-gray-400">{t.courses.python}</span>
                </li>
                <li>
                  <span className="text-gray-300 dark:text-gray-400">{t.courses.golang}</span>
                </li>
                <li>
                  <span className="text-gray-300 dark:text-gray-400">{t.courses.javascript}</span>
                </li>
                <li>
                  <span className="text-gray-300 dark:text-gray-400">{t.courses.analytics}</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{t.contact.title}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <a 
                    href="tel:+77773323676" 
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <a 
                    href="mailto:info@codemasterspro.kz" 
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span 
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={() => {
                      const address = language === 'ru' 
                        ? 'Павлодар, ул. Е. Бекмаханова 115/2'
                        : 'Павлодар, көш. Е. Бекмаханова 115/2';
                      const encodedAddress = encodeURIComponent(address);
                      window.open(`https://2gis.kz/pavlodar/search/${encodedAddress}`, '_blank');
                    }}
                  >
                    {t.contact.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Кодбек Footer Section */}
        

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 dark:border-gray-700 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-300 dark:text-gray-400 text-center sm:text-left"
            >
              <span>© 2024 - {currentYear} CodeMastersPRO. {language === 'ru' ? 'Все права защищены.' : 'Барлық құқықтар қорғалған.'}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>{t.madeWith}</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>{t.inKazakhstan}</span>
              </span>
            </motion.div>


          </div>
        </div>
      </div>
    </footer>
  )
}
