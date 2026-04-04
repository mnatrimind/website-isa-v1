import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const cases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
      </svg>
    ),
    title: 'Escritórios contábeis',
    description: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Contadores autônomos',
    description: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 13h.01" /><path d="M15 13h.01" />
      </svg>
    ),
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 ease-in-out text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
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
