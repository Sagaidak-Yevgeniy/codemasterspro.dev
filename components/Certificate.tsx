'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Star, Shield, GraduationCap, FileText } from 'lucide-react'
import Image from 'next/image'

interface CertificateProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Сертификат по окончании',
    subtitle: 'Получите официальный сертификат CodeMastersPRO',
    description: 'После успешного завершения курса вы получите именной сертификат, подтверждающий ваши навыки программирования',
    features: [
      {
        icon: Award,
        title: 'Официальный документ',
        description: 'Сертификат с печатью и подписью директора'
      },
      {
        icon: Shield,
        title: 'Защита от подделки',
        description: 'Уникальный QR-код для проверки подлинности'
      },
      {
        icon: Star,
        title: 'Международный стандарт',
        description: 'Сертификат соответствует международным требованиям'
      },
      {
        icon: CheckCircle,
        title: 'Портфолио',
        description: 'Добавьте в резюме и портфолио'
      }
    ],
    benefits: [
      'Подтверждение навыков программирования',
      'Повышение конкурентоспособности на рынке труда',
      'Возможность трудоустройства в IT-компаниях',
      'Доступ к закрытым вакансиям для сертифицированных специалистов'
    ],
    cta: 'Получить сертификат'
  },
  kk: {
    title: 'Аяқтағаннан кейін сертификат',
    subtitle: 'CodeMastersPRO-тың ресми сертификатын алыңыз',
    description: 'Курсты сәтті аяқтағаннан кейін сіз бағдарламалау дағдыларыңызды растайтын жеке сертификат аласыз',
    features: [
      {
        icon: Award,
        title: 'Ресми құжат',
        description: 'Мөрі мен директор қолы бар сертификат'
      },
      {
        icon: Shield,
        title: 'Жалғаннан қорғау',
        description: 'Шынайылығын тексеру үшін бірегей QR-код'
      },
      {
        icon: Star,
        title: 'Халықаралық стандарт',
        description: 'Сертификат халықаралық талаптарға сәйкес'
      },
      {
        icon: CheckCircle,
        title: 'Портфолио',
        description: 'Резюме мен портфолиога қосыңыз'
      }
    ],
    benefits: [
      'Бағдарламалау дағдыларын растау',
      'Еңбек нарығында бәсекеге қабілеттілікті арттыру',
      'IT-компанияларда жұмысқа орналасу мүмкіндігі',
      'Сертификатталған мамандарға арналған жабық вакансияларға қол жеткізу'
    ],
    cta: 'Сертификат алу'
  }
}

export default function Certificate({ language }: CertificateProps) {
  const t = translations[language]

  const handleGetCertificate = () => {
    const message = language === 'ru' 
      ? 'Привет! Хочу узнать подробнее о получении сертификата в CodeMastersPRO. Можете рассказать о процессе и требованиях?'
      : 'Сәлем! CodeMastersPRO-та сертификат алу туралы толығырақ білгім келеді. Процесс пен талаптар туралы айта аласыз ба?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            {t.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Certificate Display */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              
              {/* Certificate Image */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/sertificate.jpg"
                    alt="CodeMastersPRO Certificate"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay with school info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-sm font-medium opacity-90">CodeMastersPRO</div>
                      <div className="text-xs opacity-75">Сертификат программиста</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </motion.div>
            </div>

            {/* Certificate Features */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {t.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Benefits List */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                {language === 'ru' ? 'Преимущества сертификата' : 'Сертификаттың артықшылықтары'}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificate Process */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-blue-700/30">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {language === 'ru' ? 'Как получить сертификат?' : 'Сертификатты қалай алуға болады?'}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'ru' ? 'Успешно завершите курс' : 'Курсты сәтті аяқтаңыз'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'ru' ? 'Сдайте финальный проект' : 'Қорытынды жобаны тапсырыңыз'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'ru' ? 'Получите сертификат' : 'Сертификатты алыңыз'}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetCertificate}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <GraduationCap className="w-6 h-6" />
                <span>{t.cta}</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}