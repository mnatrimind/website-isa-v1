(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <header class="nav" id="nav">
      <div class="container nav-inner">
        <a class="brand" href="#top" aria-label="ISA Concilia">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAIAAABKoV4MAAAFGklEQVR42u2Ya2wUVRTHz33M7KvLPvpg6VZMKwWxYsEEyztViRpKI5rg4wOJoh/wizExRCQxpgmkH0xUxGhEIioEX6gYFRQwDYFWU9G0WHmUPgO73ba72+7O7Gtm7j1+oBgUpIttJCY9nyYzN/d37j/nf87kEikl3LigcENjCj+F/z/iEQAnhuf/AikREQgjQMnYK4EgASgAJYAoAYAQlk9uJM+2gwCIAABsjAkAmBPSRHAyQsmYipYUnDIAkChIHtLme3pKCBAAgOGs2RTRDw+lz+UkUZmdUUtiwMbmu5VVxepct6s1sq99aO+K4NNzClcJaVHCJoRHAAoQSuUupMwBLfvq75FjMaG6bXOLXDIHZU54ZY6vNWEciumfDMByT9id2hlKtddVNADAWMoTLD0EaLqgHT0/0tjS5wfLp8DNNjY0mplvx0QqV+1WOAi/UlQ77VxL//qlM9a8fFeT314OAITQiYpPABDQq7KqoDudMvZ2xs2cPBfWvNNdH66Zve10JGZYabPg3bY964JfPDtro1OpKytgUiIiTo7xEGF1uc9FOZPQM2IoWaNxWfB+vzqaNdACibbjPbtWepsfKt3acLKqNR5BlCI/S+aFJ4QIRK9TAdO6p8gGWbFpSXlNoepWVcXM3PfR1mIltbpk8wsnmKnmlpR4CKF0EtsOAUCJJQW2VNZcPN1Ryg09Z/kUx67WX3e3ffbIrGolU/9cy2DGQYOc3+FzICIlJK+d8/S9RGSUngwn1r/3y/ql/rZYf3ckpqi5h6tqPu4QTVHdX+rVTPlGTWBDddAUktNJxQOAkMgZbdjfsedI7zOrSwzUjHTRthNDcU78fmfcxJWljoOPLyCE5Ie+TjwCSImc0Sff+emDI+dvv2namVTW7ncwlY1mxYKg89sn7gy4nRJlnsrni5cIEoARAAQLUWGk8atTW/afzSAFTphKHls4Y9vaef4CuyGkkj88Tzwhl2bLWCECAIzEkm/90BNKGmuXzLz7tsBfjYqTg5cADKB91Pg5aq6ZaXdzeiCc7UxalsQCh+JTSWUBXey3CYk5KT8P5bIW1JYolQVc5GeqcbqelMAY+bIv3dA0Ur0u8PbZzK7OXF2FnRMEsIY164EydaFX4ZRuP6VvOpYASmrK+I91AZAABCY+8RCATMvmeHSYmUWnumLQN1I/O+DgTAJ6fMryCjundEDPbTnQv2GBv27OtPr3uz+tUB+dW2gJycbzQF4Dl6XSGB4kRuXu+rKdx+F4bxIRJNDmzrhDGB1ba18/3Kd39N9SZYMhUjwSa9yXenDzYhuliHDtOuTjt3sAHE6I9h4wauL96cq0VlvqQgmEkJGWoTMh/fvm3h1vNi+71dfc0tckcIULvj7422ul/MWnFgkp2TX5/B+gePlzud9WP6/Qo9Jv2i58d7RH4UQICYhep23H84u6eqL3lru2v1Q7I+ADAJBio3Ko9/SAnso6HaqU8pJx/nTQNSufXIdvr/M/8QpD8r99ppRqmtbd3U0IoZQmk0mPx8PYxfktPV5vKBQuKS5OJBKcc0KolKKwqDA6HEXEsrJgLBYTQtjsDssy7TbVMExd1znnqqq6XK5gMDj+xCOEIKJlWfF43Ol0RiKR3t7eTCaNiKqiCMsMh0NCWMlkwjRzQliJ0dHCQr+mJYUQAKBpWkrXdE0bHBzSdR0ApJTRaLSrq+vizjdG/Ku2Qn7VdZcvvTzlK9PPP656KjJ1vTCFn8JP4f/b+ANw5JsAgC62iQAAAABJRU5ErkJggg==" alt="ISA" width="36" height="36" class="brand-logo">
          <span class="brand-text">
            <strong>ISA Concilia</strong>
            <small>Conciliação contábil com IA</small>
          </span>
        </a>
        <nav class="nav-links" role="navigation">
          <a href="#solucao">Solução</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
        </nav>
        <div class="nav-actions">
          <a href="#cta" class="btn btn-outline btn-sm">Falar com especialista</a>
          <a href="#cta" class="btn btn-primary btn-sm">Agendar demo</a>
        </div>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-overlay" aria-hidden="true"></div>
    <aside class="mobile-nav" aria-hidden="true">
      <nav>
        <a href="#solucao">Solução</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#cta" class="btn btn-primary" style="margin-top:16px;width:100%;text-align:center;">Agendar demo</a>
      </nav>
    </aside>
  `}function t(){return`
    <div class="mockup-wrapper">
      <div class="mockup-frame">
        <div class="mockup-chrome">
          <div class="chrome-dots"><span></span><span></span><span></span></div>
          <div class="chrome-url">app.isaconcilia.com.br</div>
        </div>
        <div class="mockup-body">
          <div class="mockup-sidebar">
            <div class="sidebar-brand">
              <div class="sidebar-icon">ISA</div>
              <small>Plataform</small>
            </div>
            <div class="sidebar-menu">
              <div class="sidebar-item active">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5" opacity="0.4"/></svg>
                Dashboard
              </div>
              <div class="sidebar-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="2" y="3" width="12" height="10" rx="2" opacity="0.6"/></svg>
                Empresas
              </div>
              <div class="sidebar-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="5" opacity="0.6"/></svg>
                Conciliações
              </div>
            </div>
          </div>
          <div class="mockup-main">
            <div class="mockup-header">
              <span class="mockup-title">Dashboard</span>
              <span class="mockup-date">📅 Jan 26 – Jan 31</span>
            </div>
            <div class="mockup-kpis">
              <div class="kpi-card">
                <span class="kpi-label">Empresas Ativas</span>
                <span class="kpi-value">12</span>
                <span class="kpi-change">↗ +2 este mês</span>
              </div>
              <div class="kpi-card">
                <span class="kpi-label">Conciliações</span>
                <span class="kpi-value">87</span>
                <span class="kpi-change">↗ +14 este mês</span>
              </div>
              <div class="kpi-card">
                <span class="kpi-label">Arquivos</span>
                <span class="kpi-value">156</span>
                <span class="kpi-change">↗ +23 este mês</span>
              </div>
            </div>
            <div class="mockup-chart">
              <svg viewBox="0 0 280 100" preserveAspectRatio="none">
                <rect x="10" y="60" width="16" height="40" rx="3" fill="#3B82F6"/>
                <rect x="30" y="80" width="16" height="20" rx="3" fill="#F59E0B"/>
                <rect x="65" y="35" width="16" height="65" rx="3" fill="#3B82F6"/>
                <rect x="85" y="70" width="16" height="30" rx="3" fill="#F59E0B"/>
                <rect x="120" y="30" width="16" height="70" rx="3" fill="#3B82F6"/>
                <rect x="140" y="60" width="16" height="40" rx="3" fill="#F59E0B"/>
                <rect x="175" y="15" width="16" height="85" rx="3" fill="#3B82F6"/>
                <rect x="195" y="55" width="16" height="45" rx="3" fill="#F59E0B"/>
                <rect x="230" y="10" width="16" height="90" rx="3" fill="#3B82F6"/>
                <rect x="250" y="50" width="16" height="50" rx="3" fill="#F59E0B"/>
              </svg>
            </div>
            <div class="mockup-table">
              <div class="table-header">
                <span>EMPRESA</span><span>STATUS</span>
              </div>
              <div class="table-row">
                <span>Alianca Transporte</span>
                <span class="status-pill status-green">CONCILIADO</span>
              </div>
              <div class="table-row">
                <span>Nações Express</span>
                <span class="status-pill status-green">CONCILIADO</span>
              </div>
              <div class="table-row">
                <span>Alianca Transporte</span>
                <span class="status-pill status-red">ERRO</span>
              </div>
              <div class="table-row">
                <span>Nações Express</span>
                <span class="status-pill status-amber">AGUARDANDO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function n(){return`
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
          ${t()}
        </div>
      </div>
    </section>
  `}function r(){return`
    <section class="problem-section" id="problema">
      <div class="container">
        <div class="problem-grid">
          <div class="problem-text reveal">
            <span class="section-label">O desafio</span>
            <h2>Sua equipe ainda concilia manualmente?</h2>
            <p>A maioria dos escritórios contábeis perde dias inteiros conferindo extratos, cruzando lançamentos e corrigindo erros que só aparecem no fechamento. É um processo que consome tempo, gera retrabalho e limita o crescimento.</p>
          </div>
          <div class="problem-cards reveal">
            <div class="problem-card">
              <div class="problem-icon">⏱️</div>
              <h3>Horas perdidas</h3>
              <p>Conferência manual de lançamentos e saldos que poderia ser automática.</p>
            </div>
            <div class="problem-card">
              <div class="problem-icon">⚠️</div>
              <h3>Erros no fechamento</h3>
              <p>Divergências que só aparecem no final do mês, gerando retrabalho e atraso.</p>
            </div>
            <div class="problem-card">
              <div class="problem-icon">📉</div>
              <h3>Escala travada</h3>
              <p>Crescer exige contratar mais gente para tarefas repetitivas — e não estratégicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function i(){return`
    <section class="solution-section" id="solucao">
      <div class="container">
        <div class="solution-header reveal">
          <span class="section-label">A solução</span>
          <h2>O Isa Concilia faz em minutos<br>o que sua equipe faz em dias</h2>
          <p>Uma plataforma com IA que conecta extratos bancários ao balancete, identifica correspondências automaticamente e organiza exceções — para que sua equipe valide, não execute.</p>
        </div>
        <div class="solution-features">
          <div class="feature-card reveal">
            <div class="feature-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 14h6m-6-4h8m-8-4h12"/><circle cx="18" cy="14" r="4"/><path d="M18 12v4m-2-2h4"/></svg>
            </div>
            <h3>Conciliação automática</h3>
            <p>O sistema cruza extrato e balancete, identifica pares automaticamente e sinaliza exceções para revisão humana.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18"/></svg>
            </div>
            <h3>Integração com balancete</h3>
            <p>Importe dados do seu sistema contábil e conecte diretamente aos extratos bancários, sem digitação manual.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>IA que aprende</h3>
            <p>O sistema melhora a cada ciclo, sugerindo classificações e detectando padrões com mais precisão ao longo do tempo.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <h3>Detecção de inconsistências</h3>
            <p>Divergências e lançamentos atípicos são identificados automaticamente antes do fechamento mensal.</p>
          </div>
        </div>
      </div>
    </section>
  `}function a(){return`
    <section class="how-section" id="como-funciona">
      <div class="container">
        <div class="how-header reveal">
          <span class="section-label">Como funciona</span>
          <h2>Três passos. Sem complexidade.</h2>
          <p>O Isa Concilia foi desenhado para encaixar na rotina do seu escritório — não para reinventá-la.</p>
        </div>
        <div class="steps">
          <div class="step reveal">
            <div class="step-number">1</div>
            <div class="step-line"></div>
            <h3>Integre seus dados</h3>
            <p>Conecte extratos bancários e importe os dados do balancete gerado pelo seu sistema contábil.</p>
          </div>
          <div class="step reveal">
            <div class="step-number">2</div>
            <div class="step-line"></div>
            <h3>A IA processa</h3>
            <p>O sistema cruza lançamentos, identifica padrões e propõe correspondências automaticamente.</p>
          </div>
          <div class="step reveal">
            <div class="step-number active">3</div>
            <h3>Revise e conclua</h3>
            <p>Sua equipe valida as sugestões e finaliza a conciliação em uma fração do tempo habitual.</p>
          </div>
        </div>
      </div>
    </section>
  `}function o(){return`
    <section class="benefits-section" id="beneficios">
      <div class="container">
        <div class="benefits-header reveal">
          <span class="section-label">Resultados</span>
          <h2>O impacto no seu escritório</h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit reveal">
            <strong class="benefit-metric">99%</strong>
            <h3>Mais rapidez</h3>
            <p>Reduza o tempo de conciliação de dias para minutos.</p>
          </div>
          <div class="benefit reveal">
            <strong class="benefit-metric">−85%</strong>
            <h3>Menos erros</h3>
            <p>Detecção automática de divergências antes do fechamento.</p>
          </div>
          <div class="benefit reveal">
            <strong class="benefit-metric">3x</strong>
            <h3>Mais clientes</h3>
            <p>Aumente capacidade sem ampliar a equipe proporcionalmente.</p>
          </div>
          <div class="benefit reveal">
            <strong class="benefit-metric">0</strong>
            <h3>Retrabalho</h3>
            <p>Elimine conferências repetitivas e libere tempo estratégico.</p>
          </div>
          <div class="benefit reveal">
            <strong class="benefit-metric">↗</strong>
            <h3>Entregas melhores</h3>
            <p>Fechamentos rápidos e previsíveis para seus clientes.</p>
          </div>
          <div class="benefit reveal">
            <strong class="benefit-metric">R$</strong>
            <h3>Mais lucro</h3>
            <p>Menos custo operacional, mais eficiência por colaborador.</p>
          </div>
        </div>
      </div>
    </section>
  `}function s(){return`
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-card reveal">
          <span class="section-label" style="color: var(--green-400);">Pronto para começar?</span>
          <h2>Menos operação.<br>Mais resultado.</h2>
          <p>Agende uma demonstração gratuita e veja como o Isa Concilia pode transformar a rotina do seu escritório contábil.</p>
          <div class="cta-buttons">
            <a href="mailto:contato@isaconcilia.com.br" class="btn btn-primary btn-lg">Agendar demonstração</a>
            <a href="mailto:contato@isaconcilia.com.br" class="btn btn-cta-outline btn-lg">Falar com especialista</a>
          </div>
        </div>
      </div>
    </section>
  `}function c(){return`
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <strong>ISA Concilia</strong>
          <span>Automação inteligente para a rotina contábil.</span>
        </div>
        <div class="footer-links">
          <a href="#solucao">Solução</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a href="mailto:contato@isaconcilia.com.br">Contato</a>
        </div>
      </div>
      <div class="container">
        <div class="footer-bottom">
          <span>© 2026 ISA — Intelligent Systems for Accounting</span>
        </div>
      </div>
    </footer>
  `}function l(){let e=document.getElementById(`nav`);e&&window.addEventListener(`scroll`,()=>{e.classList.toggle(`scrolled`,window.scrollY>20)},{passive:!0});let t=document.querySelector(`.nav-toggle`),n=document.querySelector(`.mobile-nav`),r=document.querySelector(`.mobile-overlay`);if(t&&n&&r){let e=()=>{n.classList.add(`active`),r.classList.add(`active`),t.setAttribute(`aria-expanded`,`true`)},i=()=>{n.classList.remove(`active`),r.classList.remove(`active`),t.setAttribute(`aria-expanded`,`false`)};t.addEventListener(`click`,()=>{n.classList.contains(`active`)?i():e()}),r.addEventListener(`click`,i),n.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,i))}let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.08,rootMargin:`0px 0px -40px 0px`});document.querySelectorAll(`.reveal`).forEach(e=>i.observe(e))}document.querySelector(`#app`).innerHTML=`
  ${e()}
  <main>
    ${n()}
    ${r()}
    ${i()}
    ${a()}
    ${o()}
    ${s()}
  </main>
  ${c()}
`,l();