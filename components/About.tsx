'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Code, 
  Users, 
  Target, 
  Zap, 
  Star,
  TrendingUp,
  Lightbulb,
  Rocket,
  Shield,
  BookOpen
} from 'lucide-react'

interface AboutProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Наша методология обучения',
    subtitle: 'Современный подход к образованию в IT для школьников и взрослых',
    description: 'Мы используем инновационные методы обучения, которые позволяют школьникам и взрослым быстро освоить программирование и стать востребованными специалистами.',
    methodology: [
      {
        icon: Brain,
        title: 'Практико-ориентированный подход',
        description: '80% времени - практика, 20% - теория. Вы сразу создаете реальные проекты.',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Code,
        title: 'Проектное обучение',
        description: 'Каждый модуль завершается созданием полноценного проекта для портфолио.',
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Users,
        title: 'Менторская поддержка и школьное менторство',
        description: 'Персональный ментор сопровождает вас на протяжении всего обучения. Индивидуальная помощь в информатике, разбор сложных тем и подготовка к экзаменам.',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Target,
        title: 'Целевое обучение',
        description: 'Программа адаптируется под ваши цели: фриланс, работа в компании или стартап.',
        color: 'from-orange-500 to-red-500'
      }
    ],
    advantages: [
      {
        icon: Zap,
        title: 'Быстрый старт',
        description: 'Первые результаты уже через 2 недели обучения'
      },
      {
        icon: TrendingUp,
        title: 'Постоянное развитие',
        description: 'Обновляем программы под актуальные требования рынка'
      },
      {
        icon: Lightbulb,
        title: 'Инновационные методы',
        description: 'Используем AI-инструменты и современные технологии обучения'
      },
      {
        icon: Rocket,
        title: 'Карьерный рост',
        description: 'Помогаем с трудоустройством и развитием карьеры'
      }
    ],
    stats: {
      success: '95%',
      successText: 'студентов находят работу',
      speed: '3-6',
      speedText: 'месяцев до первой работы',
      projects: '15+',
      projectsText: 'проектов в портфолио',
      salary: '2-5x',
      salaryText: 'рост зарплаты после курса'
    },
    cta: 'Начать обучение'
  },
  kk: {
    title: 'Біздің оқу әдістемесі',
    subtitle: 'Мектеп оқушылары және ересектер үшін IT-тағы заманауи білім беру тәсілі',
    description: 'Біз мектеп оқушылары мен ересектерге бағдарламалауды жылдам меңгеруге және сұранысты мамандарға айналуға мүмкіндік беретін инновациялық оқу әдістерін қолданамыз.',
    methodology: [
      {
        icon: Brain,
        title: 'Практикалық бағытталған тәсіл',
        description: '80% уақыт - практика, 20% - теория. Сіз бірден нақты жобалар жасайсыз.',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Code,
        title: 'Жобалық оқу',
        description: 'Әр модуль портфолиоға арналған толық жоба жасаумен аяқталады.',
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Users,
        title: 'Менторлық қолдау және мектеп менторлығы',
        description: 'Жеке ментор сізді бүкіл оқу барысында қамтамасыз етеді. Информатикада жеке көмек, күрделі тақырыптарды талдау және емтихандарға дайындық.',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Target,
        title: 'Мақсатты оқу',
        description: 'Бағдарлама сіздің мақсаттарыңызға сәйкес бейімделеді: фриланс, компанияда жұмыс немесе стартап.',
        color: 'from-orange-500 to-red-500'
      }
    ],
    advantages: [
      {
        icon: Zap,
        title: 'Жылдам бастау',
        description: 'Алғашқы нәтижелер оқу басталғаннан кейін 2 апта ішінде'
      },
      {
        icon: TrendingUp,
        title: 'Үздіксіз даму',
        description: 'Бағдарламаларды нарықтың ағымдағы талаптарына сәйкес жаңартамыз'
      },
      {
        icon: Lightbulb,
        title: 'Инновациялық әдістер',
        description: 'AI-құралдар мен заманауи оқу технологияларын қолданамыз'
      },
      {
        icon: Rocket,
        title: 'Мансаптық өсу',
        description: 'Жұмысқа орналасу мен мансапты дамытуға көмектесеміз'
      }
    ],
    stats: {
      success: '95%',
      successText: 'студенттер жұмыс табады',
      speed: '3-6',
      speedText: 'ай бірінші жұмысқа дейін',
      projects: '15+',
      projectsText: 'портфолиодағы жоба',
      salary: '2-5x',
      salaryText: 'курс кейінгі жалақы өсуі'
    },
    cta: 'Оқуға бастау'
  }
}

export default function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            {t.title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {t.methodology.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20 rounded-2xl p-8 lg:p-12 border border-purple-200 dark:border-purple-700/30">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'ru' ? 'Наши преимущества' : 'Біздің артықшылықтарымыз'}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {language === 'ru' 
                  ? 'Почему наша методология работает лучше традиционных подходов'
                  : 'Неге біздің әдістеме дәстүрлі тәсілдерден жақсырақ жұмыс істейді'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.advantages.map((advantage, index) => {
                const IconComponent = advantage.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {advantage.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{t.stats.success}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.stats.successText}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">{t.stats.speed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.stats.speedText}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t.stats.projects}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.stats.projectsText}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{t.stats.salary}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.stats.salaryText}</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {language === 'ru' 
                  ? 'Готовы изменить свою жизнь?' 
                  : 'Өміріңізді өзгертуге дайынсыз ба?'
                }
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                {language === 'ru'
                  ? 'Присоединяйтесь к CMPro и станьте востребованным IT-специалистом'
                  : 'CMPro-ға қосылыңыз және сұранысты IT-маманға айналыңыз'
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 font-bold text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                onClick={() => {
                  const message = language === 'ru' 
                    ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                    : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
                }}
              >
                <Rocket className="w-5 h-5" />
                <span>{t.cta}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
