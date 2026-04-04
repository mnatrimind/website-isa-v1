export default function how() {
  const steps = [
    { num: '1', title: 'Integre seus dados', desc: 'Conecte extratos bancários e importe os dados do balancete gerado pelo seu sistema contábil.', accent: false },
    { num: '2', title: 'A IA processa', desc: 'O sistema cruza lançamentos, identifica padrões e propõe correspondências automaticamente.', accent: false },
    { num: '3', title: 'Revise e conclua', desc: 'Sua equipe valida as sugestões e finaliza a conciliação em uma fração do tempo habitual.', accent: true },
  ];

  return `
<section class="how reveal" id="como-funciona">
  <div class="container">
    <div class="how__header">
      <span class="section-label">Como funciona</span>
      <h2 class="how__title">Três passos. Sem complexidade.</h2>
      <p class="how__subtitle">O Isa Concilia foi desenhado para encaixar na rotina do seu escritório.</p>
    </div>
    <div class="how__steps">
      <div class="how__line" aria-hidden="true"></div>
      ${steps.map(s => `
      <div class="how__step reveal">
        <div class="how__circle${s.accent ? ' how__circle--green' : ''}">${s.num}</div>
        <h3 class="how__step-title">${s.title}</h3>
        <p class="how__step-desc">${s.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<style>
.how{background:var(--white)}
.how__header{text-align:center;max-width:540px;margin:0 auto 48px}
.how__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15;margin-bottom:12px}
.how__subtitle{font-size:var(--body);color:var(--grey-500);line-height:1.7}
.how__steps{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;position:relative;text-align:center}
.how__line{position:absolute;top:26px;left:calc(16.66% + 26px);right:calc(16.66% + 26px);height:2px;background:var(--grey-200);z-index:0}
.how__step{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center}
.how__circle{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:800;background:var(--grey-50);color:var(--grey-700);border:2px solid var(--grey-200);margin-bottom:20px}
.how__circle--green{background:var(--green-600);color:var(--white);border-color:var(--green-600)}
.how__step-title{font-size:var(--h3);font-weight:700;color:var(--grey-900);margin-bottom:8px}
.how__step-desc{font-size:var(--small);color:var(--grey-500);line-height:1.7;max-width:280px}
@media(max-width:640px){
  .how__steps{grid-template-columns:1fr;gap:36px}
  .how__line{display:none}
}
</style>`;
}
