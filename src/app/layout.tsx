import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Isa Concilia | Conciliação contábil com IA',
  description: 'Automatize sua conciliação contábil com inteligência artificial. Reduza dias para minutos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
