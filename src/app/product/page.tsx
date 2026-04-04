'use client'

import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { scrollTo } from '@/lib/constants'

const capabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Conciliação automática',
    desc: 'Cruzamento inteligente entre extratos bancários e balancete contábil.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: 'Importação flexível',
    desc: 'Importe dados de qualquer sistema contábil via arquivo ou integração.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.3 5 7.5V20h6v-2.5c2.9-1.2 5-4.1 5-7.5a8 8 0 0 0-8-8z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="10" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'IA adaptativa',
    desc: 'O sistema aprende com cada ciclo e melhora sugestões ao longo do tempo.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Segurança total',
    desc: 'Criptografia de ponta a ponta. Servidores no Brasil. Conformidade LGPD.',
  },
]

export default function Product() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <SectionHeading
          label="Produto"
          title="Conheça o Isa Concilia"
          description="Uma plataforma completa de conciliação contábil com inteligência artificial."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                {c.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-text mb-2">{c.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-text tracking-tight mb-4">
            Pronto para transformar sua conciliação?
          </h2>
          <p className="text-secondary-text mb-8 max-w-lg mx-auto">
            Agende uma demonstração personalizada e veja o Isa Concilia em ação.
          </p>
          <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
            Agendar demonstração
          </Button>
        </div>
      </Container>
    </main>
  )
}
