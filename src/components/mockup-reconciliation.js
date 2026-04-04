export default function mockupReconciliation() {
  return `
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
</style>`;
}
