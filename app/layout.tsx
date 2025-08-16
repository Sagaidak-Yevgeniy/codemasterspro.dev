import type { Metadata } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'
import { ThemeProvider } from '@/components/ThemeProvider'
import ProgressBar from '@/components/ProgressBar'
import { NavigationProvider } from '@/components/NavigationContext'

export const metadata: Metadata = {
  title: 'CodeMastersPRO - Школа программирования в Павлодаре',
  description: 'Обучаем Python, Golang, JavaScript и аналитике данных. Офлайн занятия в Павлодаре. Стань профессионалом в IT!',
  keywords: 'программирование, Python, Golang, JavaScript, аналитика данных, Павлодар, обучение, IT школа, веб-разработка, серверная разработка, машинное обучение',
  authors: [{ name: 'CodeMastersPRO' }],
  creator: 'CodeMastersPRO',
  publisher: 'CodeMastersPRO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cmpro.kz'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/favicon-32x32.png',
    apple: '/images/favicon-32x32.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'CodeMastersPRO - Школа программирования в Павлодаре',
    description: 'Обучаем Python, Golang, JavaScript и аналитике данных. Офлайн занятия в Павлодаре. Стань профессионалом в IT!',
    url: 'https://cmpro.kz',
    siteName: 'CodeMastersPRO',
    images: [
      {
        url: '/images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'CodeMastersPRO - Школа программирования',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeMastersPRO - Школа программирования в Павлодаре',
    description: 'Обучаем Python, Golang, JavaScript и аналитике данных. Офлайн занятия в Павлодаре.',
    images: ['/images/Logo.png'],
    creator: '@codemasterspro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CodeMastersPRO",
              "description": "Школа программирования в Павлодаре",
              "url": "https://cmpro.kz",
              "logo": "https://cmpro.kz/images/Logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Е. Бекмаханова 115/2",
                "addressLocality": "Павлодар",
                "addressCountry": "KZ"
              },
              "telephone": "+77773323676",
              "email": "info@cmpro.kz",
              "sameAs": [
                "https://2gis.kz/pavlodar/firm/70000001083544695"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Курсы программирования",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Python - Веб-разработка и автоматизация",
                      "description": "Изучите Django, Flask, FastAPI. Создавайте веб-приложения, API и автоматизируйте процессы."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Golang - Серверная разработка",
                      "description": "Освойте высокопроизводительный Go. Создавайте микросервисы и масштабируемые приложения."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "JavaScript - Фронтенд разработка",
                      "description": "Изучите React, Vue, Node.js. Создавайте современные веб-приложения и интерфейсы."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Аналитика данных",
                      "description": "Изучите Python для анализа данных, машинное обучение и визуализацию."
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://2gis.kz" />
        <link rel="preconnect" href="https://wa.me" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/Logo.png" as="image" type="image/png" />
        <link rel="preload" href="/images/favicon-32x32.png" as="image" type="image/png" />
      </head>
                     <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <NavigationProvider>
            {children}
            <Analytics />
            <ProgressBar />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
