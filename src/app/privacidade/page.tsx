import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function Privacidade() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">Política de Privacidade</h1>
            <p className="text-secondary mb-14">Última atualização: Abril de 2026</p>

            <div className="text-secondary leading-relaxed space-y-0">
              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">1. Introdução</h2>
              <p className="mb-4">A ISA — Intelligent Systems for Accounting (&ldquo;ISA&rdquo;, &ldquo;nós&rdquo;) opera a plataforma Isa Concilia. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">2. Dados que Coletamos</h2>
              <p className="mb-3">Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-primary">Dados de identificação:</strong> nome completo, CPF/CNPJ, endereço de e-mail, número de telefone.</li>
                <li><strong className="text-primary">Dados profissionais:</strong> nome do escritório contábil, cargo, número de registro profissional (CRC).</li>
                <li><strong className="text-primary">Dados de uso:</strong> informações sobre como você utiliza a plataforma, incluindo logs de acesso, funcionalidades utilizadas, horários de uso e preferências de configuração.</li>
                <li><strong className="text-primary">Dados financeiros:</strong> extratos bancários e dados contábeis fornecidos pelo usuário exclusivamente para fins de conciliação. Esses dados são processados de forma automatizada e não são armazenados permanentemente sem consentimento explícito do titular.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">3. Finalidade do Tratamento</h2>
              <p className="mb-3">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fornecer, operar e manter os serviços da plataforma Isa Concilia.</li>
                <li>Processar conciliações bancárias automatizadas conforme solicitado pelo usuário.</li>
                <li>Melhorar e personalizar a experiência do usuário na plataforma.</li>
                <li>Enviar comunicações sobre o serviço, atualizações de funcionalidades e informações relevantes.</li>
                <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                <li>Garantir a segurança e integridade da plataforma.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">4. Base Legal para o Tratamento</h2>
              <p className="mb-3">O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-primary">Consentimento do titular (Art. 7º, I)</strong> — quando o usuário consente explicitamente com o tratamento de seus dados para finalidades específicas.</li>
                <li><strong className="text-primary">Execução de contrato ou procedimentos preliminares (Art. 7º, V)</strong> — quando o tratamento é necessário para a prestação dos serviços contratados.</li>
                <li><strong className="text-primary">Exercício regular de direitos em processo judicial, administrativo ou arbitral (Art. 7º, VI).</strong></li>
                <li><strong className="text-primary">Legítimo interesse do controlador ou de terceiros (Art. 7º, IX)</strong> — quando o tratamento é necessário para atender aos interesses legítimos da ISA, respeitados os direitos e liberdades fundamentais do titular.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-3">Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais ou de marketing. Podemos compartilhar dados com:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Prestadores de serviços essenciais para o funcionamento da plataforma, incluindo serviços de hospedagem, infraestrutura em nuvem e processamento de dados, todos localizados em território brasileiro ou em países que ofereçam nível adequado de proteção.</li>
                <li>Autoridades públicas, quando exigido por lei, regulamentação, decisão judicial ou determinação de autoridade competente.</li>
              </ul>
              <p className="mb-4">Todos os prestadores de serviços terceirizados são obrigados contratualmente a manter a confidencialidade e segurança dos dados tratados.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">6. Segurança dos Dados</h2>
              <p className="mb-3">Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Criptografia de dados em trânsito (TLS/SSL) e em repouso (AES-256).</li>
                <li>Controle de acesso baseado em funções (RBAC) com autenticação multifator.</li>
                <li>Monitoramento contínuo de segurança e detecção de ameaças.</li>
                <li>Servidores localizados em data centers no território brasileiro.</li>
                <li>Realização periódica de testes de segurança e avaliações de vulnerabilidade.</li>
                <li>Políticas internas de segurança da informação e treinamento de colaboradores.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">7. Direitos do Titular</h2>
              <p className="mb-3">Nos termos da LGPD (Art. 18), você tem os seguintes direitos:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Confirmação da existência de tratamento de dados.</li>
                <li>Acesso aos seus dados pessoais tratados pela ISA.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                <li>Eliminação dos dados pessoais tratados com base no consentimento.</li>
                <li>Informação sobre entidades públicas e privadas com as quais realizamos uso compartilhado de dados.</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.</li>
                <li>Revogação do consentimento a qualquer momento, mediante manifestação expressa.</li>
              </ul>
              <p className="mb-4">Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados ao final desta política.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">8. Retenção de Dados</h2>
              <p className="mb-4">Mantemos seus dados pessoais apenas pelo período necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por obrigações legais, regulatórias ou contratuais. Após o término do período de retenção, os dados serão eliminados ou anonimizados de forma segura.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">9. Cookies e Tecnologias de Rastreamento</h2>
              <p className="mb-4">A plataforma Isa Concilia pode utilizar cookies e tecnologias similares para melhorar a experiência do usuário, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">10. Transferência Internacional de Dados</h2>
              <p className="mb-4">Caso seja necessária a transferência internacional de dados pessoais, esta será realizada em conformidade com a LGPD, garantindo nível adequado de proteção através de cláusulas contratuais padrão ou outras salvaguardas previstas em lei.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">11. Alterações nesta Política</h2>
              <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas práticas ou na legislação aplicável. Notificaremos sobre alterações significativas através da plataforma ou por e-mail cadastrado.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">12. Encarregado de Proteção de Dados (DPO)</h2>
              <p className="mb-4">Em conformidade com a LGPD, a ISA designou um Encarregado de Proteção de Dados. Para questões relacionadas ao tratamento de dados pessoais:</p>
              <p className="mb-4">ISA — Intelligent Systems for Accounting<br />Encarregado de Proteção de Dados<br />E-mail: [a definir]</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">13. Contato</h2>
              <p className="mb-4">Para dúvidas, solicitações ou reclamações:</p>
              <p className="mb-4">ISA — Intelligent Systems for Accounting<br />E-mail: [a definir]</p>
              <p className="mb-4">Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) caso entenda que o tratamento de seus dados pessoais viola a LGPD.</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
