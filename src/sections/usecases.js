export default function usecases() {
  const cases = [
    { emoji: '🏢', title: 'Escritórios contábeis', desc: 'Automatize a conciliação de dezenas de clientes sem aumentar a equipe.' },
    { emoji: '📊', title: 'Contadores autônomos', desc: 'Reduza o tempo operacional e ganhe mais horas para consultoria estratégica.' },
    { emoji: '🏦', title: 'Empresas com contabilidade interna', desc: 'Integre extratos bancários ao balancete com precisão e velocidade.' },
  ];

  return `
<section class="usecases reveal" id="usecases">
  <div class="container">
    <div class="usecases__header">
      <span class="section-label">Para quem</span>
      <h2 class="usecases__title">Quem usa o Isa Concilia</h2>
    </div>
    <div class="usecases__grid">
      ${cases.map(c => `
      <div class="usecases__card reveal">
        <span class="usecases__emoji">${c.emoji}</span>
        <h3 class="usecases__card-title">${c.title}</h3>
        <p class="usecases__card-desc">${c.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<style>
.usecases{background:var(--off-white)}
.usecases__header{text-align:center;margin-bottom:40px}
.usecases__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15}
.usecases__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.usecases__card{background:var(--white);border:1px solid var(--grey-100);border-radius:var(--radius-lg);padding:28px;text-align:center;transition:all var(--ease)}
.usecases__card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}
.usecases__emoji{font-size:2rem;display:block;margin-bottom:14px}
.usecases__card-title{font-size:var(--h3);font-weight:700;color:var(--grey-900);margin-bottom:8px}
.usecases__card-desc{font-size:var(--small);color:var(--grey-500);line-height:1.7}
@media(max-width:640px){
  .usecases__grid{grid-template-columns:1fr}
}
</style>`;
}
