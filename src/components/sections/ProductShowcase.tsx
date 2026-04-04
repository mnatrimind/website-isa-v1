import Container from '@/components/layout/Container'

function Step({ label, done, active, num }: { label: string; done?: boolean; active?: boolean; num: number }) {
  const cls = done ? 'bg-green/15 text-green ring-2 ring-green/30' : active ? 'bg-primary text-white ring-2 ring-primary/20' : 'bg-surface text-muted ring-2 ring-border/60'
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold ${cls}`}>
        {done ? '\u2713' : num}
      </div>
      <span className={`text-[9px] font-medium ${active ? 'text-primary' : 'text-muted'}`}>{label}</span>
    </div>
  )
}

export default function ProductShowcase() {
  const rows = [
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', c: 'bg-green/10 text-green' },
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', c: 'bg-green/10 text-green' },
    { date: '27/01', cd: 'CRE', conta: 'Selecionar conta', valor: 'R$ 1.000.000', status: 'CONFERIR', c: 'bg-amber/10 text-amber', sel: true },
    { date: '27/01', cd: 'DEB', conta: '9-(1.1.1.02) SICRED', valor: 'R$ 1.000.000', status: 'PRONTO', c: 'bg-green/10 text-green' },
  ]

  return (
    <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #F6F9FC, #F0F4F8 50%, #F6F9FC)' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">O produto</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary mb-4">Veja cada etapa da conciliação</h2>
            <p className="text-secondary leading-relaxed mb-8">Interface projetada para contadores. Importação, processamento e revisão em um único fluxo.</p>
            <ul className="space-y-3">
              {['Importação automática de extratos', 'IA identifica correspondências', 'Exceções destacadas para revisão'].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" className="mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-sm text-secondary">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Gradient glow behind */}
            <div className="absolute -inset-10 rounded-[40px] bg-accent/[0.05] blur-[50px]" />

            {/* Floating annotations */}
            <div className="hidden md:flex absolute -top-4 right-6 bg-white shadow-lg shadow-black/[0.08] rounded-lg px-3 py-2 items-center gap-2 z-20 border border-border/50">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[11px] font-semibold text-primary">IA ativa</span>
            </div>
            <div className="hidden md:flex absolute top-24 -left-4 bg-white shadow-lg shadow-black/[0.08] rounded-lg px-3 py-2 items-center gap-2 z-20 border border-border/50">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold text-primary">Matching automático</span>
            </div>

            <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/[0.12] border border-border/60 overflow-hidden">
              <div className="p-5 md:p-6">
                {/* Stepper with thicker lines */}
                <div className="flex items-center justify-center gap-0 max-w-sm mx-auto mb-7">
                  <Step label="Empresa" done num={1} />
                  <div className="w-10 h-[2px] bg-green/40 mx-1 mb-5" />
                  <Step label="Importações" done num={2} />
                  <div className="w-10 h-[2px] bg-green/40 mx-1 mb-5" />
                  <Step label="Conciliação" active num={3} />
                  <div className="w-10 h-[2px] bg-border mx-1 mb-5" />
                  <Step label="Resultado" num={4} />
                </div>

                <h3 className="text-sm font-semibold text-primary mb-0.5">Revise a Conciliação</h3>
                <p className="text-[11px] text-muted mb-4">Valide as correspondências da IA.</p>

                <div className="rounded-lg border border-border/50 overflow-x-auto">
                  <table className="w-full min-w-[440px]">
                    <thead><tr className="bg-surface/80">
                      {['DATA', 'C/D', 'CONTA', 'VALOR', 'STATUS'].map(h => <th key={h} className="text-[8px] uppercase tracking-wider text-muted font-medium text-left px-3 py-2">{h}</th>)}
                    </tr></thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i} className={`border-t border-border/30 ${i % 2 === 1 ? 'bg-[#F9FAFB]' : ''}`}>
                          <td className="text-[11px] text-primary px-3 py-2.5">{r.date}</td>
                          <td className="text-[11px] text-primary px-3 py-2.5">{r.cd}</td>
                          <td className="text-[11px] px-3 py-2.5">{r.sel ? <span className="text-muted bg-surface border border-border/50 rounded px-2 py-0.5 text-[10px]">{r.conta}</span> : <span className="text-primary">{r.conta}</span>}</td>
                          <td className="text-[11px] text-primary px-3 py-2.5 font-medium">{r.valor}</td>
                          <td className="px-3 py-2.5"><span className={`text-[9px] font-semibold px-2.5 py-1 rounded-full ${r.c}`}>{r.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
