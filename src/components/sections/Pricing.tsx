'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Starter',
    price: 'R$ 197',
    period: '/mês',
    desc: 'Para contadores autônomos e escritórios iniciantes.',
    features: ['Até 5 empresas', 'Conciliação automática', 'Relatórios básicos', 'Suporte por email'],
    cta: 'Começar agora',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'R$ 497',
    period: '/mês',
    desc: 'Para escritórios em crescimento.',
    features: ['Até 30 empresas', 'Conciliação automática', 'IA adaptativa', 'Relatórios avançados', 'Suporte prioritário', 'Integração com balancete'],
    cta: 'Escolher Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Para operações de grande escala.',
    features: ['Empresas ilimitadas', 'Tudo do Professional', 'API dedicada', 'SLA garantido', 'Gerente de conta', 'Onboarding personalizado'],
    cta: 'Falar com vendas',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="preco" className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #F6F9FC, #F0F4F8)' }}>
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Preço</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Planos para cada estágio</h2>
          <p className="text-secondary mt-3">Sem taxa de setup. Cancele quando quiser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map(p => (
            <div key={p.name} className={`relative rounded-2xl p-7 border bg-white shadow-sm flex flex-col ${p.popular ? 'border-accent shadow-md ring-1 ring-accent/20' : 'border-border'}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Mais popular</span>
              )}
              <h3 className="font-heading text-lg font-bold text-primary">{p.name}</h3>
              <div className="mt-4 mb-2">
                <span className="font-heading text-3xl font-extrabold text-primary">{p.price}</span>
                {p.period && <span className="text-muted text-sm">{p.period}</span>}
              </div>
              <p className="text-sm text-secondary mb-6">{p.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-sm text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? 'primary' : 'secondary'} className="w-full">{p.cta}</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
