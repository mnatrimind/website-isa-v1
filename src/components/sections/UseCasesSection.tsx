import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const cases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M3 9h6" /><path d="M3 15h6" />
      </svg>
    ),
    title: 'Escritórios contábeis',
    description: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Contadores autônomos',
    description: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16" /><path d="M2 12h20" />
      </svg>
    ),
    title: 'Contabilidade interna',
    description: 'Integre extratos bancários ao balancete com precisão e velocidade.',
  },
]

export default function UseCasesSection() {
  return (
    <section id="para-quem" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Para quem"
          title="Quem usa o Isa Concilia"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 ease-in-out text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                {c.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-text mb-2">{c.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
