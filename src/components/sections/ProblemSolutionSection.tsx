import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const cards = [
  {
    icon: '⏱️',
    title: 'Horas perdidas',
    desc: 'Conferência manual de lançamentos e saldos que poderia ser automática.',
  },
  {
    icon: '⚠️',
    title: 'Erros no fechamento',
    desc: 'Divergências que só aparecem no final do mês, gerando retrabalho e atraso.',
  },
  {
    icon: '📉',
    title: 'Escala travada',
    desc: 'Crescer exige contratar mais gente para tarefas repetitivas — não estratégicas.',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              label="O desafio"
              title="Conciliação manual é lenta, cara e arriscada"
              description="A maioria dos escritórios contábeis perde dias inteiros conferindo extratos, cruzando lançamentos e corrigindo erros que só aparecem no fechamento. É um processo que consome tempo, gera retrabalho e limita o crescimento."
              align="left"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-xl flex-shrink-0">
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
