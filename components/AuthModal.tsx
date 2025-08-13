'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'login' | 'register'
  language: 'ru' | 'kk'
}

const translations = {
  ru: {
    login: {
      title: 'Войти в аккаунт',
      subtitle: 'Добро пожаловать обратно!',
      email: 'Email',
      password: 'Пароль',
      forgotPassword: 'Забыли пароль?',
      loginButton: 'Войти',
      noAccount: 'Нет аккаунта?',
      registerLink: 'Зарегистрироваться'
    },
    register: {
      title: 'Создать аккаунт',
      subtitle: 'Присоединяйтесь к CodeMastersPRO!',
      name: 'Имя',
      email: 'Email',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      registerButton: 'Зарегистрироваться',
      haveAccount: 'Уже есть аккаунт?',
      loginLink: 'Войти'
    }
  },
  kk: {
    login: {
      title: 'Есепке кіру',
      subtitle: 'Қайта қош келдіңіз!',
      email: 'Email',
      password: 'Құпия сөз',
      forgotPassword: 'Құпия сөзді ұмыттыңыз ба?',
      loginButton: 'Кіру',
      noAccount: 'Есеп жоқ па?',
      registerLink: 'Тіркелу'
    },
    register: {
      title: 'Есеп жасау',
      subtitle: 'CodeMastersPRO-қа қосылыңыз!',
      name: 'Аты',
      email: 'Email',
      password: 'Құпия сөз',
      confirmPassword: 'Құпия сөзді растаңыз',
      registerButton: 'Тіркелу',
      haveAccount: 'Есеп бар ма?',
      loginLink: 'Кіру'
    }
  }
}

export default function AuthModal({ isOpen, onClose, mode, language }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(mode === 'login')
  
  // Reset mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLogin(mode === 'login')
      setFormData({ name: '', email: '', password: '', confirmPassword: '' })
    }
  }, [mode, isOpen])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Убираем блокировку прокрутки
      // document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      // document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const t = translations[language][isLogin ? 'login' : 'register']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика авторизации/регистрации
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-isolated"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
          }}
        >
                     <motion.div
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.9, opacity: 0, y: 20 }}
             transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                           className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mx-4 isolate"
                           onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
           >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tl from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl"
              />
            </div>

                         {/* Close button */}
             <motion.button
               whileHover={{ scale: 1.1, rotate: 90 }}
               whileTap={{ scale: 0.9 }}
               onClick={onClose}
               className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
             >
               <X className="w-4 h-4" />
             </motion.button>

                                                   <div className="relative z-10 p-4 sm:p-5">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                                 className="text-center mb-6"
              >
                                                   <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {/* Простое лого без фона и анимации */}
                    <img 
                      src="/images/Logo.png" 
                      alt="CMPro Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                                   <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {t.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {t.subtitle}
                  </p>
              </motion.div>

                             {/* Form */}
               <motion.form
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 onSubmit={handleSubmit}
                                   className="space-y-3 sm:space-y-4"
               >
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                                                                 <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t.name}
                        </label>
                     <div className="relative">
                       <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                               <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm"
                          placeholder={t.name}
                        />
                     </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isLogin ? 0.3 : 0.4 }}
                >
                                                         <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.email}
                    </label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                           <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm"
                        placeholder={t.email}
                      />
                   </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isLogin ? 0.4 : 0.5 }}
                >
                                                         <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.password}
                    </label>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                           <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm"
                        placeholder={t.password}
                      />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                     >
                       {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                     </button>
                   </div>
                </motion.div>

                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                                                                 <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t.confirmPassword}
                        </label>
                     <div className="relative">
                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                               <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm"
                          placeholder={t.confirmPassword}
                        />
                       <button
                         type="button"
                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                       >
                         {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                       </button>
                     </div>
                  </motion.div>
                )}

                {isLogin && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-right"
                  >
                    <button
                      type="button"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {t.forgotPassword}
                    </button>
                  </motion.div>
                )}

                                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   type="submit"
                                       className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-semibold py-2 sm:py-2.5 px-6 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-sm"
                 >
                  <motion.div
                    animate={{ 
                      x: ['-100%', '100%']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                                     <span className="relative flex items-center justify-center">
                     {isLogin ? t.loginButton : t.registerButton}
                     <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                   </span>
                </motion.button>
              </motion.form>

                                                           {/* Toggle mode */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 sm:mt-4 text-center"
                >
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {isLogin ? t.noAccount : t.haveAccount}{' '}
                    <button
                      onClick={toggleMode}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      {isLogin ? t.registerLink : t.loginLink}
                    </button>
                  </p>
                </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Use portal to render modal at the top level of the DOM
  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body)
  }

  return null
}
