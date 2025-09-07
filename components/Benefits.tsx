'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Clock, 
  BookOpen, 
  Trophy,
  Target,
  Zap,
  Monitor,
  Sparkles,
  Star,
  CheckCircle
} from 'lucide-react'

interface BenefitsProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Почему выбирают CodeMastersPRO',
    subtitle: 'Современный подход к обучению программированию для школьников и взрослых',
    benefits: [
      {
        icon: Monitor,
        title: 'Современное оборудование',
        description: 'Не нужно покупать компьютер! Мы предоставляем мощные современные компьютеры для обучения.',
        color: 'from-emerald-500 to-teal-500',
        highlight: 'БЕСПЛАТНО'
      },
      {
        icon: GraduationCap,
        title: 'Практические проекты',
        description: 'Создаете реальные проекты для портфолио. Каждый студент выпускается с готовыми работами.',
        color: 'from-blue-500 to-indigo-500',
        highlight: 'ПОРТФОЛИО'
      },
      {
        icon: Briefcase,
        title: 'Карьерная поддержка',
        description: 'Помогаем с трудоустройством. Связи с IT-компаниями и помощь в составлении резюме.',
        color: 'from-green-500 to-emerald-500',
        highlight: 'ТРУДОУСТРОЙСТВО'
      },
      {
        icon: Users,
        title: 'Опытные преподаватели',
        description: 'Преподаватели с опытом работы в крупных IT-компаниях. Актуальные знания и практика.',
        color: 'from-orange-500 to-red-500',
        highlight: 'ЭКСПЕРТЫ'
      },
      {
        icon: Clock,
        title: 'Гибкий график',
        description: 'Утренние и вечерние группы. Возможность совмещать с работой или учебой.',
        color: 'from-purple-500 to-pink-500',
        highlight: 'ГИБКОСТЬ'
      },
      {
        icon: BookOpen,
        title: 'Современные технологии',
        description: 'Изучаете актуальные технологии и инструменты, которые используют в реальных проектах.',
        color: 'from-cyan-500 to-blue-500',
        highlight: 'АКТУАЛЬНО'
      },
      {
        icon: Trophy,
        title: 'Сертификат',
        description: 'Получаете сертификат о прохождении курса, который ценится работодателями.',
        color: 'from-yellow-500 to-orange-500',
        highlight: 'СЕРТИФИКАТ'
      },
      {
        icon: Target,
        title: 'Индивидуальный подход',
        description: 'Персональное внимание к каждому студенту. Помощь в решении любых вопросов.',
        color: 'from-indigo-500 to-purple-500',
        highlight: 'ПЕРСОНАЛЬНО'
      },
      {
        icon: Sparkles,
        title: 'Для школьников и взрослых',
        description: 'Специальные программы для школьников (подготовка к ЕНТ) и взрослых (смена карьеры).',
        color: 'from-pink-500 to-rose-500',
        highlight: 'ВСЕ ВОЗРАСТЫ'
      },
      {
        icon: BookOpen,
        title: 'Менторство в информатике',
        description: 'Индивидуальная помощь в разборе школьной информатики, подготовка к олимпиадам и ЕНТ.',
        color: 'from-indigo-500 to-purple-500',
        highlight: 'МЕНТОРСТВО'
      }
    ],
    equipmentTitle: 'Какое оборудование нужно для обучения?',
    equipmentSubtitle: 'Ничего не нужно покупать!',
    equipmentDescription: 'Мы предоставляем все необходимое для комфортного обучения',
    equipmentFeatures: [
      'Современные компьютеры с мощными процессорами',
      'Высокоскоростной интернет',
      'Все необходимые программы и лицензии',
      'Комфортные рабочие места',
      'Техническая поддержка 24/7'
    ]
  },
  kk: {
    title: 'Неге CodeMastersPRO-ны таңдайды',
    subtitle: 'Мектеп оқушылары және ересектер үшін бағдарламалау бойынша заманауи оқу тәсілі',
    benefits: [
      {
        icon: Monitor,
        title: 'Заманауи жабдықтар',
        description: 'Компьютер сатып алудың қажеті жоқ! Оқу үшін күшті заманауи компьютерлерді қамтамасыз етеміз.',
        color: 'from-emerald-500 to-teal-500',
        highlight: 'ТЕГІН'
      },
      {
        icon: GraduationCap,
        title: 'Практикалық жобалар',
        description: 'Портфолио үшін нақты жобалар жасайсыз. Әр студент дайын жұмыстармен түлейді.',
        color: 'from-blue-500 to-indigo-500',
        highlight: 'ПОРТФОЛИО'
      },
      {
        icon: Briefcase,
        title: 'Мансаптық қолдау',
        description: 'Жұмысқа орналасуға көмектесеміз. IT-компаниялармен байланыстар және резюме құруға көмек.',
        color: 'from-green-500 to-emerald-500',
        highlight: 'ЖҰМЫС'
      },
      {
        icon: Users,
        title: 'Тәжірибелі оқытушылар',
        description: 'Үлкен IT-компанияларда жұмыс тәжірибесі бар оқытушылар. Ағымдағы білімдер мен тәжірибе.',
        color: 'from-orange-500 to-red-500',
        highlight: 'ЭКСПЕРТТЕР'
      },
      {
        icon: Clock,
        title: 'Икемді кесте',
        description: 'Таңертеңгі және кешкі топтар. Жұмыс немесе оқумен біріктіру мүмкіндігі.',
        color: 'from-purple-500 to-pink-500',
        highlight: 'ИКЕМДІЛІК'
      },
      {
        icon: BookOpen,
        title: 'Заманауи технологиялар',
        description: 'Нақты жобаларда қолданылатын ағымдағы технологиялар мен құралдарды үйренесіз.',
        color: 'from-cyan-500 to-blue-500',
        highlight: 'АҒЫМДАҒЫ'
      },
      {
        icon: Trophy,
        title: 'Сертификат',
        description: 'Жұмыс берушілер қадірлейтін курс аяқтау сертификатын аласыз.',
        color: 'from-yellow-500 to-orange-500',
        highlight: 'СЕРТИФИКАТ'
      },
      {
        icon: Target,
        title: 'Жеке көзқарас',
        description: 'Әр студентке жеке көңіл бөлу. Кез келген сұрақтарды шешуге көмек.',
        color: 'from-indigo-500 to-purple-500',
        highlight: 'ЖЕКЕ'
      },
      {
        icon: Sparkles,
        title: 'Мектеп оқушылары және ересектер үшін',
        description: 'Мектеп оқушылары үшін арнайы бағдарламалар (ЕНТ-ке дайындық) және ересектер үшін (мансапты өзгерту).',
        color: 'from-pink-500 to-rose-500',
        highlight: 'БАРЛЫҚ ЖАСТАР'
      },
      {
        icon: BookOpen,
        title: 'Информатика бойынша менторлық',
        description: 'Мектеп информатикасын талдауда жеке көмек, олимпиадалар мен ЕНТ-ке дайындық.',
        color: 'from-indigo-500 to-purple-500',
        highlight: 'МЕНТОРЛЫҚ'
      }
    ],
    equipmentTitle: 'Оқу үшін қандай жабдықтар қажет?',
    equipmentSubtitle: 'Ештеңе сатып алудың қажеті жоқ!',
    equipmentDescription: 'Қолайлы оқу үшін барлық қажетті нәрселерді қамтамасыз етеміз',
    equipmentFeatures: [
      'Күшті процессорлармен заманауи компьютерлер',
      'Жоғары жылдамдықты интернет',
      'Барлық қажетті бағдарламалар мен лицензиялар',
      'Қолайлы жұмыс орындары',
      '24/7 техникалық қолдау'
    ]
  }
}

export default function Benefits({ language }: BenefitsProps) {
  const t = translations[language]

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            {t.title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {/* First 8 benefits in 4x2 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 col-span-full">
            {t.benefits.slice(0, 8).map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Highlight badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {benefit.highlight}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`relative w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Star className="w-6 h-6 text-primary-500" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Last 2 benefits centered */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 col-span-full max-w-2xl mx-auto">
            {t.benefits.slice(8).map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + 8) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Highlight badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {benefit.highlight}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`relative w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Star className="w-6 h-6 text-primary-500" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
        </div>

        {/* Equipment Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 rounded-2xl p-6 lg:p-8 border border-emerald-200 dark:border-emerald-700/30">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.equipmentTitle}
              </h3>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                {t.equipmentSubtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.equipmentDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First 3 features in 3-column grid */}
              {t.equipmentFeatures.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-800/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Last 2 features centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
              {t.equipmentFeatures.slice(3).map((feature, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-800/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {language === 'ru' 
                  ? 'Готовы начать свой путь в IT?' 
                  : 'IT-тағы жолыңызды бастауға дайынсыз ба?'
                }
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                {language === 'ru'
                                ? 'Присоединяйтесь к CodeMastersPRO и станьте востребованным IT-специалистом'
              : 'CodeMastersPRO-ға қосылыңыз және сұранысты IT-маманға айналыңыз'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-primary-600 font-semibold text-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  onClick={() => {
                    const message = language === 'ru' 
                                      ? 'Привет! Хочу записаться на обучение программированию в CodeMastersPRO. Можете рассказать подробнее о курсах?'
                  : 'Сәлем! CodeMastersPRO-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                  }}
                >
                  <Zap className="w-3 h-3" />
                  <span>{language === 'ru' ? 'Начать обучение сейчас' : 'Қазір оқуға бастау'}</span>
                </motion.button>

                {/* Telegram Bot Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white font-semibold text-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  onClick={() => {
                    const message = language === 'ru' 
                      ? 'Привет! Хочу подключить Telegram бота CodeMastersPRO для управления обучением. Можете помочь?'
                      : 'Сәлем! CodeMastersPRO Telegram ботын оқу басқару үшін қосқым келеді. Көмектесе аласыз ба?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://t.me/CodeMastersPRO_bot?start=${encodedMessage}`, '_blank');
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.div>
                  <span>{language === 'ru' ? '🤖 Telegram бот' : '🤖 Telegram бот'}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
