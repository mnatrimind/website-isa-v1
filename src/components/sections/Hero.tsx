'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const logos = ['Escritório ABC', 'Contábil XYZ', 'Grupo Beta', 'Finance Pro', 'Contadores BR']

function Mockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-3xl bg-white/20 blur-[40px]" />
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/[0.12] border border-white/40 overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[{ l: 'Empresas', v: '12', d: '+3' }, { l: 'Conciliações', v: '87', d: '+14' }, { l: 'Arquivos', v: '156', d: '+28' }].map(k => (
              <div key={k.l} className="rounded-lg bg-surface/80 p-2.5">
                <p className="text-[8px] text-muted uppercase tracking-wider">{k.l}</p>
                <p className="text-base font-bold text-primary mt-0.5">{k.v} <span className="text-[8px] font-semibold text-green">{k.d}</span></p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-surface/80 p-2.5">
            <p className="text-[8px] text-muted uppercase tracking-wider mb-2">Conciliações / mês</p>
            <div className="flex items-end gap-1 h-12">
              {[40, 58, 50, 75, 68, 62, 82].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: 'linear-gradient(to top, #635BFF, #7A73FF)', opacity: 0.5 + h / 180 }} />
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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Stripe-style vivid diagonal gradient — right 60% */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[75%] h-[140%]" style={{
          background: `
            linear-gradient(135deg,
              rgba(99,91,255,0.0) 0%,
              rgba(99,91,255,0.15) 15%,
              rgba(120,80,255,0.5) 30%,
              rgba(140,60,255,0.7) 42%,
              rgba(180,50,220,0.65) 52%,
              rgba(220,60,180,0.55) 62%,
              rgba(0,180,255,0.5) 78%,
              rgba(0,210,255,0.3) 90%,
              rgba(0,210,255,0.0) 100%
            )
          `,
          transform: 'rotate(-8deg)',
        }} />
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '128px 128px',
        }} />
      </div>

      <Container className="relative py-28 md:py-36 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — text on light area */}
          <div>
            <p className="text-accent text-sm font-semibold mb-5 entrance d1">Conciliação contábil com IA</p>

            <h1 className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.06] entrance d2">
              <span className="text-primary">Conciliação contábil </span>
              <span className="text-secondary">em minutos, não dias.</span>
            </h1>

            <p className="text-secondary text-base md:text-lg max-w-lg mt-6 leading-relaxed entrance d3">
              Conecte extratos ao balancete, identifique correspondências com IA, e reduza o trabalho manual de dias para minutos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 entrance d4">
              <Button size="lg" onClick={(e) => e.preventDefault()}>Agendar demonstração →</Button>
              <Button variant="secondary" size="lg" onClick={(e) => e.preventDefault()}>Ver como funciona</Button>
            </div>

            {/* Inline metrics — Stripe pattern 5 */}
            <div className="mt-12 flex gap-10 entrance d5">
              {[{ v: '99%', l: 'mais rápido' }, { v: '−85%', l: 'erros manuais' }, { v: '3x', l: 'capacidade' }].map(m => (
                <div key={m.l}>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-accent">{m.v}</p>
                  <p className="text-xs text-muted mt-0.5">{m.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup on gradient */}
          <div className="hidden lg:block entrance d4">
            <Mockup />
          </div>
        </div>
      </Container>

      {/* Trust logo row — below hero, full width */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-white/80 backdrop-blur-sm">
        <Container className="py-5 flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {logos.map(name => (
            <span key={name} className="text-[#9CA3AF] font-semibold text-lg tracking-wide opacity-40 select-none">
              {name}
            </span>
          ))}
        </Container>
      </div>
    </section>
  )
}
