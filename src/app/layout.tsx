import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MarketingConsent from '@/components/ui/MarketingConsent'

export const metadata: Metadata = {
  title: 'ISA Concilia | Conciliação contábil com IA',
  description: 'Automatize sua conciliação contábil com Inteligência Artificial. Mais velocidade, menos erros e escala real para o seu escritório.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans">
        {children}
        <WhatsAppButton />
        <Suspense fallback={null}><MarketingConsent /></Suspense>
      </body>
    </html>
  )
}
