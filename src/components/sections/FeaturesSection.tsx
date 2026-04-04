import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import FeatureCard from '@/components/ui/FeatureCard'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Conciliação automática',
    description: 'Extratos e balancete são cruzados automaticamente. O sistema identifica correspondências e sinaliza exceções.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: 'Integração com balancete',
    description: 'Importe dados do seu sistema contábil e conecte diretamente aos extratos bancários.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.3 5 7.5V20h6v-2.5c2.9-1.2 5-4.1 5-7.5a8 8 0 0 0-8-8z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="10" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'IA que aprende',
    description: 'O sistema melhora a cada ciclo, sugerindo classificações com mais precisão ao longo do tempo.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Detecção de inconsistências',
    description: 'Divergências e lançamentos atípicos são identificados antes do fechamento mensal.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Funcionalidades"
          title="Automatize cada etapa da conciliação"
          description="Menos trabalho manual. Mais precisão. Resultados em minutos."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
