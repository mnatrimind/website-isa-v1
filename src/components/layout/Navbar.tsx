'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE, NAV, APP_URL, scrollTo, openDemoModal } from '@/lib/constants'
import Container from './Container'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-border/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center">
          <Image src="/ISAConcilIA.png" alt="ISA Concilia" width={140} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-[13px] font-medium text-secondary hover:text-primary transition-colors cursor-pointer">
              {l.label}
            </button>
          ))}
          <Link href="/#planos" className="text-[13px] font-medium text-secondary hover:text-primary transition-colors">Planos</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap bg-white text-primary border border-border hover:bg-surface px-4 py-2 text-sm">
            Acessar App
          </a>
          <Button size="sm" onClick={() => openDemoModal()}>Solicitar demonstração</Button>
        </div>

        <button className="md:hidden p-2 -mr-2 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </div>
        </button>
      </Container>

      <div className={`md:hidden fixed inset-0 top-[68px] bg-white z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Container className="flex flex-col gap-5 pt-8">
          {NAV.map(l => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false) }} className="text-lg font-medium text-primary text-left cursor-pointer">{l.label}</button>
          ))}
          <Link href="/#planos" onClick={() => setOpen(false)} className="text-lg font-medium text-primary">Planos</Link>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap bg-white text-primary border border-border hover:bg-surface px-7 py-3 text-base w-full">
            Acessar App
          </a>
          <hr className="border-border" />
          <Button size="lg" className="w-full" onClick={() => { openDemoModal(); setOpen(false) }}>Solicitar demonstração</Button>
        </Container>
      </div>
    </header>
  )
}
