import Container from '@/components/layout/Container'

const metrics = [
  { value: '99%', label: 'mais rápido' },
  { value: '−85%', label: 'erros manuais' },
  { value: '3x', label: 'mais capacidade' },
  { value: '24h', label: 'para começar' },
]

export default function TrustSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {metrics.map((m, i) => (
            <div key={m.label} className="flex items-center gap-12 md:gap-16">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-primary-text">
                  {m.value}
                </p>
                <p className="text-sm text-secondary-text mt-1">{m.label}</p>
              </div>
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
