'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import { ToastContainer, useToast } from '@/components/Toast'
import MainFloatingNav from '@/components/MainFloatingNav'
import ProgressBar from '@/components/ProgressBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ChatSupport from '@/components/ChatSupport'



export default function Home() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const { toasts, removeToast } = useToast()
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on component mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const handleLanguageChange = (newLanguage: 'ru' | 'kk') => {
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-300">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <ProgressBar />
      <Header language={language} setLanguage={handleLanguageChange} />
      <Hero language={language} />
      <Courses language={language} />
      <About language={language} />
      <Benefits language={language} />

      <Team language={language} />
      <Timeline language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <Footer language={language} />
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      {/* Floating Navigation */}
      <MainFloatingNav language={language} />
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup language={language} />
      
      {/* Chat Support */}
      <ChatSupport language={language} />
    </div>
  )
}
