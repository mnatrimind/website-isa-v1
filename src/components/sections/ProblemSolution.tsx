import Container from '@/components/layout/Container'

const painPoints = [
  'Horas perdidas em conferência manual de extratos',
  'Erros que só aparecem no fechamento do mês',
  'Equipe presa em tarefas operacionais, sem tempo para estratégia',
]

const solutions = [
  'Cruzamento automático com IA',
  'Inconsistências identificadas em tempo real',
  'Conciliação concluída em minutos',
  'Equipe focada em consultoria e estratégia',
]

export default function ProblemSolution() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">O desafio</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-5">
              Conciliação manual é lenta, cara e arriscada
            </h2>
            <p className="text-secondary leading-relaxed mb-8 max-w-lg">
              Escritórios contábeis perdem dias inteiros em conferências manuais, retrabalho e correções que poderiam ser automatizadas.
            </p>
            <div className="space-y-4">
              {painPoints.map(p => (
                <div key={p} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25C5C" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-primary font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 40% */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl shadow-xl border border-border p-8 overflow-hidden">
              {/* Green tinted gradient at top */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green/[0.04] to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-green" />
                  <span className="text-sm font-semibold text-primary">Com o Isa Concilia</span>
                </div>
                <div className="space-y-4">
                  {solutions.map(s => (
                    <div key={s} className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A67E" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-primary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
