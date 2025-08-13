'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialsProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Отзывы наших студентов',
    subtitle: 'Что говорят о нас выпускники',
    testimonials: [
      {
        name: 'Александр Ким',
        course: 'Python разработчик',
        rating: 5,
        text: 'Отличная школа! Преподаватели объясняют все доступно, много практики. Уже нашел работу в IT компании.',
        avatar: '/images/testimonials/student1.jpg'
      },
      {
        name: 'Мария Нурланова',
        course: 'JavaScript разработчик',
        rating: 5,
        text: 'Благодаря CodeMastersPRO я смогла сменить профессию и стать разработчиком. Очень довольна обучением!',
        avatar: '/images/testimonials/student2.jpg'
      },
      {
        name: 'Дмитрий Соколов',
        course: 'Go разработчик',
        rating: 5,
        text: 'Качественное обучение, современные технологии, отличная поддержка. Рекомендую всем!',
        avatar: '/images/testimonials/student3.jpg'
      }
    ]
  },
  kk: {
    title: 'Студенттеріміздің пікірлері',
    subtitle: 'Түлектеріміз не дейді',
    testimonials: [
      {
        name: 'Александр Ким',
        course: 'Python разработчик',
        rating: 5,
        text: 'Керемет мектеп! Оқытушылар бәрін түсінікті түрде түсіндіреді, көп практика. IT компаниясында жұмыс таптым.',
        avatar: '/images/testimonials/student1.jpg'
      },
      {
        name: 'Мария Нурланова',
        course: 'JavaScript разработчик',
        rating: 5,
        text: 'CodeMastersPRO-ға алғысым шексіз, кәсіп ауыстырып дамушы болдым. Оқудан өте қуаныштымын!',
        avatar: '/images/testimonials/student2.jpg'
      },
      {
        name: 'Дмитрий Соколов',
        course: 'Go разработчик',
        rating: 5,
        text: 'Сапалы оқыту, заманауи технологиялар, керемет қолдау. Барлығына ұсынамын!',
        avatar: '/images/testimonials/student3.jpg'
      }
    ]
  }
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-primary-600 text-sm">{testimonial.course}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Присоединяйтесь к нашим успешным выпускникам!' : 'Сәтті түлектерімізге қосылыңыз!'}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {language === 'ru' 
                ? 'Начните свой путь в IT вместе с CodeMastersPRO'
                : 'CodeMastersPRO-мен бірге IT жолын бастаңыз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const message = language === 'ru' 
                  ? 'Привет! Хочу записаться на курсы CodeMastersPRO'
                  : 'Сәлем! CodeMastersPRO курстарына жазылғым келеді';
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77773323676?text=${encodedMessage}`, '_blank');
              }}
            >
              {language === 'ru' ? 'Записаться на курсы' : 'Курстарға жазылу'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
