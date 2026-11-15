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
            <p className="text-secondary mb-14">Última atualização: Junho de 2026</p>

            <div className="text-secondary leading-relaxed space-y-0">
              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">1. Introdução</h2>
              <p className="mb-4">A ISA &mdash; Intelligent Systems for Accounting (&ldquo;ISA&rdquo;, &ldquo;nós&rdquo;) opera a plataforma Isa Concilia. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 &mdash; LGPD).</p>
              <p className="mb-4">Esta política se aplica a pessoas físicas ou jurídicas, que utilizam a plataforma diretamente, bem como aos representantes, sócios, funcionários e colaboradores de pessoas jurídicas clientes da ISA, cujos dados pessoais sejam tratados em decorrência do uso da plataforma. O uso da plataforma implica aceitação desta Política de Privacidade e dos Termos de Uso, documentos que devem ser lidos em conjunto.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">2. Dados que Coletamos</h2>
              <p className="mb-3">Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-primary">Dados de identificação:</strong> nome completo, CPF/CNPJ, endereço de e-mail, número de telefone.</li>
                <li><strong className="text-primary">Dados profissionais:</strong> nome do escritório contábil, cargo, número de registro profissional (CRC).</li>
                <li><strong className="text-primary">Dados de uso:</strong> informações sobre como você utiliza a plataforma, incluindo logs de acesso, funcionalidades utilizadas, horários de uso e preferências de configuração.</li>
                <li><strong className="text-primary">Dados financeiros e contábeis:</strong> extratos bancários e dados contábeis fornecidos pelo usuário para fins de conciliação. Esses dados são processados de forma automatizada. A ISA poderá reter versões anonimizadas e/ou agregadas desses dados para as finalidades descritas na Cláusula 3, não sendo possível, a partir de tais versões, identificar o usuário ou sua organização. A retenção de dados identificados ocorre apenas pelo período necessário à prestação do serviço ou conforme exigido por lei.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">3. Finalidade do Tratamento</h2>
              <p className="mb-3">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fornecer, operar e manter os serviços da plataforma Isa Concilia.</li>
                <li>Processar conciliações bancárias automatizadas conforme solicitado pelo usuário.</li>
                <li>Melhorar e personalizar a experiência do usuário na plataforma.</li>
                <li>Aprimorar os algoritmos e modelos de inteligência artificial da ISA, utilizando exclusivamente dados anonimizados e/ou agregados, de forma que não seja possível identificar o usuário ou sua organização.</li>
                <li>Gerar estatísticas, análises e benchmarks de mercado a partir de dados anonimizados, sem vinculação a nenhum usuário ou empresa específica.</li>
                <li>Enviar comunicações sobre o serviço, atualizações de funcionalidades e informações relevantes.</li>
                <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                <li>Garantir a segurança e integridade da plataforma.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">4. Base Legal para o Tratamento</h2>
              <p className="mb-3">O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-primary">Execução de contrato (Art. 7º, V):</strong> necessário para a prestação dos serviços contratados, incluindo o processamento de conciliações e a operação da plataforma.</li>
                <li><strong className="text-primary">Consentimento do titular (Art. 7º, I):</strong> aplicado ao envio de comunicações de marketing, ao uso de cookies não essenciais e a quaisquer finalidades que exijam manifestação explícita do usuário. O consentimento pode ser revogado a qualquer momento.</li>
                <li><strong className="text-primary">Legítimo interesse da ISA, do controlador ou de terceiros (Art. 7º, IX):</strong> aplicado ao aprimoramento dos algoritmos de IA e à geração de benchmarks de mercado, sempre mediante uso exclusivo de dados anonimizados e/ou agregados, de forma proporcional e que não sobreponha os direitos fundamentais do titular. O usuário pode se opor a esse tratamento nos termos da LGPD.</li>
                <li><strong className="text-primary">Exercício regular de direitos em processo judicial, administrativo ou arbitral (Art. 7º, VI):</strong> aplicado à retenção de dados necessária para defesa da ISA em litígios.</li>
                <li><strong className="text-primary">Cumprimento de obrigação legal ou regulatória (Art. 7º, II):</strong> aplicado às hipóteses em que a lei exige a retenção, fornecimento ou exclusão de dados.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-3">Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais ou de marketing. Podemos compartilhar dados com:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Prestadores de serviços essenciais para o funcionamento da plataforma, incluindo serviços de hospedagem, infraestrutura em nuvem e processamento de dados, todos localizados em território brasileiro ou em países que ofereçam nível adequado de proteção.</li>
                <li>Autoridades públicas, quando exigido por lei, regulamentação, decisão judicial ou determinação de autoridade competente.</li>
              </ul>
              <p className="mb-4">Todos os prestadores de serviços terceirizados são obrigados contratualmente a manter a confidencialidade e segurança dos dados tratados.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">6. Segurança dos Dados e Limitação de Responsabilidade</h2>
              <p className="mb-3">Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Criptografia de dados em trânsito (TLS/SSL) e em repouso (AES-256).</li>
                <li>Controle de acesso baseado em funções (RBAC) com autenticação multifator.</li>
                <li>Monitoramento contínuo de segurança e detecção de ameaças.</li>
                <li>Servidores localizados em data centers no território brasileiro.</li>
                <li>Realização periódica de testes de segurança e avaliações de vulnerabilidade.</li>
                <li>Políticas internas de segurança da informação e treinamento de colaboradores.</li>
              </ul>
              <p className="mb-4">A ISA adota as melhores práticas de segurança disponíveis, mas nenhum sistema é completamente imune a incidentes. Na hipótese de incidente de segurança envolvendo dados pessoais, a ISA: (i) notificará a ANPD e os titulares afetados nos prazos legais; (ii) tomará medidas imediatas de contenção e mitigação. A responsabilidade da ISA por incidentes decorrentes de ataques externos estará limitada ao efetivo cumprimento das medidas de segurança descritas nesta cláusula, sendo inaplicável nas hipóteses em que o incidente decorrer de culpa exclusiva do usuário, caso fortuito ou força maior. Em qualquer caso, a responsabilidade total da ISA não excederá os limites previstos nos Termos de Uso.</p>

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
                <li>Oposição ao tratamento realizado com base em legítimo interesse, nos casos previstos em lei.</li>
              </ul>
              <p className="mb-4">Para exercer qualquer um desses direitos, o titular deve encaminhar solicitação formal ao Encarregado de Proteção de Dados (DPO) pelo e-mail indicado na Cláusula 12, contendo: (i) identificação completa do titular (nome e CPF/CNPJ); (ii) descrição clara do direito que deseja exercer; e (iii) informações adicionais que permitam localizar os dados objeto da solicitação.</p>
              <p className="mb-4">A ISA responderá às solicitações em até 15 (quinze) dias úteis a contar do recebimento, podendo esse prazo ser prorrogado por igual período mediante justificativa fundamentada. O não atendimento de solicitações incompletas ou que não atendam aos requisitos acima não constituirá violação desta política.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">8. Retenção de Dados</h2>
              <p className="mb-4">Mantemos seus dados pessoais apenas pelo período necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por obrigações legais, regulatórias ou contratuais. Após o término do período de retenção, os dados serão eliminados ou anonimizados de forma segura.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">9. Cookies e Tecnologias de Rastreamento</h2>
              <p className="mb-4">A plataforma Isa Concilia pode utilizar cookies e tecnologias similares para melhorar a experiência do usuário, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">10. Transferência Internacional de Dados</h2>
              <p className="mb-4">Caso seja necessária a transferência internacional de dados pessoais, esta será realizada em conformidade com a LGPD, garantindo nível adequado de proteção através de cláusulas contratuais padrão ou outras salvaguardas previstas em lei.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">11. Alterações nesta Política</h2>
              <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas práticas ou na legislação aplicável. Alterações significativas serão comunicadas com antecedência mínima de 15 (quinze) dias, por meio de notificação ao endereço de e-mail cadastrado na conta do usuário e/ou mediante aviso destacado na plataforma, em alinhamento com os Termos de Uso. O uso continuado da plataforma após o prazo de antecedência constituirá aceitação das alterações.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">12. Encarregado de Proteção de Dados (DPO)</h2>
              <p className="mb-3">Em conformidade com a LGPD, a ISA designou um Encarregado de Proteção de Dados responsável por atender solicitações dos titulares, receber comunicações da ANPD e orientar os colaboradores da ISA sobre as práticas de proteção de dados.</p>
              <p className="mb-1">ISA &mdash; Intelligent Systems for Accounting</p>
              <p className="mb-1">Encarregado de Proteção de Dados</p>
              <p className="mb-4">E-mail: <span className="text-primary">info@isaconcilia.com</span></p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">13. Contato</h2>
              <p className="mb-3">Para dúvidas, solicitações ou reclamações:</p>
              <p className="mb-1">ISA &mdash; Intelligent Systems for Accounting</p>
              <p className="mb-4">E-mail: <span className="text-primary">info@isaconcilia.com</span></p>
              <p className="mb-4">Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) caso entenda que o tratamento de seus dados pessoais viola a LGPD.</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
