import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const cases = [
  {
    shape: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#635BFF" opacity="0.08" />
        <rect x="12" y="16" width="8" height="16" rx="2" fill="#635BFF" opacity="0.25" />
        <rect x="24" y="10" width="8" height="22" rx="2" fill="#635BFF" opacity="0.45" />
        <rect x="20" y="28" width="16" height="8" rx="2" fill="#635BFF" opacity="0.15" />
      </svg>
    ),
    title: 'Escritórios contábeis',
    description: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.',
    tint: 'from-accent/[0.03] to-transparent',
  },
  {
    shape: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" fill="#3B82F6" opacity="0.08" />
        <circle cx="24" cy="18" r="6" fill="#3B82F6" opacity="0.3" />
        <ellipse cx="24" cy="34" rx="12" ry="7" fill="#3B82F6" opacity="0.15" />
      </svg>
    ),
    title: 'Contadores autônomos',
    description: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica.',
    tint: 'from-blue-500/[0.03] to-transparent',
  },
  {
    shape: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="12" width="40" height="28" rx="4" fill="#059669" opacity="0.08" />
        <path d="M24 8L38 16H10L24 8Z" fill="#059669" opacity="0.2" />
        <rect x="14" y="22" width="6" height="10" rx="1" fill="#059669" opacity="0.15" />
        <rect x="28" y="22" width="6" height="10" rx="1" fill="#059669" opacity="0.15" />
      </svg>
    ),
    title: 'Contabilidade interna',
    description: 'Integre extratos bancários ao balancete com precisão e velocidade.',
    tint: 'from-emerald-500/[0.03] to-transparent',
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
              className={`rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 ease-in-out text-center bg-gradient-to-b ${c.tint}`}
              style={{ backgroundColor: 'white' }}
            >
              <div className="mx-auto mb-5">{c.shape}</div>
              <h3 className="font-heading text-lg font-bold text-primary-text mb-2">{c.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
