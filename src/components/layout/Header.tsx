'use client'

import { useState, useEffect } from 'react'
import { SITE, NAV_LINKS } from '@/lib/constants'
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
          ? 'bg-white/90 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <Container className="flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="font-bold text-xl text-primary-text flex-shrink-0">
          {SITE.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" href={`mailto:${SITE.email}`}>
            Falar com especialista
          </Button>
          <Button variant="primary" size="sm" href="#cta">
            Agendar demo
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-text transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <Container className="flex flex-col gap-6 pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-primary-text hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-border" />
          <div className="flex flex-col gap-3">
            <Button variant="secondary" size="lg" href={`mailto:${SITE.email}`}>
              Falar com especialista
            </Button>
            <Button variant="primary" size="lg" href="#cta">
              Agendar demo
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
