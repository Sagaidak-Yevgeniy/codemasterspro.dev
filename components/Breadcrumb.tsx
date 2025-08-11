'use client'

import { Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbProps {
  language: 'ru' | 'kk'
  courseName: string
}

export default function Breadcrumb({ language, courseName }: BreadcrumbProps) {
  const translations = {
    ru: {
      home: 'Главная',
      courses: 'Курсы'
    },
    kk: {
      home: 'Басты бет',
      courses: 'Курстар'
    }
  }

  const t = translations[language]

  return (
    <nav className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="flex items-center hover:text-gray-900 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            {t.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#courses" className="hover:text-gray-900 transition-colors">
            {t.courses}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{courseName}</span>
        </div>
      </div>
    </nav>
  )
}
