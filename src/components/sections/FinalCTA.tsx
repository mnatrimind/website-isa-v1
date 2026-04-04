'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="relative rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center overflow-hidden" style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 20%, rgba(99,91,255,0.25), transparent 50%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(ellipse 80% 40% at 50% 100%, rgba(99,91,255,0.1), transparent 40%), #0A2540`
        }}>
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px), radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px, 60px 60px', backgroundPosition: '0 0, 20px 20px' }} />
          <div className="relative">
            <p className="text-accent-hover text-sm font-semibold uppercase tracking-wider mb-4">Pronto para começar?</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">Menos operação.<br className="hidden sm:block" />Mais resultado.</h2>
            <p className="text-white/45 max-w-lg mx-auto mt-4 leading-relaxed">Agende uma demonstração e veja como o Isa Concilia transforma a rotina contábil.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Agendar demonstração</Button>
              <button onClick={e => e.preventDefault()} className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/20 text-white/65 hover:text-white hover:border-white/40 px-7 py-3 text-base">Falar com especialista</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
