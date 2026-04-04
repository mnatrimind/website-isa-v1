import { dashboardMockup } from '../components/mockup.js'

export function hero() {
  return `
    <section class="hero" id="top">
      <div class="container">
        <div class="hero-content reveal">
          <div class="hero-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#34D399"/><circle cx="8" cy="8" r="6" stroke="#34D399" stroke-width="1.5" opacity="0.4"/></svg>
            Conciliação contábil com IA
          </div>
          <h1>Reduza de dias<br>para minutos.</h1>
          <p class="hero-sub">O Isa Concilia automatiza até 99% da sua conciliação bancária. Conecte extratos ao balancete, identifique correspondências automaticamente, e libere sua equipe para o que realmente importa.</p>
          <div class="hero-ctas">
            <a href="#cta" class="btn btn-primary btn-lg">Agendar demonstração gratuita</a>
            <a href="#como-funciona" class="btn btn-hero-ghost btn-lg">Ver como funciona →</a>
          </div>
          <div class="hero-proof">
            <div class="proof-item">
              <strong>99%</strong>
              <span>mais rápido</span>
            </div>
            <div class="proof-divider"></div>
            <div class="proof-item">
              <strong>−85%</strong>
              <span>erros manuais</span>
            </div>
            <div class="proof-divider"></div>
            <div class="proof-item">
              <strong>3x</strong>
              <span>mais clientes</span>
            </div>
          </div>
        </div>
        <div class="hero-visual reveal">
          ${dashboardMockup()}
        </div>
      </div>
    </section>
  `
}
