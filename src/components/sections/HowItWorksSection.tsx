import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    num: '1',
    title: 'Integre seus dados',
    desc: 'Conecte extratos bancários e importe os dados do balancete.',
    accent: false,
  },
  {
    num: '2',
    title: 'A IA processa',
    desc: 'O sistema cruza lançamentos, identifica padrões e propõe correspondências.',
    accent: false,
  },
  {
    num: '3',
    title: 'Revise e conclua',
    desc: 'Sua equipe valida as sugestões e finaliza em uma fração do tempo.',
    accent: true,
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Como funciona"
          title="Três passos. Sem complexidade."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] border-t-2 border-dashed border-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold z-10 ${
                    step.accent
                      ? 'bg-accent text-white'
                      : 'bg-white border-2 border-border text-secondary-text'
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="font-semibold text-primary-text mt-5">{step.title}</h3>
                <p className="text-sm text-secondary-text mt-2 max-w-[240px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
