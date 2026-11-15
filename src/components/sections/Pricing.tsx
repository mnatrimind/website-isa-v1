'use client'

import { useEffect, useMemo, useState } from 'react'
import Container from '@/components/layout/Container'
import { APP_URL } from '@/lib/constants'

type Interval = 'day' | 'week' | 'month' | 'year'

type Price = {
  amount: number
  currency: string
  interval: Interval
  intervalCount: number
}

type Plan = {
  name: string
  maxNumberOfUsers: number
  maxNumberOfConciliationEntries: number
  prices: Price[]
}

type PricingState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'loaded', plans: Plan[] }

const intervals: Record<Interval, [string, string]> = {
  day: ['dia', 'dias'],
  week: ['semana', 'semanas'],
  month: ['mês', 'meses'],
  year: ['ano', 'anos'],
}

const intervalMonths: Record<Interval, number> = { day: 1 / 30, week: 7 / 30, month: 1, year: 12 }
const monthPeriods: Record<number, [string, string]> = {
  1: ['Mensal', 'mês'],
  2: ['Bimestral', 'bimestre'],
  3: ['Trimestral', 'trimestre'],
  6: ['Semestral', 'semestre'],
  12: ['Anual', 'ano'],
}
const MONTHLY = 'month:1'
const cardAccent = 'linear-gradient(135deg, #1f2948 0%, #2d4494 30%, #2563eb 65%, #0ea5e9 100%)'

type Period = { key: string, label: string, suffix: string, months: number }

// Monthly and yearly offers share a key so "12 months" and "1 year" form a single tab.
function toPeriod(price: Price): Period {
  const months = price.intervalCount * intervalMonths[price.interval]
  const named = (price.interval === 'month' || price.interval === 'year') ? monthPeriods[months] : undefined
  if (named) return { key: `month:${months}`, label: named[0], suffix: `/${named[1]}`, months }

  const [singular, plural] = intervals[price.interval]
  const key = `${price.interval}:${price.intervalCount}`
  if (price.intervalCount === 1) {
    const label = price.interval === 'day' ? 'Diário' : price.interval === 'week' ? 'Semanal' : `Por ${singular}`
    return { key, label, suffix: `/${singular}`, months }
  }
  const count = price.intervalCount.toLocaleString('pt-BR')
  return { key, label: `A cada ${count} ${plural}`, suffix: `a cada ${count} ${plural}`, months }
}

function formatAmount(price: Price) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: price.currency }).format(price.amount)
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  )
}

function parsePlans(data: unknown): Plan[] {
  if (!data || typeof data !== 'object' || !('plans' in data) || !Array.isArray(data.plans)) {
    throw new Error('Invalid pricing response')
  }

  for (const plan of data.plans) {
    if (!plan || typeof plan.name !== 'string' || !plan.name.trim() ||
      !Number.isInteger(plan.maxNumberOfUsers) || plan.maxNumberOfUsers < 0 ||
      !Number.isInteger(plan.maxNumberOfConciliationEntries) || plan.maxNumberOfConciliationEntries < 0 ||
      !Array.isArray(plan.prices)) {
      throw new Error('Invalid plan')
    }

    for (const price of plan.prices) {
      if (!price || typeof price.amount !== 'number' || !Number.isFinite(price.amount) || price.amount < 0 ||
        typeof price.currency !== 'string' || !/^[a-z]{3}$/i.test(price.currency) ||
        typeof price.interval !== 'string' || !Object.hasOwn(intervals, price.interval) ||
        !Number.isInteger(price.intervalCount) || price.intervalCount < 1) {
        throw new Error('Invalid price')
      }
    }
  }

  return data.plans as Plan[]
}

export default function Pricing() {
  const [state, setState] = useState<PricingState>({ status: 'loading' })
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null)

  const plans = useMemo(() => state.status === 'loaded' ? state.plans : [], [state])

  const periods = useMemo(() => {
    const unique = new Map<string, Period>()
    for (const plan of plans) {
      for (const price of plan.prices) {
        const period = toPeriod(price)
        if (!unique.has(period.key)) unique.set(period.key, period)
      }
    }
    return [...unique.values()].sort((a, b) => a.months - b.months)
  }, [plans])

  const activePeriod = periods.find(period => period.key === selectedPeriod)
    ?? periods.find(period => period.key === MONTHLY)
    ?? periods[0]

  const visiblePlans = useMemo(() => {
    if (!activePeriod) return []
    return plans
      .map((plan, index) => ({
        plan,
        index,
        prices: plan.prices
          .filter(price => toPeriod(price).key === activePeriod.key)
          .sort((a, b) => a.amount - b.amount),
      }))
      .filter(item => item.prices.length > 0)
      .sort((a, b) => a.prices[0].amount - b.prices[0].amount)
  }, [plans, activePeriod])

  useEffect(() => {
    const controller = new AbortController()
    let active = true
    const timeout = window.setTimeout(() => controller.abort(), 10000)

    async function loadPlans() {
      try {
        const url = process.env.NEXT_PUBLIC_PRICING_API_URL
        if (!url) throw new Error('Pricing endpoint is not configured')

        const response = await fetch(url, { signal: controller.signal, cache: 'no-store' })
        if (!response.ok) throw new Error('Pricing request failed')

        const plans = parsePlans(await response.json())
        if (active) setState({ status: 'loaded', plans })
      } catch {
        if (active) setState({ status: 'error' })
      } finally {
        window.clearTimeout(timeout)
      }
    }

    void loadPlans()
    return () => {
      active = false
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  return (
    <section id="planos" className="scroll-mt-20 bg-surface py-24 md:py-32">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Planos</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Escolha o plano para o seu escritório</h2>
        </div>

        <div aria-live="polite">
          {state.status === 'loading' && <p className="text-center text-secondary">Carregando planos...</p>}
          {state.status === 'error' && <p className="text-center text-secondary">Não foi possível carregar os planos. Tente novamente mais tarde.</p>}
          {state.status === 'loaded' && state.plans.length === 0 && <p className="text-center text-secondary">Nenhum plano disponível no momento.</p>}
          {state.status === 'loaded' && activePeriod && (
            <>
              {periods.length > 1 && (
                <div role="group" aria-label="Período de cobrança" className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-border bg-white p-1 shadow-sm">
                  {periods.map(period => {
                    const active = period.key === activePeriod.key
                    return (
                      <button
                        key={period.key}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelectedPeriod(period.key)}
                        className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${active ? 'bg-accent text-white shadow-sm' : 'text-secondary hover:bg-surface hover:text-primary'}`}
                      >
                        {period.label}
                      </button>
                    )
                  })}
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-6">
                {visiblePlans.map(({ plan, index, prices }) => (
                  <article key={`${plan.name}-${index}`} className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div aria-hidden="true" className="h-1.5" style={{ background: cardAccent }} />
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="font-heading text-xl font-bold text-accent break-words">{plan.name}</h3>
                      <div className="mt-6 space-y-2">
                        {prices.map((price, priceIndex) => (
                          <p key={priceIndex} className="flex flex-wrap items-baseline gap-x-1">
                            <span className="font-heading text-3xl font-extrabold tracking-tight text-primary">{formatAmount(price)}</span>
                            <span className="text-secondary">{activePeriod.suffix}</span>
                          </p>
                        ))}
                      </div>
                      <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-secondary">
                        <li className="flex items-start gap-3"><CheckIcon />Até {plan.maxNumberOfUsers.toLocaleString('pt-BR')} {plan.maxNumberOfUsers === 1 ? 'usuário' : 'usuários'}</li>
                        <li className="flex items-start gap-3"><CheckIcon />Até {plan.maxNumberOfConciliationEntries.toLocaleString('pt-BR')} {plan.maxNumberOfConciliationEntries === 1 ? 'lançamento' : 'lançamentos'} de conciliação</li>
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-10 text-center">
          <a href={`${APP_URL.replace(/\/+$/, '')}/Register`} className="inline-flex items-center justify-center rounded-[8px] bg-accent px-7 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-accent-hover hover:shadow-md">
            Clique aqui para criar a sua conta
          </a>
        </div>
      </Container>
    </section>
  )
}