'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function MidCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 80% at 20% 50%, rgba(99,91,255,0.04) 0%, transparent 50%),
          radial-gradient(ellipse 40% 60% at 80% 50%, rgba(59,130,246,0.03) 0%, transparent 50%),
          #ffffff
        `
      }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #0A2540 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      <Container className="relative text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-text tracking-tight">
          Pronto para automatizar sua conciliação?
        </h2>
        <p className="text-secondary-text mt-3 max-w-md mx-auto">
          Veja o Isa Concilia em ação com uma demonstração personalizada.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg" onClick={(e) => e.preventDefault()}>
            Agendar demonstração gratuita
          </Button>
        </div>
      </Container>
    </section>
  )
}
