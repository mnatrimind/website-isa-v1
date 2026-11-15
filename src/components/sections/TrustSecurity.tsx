import Container from '@/components/layout/Container'

const items = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    title: 'Criptografia de ponta a ponta',
    desc: 'Dados protegidos em trânsito (TLS) e em repouso (AES-256).',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg>,
    title: 'Servidores no Brasil',
    desc: 'Dados armazenados em data centers no território brasileiro.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
    title: 'Conformidade LGPD',
    desc: 'Em total conformidade com a Lei Geral de Proteção de Dados.',
  },
]

export default function TrustSecurity() {
  return (
    <section id="seguranca" className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #f1f5f9, #e2e8f0)' }}>
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Segurança</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary">Seus dados estão seguros</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {items.map(it => (
            <div key={it.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto mb-4">{it.icon}</div>
              <h3 className="font-heading font-bold text-primary mb-1">{it.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
