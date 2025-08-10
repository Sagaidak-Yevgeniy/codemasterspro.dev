'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock, MapPin, Star } from 'lucide-react'

interface AboutProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Почему CodeMastersPRO?',
    subtitle: 'Мы создаем будущих IT-специалистов с 2024 года',
    description: 'CodeMastersPRO - это современная школа программирования в Павлодаре, где мы обучаем студентов самым востребованным технологиям в IT-индустрии.',
    features: [
      'Опытные преподаватели с реальным опытом работы',
      'Практические проекты и портфолио',
      'Офлайн занятия в удобном формате',
      'Поддержка после выпуска',
      'Современные технологии и инструменты',
      'Индивидуальный подход к каждому студенту'
    ],
    stats: {
      years: '2+',
      yearsText: 'года опыта',
      students: '50+',
      studentsText: 'выпускников',
      projects: '10+',
      projectsText: 'реализованных проектов',
      satisfaction: '98%',
      satisfactionText: 'довольных студентов'
    },
    location: 'Павлодар, ул. Е. Бекмаханова 115/2 (угол улиц Назарбаева и Естая)',
    schedule: 'Гибкий график занятий',
    cta: 'Присоединиться к нам',
  },
  kk: {
    title: 'Неге CodeMastersPRO?',
    subtitle: '2024 жылдан бері болашақ IT мамандарын дайындаймыз',
    description: 'CodeMastersPRO - Павлодардағы заманауи бағдарламалау мектебі, мұнда біз студенттерді IT саласындағы ең сұранысты технологиялармен оқытамыз.',
    features: [
      'Нақты жұмыс тәжірибесі бар тәжірибелі оқытушылар',
      'Практикалық жобалар мен портфолио',
      'Ыңғайлы форматтағы жүзбелі сабақтар',
      'Түлеу кейінгі қолдау',
      'Заманауи технологиялар мен құралдар',
      'Әр студентке жеке көзқарас'
    ],
    stats: {
      years: '2+',
      yearsText: 'жыл тәжірибе',
      students: '50+',
      studentsText: 'түлек',
      projects: '10+',
      projectsText: 'жүзеге асырылған жоба',
      satisfaction: '98%',
      satisfactionText: 'қанағаттанарлық студент'
    },
    location: 'Павлодар, көш. Е. Бекмаханова 115/2 (Назарбаев және Естая көшелерінің қиылысы)',
    schedule: 'Икемді сабақ кестесі',
    cta: 'Бізге қосылыңыз',
  }
}

export default function About({ language }: AboutProps) {
  const t = translations[language]
  
  // Вычисляем годы опыта с 2024 года, округляя к большему
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = Math.ceil((currentYear - startYear) + (new Date().getMonth() + 1) / 12)

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t.title}
              </h2>
              <p className="text-xl text-primary-600 font-semibold mb-6">
                {t.subtitle}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {t.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.open('https://wa.me/77773323676', '_blank')}
            >
              {t.cta}
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{yearsOfExperience}+</div>
                <div className="text-sm text-gray-600">{t.stats.yearsText}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{t.stats.students}</div>
                <div className="text-sm text-gray-600">{t.stats.studentsText}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{t.stats.projects}</div>
                <div className="text-sm text-gray-600">{t.stats.projectsText}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{t.stats.satisfaction}</div>
                <div className="text-sm text-gray-600">{t.stats.satisfactionText}</div>
              </motion.div>
            </div>

            {/* Location & Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.location}</h4>
                    <p className="text-sm text-gray-600">{language === 'ru' ? 'Удобное расположение' : 'Ыңғайлы орналасу'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.schedule}</h4>
                    <p className="text-sm text-gray-600">{language === 'ru' ? 'Утренние и вечерние группы' : 'Таңертеңгі және кешкі топтар'}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/90 mb-3 italic">
                    "{language === 'ru' 
                      ? 'CodeMastersPRO помог мне стать профессиональным разработчиком. Отличные преподаватели и практический подход!' 
                      : 'CodeMastersPRO кәсіби дамушы болуға көмектесті. Керемет оқытушылар мен практикалық көзқарас!'}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">{language === 'ru' ? 'Марат, Python разработчик' : 'Марат, Python дамушы'}</div>
                    <div className="text-white/70">{language === 'ru' ? 'Выпускник 2025' : '2023 түлегі'}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
