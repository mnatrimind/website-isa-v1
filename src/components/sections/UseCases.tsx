import Container from '@/components/layout/Container'

export default function UseCases() {
  return (
    <section id="diferencial" className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Diferencial</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            Muito mais que um sistema contábil
          </h2>
          <p className="text-secondary mt-4 leading-relaxed">
            O ISA Concilia foi criada para registrar informações e gerar processos com eficiência no menor tempo possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Modelo tradicional</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Conciliação</span><span className="font-semibold text-primary">Manual</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Velocidade</span><span className="font-semibold text-primary">Lenta</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Erros</span><span className="font-semibold text-primary">Recorrentes</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Escala</span><span className="font-semibold text-primary">Limitada</span></div>
              <div className="flex items-center justify-between"><span className="text-secondary">Equipe</span><span className="font-semibold text-primary">Sobrecarregada</span></div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Com ISA Concilia</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Conciliação</span><span className="font-semibold text-primary">Automatizada</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Velocidade</span><span className="font-semibold text-primary">Rápida</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Erros</span><span className="font-semibold text-primary">Reduzidos</span></div>
              <div className="flex items-center justify-between border-b border-border pb-3"><span className="text-secondary">Escala</span><span className="font-semibold text-primary">Expandida</span></div>
              <div className="flex items-center justify-between"><span className="text-secondary">Equipe</span><span className="font-semibold text-primary">Mais estratégica</span></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary">Mude agora, e acelere seu escritório</h3>
          <p className="text-secondary mt-3">Transforme sua rotina com automação inteligente ou continue operando com gargalos e erros manuais.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h4 className="font-heading text-xl font-bold text-primary mb-4">Continuar como está</h4>
            <ul className="space-y-3 text-secondary">
              <li>Mais esforço operacional</li>
              <li>Mais risco de erro</li>
              <li>Menos escala para crescer</li>
            </ul>
          </div>
          <div className="rounded-2xl p-8 shadow-sm border border-accent/30" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(14,165,233,0.08))' }}>
            <h4 className="font-heading text-xl font-bold text-primary mb-4">Evoluir com ISA Concilia</h4>
            <ul className="space-y-3 text-secondary">
              <li>Automação inteligente</li>
              <li>Mais velocidade e previsibilidade</li>
              <li>Operação pronta para crescer</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
