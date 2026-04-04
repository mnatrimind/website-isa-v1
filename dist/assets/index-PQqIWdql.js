(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNlAAAA7klEQVR42u2YMQ6DMAAE7/8/TUdBgYQAk+AztoSLFCvZ09nGJvmSJP0jlW/StsfjJGXnlz8oi3+UtPPLH5TFP0ra+eUPyuIfJe388gdl8Y+Sdn75g7L4R0k7v/xBWfyjpJ1f/qAs/lHSzi9/UBb/KGnnlz8oi3+UtPPLH5TFP0ra+eUPyuIfJe388gdl8Y+Sdn75g7L4R0k7v/xBWfyjpJ1f/qAs/lHSzk8HBVCRWGvNzG5mdkySyxjje5Ikl/tNZnYzs3OSLGOMuZJcktQGgLYxs5uZnZJk+fj+lpTaSdKP6zfJlwOSpB/XE7TSQiMVmgYuAAAAAElFTkSuQmCC`;function t(){return`
<nav class="nav" id="nav">
  <div class="nav__inner container">
    <a href="#" class="nav__brand">
      <img src="${e}" alt="ISA Concilia" class="nav__logo" width="47" height="36">
      <div class="nav__brand-text">
        <span class="nav__brand-name">ISA Concilia</span>
        <span class="nav__brand-tagline">Conciliação contábil com IA</span>
      </div>
    </a>

    <div class="nav__links" id="navLinks">
      <a href="#solucao" class="nav__link">Solução</a>
      <a href="#como-funciona" class="nav__link">Como funciona</a>
      <a href="#beneficios" class="nav__link">Benefícios</a>
    </div>

    <div class="nav__actions" id="navActions">
      <a href="#cta" class="btn btn-sm btn-outline">Falar com especialista</a>
      <a href="#cta" class="btn btn-sm btn-primary">Agendar demo</a>
    </div>

    <button class="nav__hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile drawer -->
<div class="nav-overlay" id="navOverlay"></div>
<div class="nav-drawer" id="navDrawer">
  <div class="nav-drawer__header">
    <img src="${e}" alt="ISA Concilia" width="47" height="36">
    <button class="nav-drawer__close" id="drawerClose" aria-label="Fechar">&times;</button>
  </div>
  <div class="nav-drawer__links">
    <a href="#solucao" class="nav-drawer__link">Solução</a>
    <a href="#como-funciona" class="nav-drawer__link">Como funciona</a>
    <a href="#beneficios" class="nav-drawer__link">Benefícios</a>
  </div>
  <div class="nav-drawer__actions">
    <a href="#cta" class="btn btn-md btn-outline" style="width:100%">Falar com especialista</a>
    <a href="#cta" class="btn btn-md btn-primary" style="width:100%">Agendar demo</a>
  </div>
</div>

<style>
.nav{position:fixed;top:0;left:0;right:0;z-index:100;height:var(--nav-h);display:flex;align-items:center;background:rgba(255,255,255,0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);transition:box-shadow var(--ease)}
.nav.scrolled{box-shadow:0 1px 8px rgba(0,0,0,0.08)}
.nav__inner{display:flex;align-items:center;justify-content:space-between;gap:24px}
.nav__brand{display:flex;align-items:center;gap:12px;flex-shrink:0}
.nav__logo{height:36px;width:auto}
.nav__brand-text{display:flex;flex-direction:column;line-height:1.2}
.nav__brand-name{font-size:1.05rem;font-weight:800;color:var(--grey-900)}
.nav__brand-tagline{font-size:var(--tiny);color:var(--grey-300);font-weight:500}
.nav__links{display:flex;align-items:center;gap:32px}
.nav__link{font-size:var(--small);font-weight:500;color:var(--grey-700);transition:color var(--ease)}
.nav__link:hover{color:var(--green-600)}
.nav__actions{display:flex;align-items:center;gap:12px;flex-shrink:0}
.nav__hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:8px;cursor:pointer}
.nav__hamburger span{display:block;width:22px;height:2px;background:var(--grey-700);border-radius:2px;transition:all var(--ease)}

/* Overlay & Drawer */
.nav-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:200;opacity:0;pointer-events:none;transition:opacity var(--ease)}
.nav-overlay.open{opacity:1;pointer-events:auto}
.nav-drawer{position:fixed;top:0;right:-280px;width:280px;height:100%;background:var(--white);z-index:201;padding:24px;display:flex;flex-direction:column;gap:32px;transition:right var(--ease);box-shadow:var(--shadow-xl)}
.nav-drawer.open{right:0}
.nav-drawer__header{display:flex;align-items:center;justify-content:space-between}
.nav-drawer__close{background:none;border:none;font-size:1.75rem;color:var(--grey-500);line-height:1;padding:4px}
.nav-drawer__links{display:flex;flex-direction:column;gap:20px}
.nav-drawer__link{font-size:1rem;font-weight:500;color:var(--grey-700);transition:color var(--ease)}
.nav-drawer__link:hover{color:var(--green-600)}
.nav-drawer__actions{display:flex;flex-direction:column;gap:12px;margin-top:auto}

@media(max-width:899px){
  .nav__links{display:none}
  .nav__hamburger{display:flex}
}
@media(max-width:639px){
  .nav__actions{display:none}
}
</style>`}function n(){return`
<div class="mockup">
  <!-- Browser chrome -->
  <div class="mockup__chrome">
    <div class="mockup__dots">
      <span></span><span></span><span></span>
    </div>
    <div class="mockup__url">app.isaconcilia.com.br</div>
  </div>

  <!-- App body -->
  <div class="mockup__body">
    <!-- Sidebar -->
    <div class="mockup__sidebar">
      <div class="mockup__sidebar-brand">
        <div class="mockup__sidebar-icon">I</div>
        <span>ISA</span>
      </div>
      <div class="mockup__sidebar-menu">
        <div class="mockup__sidebar-item active">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="5" height="5" rx="1" fill="currentColor"/><rect x="7" width="5" height="5" rx="1" fill="currentColor"/><rect y="7" width="5" height="5" rx="1" fill="currentColor"/><rect x="7" y="7" width="5" height="5" rx="1" fill="currentColor"/></svg>
          Dashboard
        </div>
        <div class="mockup__sidebar-item">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
          Empresas
        </div>
        <div class="mockup__sidebar-item">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 3h10M1 6h10M1 9h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Conciliações
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="mockup__main">
      <div class="mockup__header">
        <span class="mockup__title">Dashboard</span>
        <span class="mockup__date">Abr 2026</span>
      </div>

      <!-- KPI cards -->
      <div class="mockup__kpis">
        <div class="mockup__kpi">
          <div class="mockup__kpi-label">Empresas Ativas</div>
          <div class="mockup__kpi-row">
            <span class="mockup__kpi-value">12</span>
            <span class="mockup__kpi-badge">+3 este mês</span>
          </div>
        </div>
        <div class="mockup__kpi">
          <div class="mockup__kpi-label">Conciliações</div>
          <div class="mockup__kpi-row">
            <span class="mockup__kpi-value">87</span>
            <span class="mockup__kpi-badge">+14 este mês</span>
          </div>
        </div>
        <div class="mockup__kpi">
          <div class="mockup__kpi-label">Arquivos</div>
          <div class="mockup__kpi-row">
            <span class="mockup__kpi-value">156</span>
            <span class="mockup__kpi-badge">+28 este mês</span>
          </div>
        </div>
      </div>

      <!-- Chart + Table row -->
      <div class="mockup__content-row">
        <!-- Bar chart -->
        <div class="mockup__chart-card">
          <div class="mockup__chart-title">Conciliações por mês</div>
          <div class="mockup__chart">
            <div class="mockup__bar-group">
              <div class="mockup__bar mockup__bar--blue" style="height:45%"></div>
              <div class="mockup__bar mockup__bar--orange" style="height:30%"></div>
              <div class="mockup__bar-label">Jan</div>
            </div>
            <div class="mockup__bar-group">
              <div class="mockup__bar mockup__bar--blue" style="height:60%"></div>
              <div class="mockup__bar mockup__bar--orange" style="height:20%"></div>
              <div class="mockup__bar-label">Fev</div>
            </div>
            <div class="mockup__bar-group">
              <div class="mockup__bar mockup__bar--blue" style="height:55%"></div>
              <div class="mockup__bar mockup__bar--orange" style="height:35%"></div>
              <div class="mockup__bar-label">Mar</div>
            </div>
            <div class="mockup__bar-group">
              <div class="mockup__bar mockup__bar--blue" style="height:80%"></div>
              <div class="mockup__bar mockup__bar--orange" style="height:15%"></div>
              <div class="mockup__bar-label">Abr</div>
            </div>
            <div class="mockup__bar-group">
              <div class="mockup__bar mockup__bar--blue" style="height:70%"></div>
              <div class="mockup__bar mockup__bar--orange" style="height:25%"></div>
              <div class="mockup__bar-label">Mai</div>
            </div>
          </div>
        </div>

        <!-- Status table -->
        <div class="mockup__table-card">
          <div class="mockup__chart-title">Últimas conciliações</div>
          <table class="mockup__table">
            <thead>
              <tr><th>Empresa</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Empresa Alpha</td><td><span class="mockup__pill mockup__pill--green">CONCILIADO</span></td></tr>
              <tr><td>Beta Ltda</td><td><span class="mockup__pill mockup__pill--green">CONCILIADO</span></td></tr>
              <tr><td>Gamma S.A.</td><td><span class="mockup__pill mockup__pill--red">ERRO</span></td></tr>
              <tr><td>Delta Corp</td><td><span class="mockup__pill mockup__pill--amber">AGUARDANDO</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.mockup{background:var(--white);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-xl);transform:scale(0.85);transform-origin:top center;border:1px solid var(--grey-100)}
.mockup__chrome{display:flex;align-items:center;gap:12px;padding:10px 16px;background:var(--grey-50);border-bottom:1px solid var(--grey-100)}
.mockup__dots{display:flex;gap:6px}
.mockup__dots span{width:10px;height:10px;border-radius:50%;background:var(--grey-200)}
.mockup__url{flex:1;text-align:center;font-size:0.6rem;color:var(--grey-300);background:var(--white);padding:4px 12px;border-radius:6px;border:1px solid var(--grey-100)}
.mockup__body{display:flex;min-height:280px}
.mockup__sidebar{width:160px;background:var(--off-white);border-right:1px solid var(--grey-100);padding:14px 10px;flex-shrink:0}
.mockup__sidebar-brand{display:flex;align-items:center;gap:6px;font-size:0.7rem;font-weight:800;color:var(--grey-900);margin-bottom:16px}
.mockup__sidebar-icon{width:20px;height:20px;background:var(--green-600);color:white;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:0.55rem;font-weight:800}
.mockup__sidebar-menu{display:flex;flex-direction:column;gap:4px}
.mockup__sidebar-item{display:flex;align-items:center;gap:6px;font-size:0.6rem;padding:6px 8px;border-radius:6px;color:var(--grey-500);cursor:default}
.mockup__sidebar-item.active{background:var(--green-50);color:var(--green-600);font-weight:600}
.mockup__main{flex:1;padding:14px 18px;overflow:hidden}
.mockup__header{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.mockup__title{font-size:0.75rem;font-weight:700;color:var(--grey-900)}
.mockup__date{font-size:0.5rem;background:var(--grey-50);color:var(--grey-500);padding:2px 8px;border-radius:4px;border:1px solid var(--grey-100)}
.mockup__kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
.mockup__kpi{background:var(--white);border:1px solid var(--grey-100);border-radius:8px;padding:10px 12px}
.mockup__kpi-label{font-size:0.5rem;color:var(--grey-500);margin-bottom:4px}
.mockup__kpi-row{display:flex;align-items:baseline;gap:6px}
.mockup__kpi-value{font-size:1rem;font-weight:800;color:var(--grey-900)}
.mockup__kpi-badge{font-size:0.45rem;color:var(--green-600);background:var(--green-50);padding:1px 5px;border-radius:3px;font-weight:600;white-space:nowrap}
.mockup__content-row{display:grid;grid-template-columns:1.2fr 1fr;gap:8px}
.mockup__chart-card,.mockup__table-card{background:var(--white);border:1px solid var(--grey-100);border-radius:8px;padding:10px 12px}
.mockup__chart-title{font-size:0.55rem;font-weight:600;color:var(--grey-700);margin-bottom:8px}
.mockup__chart{display:flex;align-items:flex-end;gap:10px;height:80px;padding-top:4px}
.mockup__bar-group{display:flex;flex-direction:column;align-items:center;gap:2px;flex:1;height:100%;justify-content:flex-end}
.mockup__bar{width:100%;max-width:18px;border-radius:3px 3px 0 0;min-height:4px}
.mockup__bar--blue{background:var(--blue-500)}
.mockup__bar--orange{background:var(--amber-500)}
.mockup__bar-label{font-size:0.45rem;color:var(--grey-300);margin-top:2px}
.mockup__table{width:100%;border-collapse:collapse}
.mockup__table th{font-size:0.45rem;text-align:left;color:var(--grey-300);padding:3px 0;border-bottom:1px solid var(--grey-100);font-weight:500}
.mockup__table td{font-size:0.5rem;padding:4px 0;color:var(--grey-700);border-bottom:1px solid var(--grey-50)}
.mockup__pill{font-size:0.4rem;padding:1px 6px;border-radius:3px;font-weight:600;letter-spacing:0.02em}
.mockup__pill--green{background:var(--green-50);color:var(--green-600)}
.mockup__pill--red{background:#FEE2E2;color:var(--red-500)}
.mockup__pill--amber{background:#FEF3C7;color:var(--amber-500)}
@media(max-width:640px){
  .mockup{transform:scale(0.75)}
  .mockup__sidebar{display:none}
  .mockup__content-row{grid-template-columns:1fr}
  .mockup__kpis{grid-template-columns:1fr}
}
</style>`}function r(){return`
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
      ${n()}
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
</style>`}function i(){return`
<section class="proof reveal">
  <div class="container">
    <p class="proof__headline">Desenvolvido para escritórios contábeis que buscam escala</p>
    <div class="proof__pills">
      ${[`Conciliação 99% mais rápida`,`Integração com balancete`,`IA adaptativa`,`Dados criptografados`,`Suporte especializado`].map(e=>`<span class="proof__pill">${e}</span>`).join(``)}
    </div>
  </div>
</section>

<style>
.proof{padding:40px 0;background:var(--white)}
.proof .container{display:flex;flex-direction:column;align-items:center;gap:20px}
.proof__headline{font-size:var(--small);color:var(--grey-500);text-align:center}
.proof__pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.proof__pill{font-size:var(--tiny);color:var(--grey-500);background:var(--grey-50);border:1px solid var(--grey-200);padding:6px 16px;border-radius:999px;white-space:nowrap}
</style>`}function a(){return`
<section class="problem" id="solucao">
  <div class="container problem__grid">
    <div class="problem__text reveal">
      <span class="section-label">O desafio</span>
      <h2 class="problem__title">Sua equipe ainda concilia manualmente?</h2>
      <p class="problem__desc">A maioria dos escritórios contábeis perde dias inteiros conferindo extratos, cruzando lançamentos e corrigindo erros que só aparecem no fechamento. É um processo que consome tempo, gera retrabalho e limita o crescimento.</p>
    </div>
    <div class="problem__cards">
      ${[{icon:`⏱️`,title:`Horas perdidas`,desc:`Conferência manual de lançamentos que poderia ser automática.`},{icon:`⚠️`,title:`Erros no fechamento`,desc:`Divergências que só aparecem no final do mês, gerando retrabalho.`},{icon:`📉`,title:`Escala travada`,desc:`Crescer exige contratar mais gente para tarefas repetitivas.`}].map(e=>`
      <div class="problem__card reveal">
        <span class="problem__card-icon">${e.icon}</span>
        <div>
          <h3 class="problem__card-title">${e.title}</h3>
          <p class="problem__card-desc">${e.desc}</p>
        </div>
      </div>`).join(``)}
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
</style>`}function o(){return`
<div class="mockup-recon">
  <!-- Browser chrome -->
  <div class="mockup-recon__chrome">
    <div class="mockup-recon__dots">
      <span></span><span></span><span></span>
    </div>
    <div class="mockup-recon__url">app.isaconcilia.com.br</div>
  </div>

  <!-- App body -->
  <div class="mockup-recon__body">
    <!-- Stepper -->
    <div class="mockup-recon__stepper">
      <div class="mockup-recon__step done">
        <div class="mockup-recon__step-circle">✓</div>
        <span class="mockup-recon__step-label">Empresa</span>
      </div>
      <div class="mockup-recon__step-line done"></div>
      <div class="mockup-recon__step done">
        <div class="mockup-recon__step-circle">✓</div>
        <span class="mockup-recon__step-label">Importações</span>
      </div>
      <div class="mockup-recon__step-line done"></div>
      <div class="mockup-recon__step active">
        <div class="mockup-recon__step-circle">3</div>
        <span class="mockup-recon__step-label">Conciliação</span>
      </div>
      <div class="mockup-recon__step-line"></div>
      <div class="mockup-recon__step">
        <div class="mockup-recon__step-circle">4</div>
        <span class="mockup-recon__step-label">Resultado</span>
      </div>
    </div>

    <!-- Content -->
    <div class="mockup-recon__content">
      <h3 class="mockup-recon__title">Revise a Conciliação</h3>
      <p class="mockup-recon__subtitle">Algum texto de observação como apoio para a ação.</p>

      <!-- Table -->
      <table class="mockup-recon__table">
        <thead>
          <tr>
            <th>DATA</th>
            <th>C/D</th>
            <th>CONTA</th>
            <th>VALOR</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>27/01/2026</td>
            <td>DÉBITO</td>
            <td>9-(1.1.1.02) SICRED</td>
            <td>R$ 1.000.000</td>
            <td><span class="mockup-recon__pill green">PRONTO</span></td>
          </tr>
          <tr>
            <td>27/01/2026</td>
            <td>DÉBITO</td>
            <td>9-(1.1.1.02) SICRED</td>
            <td>R$ 1.000.000</td>
            <td><span class="mockup-recon__pill green">PRONTO</span></td>
          </tr>
          <tr>
            <td>27/01/2026</td>
            <td>CRÉDITO</td>
            <td><span class="mockup-recon__select">Selecionar conta ▾</span></td>
            <td>R$ 1.000.000</td>
            <td><span class="mockup-recon__pill amber">CONFERIR</span></td>
          </tr>
          <tr>
            <td>27/01/2026</td>
            <td>DÉBITO</td>
            <td>9-(1.1.1.02) SICRED</td>
            <td>R$ 1.000.000</td>
            <td><span class="mockup-recon__pill green">PRONTO</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
.mockup-recon{background:var(--white);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg);border:1px solid var(--grey-100)}
.mockup-recon__chrome{display:flex;align-items:center;gap:12px;padding:10px 16px;background:var(--grey-50);border-bottom:1px solid var(--grey-100)}
.mockup-recon__dots{display:flex;gap:6px}
.mockup-recon__dots span{width:10px;height:10px;border-radius:50%;background:var(--grey-200)}
.mockup-recon__url{flex:1;text-align:center;font-size:0.6rem;color:var(--grey-300);background:var(--white);padding:4px 12px;border-radius:6px;border:1px solid var(--grey-100)}
.mockup-recon__body{padding:28px 32px 32px}

/* Stepper */
.mockup-recon__stepper{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:28px}
.mockup-recon__step{display:flex;flex-direction:column;align-items:center;gap:6px}
.mockup-recon__step-circle{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;background:var(--grey-100);color:var(--grey-300);border:2px solid var(--grey-200)}
.mockup-recon__step.done .mockup-recon__step-circle{background:var(--green-50);color:var(--green-600);border-color:var(--green-600)}
.mockup-recon__step.active .mockup-recon__step-circle{background:var(--grey-900);color:var(--white);border-color:var(--grey-900)}
.mockup-recon__step-label{font-size:0.6rem;color:var(--grey-300);font-weight:500;white-space:nowrap}
.mockup-recon__step.done .mockup-recon__step-label,.mockup-recon__step.active .mockup-recon__step-label{color:var(--grey-700)}
.mockup-recon__step-line{width:48px;height:2px;background:var(--grey-200);margin:0 8px;margin-bottom:20px}
.mockup-recon__step-line.done{background:var(--green-600)}

/* Content */
.mockup-recon__content{max-width:100%}
.mockup-recon__title{font-size:0.85rem;font-weight:700;color:var(--grey-900);margin-bottom:4px}
.mockup-recon__subtitle{font-size:0.65rem;color:var(--grey-300);margin-bottom:20px}

/* Table */
.mockup-recon__table{width:100%;border-collapse:collapse}
.mockup-recon__table th{font-size:0.5rem;text-align:left;color:var(--grey-300);padding:8px 10px;border-bottom:1px solid var(--grey-100);font-weight:600;letter-spacing:0.05em;text-transform:uppercase}
.mockup-recon__table td{font-size:0.6rem;padding:10px 10px;color:var(--grey-700);border-bottom:1px solid var(--grey-50)}
.mockup-recon__pill{font-size:0.5rem;padding:2px 8px;border-radius:4px;font-weight:600;letter-spacing:0.02em}
.mockup-recon__pill.green{background:var(--green-50);color:var(--green-600)}
.mockup-recon__pill.amber{background:#FEF3C7;color:var(--amber-500)}
.mockup-recon__select{font-size:0.6rem;color:var(--grey-300);background:var(--grey-50);border:1px solid var(--grey-200);padding:2px 8px;border-radius:4px;cursor:default}

@media(max-width:640px){
  .mockup-recon__body{padding:20px 16px 24px}
  .mockup-recon__step-line{width:24px}
  .mockup-recon__table th,.mockup-recon__table td{padding:6px 6px;font-size:0.5rem}
}
</style>`}function s(){return`
<section class="showcase" id="como-funciona">
  <div class="container">
    <div class="showcase__header reveal">
      <span class="section-label">O produto</span>
      <h2 class="showcase__title">Veja o Isa Concilia em ação</h2>
    </div>
    <div class="showcase__mockup reveal">
      ${o()}
    </div>
  </div>
</section>

<style>
.showcase{background:var(--off-white)}
.showcase__header{text-align:center;margin-bottom:40px}
.showcase__title{font-size:var(--h2);font-weight:800;color:var(--grey-900);line-height:1.15}
.showcase__mockup{max-width:900px;margin:0 auto}
</style>`}function c(){return`
<section class="trust" id="beneficios">
  <div class="container trust__grid">
    <!-- Left: Trust indicators -->
    <div class="trust__left reveal">
      <h2 class="trust__title">Seus dados estão seguros</h2>
      <div class="trust__items">
        ${[{icon:`🔒`,title:`Criptografia de ponta a ponta`,desc:`Todos os dados são protegidos em trânsito e em repouso.`},{icon:`🇧🇷`,title:`Servidores no Brasil`,desc:`Seus dados ficam em servidores localizados no território brasileiro.`},{icon:`✅`,title:`Conformidade com LGPD`,desc:`Seguimos as normas da Lei Geral de Proteção de Dados.`}].map(e=>`
        <div class="trust__item">
          <div class="trust__icon">${e.icon}</div>
          <div>
            <h3 class="trust__item-title">${e.title}</h3>
            <p class="trust__item-desc">${e.desc}</p>
          </div>
        </div>`).join(``)}
      </div>
    </div>

    <!-- Right: FAQ -->
    <div class="trust__right reveal">
      <h2 class="trust__title">Perguntas frequentes</h2>
      <div class="faq">
        ${[{q:`O Isa Concilia substitui meu sistema contábil?`,a:`Não. O Isa Concilia complementa seu sistema atual. Ele se conecta ao seu balancete e automatiza a conciliação bancária — sem substituir nenhuma ferramenta que você já usa.`},{q:`Quanto tempo leva para começar a usar?`,a:`Menos de 24 horas. Após a configuração inicial, sua equipe já pode realizar a primeira conciliação automatizada.`},{q:`Preciso de conhecimento técnico?`,a:`Não. A interface foi desenhada para contadores, não para programadores. Se você usa um sistema contábil hoje, vai se adaptar rapidamente.`},{q:`Como funciona o suporte?`,a:`Oferecemos suporte por email e chat com especialistas que entendem de contabilidade — não apenas de tecnologia.`}].map(e=>`
        <div class="faq__item">
          <button class="faq__question" type="button">
            <span>${e.q}</span>
            <svg class="faq__chevron" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq__answer">
            <p>${e.a}</p>
          </div>
        </div>`).join(``)}
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
</style>`}function l(){return`
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
</style>`}function u(){return`
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
</style>`}function d(){let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visible`),e.unobserve(t.target))})},{threshold:.1});document.querySelectorAll(`.reveal`).forEach(t=>e.observe(t));let t=document.getElementById(`nav`);t&&window.addEventListener(`scroll`,()=>{t.classList.toggle(`scrolled`,window.scrollY>10)},{passive:!0});let n=document.getElementById(`hamburger`),r=document.getElementById(`navOverlay`),i=document.getElementById(`navDrawer`),a=document.getElementById(`drawerClose`);function o(){r?.classList.add(`open`),i?.classList.add(`open`),document.body.style.overflow=`hidden`}function s(){r?.classList.remove(`open`),i?.classList.remove(`open`),document.body.style.overflow=``}n?.addEventListener(`click`,o),r?.addEventListener(`click`,s),a?.addEventListener(`click`,s),i?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,s)}),document.querySelectorAll(`.faq__question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.faq__item`),n=t.querySelector(`.faq__answer`),r=t.classList.contains(`active`);document.querySelectorAll(`.faq__item.active`).forEach(e=>{e.classList.remove(`active`),e.querySelector(`.faq__answer`).style.maxHeight=null}),r||(t.classList.add(`active`),n.style.maxHeight=n.scrollHeight+`px`)})})}var f=document.getElementById(`app`);f.innerHTML=[t(),r(),i(),a(),s(),c(),l(),u()].join(``),d();