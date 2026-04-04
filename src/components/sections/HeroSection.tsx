'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

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
      {/* Glow behind card */}
      <div className="absolute -inset-8 bg-accent/[0.06] rounded-3xl blur-3xl" />

      <div className="relative bg-white rounded-2xl shadow-2xl border border-border overflow-hidden md:-rotate-2 transition-transform duration-500 hover:rotate-0">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="text-[10px] text-secondary-text font-medium">ISA Concilia</span>
        </div>

        <div className="p-4">
          {/* KPIs */}
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

          {/* Bar chart */}
          <div className="border border-border rounded-lg p-3 mb-4">
            <p className="text-[10px] font-semibold text-secondary-text mb-3">Conciliações por mês</p>
            <div className="flex items-end gap-3 h-16">
              {bars.map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex flex-col items-center gap-0.5 h-16 justify-end">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: bar.blue }} />
                    <div className="w-3 rounded-t bg-amber-400" style={{ height: bar.amber }} />
                  </div>
                  <span className="text-[8px] text-gray-400 mt-1">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
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
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded ${row.color}`}>
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
    </div>
  )
}

const proofMetrics = [
  { value: '99%', label: 'mais rápido' },
  { value: '−85%', label: 'erros manuais' },
  { value: '3x', label: 'mais capacidade' },
]

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.06] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <span className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              {SITE.tagline}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-text leading-[1.08]">
              Automatize sua conciliação bancária
            </h1>

            <p className="text-lg md:text-xl text-secondary-text max-w-lg mt-6 leading-relaxed">
              O Isa Concilia conecta extratos ao balancete, identifica correspondências com IA, e reduz o trabalho manual de dias para minutos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href={`mailto:${SITE.email}`}>
                {SITE.cta.primary}
              </Button>
              <Button variant="secondary" size="lg" href="#como-funciona">
                {SITE.cta.secondary} →
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              {proofMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-3xl font-bold text-primary-text">{metric.value}</p>
                  <p className="text-sm text-secondary-text">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="relative lg:pl-4">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
