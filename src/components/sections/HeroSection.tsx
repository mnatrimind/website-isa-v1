'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { SITE, scrollTo } from '@/lib/constants'

function DashboardMockup() {
  const kpis = [
    { label: 'Empresas Ativas', value: '12', change: '+3 este mês' },
    { label: 'Conciliações', value: '87', change: '+14 este mês' },
    { label: 'Arquivos', value: '156', change: '+28 este mês' },
  ]

  const bars = [
    { blue: '45%', amber: '30%', label: 'Jan' },
    { blue: '60%', amber: '20%', label: 'Fev' },
    { blue: '55%', amber: '35%', label: 'Mar' },
    { blue: '80%', amber: '15%', label: 'Abr' },
    { blue: '70%', amber: '25%', label: 'Mai' },
  ]

  const rows = [
    { name: 'Empresa Alpha', status: 'CONCILIADO', color: 'bg-emerald-50 text-emerald-700' },
    { name: 'Beta Ltda', status: 'CONCILIADO', color: 'bg-emerald-50 text-emerald-700' },
    { name: 'Gamma S.A.', status: 'ERRO', color: 'bg-red-50 text-red-600' },
    { name: 'Delta Corp', status: 'AGUARDANDO', color: 'bg-amber-50 text-amber-600' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-accent/[0.05] rounded-3xl blur-3xl" />

      {/* Floating labels — hidden on mobile */}
      <div className="hidden lg:block absolute -left-4 top-16 bg-white rounded-lg shadow-lg border border-border px-3 py-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-primary-text">Conciliação em tempo real</span>
        </div>
      </div>
      <div className="hidden lg:block absolute -right-2 top-36 bg-white rounded-lg shadow-lg border border-border px-3 py-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-primary-text">99,2% precisão IA</span>
        </div>
      </div>
      <div className="hidden lg:block absolute -left-2 bottom-24 bg-white rounded-lg shadow-lg border border-border px-3 py-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-medium text-primary-text">3 pendências</span>
        </div>
      </div>

      <div className="relative bg-white rounded-xl shadow-lg border border-border overflow-hidden md:-rotate-1 transition-transform duration-500 hover:rotate-0">
        <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="text-[10px] text-secondary-text font-medium">ISA Concilia</span>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="border border-border rounded-lg p-3">
                <p className="text-[10px] text-secondary-text">{kpi.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-lg font-bold text-primary-text">{kpi.value}</span>
                  <span className="text-[9px] font-semibold text-green bg-green-light rounded px-1 py-0.5">{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg p-3 mb-4">
            <p className="text-[10px] font-semibold text-secondary-text mb-3">Conciliações por mês</p>
            <div className="flex items-end gap-3 h-16">
              {bars.map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex flex-col items-center gap-0.5 h-16 justify-end">
                    <div className="w-3 rounded-t bg-accent" style={{ height: bar.blue }} />
                    <div className="w-3 rounded-t bg-amber-400" style={{ height: bar.amber }} />
                  </div>
                  <span className="text-[8px] text-gray-400 mt-1">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-[9px] text-left text-gray-400 font-medium px-3 py-2">EMPRESA</th>
                  <th className="text-[9px] text-left text-gray-400 font-medium px-3 py-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className="border-b border-border last:border-0">
                    <td className="text-xs text-primary-text px-3 py-2">{row.name}</td>
                    <td className="px-3 py-2">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded ${row.color}`}>{row.status}</span>
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

export default function HeroSection() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 70% 0%, rgba(99,91,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(99,91,255,0.03) 0%, transparent 40%), radial-gradient(ellipse at 0% 100%, rgba(0,100,255,0.02) 0%, transparent 40%), #ffffff' }}
    >

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              {SITE.tagline}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary-text leading-[1.08]">
              Automatize sua conciliação bancária
            </h1>

            <p className="text-base md:text-lg text-secondary-text max-w-lg mt-6 leading-relaxed">
              Conecte extratos ao balancete, identifique correspondências com IA, e reduza o trabalho manual de dias para minutos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
                {SITE.cta.primary}
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollTo('como-funciona')}>
                {SITE.cta.secondary} →
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              {[
                { value: '99%', label: 'mais rápido' },
                { value: '−85%', label: 'erros manuais' },
                { value: '3x', label: 'mais capacidade' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-2xl md:text-3xl font-semibold text-primary-text tracking-tight">{m.value}</p>
                  <p className="text-sm text-secondary-text">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4 hidden md:block">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
