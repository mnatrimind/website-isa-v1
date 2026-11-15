import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function Termos() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">Termos de Uso</h1>
            <p className="text-secondary mb-14">Última atualização: Junho de 2026</p>

            <div className="text-secondary leading-relaxed space-y-0">
              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">Ao acessar ou utilizar a plataforma Isa Concilia, operada pela ISA &mdash; Intelligent Systems for Accounting (&ldquo;ISA&rdquo;, &ldquo;nós&rdquo;), você declara que leu, compreendeu e concorda com estes Termos de Uso, bem como com quaisquer políticas, aditivos e documentos a eles incorporados, incluindo a Política de Privacidade e eventuais Acordos de Nível de Serviço. Se você não concorda com qualquer parte destes termos, não utilize a plataforma.</p>
              <p className="mb-4">A utilização da plataforma em nome de uma empresa ou organização implica que você possui autorização para vincular essa entidade a estes termos.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">2. Descrição do Serviço</h2>
              <p className="mb-3">O Isa Concilia é uma plataforma de conciliação contábil automatizada que utiliza inteligência artificial para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Conectar extratos bancários a balancetes contábeis.</li>
                <li>Identificar correspondências entre lançamentos de forma automática.</li>
                <li>Auxiliar na detecção de inconsistências e divergências.</li>
                <li>Gerar relatórios de conciliação para revisão pelo usuário.</li>
              </ul>
              <p className="mb-4">O serviço é oferecido como Software como Serviço (SaaS) e está sujeito a disponibilidade e atualizações contínuas.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">3. Cadastro e Conta do Usuário</h2>
              <p className="mb-3">Para utilizar a plataforma, é necessário criar uma conta. Ao se cadastrar, você se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fornecer informações verdadeiras, completas e atualizadas.</li>
                <li>Manter a confidencialidade de suas credenciais de acesso (login e senha).</li>
                <li>Notificar imediatamente a ISA em caso de uso não autorizado de sua conta.</li>
                <li>Assumir responsabilidade por todas as atividades realizadas em sua conta.</li>
              </ul>
              <p className="mb-4">A ISA reserva-se o direito de suspender ou encerrar contas que violem estes termos ou que apresentem atividades suspeitas.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">4. Uso Adequado da Plataforma</h2>
              <p className="mb-3">Você concorda em utilizar a plataforma apenas para fins legítimos. É expressamente proibido:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Utilizar a plataforma para atividades ilegais, fraudulentas ou contrárias à boa-fé.</li>
                <li>Tentar acessar sistemas, dados ou funcionalidades sem autorização.</li>
                <li>Realizar engenharia reversa, descompilar ou desmontar qualquer parte do software.</li>
                <li>Compartilhar credenciais de acesso com terceiros não autorizados.</li>
                <li>Utilizar a plataforma de forma que possa prejudicar seu funcionamento ou a experiência de outros usuários.</li>
                <li>Inserir dados falsos, corrompidos ou maliciosos na plataforma.</li>
                <li>Utilizar a plataforma de forma que exceda os limites de uso definidos nos planos contratados ou de maneira que comprometa a capacidade operacional da infraestrutura da ISA.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">5. Propriedade Intelectual</h2>
              <p className="mb-4">A plataforma Isa Concilia, incluindo software, código-fonte, algoritmos de inteligência artificial, design, interface, logotipos, marcas e todo o conteúdo produzido pela ISA, é propriedade exclusiva da ISA — Intelligent Systems for Accounting e está protegida pela legislação brasileira de propriedade intelectual.</p>
              <p className="mb-4">Nenhum direito de propriedade intelectual é transferido ao usuário pelo uso da plataforma. É concedida ao usuário apenas uma licença limitada, não exclusiva, intransferível e revogável para utilizar a plataforma conforme estes termos.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">6. Dados do Usuário, Privacidade e Confidencialidade</h2>
              <p className="mb-3">Os dados financeiros e contábeis inseridos na plataforma pelo usuário permanecem de propriedade do usuário. A ISA utiliza esses dados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fornecer os serviços contratados e garantir o correto funcionamento da plataforma.</li>
                <li>Aprimorar os algoritmos e modelos de inteligência artificial da plataforma, utilizando dados anonimizados e/ou agregados, de forma que não seja possível identificar o usuário ou sua organização.</li>
                <li>Gerar estatísticas e benchmarks de mercado a partir de dados anonimizados, sem vinculá-los a nenhum usuário ou empresa específica.</li>
              </ul>
              <p className="mb-4">O tratamento de dados pessoais é regido pela nossa Política de Privacidade, que é parte integrante destes Termos de Uso, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 &mdash; LGPD).</p>
              <p className="mb-3">Cada parte (&ldquo;Receptora&rdquo;) que receber informações confidenciais da outra parte (&ldquo;Divulgadora&rdquo;) compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Manter sigilo sobre tais informações, empregando o mesmo grau de cuidado que dispensa às suas próprias informações confidenciais, nunca inferior ao razoável.</li>
                <li>Não divulgar as informações a terceiros sem prévia autorização escrita da Divulgadora, exceto quando exigido por lei ou ordem judicial.</li>
                <li>Utilizar as informações exclusivamente para os fins previstos nestes Termos de Uso.</li>
              </ul>
              <p className="mb-4">Consideram-se informações confidenciais da ISA, sem limitação: o código-fonte, os algoritmos de IA, a arquitetura técnica da plataforma, estratégias comerciais e quaisquer dados não públicos relativos ao negócio. Consideram-se informações confidenciais do usuário: os dados financeiros, contábeis e organizacionais inseridos na plataforma.</p>
              <p className="mb-4">As obrigações de confidencialidade prevalecem pelo prazo de 5 (cinco) anos após o encerramento do uso da plataforma.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">7. Disponibilidade do Serviço</h2>
              <p className="mb-3">A ISA envidará esforços comercialmente razoáveis para manter a plataforma disponível de forma contínua. O serviço pode ser temporariamente indisponível para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Manutenções programadas, comunicadas com antecedência quando possível.</li>
                <li>Atualizações de segurança emergenciais.</li>
                <li>Eventos de força maior ou caso fortuito.</li>
              </ul>
              <p className="mb-4">O usuário reconhece que a plataforma está sujeita a limites de uso definidos no plano contratado, incluindo volume de transações processadas, número de usuários simultâneos e chamadas à API. O uso que exceda esses limites poderá acarretar cobrança adicional ou suspensão temporária do acesso, a critério da ISA, mediante notificação prévia.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="mb-4">O Isa Concilia é uma ferramenta de auxílio à conciliação contábil. Os resultados e correspondências geradas pelo sistema são de natureza indicativa e devem ser validados pelo usuário.</p>
              <p className="mb-3">A ISA não se responsabiliza por:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Decisões contábeis, fiscais ou financeiras baseadas exclusivamente nos resultados automatizados da plataforma.</li>
                <li>Perdas ou danos decorrentes de erros nos dados fornecidos pelo usuário.</li>
                <li>Indisponibilidade do serviço por razões fora do controle da ISA.</li>
                <li>Atos ou omissões de terceiros que afetem o funcionamento da plataforma.</li>
              </ul>
              <p className="mb-4">Em nenhuma hipótese a ISA será responsável por danos indiretos, incidentais, especiais, exemplares, punitivos ou consequenciais, incluindo, sem limitação, lucros cessantes, perda de receita, perda de dados, interrupção de negócios ou danos à reputação, ainda que a ISA tenha sido alertada sobre a possibilidade de tais danos.</p>
              <p className="mb-4">Em nenhuma hipótese a responsabilidade total da ISA por danos diretos excederá o valor pago pelo usuário nos 12 (doze) meses anteriores ao evento que deu origem à reclamação.</p>
              <p className="mb-3">O usuário concorda em defender, indenizar e isentar a ISA, seus sócios, diretores, funcionários, prestadores de serviço e agentes de quaisquer reclamações, responsabilidades, danos, juízos, perdas, custos e despesas processuais decorrentes de ou relacionados a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Uso indevido ou ilegal da plataforma pelo usuário ou por terceiros que utilizem suas credenciais.</li>
                <li>Violação destes Termos de Uso pelo usuário.</li>
                <li>Inserção de dados falsos, fraudulentos, maliciosos ou que violem direitos de terceiros.</li>
                <li>Alegações de que os dados ou conteúdos fornecidos pelo usuário infringem direitos de propriedade intelectual, privacidade ou quaisquer outros direitos de terceiros.</li>
                <li>Descumprimento de obrigações legais, fiscais ou regulatórias pelo usuário.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">9. Pagamento, Condições Comerciais e Inadimplência</h2>
              <p className="mb-3">As condições comerciais, planos, preços e formas de pagamento serão definidos em contrato específico ou na página de preços da plataforma. A ISA reserva-se o direito de alterar os preços mediante aviso prévio de 30 (trinta) dias.</p>
              <p className="mb-3">Em caso de inadimplência, aplicam-se as seguintes medidas, de forma progressiva:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Notificação ao usuário com prazo de 10 (dez) dias corridos após o vencimento, para quitar o valor vencido.</li>
                <li>Esgotado o prazo da notificação sem regularização, suspensão do acesso à plataforma, sem prejuízo da cobrança dos valores devidos.</li>
                <li>Após 30 (trinta) dias de inadimplência, rescisão automática do contrato por justa causa, com direito da ISA à cobrança integral dos valores em aberto, acrescidos de multa de 2% (dois por cento), juros de mora de 1% (um por cento) ao mês e correção monetária pelo IPCA.</li>
              </ul>
              <p className="mb-4">Os valores pagos pelo usuário não são reembolsáveis em hipótese alguma.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">10. Rescisão</h2>
              <p className="mb-3">Qualquer das partes pode encerrar o uso do serviço, observadas as seguintes modalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-primary">Rescisão por justa causa:</strong> poderá ser exercida imediatamente por qualquer das partes, mediante notificação escrita, em caso de violação material destes Termos de Uso pela outra parte.</li>
                <li><strong className="text-primary">Rescisão sem justa causa:</strong> poderá ser exercida por qualquer das partes mediante aviso prévio de 30 (trinta) dias, por escrito.</li>
              </ul>
              <p className="mb-3">Após a rescisão:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>O acesso à plataforma será encerrado na data de vigência da rescisão.</li>
                <li>Os dados serão mantidos pelo período exigido por lei, após o que serão permanentemente excluídos.</li>
                <li>O usuário poderá solicitar exportação de seus dados em até 30 (trinta) dias antes da data de encerramento.</li>
                <li>Valores devidos até a data da rescisão permanecem exigíveis, independentemente da modalidade.</li>
              </ul>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">11. Modificações nos Termos</h2>
              <p className="mb-4">A ISA pode modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas com antecedência mínima de 15 (quinze) dias, por meio de notificação ao endereço de e-mail cadastrado na conta do usuário e/ou mediante aviso destacado na plataforma. O uso continuado da plataforma após o prazo de antecedência constitui aceitação dos novos termos.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">12. Disposições Gerais</h2>
              <p className="mb-4">Estes Termos de Uso, juntamente com a Política de Privacidade e demais documentos a eles incorporados, constituem o acordo integral entre o usuário e a ISA em relação ao uso da plataforma. A invalidade de qualquer disposição não afetará as demais. A tolerância quanto ao descumprimento de qualquer disposição não constituirá renúncia.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">13. Legislação Aplicável e Foro</h2>
              <p className="mb-4">Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Criciúma, Estado de Santa Catarina, com exclusão de qualquer outro.</p>

              <h2 className="text-xl font-semibold text-primary mt-12 mb-4">14. Contato</h2>
              <p className="mb-1">ISA &mdash; Intelligent Systems for Accounting</p>
              <p className="mb-4">E-mail: <span className="text-primary">info@isaconcilia.com</span></p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
