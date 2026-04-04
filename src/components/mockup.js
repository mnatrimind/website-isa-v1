export default function mockup() {
  return `
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
  .mockup__sidebar{width:100px}
  .mockup__content-row{grid-template-columns:1fr}
}
</style>`;
}
