import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Horas perdidas',
    desc: 'Conferência manual de lançamentos e saldos que poderia ser automática.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Erros no fechamento',
    desc: 'Divergências que só aparecem no final do mês, gerando retrabalho e atraso.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Escala travada',
    desc: 'Crescer exige contratar mais gente para tarefas repetitivas — não estratégicas.',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="O desafio"
              title="Conciliação manual é lenta, cara e arriscada"
              description="A maioria dos escritórios perde dias conferindo extratos, cruzando lançamentos e corrigindo erros que só aparecem no fechamento."
              align="left"
            />
          </div>
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary-text mb-1">{card.title}</h3>
                  <p className="text-sm text-secondary-text leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
