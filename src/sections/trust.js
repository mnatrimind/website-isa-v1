export default function trust() {
  const trustItems = [
    { icon: '🔒', title: 'Criptografia de ponta a ponta', desc: 'Todos os dados são protegidos em trânsito e em repouso.' },
    { icon: '🇧🇷', title: 'Servidores no Brasil', desc: 'Seus dados ficam em servidores localizados no território brasileiro.' },
    { icon: '✅', title: 'Conformidade com LGPD', desc: 'Seguimos as normas da Lei Geral de Proteção de Dados.' },
  ];

  const faqs = [
    {
      q: 'O Isa Concilia substitui meu sistema contábil?',
      a: 'Não. O Isa Concilia complementa seu sistema atual. Ele se conecta ao seu balancete e automatiza a conciliação bancária — sem substituir nenhuma ferramenta que você já usa.',
    },
    {
      q: 'Quanto tempo leva para começar a usar?',
      a: 'Menos de 24 horas. Após a configuração inicial, sua equipe já pode realizar a primeira conciliação automatizada.',
    },
    {
      q: 'Preciso de conhecimento técnico?',
      a: 'Não. A interface foi desenhada para contadores, não para programadores. Se você usa um sistema contábil hoje, vai se adaptar rapidamente.',
    },
    {
      q: 'Como funciona o suporte?',
      a: 'Oferecemos suporte por email e chat com especialistas que entendem de contabilidade — não apenas de tecnologia.',
    },
  ];

  return `
<section class="trust" id="beneficios">
  <div class="container trust__grid">
    <!-- Left: Trust indicators -->
    <div class="trust__left reveal">
      <h2 class="trust__title">Seus dados estão seguros</h2>
      <div class="trust__items">
        ${trustItems.map(item => `
        <div class="trust__item">
          <div class="trust__icon">${item.icon}</div>
          <div>
            <h3 class="trust__item-title">${item.title}</h3>
            <p class="trust__item-desc">${item.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Right: FAQ -->
    <div class="trust__right reveal">
      <h2 class="trust__title">Perguntas frequentes</h2>
      <div class="faq">
        ${faqs.map(f => `
        <div class="faq__item">
          <button class="faq__question" type="button">
            <span>${f.q}</span>
            <svg class="faq__chevron" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq__answer">
            <p>${f.a}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<style>
.trust{background:var(--off-white)}
.trust__grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.trust__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15;margin-bottom:28px}
.trust__items{display:flex;flex-direction:column;gap:24px}
.trust__item{display:flex;align-items:flex-start;gap:16px}
.trust__icon{width:44px;height:44px;border-radius:50%;background:var(--green-50);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
.trust__item-title{font-size:var(--body);font-weight:700;color:var(--grey-900);margin-bottom:4px}
.trust__item-desc{font-size:var(--small);color:var(--grey-500);line-height:1.6}

/* FAQ */
.faq{display:flex;flex-direction:column;gap:0}
.faq__item{border-bottom:1px solid var(--grey-200)}
.faq__item:first-child{border-top:1px solid var(--grey-200)}
.faq__question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 0;background:none;border:none;font-size:var(--body);font-weight:600;color:var(--grey-900);text-align:left;cursor:pointer;transition:color var(--ease)}
.faq__question:hover{color:var(--green-600)}
.faq__chevron{flex-shrink:0;color:var(--grey-300);transition:transform var(--ease)}
.faq__item.active .faq__chevron{transform:rotate(180deg);color:var(--green-600)}
.faq__answer{max-height:0;overflow:hidden;transition:max-height 0.35s cubic-bezier(0.4,0,0.2,1)}
.faq__answer p{padding:0 0 18px;font-size:var(--small);color:var(--grey-500);line-height:1.7}

@media(max-width:768px){
  .trust__grid{grid-template-columns:1fr;gap:40px}
}
</style>`;
}
