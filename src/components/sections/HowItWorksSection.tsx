import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  { num: '1', title: 'Integre seus dados', desc: 'Conecte extratos bancários e importe os dados do balancete.' },
  { num: '2', title: 'A IA processa', desc: 'O sistema cruza lançamentos, identifica padrões e propõe correspondências.' },
  { num: '3', title: 'Revise e conclua', desc: 'Sua equipe valida as sugestões e finaliza em uma fração do tempo.', accent: true },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #F6F9FC 0%, #F0F4F8 100%)'
    }}>
      <Container>
        <SectionHeading
          label="Como funciona"
          title="Três passos. Sem complexidade."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Gradient connecting line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]" style={{
            background: 'linear-gradient(90deg, #E6EBF1 0%, #635BFF 100%)'
          }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-sm ${
                  step.accent
                    ? 'bg-accent text-white shadow-accent/20'
                    : 'bg-white border-2 border-border text-secondary-text'
                }`}>
                  <span className="font-heading">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-primary-text mt-5">{step.title}</h3>
                <p className="text-sm text-secondary-text mt-2 max-w-[240px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-text text-sm mt-14 max-w-md mx-auto">
          Sem instalação complexa. Sem mudança no seu sistema atual. O Isa Concilia se adapta à sua rotina.
        </p>
      </Container>
    </section>
  )
}
