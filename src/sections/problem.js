export default function problem() {
  const cards = [
    {
      icon: '⏱️',
      title: 'Horas perdidas',
      desc: 'Conferência manual de lançamentos que poderia ser automática.',
    },
    {
      icon: '⚠️',
      title: 'Erros no fechamento',
      desc: 'Divergências que só aparecem no final do mês, gerando retrabalho.',
    },
    {
      icon: '📉',
      title: 'Escala travada',
      desc: 'Crescer exige contratar mais gente para tarefas repetitivas.',
    },
  ];

  return `
<section class="problem" id="solucao">
  <div class="container problem__grid">
    <div class="problem__text reveal">
      <span class="section-label">O desafio</span>
      <h2 class="problem__title">Sua equipe ainda concilia manualmente?</h2>
      <p class="problem__desc">A maioria dos escritórios contábeis perde dias inteiros conferindo extratos, cruzando lançamentos e corrigindo erros que só aparecem no fechamento. É um processo que consome tempo, gera retrabalho e limita o crescimento.</p>
    </div>
    <div class="problem__cards">
      ${cards.map(c => `
      <div class="problem__card reveal">
        <span class="problem__card-icon">${c.icon}</span>
        <div>
          <h3 class="problem__card-title">${c.title}</h3>
          <p class="problem__card-desc">${c.desc}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<style>
.problem{background:var(--white)}
.problem__grid{display:grid;grid-template-columns:1fr 1.2fr;gap:48px;align-items:center}
.problem__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15;margin-bottom:16px}
.problem__desc{font-size:var(--body);color:var(--grey-500);line-height:1.7}
.problem__cards{display:flex;flex-direction:column;gap:14px}
.problem__card{display:flex;align-items:flex-start;gap:16px;background:var(--grey-50);border:1px solid var(--grey-100);border-radius:var(--radius-md);padding:20px;transition:all var(--ease)}
.problem__card:hover{background:var(--white);border-color:var(--grey-200);box-shadow:var(--shadow-md)}
.problem__card-icon{font-size:1.5rem;flex-shrink:0;line-height:1}
.problem__card-title{font-size:var(--h3);font-weight:700;color:var(--grey-900);margin-bottom:4px}
.problem__card-desc{font-size:var(--small);color:var(--grey-500);line-height:1.6}
@media(max-width:768px){
  .problem__grid{grid-template-columns:1fr;gap:32px}
}
</style>`;
}
