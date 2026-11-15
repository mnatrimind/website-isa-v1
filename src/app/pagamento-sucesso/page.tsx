'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import { APP_URL } from '@/lib/constants'

const REDIRECT_SECONDS = 5

export default function PagamentoSucesso() {
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS)

  useEffect(() => {
    if (seconds <= 0) {
      window.location.replace(APP_URL)
      return
    }
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds])

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-xl mx-auto text-center" role="status" aria-live="polite">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dcfce7] text-[#166534]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              Sua compra foi terminada com sucesso!
            </h1>
            <p className="mt-4 text-lg text-secondary">
              Você será redirecionado para o aplicativo em{' '}
              <span className="font-bold text-accent">{seconds}</span> {seconds === 1 ? 'segundo' : 'segundos'}.
            </p>
            <a href={APP_URL} className="mt-8 inline-block text-sm font-semibold text-accent hover:text-accent-hover">
              Ir para o aplicativo agora -&gt;
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
