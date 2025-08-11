'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Globe } from 'lucide-react'

interface TeamProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Наша команда',
    subtitle: 'Опытные преподаватели с реальным опытом работы в IT',
    description: 'Наши преподаватели - это практикующие разработчики с многолетним опытом работы в ведущих IT компаниях.',
    team: [
      {
        name: 'Сагайдак Евгений Александрович',
        position: 'Senior Full-Stack Developer',
        experience: '10+ лет опыта',
        description: 'Опытный разработчик с экспертизой в Python, JavaScript, Go и современных веб-технологиях. Создал множество успешных проектов и обучил сотни студентов.',
        skills: ['Python', 'JavaScript', 'Go', 'React', 'Django', 'Node.js'],
        image: '/images/Sagaidak.jpeg.jpg',
        linkedin: '#',
        github: '#',
        website: '#'
      }
    ]
  },
  kk: {
    title: 'Біздің команда',
    subtitle: 'IT саласында нақты жұмыс тәжірибесі бар тәжірибелі оқытушылар',
    description: 'Біздің оқытушыларымыз - жетекші IT компанияларда көпжылдық жұмыс тәжірибесі бар тәжірибелі дамушылар.',
    team: [
      {
        name: 'Сагайдак Евгений Александрович',
        position: 'Senior Full-Stack Developer',
        experience: '10+ жыл тәжірибе',
        description: 'Python, JavaScript, Go және заманауи веб-технологиялар бойынша тәжірибелі дамушы. Көптеген сәтті жобалар жасаған және жүздеген студент оқытқан.',
        skills: ['Python', 'JavaScript', 'Go', 'React', 'Django', 'Node.js'],
        image: '/images/Sagaidak.jpeg.jpg',
        linkedin: '#',
        github: '#',
        website: '#'
      }
    ]
  }
}

export default function Team({ language }: TeamProps) {
  const t = translations[language]

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>



        {/* Team Members */}
        <div className="flex justify-center">
          <div className="max-w-md">
          {t.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Member Image */}
              <div className="relative h-80 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={member.website}
                    className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ru' ? 'Готовы учиться у профессионалов?' : 'Кәсіби мамандардан оқуға дайынсыз ба?'}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {language === 'ru' 
                ? 'Присоединяйтесь к нашим курсам и станьте частью IT-сообщества'
                : 'Біздің курстарға қосылыңыз және IT қоғамының бөлігі болыңыз'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
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
