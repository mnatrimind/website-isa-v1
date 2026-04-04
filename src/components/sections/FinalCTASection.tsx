'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <Container>
        <div className="relative bg-[#0A2540] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.12] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-4">
              Pronto para começar?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              Menos operação. Mais resultado.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
              Agende uma demonstração e veja como o Isa Concilia pode transformar a rotina do seu escritório.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={(e) => e.preventDefault()}
              >
                Agendar demonstração
              </Button>
              <button
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3 text-base"
              >
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
