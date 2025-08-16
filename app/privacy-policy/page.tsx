'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, Shield, Eye, Lock, Users, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      title: 'Политика конфиденциальности',
      subtitle: 'Как мы защищаем и используем ваши персональные данные',
      backToHome: 'Вернуться на главную',
      lastUpdated: 'Последнее обновление: 1 января 2024',
      sections: {
        introduction: {
          title: 'Введение',
          content: 'CodeMastersPRO уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. Данная политика описывает, как мы собираем, используем и защищаем информацию, которую вы предоставляете нам.'
        },
        dataCollection: {
          title: 'Сбор данных',
          content: 'Мы собираем только ту информацию, которая необходима для предоставления наших образовательных услуг: имя, email, телефон, возраст и образовательные цели.'
        },
        dataUsage: {
          title: 'Использование данных',
          content: 'Ваши данные используются исключительно для: предоставления образовательных услуг, связи с вами по вопросам обучения, улучшения качества наших курсов.'
        },
        dataProtection: {
          title: 'Защита данных',
          content: 'Мы используем современные технологии шифрования и безопасности для защиты ваших персональных данных от несанкционированного доступа, изменения или уничтожения.'
        },
        dataSharing: {
          title: 'Передача данных',
          content: 'Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан.'
        },
        cookies: {
          title: 'Файлы cookie',
          content: 'Наш сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете отключить их в настройках вашего браузера.'
        },
        rights: {
          title: 'Ваши права',
          content: 'Вы имеете право на доступ, исправление, удаление и ограничение обработки ваших персональных данных. Для этого свяжитесь с нами.'
        },
        contact: {
          title: 'Контакты',
          content: 'По всем вопросам, связанным с обработкой персональных данных, обращайтесь к нам по email: privacy@cmpro.kz или телефону: +7 (777) 332-36-76.'
        }
      }
    },
    kk: {
      title: 'Құпиялылық саясаты',
      subtitle: 'Біз сіздің жеке деректеріңізді қалай қорғаймыз және пайдаланамыз',
      backToHome: 'Басты бетке оралу',
      lastUpdated: 'Соңғы жаңарту: 1 қаңтар 2024',
      sections: {
        introduction: {
          title: 'Кіріспе',
          content: 'CodeMastersPRO сіздің құпиялылығыңызға құрмет көрсетеді және жеке деректеріңізді қорғауға міндеттеме береді. Бұл саясат біз сізден алатын ақпаратты қалай жинайтынымызды, пайдаланатынымызды және қорғайтынымызды сипаттайды.'
        },
        dataCollection: {
          title: 'Деректерді жинау',
          content: 'Біз білім беру қызметтерін көрсету үшін қажетті ақпаратты ғана жинаймыз: аты-жөні, email, телефон, жасы және білім алу мақсаттары.'
        },
        dataUsage: {
          title: 'Деректерді пайдалану',
          content: 'Сіздің деректеріңіз тек келесі мақсаттар үшін пайдаланылады: білім беру қызметтерін көрсету, оқу мәселелері бойынша сізбен байланыс, курстар сапасын жақсарту.'
        },
        dataProtection: {
          title: 'Деректерді қорғау',
          content: 'Біз сіздің жеке деректеріңізді рұқсатсыз кіру, өзгерту немесе жоюдан қорғау үшін заманауи шифрлеу және қауіпсіздік технологияларын пайдаланамыз.'
        },
        dataSharing: {
          title: 'Деректерді беру',
          content: 'Біз сіздің жеке деректеріңізді Қазақстан Республикасы заңнамасында көзделген жағдайлардан басқа үшінші тұлғаларға сатпаймыз, алмаспаймыз және бермейміз.'
        },
        cookies: {
          title: 'Cookie файлдары',
          content: 'Біздің сайт пайдаланушы тәжірибесін жақсарту үшін cookie файлдарын пайдаланады. Сіз оларды браузеріңіздің параметрлерінде сөндіре аласыз.'
        },
        rights: {
          title: 'Сіздің құқықтарыңыз',
          content: 'Сіздің жеке деректеріңізге кіру, түзету, жою және өңдеуді шектеу құқығыңыз бар. Ол үшін бізбен байланысыңыз.'
        },
        contact: {
          title: 'Байланыс',
          content: 'Жеке деректерді өңдеуге қатысты барлық сұрақтар бойынша бізбен байланысыңыз: email: privacy@cmpro.kz немесе телефон: +7 (777) 332-36-76.'
        }
      }
    }
  }

  const t = translations[language]

  const sections = [
    { key: 'introduction', icon: FileText },
    { key: 'dataCollection', icon: Users },
    { key: 'dataUsage', icon: Eye },
    { key: 'dataProtection', icon: Shield },
    { key: 'dataSharing', icon: Lock },
    { key: 'cookies', icon: FileText },
    { key: 'rights', icon: Users },
    { key: 'contact', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.backToHome}
            </Link>
            
            <div className="flex items-center space-x-4">
              <img 
                src="/images/Logo.png" 
                alt="CMPro Logo" 
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.lastUpdated}
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.sections[section.key as keyof typeof t.sections].title}
                </h2>
              </div>
              
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.sections[section.key as keyof typeof t.sections].content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Остались вопросы?' : 'Сұрақтарыңыз қалды ма?'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'ru' 
                ? 'Свяжитесь с нами для получения дополнительной информации'
                : 'Қосымша ақпарат алу үшін бізбен байланысыңыз'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@cmpro.kz"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {language === 'ru' ? 'Написать email' : 'Email жазған'}
              </a>
              <a
                href="tel:+77773323676"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {language === 'ru' ? 'Позвонить' : 'Қоңырау шалыңыз'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
