import Container from '@/components/layout/Container'

const metrics = [
  { value: '99%', label: 'mais rápido' },
  { value: '−85%', label: 'erros manuais' },
  { value: '3x', label: 'mais capacidade' },
  { value: '24h', label: 'para começar' },
]

export default function TrustSection() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-8 md:gap-0">
            {metrics.map((m, i) => (
              <div key={m.label} className="flex items-center">
                {i > 0 && <div className="hidden md:block w-px h-12 bg-border mx-12 lg:mx-16" />}
                <div className="text-center">
                  <p className="text-5xl font-bold tracking-tight text-primary-text">
                    {m.value}
                  </p>
                  <p className="text-sm text-secondary-text mt-2">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-secondary-text text-center mt-10">
          Desenvolvido para escritórios contábeis que buscam escala
        </p>
      </Container>
    </section>
  )
}
