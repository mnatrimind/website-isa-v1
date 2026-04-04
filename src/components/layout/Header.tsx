'use client'

import { useState, useEffect } from 'react'
import { SITE, NAV_LINKS, scrollTo } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Container from './Container'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between h-[72px]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-semibold text-xl text-primary-text flex-shrink-0 cursor-pointer"
        >
          {SITE.name}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={(e) => e.preventDefault()}>
            Falar com especialista
          </Button>
          <Button variant="primary" size="sm" onClick={() => scrollTo('cta')}>
            Agendar demo
          </Button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </Container>

      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Container className="flex flex-col gap-6 pt-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="text-lg font-medium text-primary-text hover:text-accent transition-colors text-left cursor-pointer"
              onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
            >
              {link.label}
            </button>
          ))}
          <hr className="border-border" />
          <div className="flex flex-col gap-3">
            <Button variant="secondary" size="lg" onClick={(e) => e.preventDefault()}>
              Falar com especialista
            </Button>
            <Button variant="primary" size="lg" onClick={() => { scrollTo('cta'); setMenuOpen(false) }}>
              Agendar demo
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
