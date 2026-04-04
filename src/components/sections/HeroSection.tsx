'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { SITE, scrollTo } from '@/lib/constants'

function DashboardMockup() {
  const kpis = [
    { label: 'Empresas Ativas', value: '12', change: '+3' },
    { label: 'Conciliações', value: '87', change: '+14' },
    { label: 'Arquivos', value: '156', change: '+28' },
  ]

  const rows = [
    { name: 'Empresa Alpha', status: 'CONCILIADO', color: 'bg-emerald-500/10 text-emerald-600' },
    { name: 'Beta Ltda', status: 'CONCILIADO', color: 'bg-emerald-500/10 text-emerald-600' },
    { name: 'Gamma S.A.', status: 'ERRO', color: 'bg-red-500/10 text-red-500' },
    { name: 'Delta Corp', status: 'AGUARDANDO', color: 'bg-amber-500/10 text-amber-600' },
  ]

  return (
    <div className="relative">
      {/* Soft glow behind mockup */}
      <div className="absolute -inset-12 bg-accent/[0.07] rounded-[40px] blur-[60px]" />
      <div className="absolute -inset-6 bg-accent/[0.04] rounded-3xl blur-[30px]" />

      {/* Floating micro-labels */}
      <div className="hidden lg:flex absolute -left-6 top-14 bg-white/90 backdrop-blur-sm shadow-lg shadow-black/[0.06] rounded-lg px-3 py-2 items-center gap-2 z-20 border border-border/60">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-medium text-primary-text">Conciliação em tempo real</span>
      </div>
      <div className="hidden lg:flex absolute -right-4 top-40 bg-white/90 backdrop-blur-sm shadow-lg shadow-black/[0.06] rounded-lg px-3 py-2 items-center gap-2 z-20 border border-border/60">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-medium text-primary-text">99,2% precisão IA</span>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-border/80 overflow-hidden md:-rotate-1 transition-transform duration-700 ease-out hover:rotate-0">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F8FAFC] border-b border-border/60">
          <div className="flex gap-1.5">
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="text-[10px] text-muted-text font-medium tracking-wide">ISA Concilia</span>
        </div>

        <div className="p-4 space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg bg-[#F8FAFC] p-3">
                <p className="text-[9px] text-muted-text uppercase tracking-wider">{kpi.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-lg font-bold text-primary-text">{kpi.value}</span>
                  <span className="text-[9px] font-semibold text-emerald-600">{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-[#F8FAFC] p-3">
            <p className="text-[9px] text-muted-text uppercase tracking-wider mb-2.5">Conciliações por mês</p>
            <div className="flex items-end gap-[6px] h-14">
              {[45, 62, 55, 80, 72, 68].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, #635BFF, #7A73FF)`, opacity: 0.6 + (h / 200) }} />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border/60 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-[8px] text-left text-muted-text font-medium uppercase tracking-wider px-3 py-1.5">Empresa</th>
                  <th className="text-[8px] text-left text-muted-text font-medium uppercase tracking-wider px-3 py-1.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className="border-t border-border/40">
                    <td className="text-[11px] text-primary-text px-3 py-1.5">{row.name}</td>
                    <td className="px-3 py-1.5">
                      <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
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
    <section className="relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 65% 10%, rgba(99,91,255,0.06) 0%, transparent 50%),
          radial-gradient(ellipse 60% 80% at 100% 50%, rgba(99,91,255,0.04) 0%, transparent 40%),
          radial-gradient(ellipse 50% 50% at 10% 80%, rgba(59,130,246,0.03) 0%, transparent 40%),
          linear-gradient(180deg, #ffffff 0%, #F8FAFC 100%)
        `
      }} />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(10,37,64,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10,37,64,1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <Container className="relative py-28 md:py-36 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block bg-accent/8 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-entrance animate-entrance-1">
              {SITE.tagline}
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-primary-text leading-[1.08] animate-entrance animate-entrance-2">
              Automatize sua conciliação bancária
            </h1>

            <p className="text-base md:text-lg text-secondary-text max-w-lg mt-6 leading-relaxed animate-entrance animate-entrance-3">
              Conecte extratos ao balancete, identifique correspondências com IA, e reduza o trabalho manual de dias para minutos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-entrance animate-entrance-4">
              <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
                {SITE.cta.primary}
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollTo('como-funciona')}>
                {SITE.cta.secondary}
              </Button>
            </div>

            <div className="mt-14 flex gap-10 animate-entrance animate-entrance-5">
              {[
                { value: '99%', label: 'mais rápido' },
                { value: '−85%', label: 'erros manuais' },
                { value: '3x', label: 'mais capacidade' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary-text tracking-tight">{m.value}</p>
                  <p className="text-sm text-muted-text mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4 hidden md:block animate-entrance animate-entrance-4">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
