'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function MidCTASection() {
  return (
    <section className="py-16">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-text tracking-tight">
          Pronto para automatizar sua conciliação?
        </h2>
        <p className="text-secondary-text mt-3">
          Veja o Isa Concilia em ação com uma demonstração personalizada.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="md" onClick={(e) => e.preventDefault()}>
            Agendar demonstração
          </Button>
        </div>
      </Container>
    </section>
  )
}
