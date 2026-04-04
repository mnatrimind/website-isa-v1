'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function MidCTASection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-text tracking-tight mb-4">
          Pronto para automatizar sua conciliação?
        </h2>
        <p className="text-base md:text-lg text-secondary-text max-w-xl mx-auto leading-relaxed mb-8">
          Veja na prática como o Isa Concilia pode transformar a rotina do seu escritório.
        </p>
        <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
          Agendar demonstração gratuita
        </Button>
      </Container>
    </section>
  )
}
