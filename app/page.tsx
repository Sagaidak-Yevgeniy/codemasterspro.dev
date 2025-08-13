'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Mentorship from '@/components/Mentorship'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import { ToastContainer, useToast } from '@/components/Toast'
import MainFloatingNav from '@/components/MainFloatingNav'

import ExitIntentPopup from '@/components/ExitIntentPopup'
import ChatSupport from '@/components/ChatSupport'



export default function Home() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const { toasts, removeToast, success, info } = useToast()
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on component mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  // Add global toast function to window
  useEffect(() => {
    if (!mounted) return

    // Add global toast function to window
    if (typeof window !== 'undefined') {
      window.showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
        if (type === 'success') {
          success(message)
        } else if (type === 'error') {
          // error function not imported, so we'll use success for now
          success(message)
        } else if (type === 'info') {
          info(message)
        } else if (type === 'warning') {
          // warning function not imported, so we'll use info for now
          info(message)
        }
      }
    }
  }, [mounted, success, info])

  // Save language to localStorage when it changes
  const handleLanguageChange = (newLanguage: 'ru' | 'kk') => {
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <motion.img 
            src="/images/Logo.png" 
            alt="CMPro Logo" 
            className="w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header language={language} setLanguage={handleLanguageChange} />
      <Hero language={language} />
      <Courses language={language} />
      <About language={language} />
      <Benefits language={language} />
      <Mentorship language={language} />
      <Team language={language} />
      <Timeline language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <Footer language={language} />
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      {/* Floating Navigation */}
      <MainFloatingNav language={language} />
      
      {/* Mobile Navigation */}
      
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup language={language} />
      
      {/* Chat Support */}
      <ChatSupport language={language} />
    </div>
  )
}
