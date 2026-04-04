const LOGO_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNlAAAA7klEQVR42u2YMQ6DMAAE7/8/TUdBgYQAk+AztoSLFCvZ09nGJvmSJP0jlW/StsfjJGXnlz8oi3+UtPPLH5TFP0ra+eUPyuIfJe388gdl8Y+Sdn75g7L4R0k7v/xBWfyjpJ1f/qAs/lHSzi9/UBb/KGnnlz8oi3+UtPPLH5TFP0ra+eUPyuIfJe388gdl8Y+Sdn75g7L4R0k7v/xBWfyjpJ1f/qAs/lHSzk8HBVCRWGvNzG5mdkySyxjje5Ikl/tNZnYzs3OSLGOMuZJcktQGgLYxs5uZnZJk+fj+lpTaSdKP6zfJlwOSpB/XE7TSQiMVmgYuAAAAAElFTkSuQmCC';

export default function nav() {
  return `
<nav class="nav" id="nav">
  <div class="nav__inner container">
    <a href="#" class="nav__brand">
      <img src="${LOGO_SRC}" alt="ISA Concilia" class="nav__logo" width="47" height="36">
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
    <img src="${LOGO_SRC}" alt="ISA Concilia" width="47" height="36">
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
</style>`;
}
