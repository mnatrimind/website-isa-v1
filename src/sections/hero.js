import mockup from '../components/mockup.js';

export default function hero() {
  return `
<section class="hero" id="hero">
  <div class="container hero__container">
    <div class="hero__content">
      <span class="hero__badge">Conciliação contábil com IA</span>
      <h1 class="hero__title">Reduza de dias<br>para minutos.</h1>
      <p class="hero__subtitle">O Isa Concilia automatiza até 99% da conciliação contábil do seu escritório com inteligência artificial — eliminando retrabalho e liberando sua equipe para o que importa.</p>
      <div class="hero__ctas">
        <a href="#cta" class="btn btn-lg btn-primary">Agendar demonstração gratuita</a>
        <a href="#como-funciona" class="btn btn-lg hero__btn-ghost">Ver como funciona →</a>
      </div>
      <div class="hero__proof">
        <div class="hero__proof-item">
          <span class="hero__proof-value">99%</span>
          <span class="hero__proof-label">mais rápido</span>
        </div>
        <div class="hero__proof-divider"></div>
        <div class="hero__proof-item">
          <span class="hero__proof-value">−85%</span>
          <span class="hero__proof-label">erros manuais</span>
        </div>
        <div class="hero__proof-divider"></div>
        <div class="hero__proof-item">
          <span class="hero__proof-value">3x</span>
          <span class="hero__proof-label">mais clientes</span>
        </div>
      </div>
    </div>
    <div class="hero__mockup">
      ${mockup()}
    </div>
  </div>
</section>

<style>
.hero{background:linear-gradient(170deg,var(--navy-900) 0%,#0c1a2e 50%,#0f2035 100%);padding-top:calc(var(--nav-h) + 64px);padding-bottom:0;position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(to bottom,transparent,var(--white));z-index:2;pointer-events:none}
.hero__container{text-align:center;display:flex;flex-direction:column;align-items:center}
.hero__content{max-width:720px;margin-bottom:48px}
.hero__badge{display:inline-block;background:rgba(34,209,153,0.12);color:var(--green-400);font-size:var(--small);font-weight:600;padding:8px 20px;border-radius:999px;border:1px solid rgba(34,209,153,0.2);margin-bottom:24px}
.hero__title{font-size:var(--h1);font-weight:800;color:var(--white);line-height:1.1;margin-bottom:20px;letter-spacing:-0.02em}
.hero__subtitle{font-size:1.15rem;color:rgba(255,255,255,0.55);line-height:1.7;max-width:560px;margin:0 auto 32px}
.hero__ctas{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:40px}
.hero__btn-ghost{background:transparent;color:rgba(255,255,255,0.8);border:1.5px solid rgba(255,255,255,0.2);border-radius:999px;font-weight:600;transition:all var(--ease)}
.hero__btn-ghost:hover{border-color:rgba(255,255,255,0.4);color:white;background:rgba(255,255,255,0.05)}
.hero__proof{display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap}
.hero__proof-item{display:flex;flex-direction:column;align-items:center;gap:2px}
.hero__proof-value{font-size:1.5rem;font-weight:800;color:var(--white)}
.hero__proof-label{font-size:var(--tiny);color:rgba(255,255,255,0.4);font-weight:500}
.hero__proof-divider{width:1px;height:32px;background:rgba(255,255,255,0.12)}
.hero__mockup{width:100%;max-width:960px;margin:0 auto;padding-bottom:80px;position:relative;z-index:1;perspective:1200px}
.hero__mockup .mockup{transform:scale(0.85) rotateX(2deg);transition:transform 0.5s var(--ease)}
.hero__mockup:hover .mockup{transform:scale(0.87) rotateX(0deg)}
@media(max-width:640px){
  .hero__title{font-size:clamp(2rem,8vw,2.5rem)}
  .hero__subtitle{font-size:1rem}
  .hero__proof{gap:20px}
  .hero__proof-value{font-size:1.2rem}
  .hero__ctas{flex-direction:column}
  .hero__ctas .btn{width:100%}
}
</style>`;
}
