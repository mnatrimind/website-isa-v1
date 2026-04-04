export default function footer() {
  return `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <span class="footer__brand-name">ISA Concilia</span>
        <p class="footer__brand-desc">Automação inteligente para a rotina contábil.</p>
      </div>
      <nav class="footer__nav">
        <a href="#solucao" class="footer__link">Solução</a>
        <a href="#como-funciona" class="footer__link">Como funciona</a>
        <a href="#beneficios" class="footer__link">Benefícios</a>
        <a href="mailto:contato@isaconcilia.com.br" class="footer__link">Contato</a>
      </nav>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 ISA — Intelligent Systems for Accounting</p>
    </div>
  </div>
</footer>

<style>
.footer{background:var(--grey-900);padding:48px 0 0}
.footer__grid{display:flex;justify-content:space-between;align-items:start;gap:32px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.08)}
.footer__brand-name{font-size:1.1rem;font-weight:800;color:var(--white);display:block;margin-bottom:8px}
.footer__brand-desc{font-size:var(--small);color:rgba(255,255,255,0.4);line-height:1.6}
.footer__nav{display:flex;gap:28px;flex-wrap:wrap}
.footer__link{font-size:var(--small);color:rgba(255,255,255,0.5);transition:color var(--ease)}
.footer__link:hover{color:var(--white)}
.footer__bottom{padding:24px 0;text-align:center}
.footer__bottom p{font-size:var(--tiny);color:rgba(255,255,255,0.3)}
@media(max-width:640px){
  .footer__grid{flex-direction:column;gap:24px}
  .footer__nav{flex-direction:column;gap:16px}
}
</style>`;
}
