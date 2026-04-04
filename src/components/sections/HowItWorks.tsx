import Container from '@/components/layout/Container'

const steps = [
  { n: '1', title: 'Integre seus dados', desc: 'Conecte extratos bancários e importe o balancete.' },
  { n: '2', title: 'A IA processa', desc: 'Cruzamento de lançamentos e propostas de correspondência.' },
  { n: '3', title: 'Revise e conclua', desc: 'Valide as sugestões e finalize em minutos.', accent: true },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #F4F7FA, #F0F3F7)' }}>
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Como funciona</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Três passos. Sem complexidade.</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Gradient connecting line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]" style={{ background: 'linear-gradient(90deg, #E6EBF1, #635BFF)' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map(s => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${s.accent ? 'bg-accent text-white shadow-accent/20' : 'bg-white border-2 border-border text-secondary'}`}>
                  <span className="font-heading text-xl font-bold">{s.n}</span>
                </div>
                <h3 className="font-heading font-bold text-primary mt-5">{s.title}</h3>
                <p className="text-sm text-secondary mt-2 max-w-[220px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted text-sm mt-14 max-w-sm mx-auto">Sem instalação complexa. Sem mudança no seu sistema. O Isa Concilia se adapta à sua rotina.</p>
      </Container>
    </section>
  )
}
