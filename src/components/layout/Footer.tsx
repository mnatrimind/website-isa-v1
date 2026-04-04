'use client'

import Link from 'next/link'
import { SITE, scrollTo } from '@/lib/constants'
import Container from './Container'
import Button from '@/components/ui/Button'

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1a3550]">
          {/* Brand */}
          <div>
            <span className="text-white font-heading font-bold text-lg block mb-2">{SITE.name}</span>
            <p className="text-[#9CA3AF] text-sm mt-2">Automação inteligente para contabilidade.</p>
            <p className="text-[#9CA3AF] text-sm mt-4">Brasil</p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Produto</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollTo('funcionalidades')} className="text-[#9CA3AF] text-sm hover:text-white transition-colors cursor-pointer">Funcionalidades</button></li>
              <li><button onClick={() => scrollTo('como-funciona')} className="text-[#9CA3AF] text-sm hover:text-white transition-colors cursor-pointer">Como funciona</button></li>
              <li><button onClick={() => scrollTo('seguranca')} className="text-[#9CA3AF] text-sm hover:text-white transition-colors cursor-pointer">Segurança</button></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              <li><button onClick={(e) => e.preventDefault()} className="text-[#9CA3AF] text-sm hover:text-white transition-colors cursor-pointer">Contato</button></li>
              <li><Link href="/privacidade" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Termos</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Comece agora</h4>
            <Button size="sm" onClick={(e) => e.preventDefault()}>Agendar demonstração →</Button>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-[#9CA3AF]/50 text-xs">&copy; 2026 ISA — Intelligent Systems for Accounting</p>
        </div>
      </Container>
    </footer>
  )
}
