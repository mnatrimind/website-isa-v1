import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const before = [
  'Conferência manual de extratos e lançamentos',
  'Erros descobertos apenas no fechamento',
  'Dias de trabalho repetitivo por mês',
  'Equipe limitada a tarefas operacionais',
]

const after = [
  'Cruzamento automático com IA',
  'Inconsistências identificadas em tempo real',
  'Conciliação concluída em minutos',
  'Equipe focada em consultoria e estratégia',
]

export default function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Antes vs depois"
          title="O impacto na prática"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* Before */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <span className="text-sm font-semibold text-primary-text">Sem o Isa Concilia</span>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-sm text-secondary-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-accent/20 shadow-sm ring-1 ring-accent/10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-primary-text">Com o Isa Concilia</span>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-secondary-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
