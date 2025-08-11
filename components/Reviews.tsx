'use client'

import { motion } from 'framer-motion'
import { Star, MessageCircle } from 'lucide-react'

interface ReviewsProps {
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    title: 'Отзывы наших студентов',
    subtitle: 'Реальные отзывы из 2GIS',
    description: 'Узнайте, что говорят о нас наши выпускники',
    cta: 'Оставить отзыв',
    ctaDesc: 'Поделитесь своим опытом обучения'
  },
  kk: {
    title: 'Студенттеріміздің пікірлері',
    subtitle: '2GIS-тен нақты пікірлер',
    description: 'Түлектеріміз біз туралы не дейтінін біліңіз',
    cta: 'Пікір қалдыру',
    ctaDesc: 'Оқу тәжірибеңізді бөлісіңіз'
  }
}

export default function Reviews({ language }: ReviewsProps) {
  const t = translations[language]

  return (
         <section id="reviews" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-8"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
             {t.title}
           </h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             {t.subtitle}
           </p>
         </motion.div>

                 <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="max-w-5xl mx-auto"
         >
           <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
             <div className="flex justify-center mb-6">
               <iframe 
                 id="big_light_70000001083544695" 
                 frameBorder="0" 
                 width="100%" 
                 height="500px" 
                 sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                 className="rounded-xl shadow-lg"
                 title={language === 'ru' ? 'Отзывы 2GIS' : '2GIS пікірлері'}
               />
             </div>
            
                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-center"
             >
               <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-4 text-white">
                 <div className="flex items-center justify-center space-x-3 mb-3">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                     <MessageCircle className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-bold">
                     {language === 'ru' ? 'Поделитесь своим опытом!' : 'Тәжірибеңізді бөлісіңіз!'}
                   </h3>
                 </div>
                 <p className="text-sm text-white/90 mb-4">
                   {language === 'ru' 
                     ? 'Оставьте отзыв в 2GIS и помогите другим сделать правильный выбор'
                     : '2GIS-те пікір қалдырыңыз және басқаларға дұрыс таңдау жасауға көмектесіңіз'
                   }
                 </p>
                                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-white text-primary-600 font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto text-sm"
                  onClick={() => {
                    window.open('https://2gis.kz/pavlodar/search/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BA%D1%83%D1%80%D1%81%D1%8B/rubricId/678/page/2/firm/70000001083544695/76.968865%2C52.283134/tab/reviews/addreview?m=76.9667%2C52.283504%2F10.72', '_blank');
                  }}
                >
                  <Star className="w-5 h-5" />
                  <span>{t.cta}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            ((r,u)=>{
              const l=document.getElementById(r);
              if(l && l.contentWindow) {
                l.contentWindow.document.open();
                l.contentWindow.document.write(decodeURIComponent(escape(atob(u))));
                l.contentWindow.document.close();
              }
            })("big_light_70000001083544695", "PGhlYWQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgd2luZG93Ll9fc2l6ZV9fPSdiaWcnOwogICAgd2luZG93Ll9fdGhlbWVfXz0nbGlnaHQnOwogICAgd2luZG93Ll9fYnJhbmNoSWRfXz0nNzAwMDAwMDEwODM1NDQ2OTUnCiAgICB3aW5kb3cuX19vcmdJZF9fPSc3MDAwMDAwMTA4MzU0NDY5NCcKICAgPC9zY3JpcHQ+PHNjcmlwdCBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiB0eXBlPSJtb2R1bGUiIHNyYz0iaHR0cHM6Ly9kaXNrLjJnaXMuY29tL3dpZGdldC1jb25zdHJ1Y3Rvci9hc3NldHMvaWZyYW1lLmpzIj48L3NjcmlwdD48bGluayByZWw9Im1vZHVsZXByZWxvYWQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmpzIj48bGluayByZWw9InN0eWxlc2hlZXQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmNzcyI+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImlmcmFtZSI+PC9kaXY+PC9ib2R5Pg==")
          `
        }}
      />
    </section>
  )
}
