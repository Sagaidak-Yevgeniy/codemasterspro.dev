'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Courses language={language} />
      <About language={language} />
      <Benefits language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}
