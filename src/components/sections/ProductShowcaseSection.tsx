import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

function ReconciliationMockup() {
  const rows = [
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
    { date: '27/01/2026', cd: 'CRÉDITO', conta: 'Selecionar conta ▾', valor: 'R$ 1.000.000', status: 'CONFERIR', color: 'bg-amber-50 text-amber-600', isSelect: true },
    { date: '27/01/2026', cd: 'DÉBITO', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-50 text-emerald-700' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-gray-400 bg-white border border-border rounded px-3 py-0.5">app.isaconcilia.com.br</span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        {/* Stepper */}
        <div className="flex items-center justify-center max-w-sm mx-auto mb-6">
          {[
            { label: 'Empresa', done: true },
            { label: 'Importações', done: true },
            { label: 'Conciliação', active: true },
            { label: 'Resultado' },
          ].map((step, i, arr) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.done ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-500'
                  : step.active ? 'bg-primary-text text-white'
                  : 'bg-surface text-gray-400 border-2 border-border'
                }`}>
                  {step.done ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] font-medium ${step.active ? 'text-primary-text' : 'text-secondary-text'}`}>{step.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div className={`w-8 md:w-12 h-0.5 mx-1 mb-4 ${step.done ? 'bg-emerald-500' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-primary-text mb-1">Revise a Conciliação</h3>
        <p className="text-xs text-secondary-text mb-4">Valide as correspondências sugeridas pela IA.</p>

        <div className="border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-border">
                {['DATA', 'C/D', 'CONTA', 'VALOR', 'STATUS'].map((h) => (
                  <th key={h} className="text-[10px] uppercase tracking-wider text-secondary-text font-medium text-left px-3 py-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="text-xs text-primary-text px-3 py-2">{row.date}</td>
                  <td className="text-xs text-primary-text px-3 py-2">{row.cd}</td>
                  <td className="text-xs px-3 py-2">
                    {row.isSelect ? (
                      <span className="text-gray-400 bg-surface border border-border rounded px-2 py-0.5 text-[11px]">{row.conta}</span>
                    ) : (
                      <span className="text-primary-text">{row.conta}</span>
                    )}
                  </td>
                  <td className="text-xs text-primary-text px-3 py-2 font-medium">{row.valor}</td>
                  <td className="px-3 py-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${row.color}`}>{row.status}</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text — 40% */}
          <div className="lg:col-span-2">
            <SectionHeading
              label="O produto"
              title="Veja cada etapa da conciliação"
              align="left"
            />
            <ul className="space-y-4 mt-2">
              {[
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ), text: 'Importação automática de extratos e balancetes' },
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ), text: 'IA identifica correspondências em segundos' },
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ), text: 'Revisão assistida com exceções destacadas' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-secondary-text leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual — 60% */}
          <div className="lg:col-span-3">
            <ReconciliationMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
