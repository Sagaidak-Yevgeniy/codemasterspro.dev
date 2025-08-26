'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles, GraduationCap, BookOpen } from 'lucide-react'
import Link from 'next/link'

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
      subtitle: 'Добро пожаловать!',
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
      name: 'ФИО',
      email: 'Email',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      role: 'Выберите роль',
      student: 'Студент',
      teacher: 'Преподаватель',
      studentDesc: 'Изучаю программирование',
      teacherDesc: 'Обучаю программированию',
      registerButton: 'Зарегистрироваться',
      haveAccount: 'Уже есть аккаунт?',
      loginLink: 'Войти',
      privacyAgreement: 'Я согласен с',
      privacyPolicy: 'Политикой конфиденциальности',
      termsAgreement: 'и',
      termsOfService: 'Условиями оказания услуг',
      agreementRequired: 'Необходимо согласиться с документами'
    }
  },
  kk: {
    login: {
      title: 'Есепке кіру',
      subtitle: 'Қош келдіңіз!',
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
      name: 'Аты-жөні',
      email: 'Email',
      password: 'Құпия сөз',
      confirmPassword: 'Құпия сөзді растаңыз',
      role: 'Рөлді таңдаңыз',
      student: 'Студент',
      teacher: 'Оқытушы',
      studentDesc: 'Бағдарламалауды үйренемін',
      teacherDesc: 'Бағдарламалауды оқытамын',
      registerButton: 'Тіркелу',
      haveAccount: 'Есеп бар ма?',
      loginLink: 'Кіру',
      privacyAgreement: 'Мен келісемін',
      privacyPolicy: 'Құпиялылық саясатымен',
      termsAgreement: 'және',
      termsOfService: 'Қызмет көрсету шарттарымен',
      agreementRequired: 'Құжаттармен келісу қажет'
    }
  }
}

export default function AuthModal({ isOpen, onClose, mode, language }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(mode === 'login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  })
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false
  })
  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Reset mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLogin(mode === 'login')
      setFormData({ name: '', email: '', password: '', confirmPassword: '', role: '' })
      setAgreements({ privacy: false, terms: false })
      setErrors([])
      setIsSubmitting(false)
    }
  }, [mode, isOpen])

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const t = isLogin ? translations[language].login : translations[language].register

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Предотвращаем повторную отправку
    if (isSubmitting) return
    
    // Очищаем предыдущие ошибки
    setErrors([])
    
    // Валидация для регистрации
    if (!isLogin) {
      const newErrors: string[] = []
      
      // Проверка обязательных полей
      if (!formData.name.trim()) {
        newErrors.push('ФИО обязательно')
      }
      if (!formData.email.trim()) {
        newErrors.push('Email обязателен')
      }
      if (!formData.password) {
        newErrors.push('Пароль обязателен')
      }
      if (!formData.role) {
        newErrors.push('Выберите роль')
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.push('Пароли не совпадают')
      }
      if (!agreements.privacy || !agreements.terms) {
        newErrors.push(translations[language].register.agreementRequired)
      }
      
      if (newErrors.length > 0) {
        setErrors(newErrors)
        return
      }
    } else {
      // Валидация для входа
      const newErrors: string[] = []
      
      if (!formData.email.trim()) {
        newErrors.push('Введите email')
      }
      if (!formData.password) {
        newErrors.push('Введите пароль')
      }
      
      if (newErrors.length > 0) {
        setErrors(newErrors)
        return
      }
    }
    
    // Если все проверки пройдены, начинаем отправку
    setIsSubmitting(true)
    setErrors([])
    
    // Имитация отправки данных (замените на реальную логику)
    setTimeout(() => {
      console.log('Форма отправлена:', { isLogin, formData, agreements })
      setIsSubmitting(false)
      // Здесь будет логика авторизации/регистрации
    }, 1000)
  }

  // Проверка ошибок для конкретного поля
  const getFieldError = (fieldName: string) => {
    return errors.find(error => {
      if (fieldName === 'name') return error.includes('ФИО')
      if (fieldName === 'email') return error.includes('Email') || error.includes('email')
      if (fieldName === 'password') return error.includes('Пароль') || error.includes('пароль')
      if (fieldName === 'confirmPassword') return error.includes('Пароли')
      if (fieldName === 'role') return error.includes('роль')
      return false
    })
  }

  // Очистка ошибок при изменении поля
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Очищаем ошибку для этого поля при вводе (только если ошибки есть)
    if (errors.length > 0) {
      const fieldError = getFieldError(field)
      if (fieldError) {
        setErrors(prev => prev.filter(error => error !== fieldError))
      }
    }
  }

  // Очистка ошибок при изменении чекбоксов
  const handleAgreementChange = (type: 'privacy' | 'terms') => {
    setAgreements(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
    
    // Очищаем ошибку о соглашениях при изменении чекбокса
    if (errors.length > 0) {
      const agreementError = errors.find(error => 
        error.includes('согласиться') || error.includes('келісу')
      )
      if (agreementError) {
        setErrors(prev => prev.filter(error => error !== agreementError))
      }
    }
  }

  // Проверка заполненности всех полей
  const isFormComplete = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password !== '' &&
      formData.confirmPassword !== '' &&
      formData.role !== ''
    )
  }

  // Подсчет процента заполнения
  const getFormProgress = () => {
    const fields = [
      formData.name.trim() !== '',
      formData.email.trim() !== '',
      formData.password !== '',
      formData.confirmPassword !== '',
      formData.role !== ''
    ]
    const filledFields = fields.filter(Boolean).length
    return Math.round((filledFields / fields.length) * 100)
  }

  // Автоматическая установка галочек при 100% заполнении
  useEffect(() => {
    const progress = getFormProgress()
    if (progress === 100 && !isLogin) {
      setAgreements({ privacy: true, terms: true })
    }
  }, [formData, isLogin])

  // Обработка клика по чекбоксу
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ name: '', email: '', password: '', confirmPassword: '', role: '' })
    setAgreements({ privacy: false, terms: false })
    setErrors([])
    setIsSubmitting(false)
  }

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm modal-isolated"
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
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-y-auto mx-4 my-4 isolate modal-container"
            style={{ 
              maxHeight: 'calc(100vh - 2rem)',
              height: 'fit-content',
              marginTop: '1rem',
              marginBottom: '1rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
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

            {/* Close button - Absolute position within modal */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-3 right-3 z-50 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer shadow-lg"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="relative z-10 p-4" style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
                .modal-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-3"
              >
                <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2">
                  <img 
                    src="/images/Logo.png" 
                    alt="CodeMastersPRO Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {t.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.subtitle}
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {translations[language].register.name}
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                        getFieldError('name') ? 'text-red-500' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm ${
                           getFieldError('name') 
                             ? 'border-red-300 focus:ring-red-500 bg-red-50 dark:bg-red-900/10' 
                             : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                         }`}
                         placeholder={translations[language].register.name}
                       />
                      {getFieldError('name') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                          {getFieldError('name')}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Role Selection - только для регистрации */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translations[language].register.role}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {/* Student Option */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleInputChange('role', 'student')}
                        className={`relative p-3 rounded-lg border-2 transition-all duration-300 group ${
                          formData.role === 'student'
                            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 shadow-md shadow-blue-500/20'
                            : getFieldError('role')
                            ? 'border-red-300 bg-red-50 dark:bg-red-900/10'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm'
                        }`}
                      >
                        <motion.div
                          animate={formData.role === 'student' ? { scale: [1, 1.03, 1] } : {}}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center space-y-1.5"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            formData.role === 'student'
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md'
                              : getFieldError('role')
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20'
                          }`}>
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="text-center">
                            <p className={`text-xs font-semibold ${
                              formData.role === 'student'
                                ? 'text-blue-700 dark:text-blue-300'
                                : getFieldError('role')
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {translations[language].register.student}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">
                              {translations[language].register.studentDesc}
                            </p>
                          </div>
                        </motion.div>
                        {formData.role === 'student' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md"
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          </motion.div>
                        )}
                      </motion.button>

                      {/* Teacher Option */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleInputChange('role', 'teacher')}
                        className={`relative p-3 rounded-lg border-2 transition-all duration-300 group ${
                          formData.role === 'teacher'
                            ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 shadow-md shadow-purple-500/20'
                            : getFieldError('role')
                            ? 'border-red-300 bg-red-50 dark:bg-red-900/10'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm'
                        }`}
                      >
                        <motion.div
                          animate={formData.role === 'teacher' ? { scale: [1, 1.03, 1] } : {}}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center space-y-1.5"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            formData.role === 'teacher'
                              ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md'
                              : getFieldError('role')
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20'
                          }`}>
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div className="text-center">
                            <p className={`text-xs font-semibold ${
                              formData.role === 'teacher'
                                ? 'text-purple-700 dark:text-purple-300'
                                : getFieldError('role')
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {translations[language].register.teacher}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">
                              {translations[language].register.teacherDesc}
                            </p>
                          </div>
                        </motion.div>
                        {formData.role === 'teacher' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md"
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          </motion.div>
                        )}
                      </motion.button>
                    </div>
                    {getFieldError('role') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-500 flex items-center"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                        {getFieldError('role')}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isLogin ? 0.3 : 0.5 }}
                  className="mb-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      getFieldError('email') ? 'text-red-500' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm ${
                        getFieldError('email') 
                          ? 'border-red-300 focus:ring-red-500 bg-red-50 dark:bg-red-900/10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder={t.email}
                    />
                    {getFieldError('email') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                        {getFieldError('email')}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isLogin ? 0.4 : 0.6 }}
                  className="mb-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.password}
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      getFieldError('password') ? 'text-red-500' : 'text-gray-400'
                    }`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className={`w-full pl-10 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm ${
                        getFieldError('password') 
                          ? 'border-red-300 focus:ring-red-500 bg-red-50 dark:bg-red-900/10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder={t.password}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    {getFieldError('password') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                        {getFieldError('password')}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mb-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {translations[language].register.confirmPassword}
                    </label>
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                        getFieldError('confirmPassword') ? 'text-red-500' : 'text-gray-400'
                      }`} />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={`w-full pl-10 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-sm ${
                          getFieldError('confirmPassword') 
                            ? 'border-red-300 focus:ring-red-500 bg-red-50 dark:bg-red-900/10' 
                            : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                        }`}
                        placeholder={translations[language].register.confirmPassword}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      {getFieldError('confirmPassword') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                          {getFieldError('confirmPassword')}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {isLogin && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-right mb-2"
                  >
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {translations[language].login.forgotPassword}
                    </Link>
                  </motion.div>
                )}

                {/* Progress indicator - только для регистрации */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-1 mb-2"
                  >
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Прогресс заполнения:</span>
                      <span className="flex items-center">
                        {getFormProgress()}%
                        {getFormProgress() === 100 && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.1 }}
                              className="w-2.5 h-2.5 bg-white rounded-full"
                            />
                          </motion.div>
                        )}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${getFormProgress()}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    {getFormProgress() === 100 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-green-600 dark:text-green-400 flex items-center justify-center"
                      >
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-1"></span>
                        Все поля заполнены! Соглашения автоматически приняты ✓
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Agreements - только для регистрации */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAgreementChange('privacy')}
                        className="flex-shrink-0 mt-1"
                      >
                        <motion.div
                          animate={agreements.privacy ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.2 }}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-200 border-2 ${
                            agreements.privacy
                              ? 'bg-green-500 border-green-500 text-white shadow-md'
                              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-transparent hover:border-green-400 dark:hover:border-green-500'
                          }`}
                        >
                          {agreements.privacy ? '✓' : ''}
                        </motion.div>
                      </motion.button>
                      <label 
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer flex-1"
                        onClick={() => handleAgreementChange('privacy')}
                      >
                        <span className="flex items-start">
                          {translations[language].register.privacyAgreement}{' '}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open('/privacy-policy', '_blank')
                            }}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200 ml-1"
                          >
                            {translations[language].register.privacyPolicy}
                          </button>
                        </span>
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAgreementChange('terms')}
                        className="flex-shrink-0 mt-1"
                      >
                        <motion.div
                          animate={agreements.terms ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.2 }}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-200 border-2 ${
                            agreements.terms 
                              ? 'bg-green-500 border-green-500 text-white shadow-md' 
                              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-transparent hover:border-green-400 dark:hover:border-green-500'
                          }`}
                        >
                          {agreements.terms ? '✓' : ''}
                        </motion.div>
                      </motion.button>
                      <label 
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer flex-1"
                        onClick={() => handleAgreementChange('terms')}
                      >
                        <span className="flex items-start">
                          {translations[language].register.termsAgreement}{' '}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open('/terms-of-service', '_blank')
                            }}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200 ml-1"
                          >
                            {translations[language].register.termsOfService}
                          </button>
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Error Messages */}
                {errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 shadow-lg"
                  >
                    <div className="flex items-start space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-bold">!</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-1">
                          Пожалуйста, исправьте следующие ошибки:
                        </h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          {errors.map((error, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                              {error}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-5 rounded-lg transition-all duration-300 relative overflow-hidden group text-sm ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white hover:shadow-lg'
                  }`}
                >
                  {!isSubmitting && (
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
                  )}
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        {isLogin ? 'Вход...' : 'Регистрация...'}
                      </>
                    ) : (
                      <>
                        {isLogin ? translations[language].login.loginButton : translations[language].register.registerButton}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.form>

              {/* Toggle mode */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-3 text-center"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isLogin ? translations[language].login.noAccount : translations[language].register.haveAccount}{' '}
                  <button
                    onClick={toggleMode}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                  >
                    {isLogin ? translations[language].login.registerLink : translations[language].register.loginLink}
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
