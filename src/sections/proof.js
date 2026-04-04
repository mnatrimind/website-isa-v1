export default function proof() {
  const pills = [
    'Conciliação 99% mais rápida',
    'Integração com balancete',
    'IA adaptativa',
    'Dados criptografados',
    'Suporte especializado',
  ];

  return `
<section class="proof reveal">
  <div class="container">
    <p class="proof__headline">Desenvolvido para escritórios contábeis que buscam escala</p>
    <div class="proof__pills">
      ${pills.map(p => `<span class="proof__pill">${p}</span>`).join('')}
    </div>
  </div>
</section>

<style>
.proof{padding:40px 0;background:var(--white)}
.proof .container{display:flex;flex-direction:column;align-items:center;gap:20px}
.proof__headline{font-size:var(--small);color:var(--grey-500);text-align:center}
.proof__pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.proof__pill{font-size:var(--tiny);color:var(--grey-500);background:var(--grey-50);border:1px solid var(--grey-200);padding:6px 16px;border-radius:999px;white-space:nowrap}
</style>`;
}
