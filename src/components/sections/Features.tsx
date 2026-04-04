import Container from '@/components/layout/Container'

const features = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
    title: 'Conciliação automática',
    desc: 'Extratos e balancete cruzados automaticamente. Correspondências identificadas e exceções sinalizadas para revisão humana.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A67E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
    title: 'Integração com balancete',
    desc: 'Importe dados do seu sistema contábil e conecte diretamente aos extratos bancários, sem digitação manual.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4m-3.93 7.07l-2.83-2.83M6.34 6.34L3.51 3.51" /></svg>,
    title: 'IA que aprende',
    desc: 'O sistema melhora a cada ciclo, sugerindo classificações com mais precisão ao longo do tempo.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E25C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
    title: 'Detecção de inconsistências',
    desc: 'Divergências e lançamentos atípicos identificados automaticamente antes do fechamento mensal.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades">
      {/* Vivid full-width gradient banner — Stripe pattern 3 */}
      <div className="h-[280px] md:h-[320px] w-full" style={{
        background: 'linear-gradient(135deg, #635BFF 0%, #7A73FF 25%, #00D4FF 60%, #00BFFF 80%, #635BFF 100%)',
      }}>
        <div className="h-full flex items-center justify-center">
          <Container>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-3">Funcionalidades</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              Automatize cada etapa da conciliação
            </h2>
          </Container>
        </div>
      </div>

      {/* 4 features — NO cards, NO backgrounds, border-l accent */}
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map(f => (
            <div key={f.title} className="pl-5 border-l-[3px] border-accent">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
