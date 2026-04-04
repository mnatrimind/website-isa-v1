'use client'

import Link from 'next/link'
import { SITE, NAV, scrollTo } from '@/lib/constants'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.08]">
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-heading font-bold text-lg block mb-2">{SITE.name}</span>
            <p className="text-white/40 text-sm leading-relaxed">Automação inteligente para contabilidade.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Produto</h4>
            <ul className="space-y-2.5">
              {NAV.map(l => <li key={l.id}><button onClick={() => scrollTo(l.id)} className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">{l.label}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Recursos</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollTo('como-funciona')} className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">Como funciona</button></li>
              <li><button onClick={() => scrollTo('preco')} className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">Preços</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              <li><button onClick={e => e.preventDefault()} className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">Contato</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacidade" className="text-white/40 text-sm hover:text-white/70 transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-white/40 text-sm hover:text-white/70 transition-colors">Termos</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">&copy; 2026 ISA — Intelligent Systems for Accounting</p>
          <p className="text-white/25 text-xs">Ao utilizar, você concorda com nossa <Link href="/privacidade" className="underline hover:text-white/40">Política de Privacidade</Link> e <Link href="/termos" className="underline hover:text-white/40">Termos</Link>.</p>
        </div>
      </Container>
    </footer>
  )
}
