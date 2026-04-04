export default function cta() {
  return `
<section class="cta" id="cta">
  <div class="container">
    <div class="cta__card reveal">
      <span class="cta__label">Pronto para começar?</span>
      <h2 class="cta__title">Menos operação.<br>Mais resultado.</h2>
      <p class="cta__desc">Agende uma demonstração gratuita e veja como o Isa Concilia pode transformar a rotina do seu escritório contábil.</p>
      <div class="cta__buttons">
        <a href="mailto:contato@isaconcilia.com.br" class="btn btn-lg btn-primary">Agendar demonstração</a>
        <a href="mailto:contato@isaconcilia.com.br" class="btn btn-lg cta__btn-ghost">Falar com especialista</a>
      </div>
    </div>
  </div>
</section>

<style>
.cta{background:var(--white)}
.cta__card{position:relative;background:var(--navy-900);border-radius:var(--radius-xl);padding:clamp(48px,6vw,72px);text-align:center;overflow:hidden}
.cta__card::before{content:'';position:absolute;top:50%;left:50%;width:500px;height:500px;background:radial-gradient(circle,rgba(34,209,153,0.12) 0%,transparent 70%);transform:translate(-50%,-50%);pointer-events:none}
.cta__label{display:inline-block;font-size:var(--small);font-weight:600;color:var(--green-400);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;position:relative}
.cta__title{font-size:var(--h2);font-weight:800;color:var(--white);line-height:1.15;margin-bottom:16px;position:relative}
.cta__desc{font-size:1.05rem;color:rgba(255,255,255,0.5);max-width:520px;margin:0 auto 32px;line-height:1.7;position:relative}
.cta__buttons{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;position:relative}
.cta__btn-ghost{background:transparent;color:rgba(255,255,255,0.8);border:1.5px solid rgba(255,255,255,0.2);border-radius:999px;font-weight:600;transition:all var(--ease)}
.cta__btn-ghost:hover{border-color:rgba(255,255,255,0.4);color:white;background:rgba(255,255,255,0.05)}
@media(max-width:640px){
  .cta__buttons{flex-direction:column}
  .cta__buttons .btn{width:100%}
}
</style>`;
}
