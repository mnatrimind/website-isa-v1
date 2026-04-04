import Container from '@/components/layout/Container'

const metrics = [
  { value: '99%', label: 'mais rápido' },
  { value: '−85%', label: 'erros' },
  { value: '3x', label: 'capacidade' },
  { value: '24h', label: 'para começar' },
]

export default function TrustMetrics() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F4F7FA 0%, #F0F3F7 100%)' }}>
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #0A2540 39px, #0A2540 40px)' }} />
      <Container className="relative">
        <div className="grid grid-cols-2 md:flex md:justify-center gap-y-10 gap-x-8 md:gap-0">
          {metrics.map((m, i) => (
            <div key={m.label} className="flex items-center">
              {i > 0 && <div className="hidden md:block w-px h-16 bg-primary/[0.08] mx-14 lg:mx-20" />}
              <div className="text-center md:text-left">
                <p className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-primary">{m.value}</p>
                <p className="text-sm text-muted mt-1 font-medium">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
