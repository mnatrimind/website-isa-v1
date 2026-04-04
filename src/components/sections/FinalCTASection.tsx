import Container from '@/components/layout/Container'
import { SITE } from '@/lib/constants'

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <Container>
        <div className="relative bg-[#0A2540] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.15] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-4">
              Pronto para começar?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Menos operação.<br />Mais resultado.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-4 text-lg leading-relaxed">
              Agende uma demonstração gratuita e veja como o Isa Concilia pode transformar a rotina do seu escritório contábil.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap bg-accent hover:bg-accent-light text-white px-7 py-3 text-base shadow-sm hover:shadow-md"
              >
                Agendar demonstração
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3 text-base"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
