import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

function StepCircle({ done, active, children }: { done?: boolean; active?: boolean; children: React.ReactNode }) {
  const base = 'w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0'
  if (done) return <div className={`${base} bg-emerald-50 text-emerald-600 border-2 border-emerald-500`}>{children}</div>
  if (active) return <div className={`${base} bg-primary-text text-white`}>{children}</div>
  return <div className={`${base} bg-surface text-gray-400 border-2 border-border`}>{children}</div>
}

function StepLine({ done }: { done?: boolean }) {
  return <div className={`flex-1 h-0.5 mx-1 ${done ? 'bg-emerald-500' : 'bg-border'}`} />
}

function ReconciliationMockup() {
  const rows = [
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
    { date: '27/01/2026', cd: 'CRÉDITO', conta: 'Selecionar conta ▾', valor: 'R$ 1.000.000', status: 'CONFERIR', color: 'bg-amber-50 text-amber-600', isSelect: true },
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
      {/* Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-gray-400 bg-white border border-border rounded px-3 py-0.5">
            app.isaconcilia.com.br
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Stepper */}
        <div className="flex items-center justify-center max-w-md mx-auto mb-8">
          <div className="flex flex-col items-center gap-1.5">
            <StepCircle done>✓</StepCircle>
            <span className="text-[10px] text-secondary-text font-medium">Empresa</span>
          </div>
          <StepLine done />
          <div className="flex flex-col items-center gap-1.5">
            <StepCircle done>✓</StepCircle>
            <span className="text-[10px] text-secondary-text font-medium">Importações</span>
          </div>
          <StepLine done />
          <div className="flex flex-col items-center gap-1.5">
            <StepCircle active>3</StepCircle>
            <span className="text-[10px] text-primary-text font-semibold">Conciliação</span>
          </div>
          <StepLine />
          <div className="flex flex-col items-center gap-1.5">
            <StepCircle>4</StepCircle>
            <span className="text-[10px] text-gray-400 font-medium">Resultado</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-sm font-semibold text-primary-text mb-1">Revise a Conciliação</h3>
        <p className="text-xs text-secondary-text mb-5">Valide as correspondências sugeridas pela IA antes de finalizar.</p>

        {/* Table */}
        <div className="border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                {['DATA', 'C/D', 'CONTA', 'VALOR', 'STATUS'].map((h) => (
                  <th key={h} className="text-[10px] uppercase tracking-wider text-secondary-text font-medium text-left px-4 py-2.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="text-xs text-primary-text px-4 py-2.5">{row.date}</td>
                  <td className="text-xs text-primary-text px-4 py-2.5">{row.cd}</td>
                  <td className="text-xs px-4 py-2.5">
                    {row.isSelect ? (
                      <span className="text-gray-400 bg-surface border border-border rounded px-2 py-0.5 text-[11px]">
                        {row.conta}
                      </span>
                    ) : (
                      <span className="text-primary-text">{row.conta}</span>
                    )}
                  </td>
                  <td className="text-xs text-primary-text px-4 py-2.5 font-medium">{row.valor}</td>
                  <td className="px-4 py-2.5">
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded ${row.color}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcaseSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          label="O produto"
          title="Veja o Isa Concilia em ação"
        />
        <div className="max-w-4xl mx-auto mt-12">
          <ReconciliationMockup />
        </div>
      </Container>
    </section>
  )
}
