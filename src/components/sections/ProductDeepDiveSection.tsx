'use client'

import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

function ReportMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-accent/[0.04] rounded-3xl blur-[30px]" />

      <div className="hidden md:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/[0.06] rounded-lg px-3 py-1.5 items-center gap-2 z-20 border border-border/60">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-medium text-primary-text">Dashboard ativo</span>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-border/80 overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F8FAFC] border-b border-border/60">
          <div className="flex gap-1.5">
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="text-[10px] text-muted-text font-medium">ISA Concilia — Relatório</span>
        </div>
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Conciliados', value: '842', pct: '96.8%', color: 'text-emerald-600' },
              { label: 'Pendentes', value: '18', pct: '2.1%', color: 'text-amber-600' },
              { label: 'Erros', value: '10', pct: '1.1%', color: 'text-red-500' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-[#F8FAFC] p-3">
                <p className="text-[9px] text-muted-text uppercase tracking-wider">{s.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-lg font-bold text-primary-text">{s.value}</span>
                  <span className={`text-[10px] font-semibold ${s.color}`}>{s.pct}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-[#F8FAFC] p-3">
            <p className="text-[9px] text-muted-text uppercase tracking-wider mb-2">Progresso</p>
            <div className="h-3 bg-white rounded-full overflow-hidden flex border border-border/40">
              <div className="bg-emerald-500 h-full rounded-l-full" style={{ width: '96.8%' }} />
              <div className="bg-amber-400 h-full" style={{ width: '2.1%' }} />
              <div className="bg-red-400 h-full rounded-r-full" style={{ width: '1.1%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDeepDiveSection() {
  return (
    <section className="py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #F6F9FC 0%, #F0F4F8 100%)'
    }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <ReportMockup />
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <SectionHeading label="Relatórios" title="Visibilidade total da conciliação" align="left" />
            <ul className="space-y-4 mt-2">
              {[
                'Status em tempo real de cada empresa',
                'Percentual de conciliação automática',
                'Histórico completo por período',
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-secondary-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="secondary" size="md" onClick={(e) => e.preventDefault()}>
                Explorar funcionalidades
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
