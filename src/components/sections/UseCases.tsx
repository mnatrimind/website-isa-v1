import Container from '@/components/layout/Container'

const cases = [
  {
    title: 'Escritórios contábeis',
    desc: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.',
    shape: <svg viewBox="0 0 48 48" className="w-12 h-12"><rect x="8" y="8" width="32" height="32" rx="6" fill="#635BFF" opacity="0.08" /><rect x="14" y="18" width="7" height="14" rx="1.5" fill="#635BFF" opacity="0.3" /><rect x="27" y="12" width="7" height="20" rx="1.5" fill="#635BFF" opacity="0.5" /></svg>,
    accent: 'border-accent/20',
    glow: 'bg-accent/[0.03]',
  },
  {
    title: 'Contadores autônomos',
    desc: 'Reduza o tempo operacional e ganhe horas para consultoria.',
    shape: <svg viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="18" fill="#3B82F6" opacity="0.07" /><circle cx="24" cy="18" r="6" fill="#3B82F6" opacity="0.25" /><ellipse cx="24" cy="34" rx="11" ry="6" fill="#3B82F6" opacity="0.15" /></svg>,
    accent: 'border-blue-500/20',
    glow: 'bg-blue-500/[0.03]',
  },
  {
    title: 'Contabilidade interna',
    desc: 'Integre extratos ao balancete com precisão e velocidade.',
    shape: <svg viewBox="0 0 48 48" className="w-12 h-12"><rect x="6" y="14" width="36" height="26" rx="4" fill="#00A67E" opacity="0.07" /><path d="M24 8L40 18H8L24 8Z" fill="#00A67E" opacity="0.15" /><rect x="16" y="24" width="5" height="8" rx="1" fill="#00A67E" opacity="0.2" /><rect x="27" y="24" width="5" height="8" rx="1" fill="#00A67E" opacity="0.2" /></svg>,
    accent: 'border-green/20',
    glow: 'bg-green/[0.03]',
  },
]

export default function UseCases() {
  return (
    <section id="para-quem" className="py-24 md:py-32">
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Para quem</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Quem usa o Isa Concilia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className={`relative rounded-xl p-7 border ${c.accent} bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center overflow-hidden`}>
              <div className={`absolute inset-0 ${c.glow}`} />
              <div className="relative">
                <div className="mx-auto mb-5">{c.shape}</div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{c.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
