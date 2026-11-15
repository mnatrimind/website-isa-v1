'use client'

import Link from 'next/link'
import Image from 'next/image'
import { scrollTo, openDemoModal } from '@/lib/constants'
import Container from './Container'
import Button from '@/components/ui/Button'

export default function Footer() {
  return (
    <footer className="bg-[#0b1428] pt-16 pb-8">
      <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#152038]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Image src="/ISAConcilIA.png" alt="ISA Concilia" width={160} height={46} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-[#9CA3AF] text-sm mt-2">Automação inteligente para a rotina contábil.</p>
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
              <li><Link href="/ajuda-e-suporte" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Ajuda e Suporte</Link></li>
              <li><Link href="/privacidade" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Termos</Link></li>
              <li><button type="button" onClick={() => window.dispatchEvent(new Event('isa-cookie-settings'))} className="text-[#9CA3AF] text-sm hover:text-white transition-colors cursor-pointer">Preferências de cookies</button></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Comece agora</h4>
            <Button size="sm" onClick={() => openDemoModal()}>Solicitar demonstração</Button>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#9CA3AF]/50 text-xs">&copy; 2026 ISA — Intelligent Systems for Accounting</p>
          <div className="flex flex-wrap gap-2">
            {['Inteligência Artificial', 'Produtividade', 'Precisão', 'Escalabilidade'].map(tag => (
              <span key={tag} className="text-[#9CA3AF] text-xs border border-[#152038] rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
