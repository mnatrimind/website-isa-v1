import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import UseCaseCard from '@/components/ui/UseCaseCard'

const cases = [
  {
    emoji: '🏢',
    title: 'Escritórios contábeis',
    description: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.',
  },
  {
    emoji: '📊',
    title: 'Contadores autônomos',
    description: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica.',
  },
  {
    emoji: '🏦',
    title: 'Contabilidade interna',
    description: 'Integre extratos bancários ao balancete com precisão e velocidade.',
  },
]

export default function UseCasesSection() {
  return (
    <section id="para-quem" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Para quem"
          title="Quem usa o Isa Concilia"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <UseCaseCard key={c.title} emoji={c.emoji} title={c.title} description={c.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
