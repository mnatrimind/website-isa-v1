import mockupReconciliation from '../components/mockup-reconciliation.js';

export default function showcase() {
  return `
<section class="showcase">
  <div class="container">
    <div class="showcase__header reveal">
      <span class="section-label">O produto</span>
      <h2 class="showcase__title">Veja o Isa Concilia em ação</h2>
    </div>
    <div class="showcase__mockup reveal">
      ${mockupReconciliation()}
    </div>
  </div>
</section>

<style>
.showcase{background:var(--off-white)}
.showcase__header{text-align:center;margin-bottom:40px}
.showcase__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15}
.showcase__mockup{max-width:900px;margin:0 auto}
</style>`;
}
