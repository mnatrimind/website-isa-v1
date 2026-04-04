import Container from '@/components/layout/Container'

export default function ProblemSolution() {
  return (
    <section id="produto" className="py-24 md:py-32">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">O desafio</p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-12">
          Conciliação manual é lenta, cara e arriscada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm">
          {/* Manual — muted */}
          <div className="bg-[#ECEEF2] p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-red/60" />
              <span className="text-xs font-semibold text-primary/40 uppercase tracking-wider">Processo manual</span>
            </div>
            <ul className="space-y-4">
              {['Conferência manual de extratos', 'Erros descobertos no fechamento', 'Dias de retrabalho por mês', 'Equipe presa em tarefas repetitivas'].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-1"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  <span className="text-sm text-primary/40 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automated — vibrant */}
          <div className="bg-white p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.04] rounded-full blur-[50px]" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-2.5 h-2.5 rounded-full bg-green" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Com o Isa Concilia</span>
              </div>
              <ul className="space-y-4">
                {['Cruzamento automático com IA', 'Inconsistências em tempo real', 'Conciliação em minutos', 'Equipe focada em estratégia'].map(t => (
                  <li key={t} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-1"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-sm text-primary leading-relaxed">{t}</span>
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
