import Container from '@/components/layout/Container'

const cases = [
  { title: 'Escritórios contábeis', desc: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe. Escale seu escritório com a mesma equipe.', border: 'border-accent' },
  { title: 'Contadores autônomos', desc: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica e atendimento ao cliente.', border: 'border-[#00D4FF]' },
  { title: 'Contabilidade interna', desc: 'Integre extratos bancários ao balancete com precisão e velocidade. Feche o mês sem retrabalho.', border: 'border-primary' },
]

export default function UseCases() {
  return (
    <section id="para-quem" className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Para quem</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
              Para escritórios contábeis, contadores e equipes de finanças
            </h2>
          </div>

          <div>
            {cases.map((c, i) => (
              <div key={c.title} className={`pl-5 border-l-[3px] ${c.border} py-6 ${i < cases.length - 1 ? 'border-b border-b-border' : ''}`}>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{c.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
