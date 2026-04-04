'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0A2540 0%, #1a1a5e 30%, #635BFF 60%, #00D4FF 100%)',
      minHeight: '400px',
    }}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundSize: '128px 128px',
      }} />

      <Container className="relative py-24 md:py-32 text-center">
        <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">Pronto para começar?</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Menos operação.<br className="hidden sm:block" />Mais resultado.
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mt-4 leading-relaxed">
          Agende uma demonstração e veja como o Isa Concilia transforma a rotina contábil.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={(e) => e.preventDefault()}>Agendar demonstração →</Button>
          <button onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/25 text-white/70 hover:text-white hover:border-white/50 px-7 py-3 text-base">
            Falar com especialista
          </button>
        </div>
      </Container>
    </section>
  )
}
