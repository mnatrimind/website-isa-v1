import Container from '@/components/layout/Container'

const metrics = [
  { value: '99%', label: 'mais rápido' },
  { value: '−85%', label: 'erros manuais' },
  { value: '3x', label: 'mais capacidade' },
  { value: '24h', label: 'para começar' },
]

export default function TrustSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #F6F9FC 0%, #F0F4F8 100%)'
    }}>
      {/* Subtle horizontal lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #0A2540 39px, #0A2540 40px)',
      }} />

      <Container className="relative">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-y-10 gap-x-12 md:gap-0">
            {metrics.map((m, i) => (
              <div key={m.label} className="flex items-center">
                {i > 0 && <div className="hidden md:block w-px h-14 bg-primary-text/10 mx-14 lg:mx-20" />}
                <div className="text-center">
                  <p className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-primary-text">
                    {m.value}
                  </p>
                  <p className="text-sm text-muted-text mt-2 font-medium">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-text text-center mt-12 tracking-wide">
          Desenvolvido para escritórios contábeis que buscam escala
        </p>
      </Container>
    </section>
  )
}
