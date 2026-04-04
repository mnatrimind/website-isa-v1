'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

function Mockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-[40px] bg-accent/[0.06] blur-[50px]" />
      <div className="absolute -inset-5 rounded-3xl bg-accent/[0.03] blur-[25px]" />

      {/* Floating labels */}
      <div className="hidden lg:flex absolute -left-5 top-12 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/[0.05] rounded-lg px-3 py-1.5 items-center gap-2 z-20 border border-border/50">
        <span className="w-[6px] h-[6px] rounded-full bg-green animate-pulse" />
        <span className="text-[10px] font-medium text-primary">Conciliação ativa</span>
      </div>
      <div className="hidden lg:flex absolute -right-3 top-36 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/[0.05] rounded-lg px-3 py-1.5 items-center gap-2 z-20 border border-border/50">
        <span className="w-[6px] h-[6px] rounded-full bg-green" />
        <span className="text-[10px] font-medium text-primary">99,2% precisão</span>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl shadow-black/[0.07] border border-border/70 overflow-hidden md:-rotate-1 transition-transform duration-700 hover:rotate-0">
        <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 border-b border-border/50">
          <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-border" /><span className="w-2 h-2 rounded-full bg-border" /><span className="w-2 h-2 rounded-full bg-border" /></div>
          <span className="text-[9px] text-muted font-medium tracking-wider ml-1">ISA CONCILIA</span>
        </div>
        <div className="p-3.5 space-y-2.5">
          <div className="grid grid-cols-3 gap-2">
            {[{ l: 'Empresas', v: '12', d: '+3' }, { l: 'Conciliações', v: '87', d: '+14' }, { l: 'Arquivos', v: '156', d: '+28' }].map(k => (
              <div key={k.l} className="rounded-lg bg-surface/60 p-2.5">
                <p className="text-[8px] text-muted uppercase tracking-wider">{k.l}</p>
                <p className="text-base font-bold text-primary mt-0.5">{k.v} <span className="text-[8px] font-semibold text-green">{k.d}</span></p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-surface/60 p-2.5">
            <p className="text-[8px] text-muted uppercase tracking-wider mb-2">Conciliações / mês</p>
            <div className="flex items-end gap-1 h-12">
              {[40, 58, 50, 75, 68, 62, 82].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, #635BFF, #7A73FF)`, opacity: 0.5 + h / 180 }} />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border/50 overflow-hidden">
            {[{ n: 'Empresa Alpha', s: 'CONCILIADO', c: 'bg-green/10 text-green' }, { n: 'Beta Ltda', s: 'CONCILIADO', c: 'bg-green/10 text-green' }, { n: 'Gamma S.A.', s: 'ERRO', c: 'bg-red/10 text-red' }, { n: 'Delta Corp', s: 'AGUARDANDO', c: 'bg-amber/10 text-amber' }].map((r, i) => (
              <div key={r.n} className={`flex items-center justify-between px-3 py-1.5 ${i > 0 ? 'border-t border-border/30' : ''}`}>
                <span className="text-[10px] text-primary">{r.n}</span>
                <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${r.c}`}>{r.s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 60% 5%, rgba(99,91,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 70% at 100% 40%, rgba(99,91,255,0.04) 0%, transparent 40%), radial-gradient(ellipse 40% 50% at 5% 90%, rgba(59,130,246,0.03) 0%, transparent 40%), linear-gradient(180deg, #fff 0%, #F8FAFC 100%)` }} />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

      <Container className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-accent text-sm font-medium mb-6 entrance d1">Conciliação contábil com IA</span>
          <h1 className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.06] text-primary entrance d2">
            Conciliação contábil em minutos, não dias.
          </h1>
          <p className="text-secondary text-base md:text-lg max-w-lg mt-6 leading-relaxed entrance d3">
            Conecte extratos ao balancete, identifique correspondências com IA, e reduza o trabalho manual de dias para minutos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 entrance d4">
            <Button size="lg">Agendar demonstração</Button>
            <Button variant="secondary" size="lg">Ver como funciona</Button>
          </div>
          <div className="mt-14 flex gap-10 entrance d5">
            {[{ v: '99%', l: 'mais rápido' }, { v: '−85%', l: 'erros manuais' }, { v: '3x', l: 'capacidade' }].map(m => (
              <div key={m.l}>
                <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary">{m.v}</p>
                <p className="text-xs text-muted mt-0.5">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block entrance d4"><Mockup /></div>
      </Container>
    </section>
  )
}
