'use client'

import Link from 'next/link'
import { SITE, NAV_LINKS, scrollTo } from '@/lib/constants'
import Container from './Container'
import Button from '@/components/ui/Button'

const productLinks = NAV_LINKS
const resourceLinks = [
  { label: 'Recursos', href: '/learn/' },
  { label: 'Como funciona', id: 'como-funciona' },
]
const companyLinks = [
  { label: 'Sobre', id: 'cta' },
  { label: 'Contato' },
]
const legalLinks = [
  { label: 'Política de Privacidade', href: '/privacidade/' },
  { label: 'Termos de Uso', href: '/termos/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <span className="text-white font-semibold text-lg block mb-2">{SITE.name}</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Automação inteligente para contabilidade.
            </p>
            <Button variant="primary" size="sm" onClick={(e) => e.preventDefault()}>
              {SITE.cta.primary}
            </Button>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Produto</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 cursor-pointer">{link.label}</button>
                </li>
              ))}
              <li><Link href="/product/" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Ver produto</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Recursos</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">{link.label}</Link>
                  ) : (
                    <button onClick={() => link.id && scrollTo(link.id)} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 cursor-pointer">{link.label}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={(e) => link.id ? scrollTo(link.id) : e.preventDefault()} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 cursor-pointer">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center space-y-2">
          <p className="text-gray-500 text-xs">
            Ao utilizar esta plataforma, você concorda com nossa{' '}
            <Link href="/privacidade/" className="underline hover:text-gray-400">Política de Privacidade</Link>
            {' '}e{' '}
            <Link href="/termos/" className="underline hover:text-gray-400">Termos de Uso</Link>.
          </p>
          <p className="text-gray-500 text-xs">
            &copy; 2026 ISA — Intelligent Systems for Accounting
          </p>
        </div>
      </Container>
    </footer>
  )
}
