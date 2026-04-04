import Container from '@/components/layout/Container'

const steps = [
  { n: '01', title: 'Integre seus dados', desc: 'Conecte extratos bancários e importe o balancete do seu sistema contábil.' },
  { n: '02', title: 'A IA processa', desc: 'Cruzamento automático de lançamentos, identificação de padrões e propostas de correspondência.' },
  { n: '03', title: 'Revise e conclua', desc: 'Valide as sugestões, corrija exceções e finalize a conciliação em minutos.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Como funciona</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Três passos. Sem complexidade.</h2>
            <p className="text-secondary mt-4 leading-relaxed max-w-md">Sem instalação complexa. Sem mudança no seu sistema. O Isa Concilia se adapta à sua rotina.</p>
          </div>

          <div>
            {steps.map((s, i) => (
              <div key={s.n} className={`flex gap-6 py-8 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="font-heading text-5xl font-extrabold text-accent/20 leading-none select-none">{s.n}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
