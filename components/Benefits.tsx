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
  Zap
} from 'lucide-react'

interface BenefitsProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Преимущества обучения',
    subtitle: 'Почему студенты выбирают CodeMastersPRO',
    benefits: [
      {
        icon: GraduationCap,
        title: 'Практические проекты',
        description: 'Создаете реальные проекты для портфолио. Каждый студент выпускается с готовыми работами.',
        color: 'from-blue-500 to-purple-500'
      },
      {
        icon: Briefcase,
        title: 'Карьерная поддержка',
        description: 'Помогаем с трудоустройством. Связи с IT-компаниями и помощь в составлении резюме.',
        color: 'from-green-500 to-teal-500'
      },
      {
        icon: Users,
        title: 'Опытные преподаватели',
        description: 'Преподаватели с опытом работы в крупных IT-компаниях. Актуальные знания и практика.',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: Clock,
        title: 'Гибкий график',
        description: 'Утренние и вечерние группы. Возможность совмещать с работой или учебой.',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: BookOpen,
        title: 'Современные технологии',
        description: 'Изучаете актуальные технологии и инструменты, которые используют в реальных проектах.',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        icon: Trophy,
        title: 'Сертификат',
        description: 'Получаете сертификат о прохождении курса, который ценится работодателями.',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Target,
        title: 'Индивидуальный подход',
        description: 'Персональное внимание к каждому студенту. Помощь в решении любых вопросов.',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        icon: Zap,
        title: 'Быстрый старт',
        description: 'Начинаете с нуля и за короткое время становитесь готовым к работе специалистом.',
        color: 'from-pink-500 to-rose-500'
      }
    ]
  },
  kk: {
    title: 'Оқу артықшылықтары',
    subtitle: 'Неге студенттер CodeMastersPRO-ны таңдайды',
    benefits: [
      {
        icon: GraduationCap,
        title: 'Практикалық жобалар',
        description: 'Портфолио үшін нақты жобалар жасайсыз. Әр студент дайын жұмыстармен түлейді.',
        color: 'from-blue-500 to-purple-500'
      },
      {
        icon: Briefcase,
        title: 'Мансаптық қолдау',
        description: 'Жұмысқа орналасуға көмектесеміз. IT-компаниялармен байланыстар және резюме құруға көмек.',
        color: 'from-green-500 to-teal-500'
      },
      {
        icon: Users,
        title: 'Тәжірибелі оқытушылар',
        description: 'Үлкен IT-компанияларда жұмыс тәжірибесі бар оқытушылар. Ағымдағы білімдер мен тәжірибе.',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: Clock,
        title: 'Икемді кесте',
        description: 'Таңертеңгі және кешкі топтар. Жұмыс немесе оқумен біріктіру мүмкіндігі.',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: BookOpen,
        title: 'Заманауи технологиялар',
        description: 'Нақты жобаларда қолданылатын ағымдағы технологиялар мен құралдарды үйренесіз.',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        icon: Trophy,
        title: 'Сертификат',
        description: 'Жұмыс берушілер қадірлейтін курс аяқтау сертификатын аласыз.',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Target,
        title: 'Жеке көзқарас',
        description: 'Әр студентке жеке көңіл бөлу. Кез келген сұрақтарды шешуге көмек.',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        icon: Zap,
        title: 'Жылдам бастау',
        description: 'Нөлден бастап, қысқа уақыт ішінде жұмысқа дайын маманға айналасыз.',
        color: 'from-pink-500 to-rose-500'
      }
    ]
  }
}

export default function Benefits({ language }: BenefitsProps) {
  const t = translations[language]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Готовы начать свой путь в IT?' 
                : 'IT-тағы жолыңызды бастауға дайынсыз ба?'
              }
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Присоединяйтесь к CodeMastersPRO и станьте востребованным IT-специалистом'
                : 'CodeMastersPRO-ға қосылыңыз және сұранысты IT-маманға айналыңыз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на обучение программированию в CMPro. Можете рассказать подробнее о курсах?'
                  : 'Сәлем! CMPro-да бағдарламалау бойынша оқуға тіркелгім келеді. Курстар туралы толығырақ айта аласыз ба?';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Начать обучение сейчас' : 'Қазір оқуға бастау'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
