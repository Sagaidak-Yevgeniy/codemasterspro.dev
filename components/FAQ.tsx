'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

interface FAQProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Часто задаваемые вопросы',
    subtitle: 'Ответы на популярные вопросы о наших курсах',
    faqs: [
      {
        question: 'Сколько длится обучение?',
        answer: 'Длительность курсов варьируется от 5 до 7 месяцев в зависимости от направления. Python и аналитика данных - 6 месяцев, Golang - 5 месяцев, JavaScript - 7 месяцев.'
      },
      {
        question: 'Нужны ли базовые знания программирования?',
        answer: 'Нет, наши курсы подходят для начинающих. Мы обучаем с нуля и постепенно переходим к сложным темам. Для Golang и аналитики данных желательно знание основ программирования.'
      },
      {
        question: 'Какие документы нужны для поступления?',
        answer: 'Для записи на курсы достаточно паспорта и желания учиться. Мы не требуем специального образования или опыта в программировании.'
      },
      {
        question: 'Есть ли возможность трудоустройства после курсов?',
        answer: 'Да, мы помогаем нашим выпускникам с трудоустройством. У нас есть партнерские отношения с IT компаниями, и мы проводим карьерные консультации.'
      },
      {
        question: 'Можно ли совмещать обучение с работой?',
        answer: 'Да, мы предлагаем гибкий график занятий. Занятия проходят в вечернее время и по выходным, что позволяет совмещать обучение с работой или учебой.'
      },
      {
        question: 'Что входит в стоимость курса?',
        answer: 'В стоимость входят все учебные материалы, доступ к онлайн-ресурсам, сертификат об окончании курса, поддержка преподавателей и помощь в трудоустройстве.'
      },
      {
        question: 'Есть ли пробное занятие?',
        answer: 'Да, мы предлагаем бесплатное пробное занятие, где вы можете познакомиться с преподавателем, методикой обучения и задать все интересующие вопросы.'
      },
      {
        question: 'Какое оборудование нужно для обучения?',
        answer: 'Достаточно ноутбука с Windows, macOS или Linux. Мы предоставляем все необходимые программы и инструменты для разработки.'
      }
    ]
  },
  kk: {
    title: 'Жиі қойылатын сұрақтар',
    subtitle: 'Біздің курстар туралы танымал сұрақтарға жауаптар',
    faqs: [
      {
        question: 'Оқу қанша уақытқа созылады?',
        answer: 'Курстардың ұзақтығы бағытқа байланысты 5-7 ай аралығында. Python және деректер талдауы - 6 ай, Golang - 5 ай, JavaScript - 7 ай.'
      },
      {
        question: 'Бағдарламалау бойынша негізгі білім қажет пе?',
        answer: 'Жоқ, біздің курстар бастаушыларға жарайды. Біз нөлден бастап оқытамыз және күрделі тақырыптарға көшеміз. Golang және деректер талдауы үшін бағдарламалау негіздерін білу қажет.'
      },
      {
        question: 'Қабылдау үшін қандай құжаттар қажет?',
        answer: 'Курстарға жазылу үшін паспорт және оқуға деген құштарлық жеткілікті. Біз арнайы білім немесе бағдарламалау тәжірибесін талап етпейміз.'
      },
      {
        question: 'Курстардан кейін жұмысқа орналасу мүмкіндігі бар ма?',
        answer: 'Иә, біз түлектерімізге жұмысқа орналасуға көмектесеміз. Біздің IT компаниялармен серіктестік қатынастарымыз бар және мансап кеңесшілігін жүргіземіз.'
      },
      {
        question: 'Оқуды жұмыспен біріктіруге бола ма?',
        answer: 'Иә, біз икемді сабақ кестесі ұсынамыз. Сабақтар кешке және демалыс күндері өтеді, бұл оқуды жұмыс немесе оқумен біріктіруге мүмкіндік береді.'
      },
      {
        question: 'Курс құнына не кіреді?',
        answer: 'Құнға барлық оқу материалдары, онлайн-ресурстарға кіру, курс аяқтау сертификаты, оқытушылардың қолдауы және жұмысқа орналасуға көмек кіреді.'
      },
      {
        question: 'Сынақ сабағы бар ма?',
        answer: 'Иә, біз тегін сынақ сабағын ұсынамыз, онда сіз оқытушымен, оқу әдістемесімен таныса аласыз және барлық қызықтыратын сұрақтарды қоя аласыз.'
      },
      {
        question: 'Оқу үшін қандай жабдық қажет?',
        answer: 'Windows, macOS немесе Linux операциялық жүйесі бар ноутбук жеткілікті. Біз даму үшін қажетті барлық бағдарламалар мен құралдарды ұсынамыз.'
      }
    ]
  }
}

export default function FAQ({ language }: FAQProps) {
  const t = translations[language]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Остались вопросы?' : 'Сұрақтарыңыз қалды ма?'}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {language === 'ru' 
                ? 'Свяжитесь с нами, и мы ответим на все ваши вопросы'
                : 'Бізбен байланысыңыз, біз барлық сұрақтарыңызға жауап береміз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! У меня есть вопросы о курсах CodeMastersPRO'
                  : 'Сәлем! CodeMastersPRO курстары туралы сұрақтарым бар';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Задать вопрос' : 'Сұрақ қою'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
