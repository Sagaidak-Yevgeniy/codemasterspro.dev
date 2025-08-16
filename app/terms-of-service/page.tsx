'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Clock, Users, BookOpen, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      title: 'Условия оказания услуг',
      subtitle: 'Правила и условия обучения в CodeMastersPRO',
      backToHome: 'Вернуться на главную',
      lastUpdated: 'Последнее обновление: 1 января 2024',
      sections: {
        general: {
          title: 'Общие положения',
          content: 'Настоящие условия регулируют отношения между CodeMastersPRO и обучающимися при оказании образовательных услуг. Записываясь на курсы, вы соглашаетесь с данными условиями.'
        },
        services: {
          title: 'Образовательные услуги',
          content: 'Мы предоставляем обучение программированию по направлениям: Python, Golang, JavaScript и аналитика данных. Занятия проводятся в очном формате в группах до 8 человек.'
        },
        enrollment: {
          title: 'Запись и оплата',
          content: 'Запись на курсы осуществляется через сайт или по телефону. Оплата производится ежемесячно или за весь курс. Возврат средств осуществляется согласно нашей политике возврата.'
        },
        attendance: {
          title: 'Посещение занятий',
          content: 'Регулярное посещение занятий обязательно для успешного освоения материала. При пропуске занятий по уважительной причине предоставляется возможность отработки.'
        },
        behavior: {
          title: 'Поведение на занятиях',
          content: 'Обучающиеся обязаны соблюдать правила поведения, уважать преподавателей и других участников группы. Запрещено использование мобильных устройств во время занятий.'
        },
        materials: {
          title: 'Учебные материалы',
          content: 'Все учебные материалы предоставляются бесплатно. Копирование и распространение материалов без разрешения запрещено.'
        },
        certificates: {
          title: 'Сертификаты',
          content: 'По окончании курса выдается сертификат об обучении при условии успешного освоения программы и посещения не менее 80% занятий.'
        },
        liability: {
          title: 'Ответственность сторон',
          content: 'CodeMastersPRO не несет ответственности за результаты ЕНТ или других экзаменов. Мы гарантируем качество обучения, но не можем гарантировать конкретные результаты.'
        },
        changes: {
          title: 'Изменение условий',
          content: 'Мы оставляем за собой право вносить изменения в условия оказания услуг. Обучающиеся будут уведомлены об изменениях заблаговременно.'
        },
        contact: {
          title: 'Контакты',
          content: 'По всем вопросам, связанным с условиями оказания услуг, обращайтесь по email: legal@cmpro.kz или телефону: +7 (777) 332-36-76.'
        }
      }
    },
    kk: {
      title: 'Қызмет көрсету шарттары',
      subtitle: 'CodeMastersPRO-та оқу ережелері мен шарттары',
      backToHome: 'Басты бетке оралу',
      lastUpdated: 'Соңғы жаңарту: 1 қаңтар 2024',
      sections: {
        general: {
          title: 'Жалпы ережелер',
          content: 'Бұл шарттар CodeMastersPRO мен оқушылар арасындағы білім беру қызметтерін көрсету кезіндегі қатынастарды реттейді. Курстарға жазылу арқылы сіз бұл шарттармен келісесіз.'
        },
        services: {
          title: 'Білім беру қызметтері',
          content: 'Біз Python, Golang, JavaScript және деректер талдауы бағыттары бойынша бағдарламалауды оқытамыз. Сабақтар жүзбелі форматта 8 адамға дейінгі топтарда өткізіледі.'
        },
        enrollment: {
          title: 'Жазылу және төлем',
          content: 'Курстарға жазылу сайт арқылы немесе телефон бойынша жүзеге асырылады. Төлем ай сайын немесе бүкіл курс бойынша жүзеге асырылады. Қаражатты қайтару біздің қайтару саясатымызға сәйкес жүзеге асырылады.'
        },
        attendance: {
          title: 'Сабақтарға қатысу',
          content: 'Материалды сәтті меңгеру үшін сабақтарға дұрыс қатысу міндетті. Жарамды себептермен сабақтарды өткізіп алған жағдайда оқу мүмкіндігі беріледі.'
        },
        behavior: {
          title: 'Сабақтар кезіндегі мінез-құлық',
          content: 'Оқушылар мінез-құлық ережелерін сақтауға, оқытушылар мен топтың басқа қатысушыларына құрмет көрсетуге міндетті. Сабақ кезінде мобильді құрылғыларды пайдалану тыйым салынған.'
        },
        materials: {
          title: 'Оқу материалдары',
          content: 'Барлық оқу материалдары тегін беріледі. Материалдарды рұқсатсыз көшіру және тарату тыйым салынған.'
        },
        certificates: {
          title: 'Сертификаттар',
          content: 'Курсты аяқтағаннан кейін бағдарламаны сәтті меңгеру және кемінде 80% сабаққа қатысу шартымен оқу туралы сертификат беріледі.'
        },
        liability: {
          title: 'Тараптардың жауапкершілігі',
          content: 'CodeMastersPRO ЕНТ немесе басқа да емтихандардың нәтижелері үшін жауапты емес. Біз оқу сапасын кепілдік береміз, бірақ нақты нәтижелерді кепілдік бере алмаймыз.'
        },
        changes: {
          title: 'Шарттарды өзгерту',
          content: 'Біз қызмет көрсету шарттарын өзгерту құқығын сақтаймыз. Оқушылар өзгерістер туралы алдын ала хабардар етіледі.'
        },
        contact: {
          title: 'Байланыс',
          content: 'Қызмет көрсету шарттарына қатысты барлық сұрақтар бойынша email: legal@cmpro.kz немесе телефон: +7 (777) 332-36-76 арқылы байланысыңыз.'
        }
      }
    }
  }

  const t = translations[language]

  const sections = [
    { key: 'general', icon: FileText },
    { key: 'services', icon: BookOpen },
    { key: 'enrollment', icon: CheckCircle },
    { key: 'attendance', icon: Clock },
    { key: 'behavior', icon: Users },
    { key: 'materials', icon: FileText },
    { key: 'certificates', icon: CheckCircle },
    { key: 'liability', icon: AlertTriangle },
    { key: 'changes', icon: Shield },
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
          transition={{ delay: 1.0 }}
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
                href="mailto:legal@cmpro.kz"
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
