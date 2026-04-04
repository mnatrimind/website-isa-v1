import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

function ReconciliationMockup() {
  const rows = [
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-500/10 text-emerald-600' },
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-500/10 text-emerald-600' },
    { date: '27/01', cd: 'CRE', conta: 'Selecionar conta', valor: 'R$ 1.000.000', status: 'CONFERIR', color: 'bg-amber-500/10 text-amber-600', isSelect: true },
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', color: 'bg-emerald-500/10 text-emerald-600' },
  ]

  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute -inset-8 bg-accent/[0.05] rounded-3xl blur-[40px]" />

      {/* Floating annotations */}
      <div className="hidden md:flex absolute -top-4 right-6 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/[0.06] rounded-lg px-3 py-1.5 items-center gap-2 z-20 border border-border/60">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-medium text-primary-text">IA ativa</span>
      </div>
      <div className="hidden md:flex absolute top-20 -left-4 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/[0.06] rounded-lg px-3 py-1.5 items-center gap-2 z-20 border border-border/60">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-[11px] font-medium text-primary-text">Matching automático</span>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-border/80 overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F8FAFC] border-b border-border/60">
          <div className="flex gap-1.5">
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="text-[10px] text-muted-text font-medium">app.isaconcilia.com.br</span>
        </div>

        <div className="p-5 md:p-6">
          {/* Stepper */}
          <div className="flex items-center justify-center max-w-xs mx-auto mb-6">
            {[
              { label: 'Empresa', done: true },
              { label: 'Importar', done: true },
              { label: 'Conciliar', active: true },
              { label: 'Resultado' },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    step.done ? 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/30'
                    : step.active ? 'bg-primary-text text-white'
                    : 'bg-[#F1F3F6] text-muted-text ring-1 ring-border/60'
                  }`}>
                    {step.done ? '\u2713' : i + 1}
                  </div>
                  <span className={`text-[9px] font-medium ${step.active ? 'text-primary-text' : 'text-muted-text'}`}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className={`w-6 md:w-10 h-px mx-0.5 mb-4 ${step.done ? 'bg-emerald-500/40' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-primary-text mb-1">Revise a Conciliação</h3>
          <p className="text-[11px] text-muted-text mb-4">Valide as correspondências sugeridas pela IA.</p>

          <div className="rounded-lg border border-border/60 overflow-x-auto">
            <table className="w-full min-w-[460px]">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  {['DATA', 'C/D', 'CONTA', 'VALOR', 'STATUS'].map((h) => (
                    <th key={h} className="text-[8px] uppercase tracking-wider text-muted-text font-medium text-left px-3 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-border/40">
                    <td className="text-[11px] text-primary-text px-3 py-2">{row.date}</td>
                    <td className="text-[11px] text-primary-text px-3 py-2">{row.cd}</td>
                    <td className="text-[11px] px-3 py-2">
                      {row.isSelect ? (
                        <span className="text-muted-text bg-[#F1F3F6] border border-border/60 rounded px-2 py-0.5 text-[10px]">{row.conta}</span>
                      ) : (
                        <span className="text-primary-text">{row.conta}</span>
                      )}
                    </td>
                    <td className="text-[11px] text-primary-text px-3 py-2 font-medium">{row.valor}</td>
                    <td className="px-3 py-2">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcaseSection() {
  return (
    <section className="py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #F6F9FC 0%, #F0F4F8 50%, #F6F9FC 100%)'
    }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <SectionHeading
              label="O produto"
              title="Veja cada etapa da conciliação"
              align="left"
            />
            <ul className="space-y-4 mt-2">
              {[
                'Importação automática de extratos e balancetes',
                'IA identifica correspondências em segundos',
                'Revisão assistida com exceções destacadas',
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-secondary-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <ReconciliationMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
