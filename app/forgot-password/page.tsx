'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [language, setLanguage] = useState<'ru' | 'kk'>('ru')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage === 'ru' || savedLanguage === 'kk') {
      setLanguage(savedLanguage)
    }
  }, [])

  const translations = {
    ru: {
      title: 'Восстановление пароля',
      subtitle: 'Введите ваш email для восстановления доступа к аккаунту',
      email: 'Email',
      submitButton: 'Отправить инструкции',
      backToLogin: 'Вернуться к входу',
      successTitle: 'Инструкции отправлены!',
      successMessage: 'Проверьте вашу почту и следуйте инструкциям для восстановления пароля.',
      errorMessage: 'Произошла ошибка. Попробуйте еще раз.',
      loading: 'Отправка...'
    },
    kk: {
      title: 'Құпия сөзді қалпына келтіру',
      subtitle: 'Есепке кіру үшін электрондық поштаңызды енгізіңіз',
      email: 'Email',
      submitButton: 'Нұсқаулықтарды жіберу',
      backToLogin: 'Кіруге оралу',
      successTitle: 'Нұсқаулықтар жіберілді!',
      successMessage: 'Электрондық поштаңызды тексеріп, құпия сөзді қалпына келтіру нұсқаулықтарын орындаңыз.',
      errorMessage: 'Қате орын алды. Қайталап көріңіз.',
      loading: 'Жіберілуде...'
    }
  }

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Имитация отправки запроса
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Login */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToLogin}
          </Link>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <img 
              src="/images/Logo.png" 
              alt="CMPro Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Content */}
          {!isSubmitted ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-6"
              >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.subtitle}
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                      placeholder={t.email}
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t.loading}
                    </div>
                  ) : (
                    t.submitButton
                  )}
                </motion.button>
              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t.successTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t.successMessage}
              </p>
              
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToLogin}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
