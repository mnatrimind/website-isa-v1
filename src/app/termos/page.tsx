import Container from '@/components/layout/Container'

export default function Termos() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-text tracking-tight mb-2">Termos de Uso</h1>
          <p className="text-sm text-secondary-text mb-12">Última atualização: Abril de 2026</p>

          <div className="space-y-10 text-secondary-text leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">1. Aceitação dos Termos</h2>
              <p>Ao acessar ou utilizar a plataforma Isa Concilia, você concorda com estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não utilize a plataforma.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">2. Descrição do Serviço</h2>
              <p>O Isa Concilia é uma plataforma de conciliação contábil automatizada que utiliza inteligência artificial para conectar extratos bancários a balancetes contábeis, identificar correspondências e auxiliar na detecção de inconsistências.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">3. Cadastro e Conta</h2>
              <p className="mb-3">Para utilizar a plataforma, é necessário criar uma conta. Você é responsável por:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Todas as atividades realizadas em sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">4. Uso Adequado</h2>
              <p className="mb-3">Você concorda em utilizar a plataforma apenas para fins legítimos e em conformidade com a legislação brasileira. É proibido:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Utilizar a plataforma para atividades ilegais</li>
                <li>Tentar acessar sistemas ou dados sem autorização</li>
                <li>Compartilhar credenciais de acesso com terceiros não autorizados</li>
                <li>Realizar engenharia reversa do software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">5. Propriedade Intelectual</h2>
              <p>A plataforma Isa Concilia, incluindo software, design, logotipos e conteúdo, é propriedade da ISA — Intelligent Systems for Accounting. Nenhum direito de propriedade intelectual é transferido ao usuário pelo uso da plataforma.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">6. Dados do Usuário</h2>
              <p>Os dados financeiros e contábeis inseridos na plataforma permanecem de propriedade do usuário. A ISA utiliza esses dados exclusivamente para fornecer os serviços contratados, conforme descrito em nossa Política de Privacidade.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">7. Disponibilidade do Serviço</h2>
              <p>Nos esforçamos para manter a plataforma disponível de forma contínua, mas não garantimos operação ininterrupta. Podemos realizar manutenções programadas com aviso prévio.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">8. Limitação de Responsabilidade</h2>
              <p>O Isa Concilia é uma ferramenta de auxílio à conciliação contábil. As sugestões e correspondências geradas pelo sistema devem ser validadas pelo usuário. A ISA não se responsabiliza por decisões contábeis baseadas exclusivamente nos resultados automatizados da plataforma.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">9. Rescisão</h2>
              <p>Qualquer das partes pode encerrar o uso do serviço a qualquer momento. Após a rescisão, seus dados serão tratados conforme nossa Política de Privacidade e a legislação aplicável.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">10. Legislação Aplicável</h2>
              <p>Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de [a definir], com exclusão de qualquer outro.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">11. Contato</h2>
              <p>ISA — Intelligent Systems for Accounting<br />E-mail: [a definir]</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
