import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const manualItems = [
  'Conferência manual de extratos',
  'Erros descobertos no fechamento',
  'Dias de retrabalho por mês',
  'Equipe limitada a tarefas repetitivas',
]

const automatedItems = [
  'Cruzamento automático com IA',
  'Inconsistências em tempo real',
  'Conciliação em minutos',
  'Equipe focada em estratégia',
]

export default function ProblemSolutionSection() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="O desafio"
          title="Conciliação manual é lenta, cara e arriscada"
          description="Veja como o Isa Concilia transforma o processo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
          {/* Manual — muted */}
          <div className="bg-[#F1F3F6] p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="text-sm font-semibold text-primary-text/60">Processo manual</span>
            </div>
            <ul className="space-y-4">
              {manualItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-sm text-primary-text/50 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automated — vibrant */}
          <div className="bg-white p-8 md:p-10 relative">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-[40px]" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-primary-text">Com o Isa Concilia</span>
              </div>
              <ul className="space-y-4">
                {automatedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-primary-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
