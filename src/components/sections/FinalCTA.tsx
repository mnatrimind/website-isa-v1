'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { openDemoModal } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0b1428 0%, #1f2948 30%, #2563eb 65%, #0ea5e9 100%)',
      minHeight: '400px',
    }}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundSize: '128px 128px',
      }} />

      <Container className="relative py-24 md:py-32 text-center">
        <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">Pronto para transformar sua contabilidade?</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Menos operação.<br className="hidden sm:block" />Mais resultado.
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mt-4 leading-relaxed">
          Solicite uma demonstração do ISA Concilia e veja como a automação pode acelerar sua rotina contábil com mais precisão, organização e escala.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => openDemoModal()}>Agendar demonstração</Button>
          {/* <button onClick={() => window.location.href = 'mailto:contato@isaconcilia.com?subject=Falar%20com%20especialista'} className="inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/25 text-white/70 hover:text-white hover:border-white/50 px-7 py-3 text-base">
            Falar com especialista
          </button> */}
        </div>
      </Container>
    </section>
  )
}
