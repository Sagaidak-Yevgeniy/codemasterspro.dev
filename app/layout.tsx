import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodeMastersPRO - Школа программирования в Павлодаре',
  description: 'Обучаем Python, Golang, JavaScript и аналитике данных. Офлайн занятия в Павлодаре. Стань профессионалом в IT!',
  keywords: 'программирование, Python, Golang, JavaScript, аналитика данных, Павлодар, обучение, IT школа',
  authors: [{ name: 'CodeMastersPRO' }],
  icons: {
    icon: '/images/favicon-32x32.png',
    shortcut: '/images/favicon-32x32.png',
    apple: '/images/favicon-32x32.png',
  },
  openGraph: {
    title: 'CodeMastersPRO - Школа программирования',
    description: 'Обучаем Python, Golang, JavaScript и аналитике данных в Павлодаре',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
