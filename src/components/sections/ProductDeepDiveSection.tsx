'use client'

import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

function DashboardDetail() {
  return (
    <div className="relative">
      <div className="hidden md:flex absolute -top-2 -right-2 bg-white shadow-lg rounded-full px-3 py-1.5 items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold text-primary-text">Dashboard ativo</span>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="text-[10px] text-secondary-text font-medium">ISA Concilia — Relatório</span>
        </div>
        <div className="p-5">
          {/* Summary row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Conciliados', value: '842', pct: '96.8%', color: 'text-emerald-600' },
              { label: 'Pendentes', value: '18', pct: '2.1%', color: 'text-amber-600' },
              { label: 'Erros', value: '10', pct: '1.1%', color: 'text-red-500' },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded-lg p-3">
                <p className="text-[10px] text-secondary-text">{s.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-lg font-bold text-primary-text">{s.value}</span>
                  <span className={`text-[10px] font-semibold ${s.color}`}>{s.pct}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="border border-border rounded-lg p-3">
            <p className="text-[10px] font-semibold text-secondary-text mb-2">Progresso da conciliação</p>
            <div className="h-3 bg-surface rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full" style={{ width: '96.8%' }} />
              <div className="bg-amber-400 h-full" style={{ width: '2.1%' }} />
              <div className="bg-red-400 h-full" style={{ width: '1.1%' }} />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[9px] text-emerald-600 font-medium">Conciliados</span>
              <span className="text-[9px] text-amber-600 font-medium">Pendentes</span>
              <span className="text-[9px] text-red-500 font-medium">Erros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDeepDiveSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Visual — 60% */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <DashboardDetail />
          </div>

          {/* Text — 40% */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <SectionHeading
              label="Relatórios"
              title="Visibilidade total da conciliação"
              align="left"
            />
            <ul className="space-y-4 mt-2">
              {[
                'Status em tempo real de cada empresa',
                'Percentual de conciliação automática',
                'Histórico completo por período',
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 flex-shrink-0">
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
