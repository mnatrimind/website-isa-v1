import Container from '@/components/layout/Container'

const features = [
  { title: 'Conciliação automática', desc: 'Extratos e balancete cruzados automaticamente. O sistema identifica correspondências e sinaliza exceções para revisão — sem trabalho manual repetitivo.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
  { title: 'Integração com balancete', desc: 'Importe dados do seu sistema contábil e conecte aos extratos bancários.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg> },
  { title: 'IA que aprende', desc: 'Melhora a cada ciclo, sugerindo classificações com mais precisão.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4m-3.93 7.07l-2.83-2.83M6.34 6.34L3.51 3.51" /></svg> },
  { title: 'Detecção de inconsistências', desc: 'Divergências identificadas antes do fechamento mensal.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg> },
]

export default function Features() {
  const [hero, ...rest] = features
  return (
    <section id="funcionalidades" className="py-24 md:py-32">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Funcionalidades</p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">Automatize cada etapa</h2>
        <p className="text-secondary max-w-xl leading-relaxed mb-14">Menos trabalho manual. Mais precisão. Resultados em minutos.</p>

        {/* Hero feature — wide */}
        <div className="rounded-2xl p-8 md:p-10 border border-border shadow-sm mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAFAFF 0%, #F6F9FC 50%, #F2EEFF 100%)' }}>
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/[0.04] rounded-full blur-[60px]" />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">{hero.icon}</div>
            <div className="max-w-xl">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">{hero.title}</h3>
              <p className="text-secondary leading-relaxed">{hero.desc}</p>
            </div>
          </div>
        </div>

        {/* 3 secondary features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map(f => (
            <div key={f.title} className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent mb-4">{f.icon}</div>
              <h3 className="font-heading font-bold text-primary mb-1">{f.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
