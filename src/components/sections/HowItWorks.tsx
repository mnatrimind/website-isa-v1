import Container from '@/components/layout/Container'

const steps = [
  { n: '01', title: 'Integração dos dados', desc: 'Conecte os extratos bancários e as informações contábeis que alimentam o balancete.' },
  { n: '02', title: 'Processamento com IA', desc: 'O sistema cruza os dados, identifica padrões e propõe correspondências automaticamente.' },
  { n: '03', title: 'Conciliação concluída', desc: 'Sua equipe valida o que for necessário e conclui o processo em uma fração do tempo.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Como funciona</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Um fluxo simples, rápido e desenhado para encaixar na rotina do escritório.</h2>
            <p className="text-secondary mt-4 leading-relaxed max-w-md">Conecte, processe e valide com muito menos esforço manual.</p>
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
