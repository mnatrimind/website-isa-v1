import Container from '@/components/layout/Container'

const items = [
  'Conciliação 99% mais rápida',
  'Integração com balancete',
  'IA adaptativa',
  'Dados criptografados',
  'Suporte dedicado',
]

export default function TrustSection() {
  return (
    <section className="bg-surface py-12">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-sm text-secondary-text text-center">
          Desenvolvido para escritórios contábeis que buscam escala
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="bg-white border border-border rounded-full px-4 py-2 text-xs text-secondary-text font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
