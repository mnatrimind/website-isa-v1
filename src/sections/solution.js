export default function solution() {
  const features = [
    {
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h4l2-6 3 12 2-6h3" stroke="#1B7A4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      title: 'Conciliação automática',
      desc: 'O sistema cruza extrato e balancete, identifica pares automaticamente e sinaliza exceções para revisão humana.',
    },
    {
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="#1B7A4A" stroke-width="1.8"/><path d="M6 7h8M6 10h5" stroke="#1B7A4A" stroke-width="1.8" stroke-linecap="round"/></svg>',
      title: 'Integração com balancete',
      desc: 'Importe dados do seu sistema contábil e conecte diretamente aos extratos bancários, sem digitação manual.',
    },
    {
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#1B7A4A" stroke-width="1.8"/><path d="M10 6v4l3 2" stroke="#1B7A4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 3l2 2M3 15l2 2" stroke="#1B7A4A" stroke-width="1.5" stroke-linecap="round"/></svg>',
      title: 'IA que aprende',
      desc: 'O sistema melhora a cada ciclo, sugerindo classificações e detectando padrões com mais precisão ao longo do tempo.',
    },
    {
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.5 4.5H16l-3.5 3 1.5 4.5L10 11l-4 3 1.5-4.5L4 6.5h4.5L10 2z" stroke="#1B7A4A" stroke-width="1.8" stroke-linejoin="round"/></svg>',
      title: 'Detecção de inconsistências',
      desc: 'Divergências e lançamentos atípicos são identificados automaticamente antes do fechamento mensal.',
    },
  ];

  return `
<section class="solution reveal" id="solucao">
  <div class="container">
    <div class="solution__header">
      <span class="section-label">A solução</span>
      <h2 class="solution__title">O Isa Concilia faz em minutos o que sua equipe faz em dias</h2>
      <p class="solution__subtitle">Uma plataforma com IA que conecta extratos bancários ao balancete, identifica correspondências automaticamente e organiza exceções.</p>
    </div>
    <div class="solution__grid">
      ${features.map(f => `
      <div class="solution__card reveal">
        <div class="solution__icon">${f.icon}</div>
        <h3 class="solution__card-title">${f.title}</h3>
        <p class="solution__card-desc">${f.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<style>
.solution{background:var(--white)}
.solution__header{text-align:center;max-width:640px;margin:0 auto 40px}
.solution__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15;margin-bottom:16px}
.solution__subtitle{font-size:var(--body);color:var(--grey-500);line-height:1.7}
.solution__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.solution__card{background:var(--white);border:1px solid var(--grey-100);border-radius:var(--radius-lg);padding:28px;transition:all var(--ease)}
.solution__card:hover{border-color:var(--green-600);box-shadow:var(--shadow-md);transform:translateY(-2px)}
.solution__icon{width:44px;height:44px;border-radius:50%;background:var(--green-50);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.solution__card-title{font-size:var(--h3);font-weight:700;color:var(--grey-900);margin-bottom:8px}
.solution__card-desc{font-size:var(--small);color:var(--grey-500);line-height:1.7}
@media(max-width:640px){
  .solution__grid{grid-template-columns:1fr}
}
</style>`;
}
