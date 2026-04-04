'use client'

import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const articles = [
  {
    title: 'O que é conciliação contábil automatizada?',
    desc: 'Entenda como a IA pode transformar o processo de cruzamento entre extratos bancários e balancetes.',
    tag: 'Conceitos',
  },
  {
    title: 'Como a LGPD impacta escritórios contábeis',
    desc: 'Saiba quais obrigações a lei de proteção de dados exige de escritórios que processam dados financeiros.',
    tag: 'Compliance',
  },
  {
    title: '5 sinais de que seu escritório precisa automatizar',
    desc: 'Indicadores práticos que mostram quando a conciliação manual está limitando o crescimento.',
    tag: 'Produtividade',
  },
]

export default function Learn() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <SectionHeading
          label="Recursos"
          title="Aprenda sobre conciliação com IA"
          description="Conteúdo prático para escritórios contábeis que buscam eficiência."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a) => (
            <div key={a.title} className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">{a.tag}</span>
              <h3 className="text-lg font-semibold text-primary-text mt-3 mb-2">{a.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-secondary-text mb-6">Quer ver a plataforma em ação?</p>
          <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
            Agendar demonstração
          </Button>
        </div>
      </Container>
    </main>
  )
}
