import Container from '@/components/layout/Container'

export default function Privacidade() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-text tracking-tight mb-2">Política de Privacidade</h1>
          <p className="text-sm text-secondary-text mb-12">Última atualização: Abril de 2026</p>

          <div className="space-y-10 text-secondary-text leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">1. Introdução</h2>
              <p>A ISA — Intelligent Systems for Accounting (&ldquo;ISA&rdquo;, &ldquo;nós&rdquo;) opera a plataforma Isa Concilia. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">2. Dados que Coletamos</h2>
              <p className="mb-3">Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Dados de identificação:</strong> nome completo, CPF/CNPJ, e-mail, telefone</li>
                <li><strong>Dados profissionais:</strong> nome do escritório, cargo, número de registro profissional</li>
                <li><strong>Dados de uso:</strong> informações sobre como você utiliza a plataforma, incluindo logs de acesso, funcionalidades utilizadas e preferências</li>
                <li><strong>Dados financeiros:</strong> extratos bancários e dados contábeis fornecidos pelo usuário para fins de conciliação (processados e não armazenados permanentemente sem consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">3. Finalidade do Tratamento</h2>
              <p className="mb-3">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer e manter os serviços da plataforma Isa Concilia</li>
                <li>Processar conciliações bancárias automatizadas</li>
                <li>Melhorar e personalizar a experiência do usuário</li>
                <li>Enviar comunicações sobre o serviço e atualizações relevantes</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">4. Base Legal</h2>
              <p className="mb-3">O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Consentimento do titular (Art. 7º, I)</li>
                <li>Execução de contrato (Art. 7º, V)</li>
                <li>Exercício regular de direitos (Art. 7º, VI)</li>
                <li>Legítimo interesse do controlador (Art. 7º, IX)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">5. Compartilhamento de Dados</h2>
              <p className="mb-3">Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar dados com:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prestadores de serviços essenciais para o funcionamento da plataforma (hospedagem, infraestrutura)</li>
                <li>Autoridades públicas, quando exigido por lei ou ordem judicial</li>
              </ul>
              <p className="mt-3">Todos os prestadores de serviços são obrigados a manter a confidencialidade dos dados.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">6. Segurança dos Dados</h2>
              <p className="mb-3">Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controle de acesso baseado em funções</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Servidores localizados no território brasileiro</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">7. Seus Direitos</h2>
              <p className="mb-3">Nos termos da LGPD, você tem direito a:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Informação sobre compartilhamento de dados</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="mt-3">Para exercer seus direitos, entre em contato conosco.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">8. Retenção de Dados</h2>
              <p>Mantemos seus dados pessoais apenas pelo período necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">9. Alterações nesta Política</h2>
              <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas através da plataforma ou por e-mail.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">10. Contato</h2>
              <p>Para questões sobre privacidade e proteção de dados:</p>
              <p className="mt-2">ISA — Intelligent Systems for Accounting<br />E-mail: [a definir]</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
