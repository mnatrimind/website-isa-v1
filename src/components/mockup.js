export function dashboardMockup() {
  return `
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
  `
}
