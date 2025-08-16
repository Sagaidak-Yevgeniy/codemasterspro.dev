'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, FileText, Download, ExternalLink, BookOpen, Shield, Users, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function DocumentsPage() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      title: 'Нормативные документы',
      subtitle: 'Официальные документы и лицензии CodeMastersPRO',
      backToHome: 'Вернуться на главную',
      categories: {
        licenses: 'Лицензии и разрешения',
        educational: 'Образовательные программы',
        legal: 'Правовые документы',
        safety: 'Безопасность и охрана',
        financial: 'Финансовые документы'
      },
      documents: {
        license: 'Лицензия на образовательную деятельность',
        fireSafety: 'Акт проверки пожарной безопасности',
        sanitary: 'Санитарно-эпидемиологическое заключение',
        educationalProgram: 'Образовательная программа',
        curriculum: 'Учебные планы курсов',
        safetyRegulations: 'Правила техники безопасности',
        privacyPolicy: 'Политика конфиденциальности',
        termsOfService: 'Условия оказания услуг',
        refundPolicy: 'Политика возврата средств',
        dataProtection: 'Политика защиты персональных данных',
        covidProtocol: 'Протокол по COVID-19',
        emergencyPlan: 'План действий в чрезвычайных ситуациях',
        insurance: 'Страховой полис',
        taxCertificate: 'Свидетельство о постановке на налоговый учет',
        bankDetails: 'Банковские реквизиты'
      },
      download: 'Скачать',
      view: 'Просмотреть',
      contact: 'Контактная информация',
      address: 'Адрес: г. Павлодар, ул. Е. Бекмаханова 115/2 (угол улиц Назарбаева и Естая)',
      phone: 'Телефон: +7 (777) 332-36-76',
      email: 'Email: info@cmpro.kz',
      workingHours: 'Время работы: Пн-Пт 9:00-18:00'
    },
    kk: {
      title: 'Нормативтік құжаттар',
      subtitle: 'CodeMastersPRO-тың ресми құжаттары мен лицензиялары',
      backToHome: 'Басты бетке оралу',
      categories: {
        licenses: 'Лицензиялар мен рұқсаттар',
        educational: 'Білім беру бағдарламалары',
        legal: 'Заңды құжаттар',
        safety: 'Қауіпсіздік және қорғау',
        financial: 'Қаржылық құжаттар'
      },
      documents: {
        license: 'Білім беру қызметіне лицензия',
        fireSafety: 'Өрт қауіпсіздігін тексеру актісі',
        sanitary: 'Санитарлық-эпидемиологиялық қорытынды',
        educationalProgram: 'Білім беру бағдарламасы',
        curriculum: 'Курстардың оқу жоспарлары',
        safetyRegulations: 'Қауіпсіздік техникасы ережелері',
        privacyPolicy: 'Құпиялылық саясаты',
        termsOfService: 'Қызмет көрсету шарттары',
        refundPolicy: 'Қаражатты қайтару саясаты',
        dataProtection: 'Жеке деректерді қорғау саясаты',
        covidProtocol: 'COVID-19 бойынша хаттама',
        emergencyPlan: 'Төтенше жағдайлардағы әрекеттер жоспары',
        insurance: 'Страхование полисі',
        taxCertificate: 'Салық есебіне тіркеу туралы куәлік',
        bankDetails: 'Банк реквизиттері'
      },
      download: 'Жүктеу',
      view: 'Көру',
      contact: 'Байланыс ақпараты',
      address: 'Мекенжайы: к. Павлодар, көш. Е. Бекмаханова 115/2 (Назарбаев және Естая көшелерінің қиылысы',
      phone: 'Телефон: +7 (777) 332-36-76',
      email: 'Email: info@cmpro.kz',
      workingHours: 'Жұмыс уақыты: Дс-Жм 9:00-18:00'
    }
  }

  const t = translations[language]

  const documentCategories = [
    {
      title: t.categories.licenses,
      icon: Award,
      documents: [
        { name: t.documents.license, type: 'pdf', size: '2.1 MB' },
        { name: t.documents.fireSafety, type: 'pdf', size: '1.8 MB' },
        { name: t.documents.sanitary, type: 'pdf', size: '1.5 MB' }
      ]
    },
    {
      title: t.categories.educational,
      icon: BookOpen,
      documents: [
        { name: t.documents.educationalProgram, type: 'pdf', size: '3.2 MB' },
        { name: t.documents.curriculum, type: 'pdf', size: '2.7 MB' }
      ]
    },
    {
      title: t.categories.legal,
      icon: FileText,
      documents: [
        { name: t.documents.privacyPolicy, type: 'link', size: language === 'ru' ? 'Веб-страница' : 'Веб-бет', href: '/privacy-policy' },
        { name: t.documents.termsOfService, type: 'link', size: language === 'ru' ? 'Веб-страница' : 'Веб-бет', href: '/terms-of-service' },
        { name: t.documents.refundPolicy, type: 'pdf', size: '0.8 MB' },
        { name: t.documents.dataProtection, type: 'pdf', size: '1.4 MB' }
      ]
    },
    {
      title: t.categories.safety,
      icon: Shield,
      documents: [
        { name: t.documents.safetyRegulations, type: 'pdf', size: '1.6 MB' },
        { name: t.documents.covidProtocol, type: 'pdf', size: '1.1 MB' },
        { name: t.documents.emergencyPlan, type: 'pdf', size: '2.3 MB' }
      ]
    },
    {
      title: t.categories.financial,
      icon: Users,
      documents: [
        { name: t.documents.insurance, type: 'pdf', size: '1.7 MB' },
        { name: t.documents.taxCertificate, type: 'pdf', size: '1.3 MB' },
        { name: t.documents.bankDetails, type: 'pdf', size: '0.9 MB' }
      ]
    }
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Document Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {documentCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-3">
                {category.documents.map((doc, docIndex) => (
                  <motion.div
                    key={docIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (docIndex * 0.05) }}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {doc.type.toUpperCase()} • {doc.size}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      {doc.type === 'link' ? (
                        <Link 
                          href={doc.href || '#'} 
                          className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t.contact}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{t.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{t.phone}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{t.email}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{t.workingHours}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
