import Container from '@/components/layout/Container'

const commonScenario = [
  'Horas perdidas conferindo lançamentos e saldos',
  'Erros que só aparecem no fechamento',
  'Equipe sobrecarregada com tarefas repetitivas',
  'Dificuldade para padronizar processos',
]

const businessImpact = [
  'Mais produtividade por colaborador',
  'Menos retrabalho e maior previsibilidade',
  'Agilidade no atendimento ao cliente',
  'Crescimento previsível para seu escritório',
]

export default function ProblemSolution() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
            Sua operação rumo ao crescimento
          </h2>
          <p className="text-secondary leading-relaxed">
            Ganhe velocidade sem depender de esforço manual, sua conciliação sem risco operacional e sem limite para crescer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-2xl shadow-xl border border-border p-8 overflow-hidden">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Seu cenário atual</h3>
            <div className="space-y-4">
              {commonScenario.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25C5C" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl border border-border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green/[0.04] to-transparent" />
            <div className="relative">
              <h3 className="font-heading text-xl font-bold text-primary mb-6">Com ISA Concilia</h3>
              <div className="space-y-4">
                {businessImpact.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A67E" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
