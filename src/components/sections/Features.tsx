import Container from '@/components/layout/Container'

const benefits = [
  {
    highlight: 'Até 99%',
    title: 'Mais rapidez',
    desc: 'Reduza drasticamente o tempo necessário para conciliar e revisar lançamentos.',
  },
  {
    highlight: 'Menos erros',
    title: 'Mais controle',
    desc: 'Detecte divergências com antecedência e aumente a consistência entre contas.',
  },
  {
    highlight: 'Mais foco',
    title: 'Menos retrabalho',
    desc: 'Libere a equipe de tarefas repetitivas e concentre esforço no que gera valor.',
  },
  {
    highlight: 'Mais escala',
    title: 'Crescimento sustentável',
    desc: 'Aumente capacidade sem precisar ampliar proporcionalmente a estrutura.',
  },
  {
    highlight: 'Mais agilidade',
    title: 'Entregas melhores',
    desc: 'Fechamentos mais rápidos, maior previsibilidade e melhor experiência para o cliente.',
  },
  {
    highlight: 'Mais resultado',
    title: 'Mais lucro operacional',
    desc: 'Tempo poupado e menos erro significam uma operação mais eficiente e rentável.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades">
      <div className="h-[280px] md:h-[320px] w-full" style={{
        background: 'linear-gradient(135deg, #1f2948 0%, #2d4494 30%, #2563eb 65%, #0ea5e9 100%)',
      }}>
        <div className="h-full flex items-center justify-center">
          <Container>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-3">Benefícios</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              O impacto direto no seu escritório
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl">
              Benefícios tangíveis para produtividade, organização e rentabilidade da operação contábil.
            </p>
          </Container>
        </div>
      </div>

      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(item => (
            <div key={item.title} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-accent mb-2">{item.highlight}</p>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
