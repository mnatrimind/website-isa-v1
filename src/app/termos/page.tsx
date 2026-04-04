import Container from '@/components/layout/Container'

export default function Termos() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-primary-text tracking-tight mb-2">Termos de Uso</h1>
          <p className="text-secondary-text mb-12">Última atualização: Abril de 2026</p>

          <div className="text-secondary-text leading-relaxed">
            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">Ao acessar ou utilizar a plataforma Isa Concilia, operada pela ISA — Intelligent Systems for Accounting (&ldquo;ISA&rdquo;, &ldquo;nós&rdquo;), você declara que leu, compreendeu e concorda com estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não utilize a plataforma.</p>
            <p className="mb-4">A utilização da plataforma em nome de uma empresa ou organização implica que você possui autorização para vincular essa entidade a estes termos.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">2. Descrição do Serviço</h2>
            <p className="mb-4">O Isa Concilia é uma plataforma de conciliação contábil automatizada que utiliza inteligência artificial para:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Conectar extratos bancários a balancetes contábeis.</li>
              <li>Identificar correspondências entre lançamentos de forma automática.</li>
              <li>Auxiliar na detecção de inconsistências e divergências.</li>
              <li>Gerar relatórios de conciliação para revisão pelo usuário.</li>
            </ul>
            <p className="mb-4">O serviço é oferecido como Software como Serviço (SaaS) e está sujeito a disponibilidade e atualizações contínuas.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">3. Cadastro e Conta do Usuário</h2>
            <p className="mb-4">Para utilizar a plataforma, é necessário criar uma conta. Ao se cadastrar, você se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fornecer informações verdadeiras, completas e atualizadas.</li>
              <li>Manter a confidencialidade de suas credenciais de acesso (login e senha).</li>
              <li>Notificar imediatamente a ISA em caso de uso não autorizado de sua conta.</li>
              <li>Assumir responsabilidade por todas as atividades realizadas em sua conta.</li>
            </ul>
            <p className="mb-4">A ISA reserva-se o direito de suspender ou encerrar contas que violem estes termos ou que apresentem atividades suspeitas.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">4. Uso Adequado da Plataforma</h2>
            <p className="mb-4">Você concorda em utilizar a plataforma apenas para fins legítimos e em conformidade com a legislação brasileira. É expressamente proibido:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Utilizar a plataforma para atividades ilegais, fraudulentas ou contrárias à boa-fé.</li>
              <li>Tentar acessar sistemas, dados ou funcionalidades sem autorização.</li>
              <li>Realizar engenharia reversa, descompilar ou desmontar qualquer parte do software.</li>
              <li>Compartilhar credenciais de acesso com terceiros não autorizados.</li>
              <li>Utilizar a plataforma de forma que possa prejudicar seu funcionamento ou a experiência de outros usuários.</li>
              <li>Inserir dados falsos, corrompidos ou maliciosos na plataforma.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">5. Propriedade Intelectual</h2>
            <p className="mb-4">A plataforma Isa Concilia, incluindo mas não se limitando a software, código-fonte, algoritmos de inteligência artificial, design, interface, logotipos, marcas e todo o conteúdo produzido pela ISA, é propriedade exclusiva da ISA — Intelligent Systems for Accounting e está protegida pela legislação brasileira de propriedade intelectual.</p>
            <p className="mb-4">Nenhum direito de propriedade intelectual é transferido ao usuário pelo uso da plataforma. É concedida ao usuário apenas uma licença limitada, não exclusiva, intransferível e revogável para utilizar a plataforma conforme estes termos.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">6. Dados do Usuário e Privacidade</h2>
            <p className="mb-4">Os dados financeiros e contábeis inseridos na plataforma pelo usuário permanecem de propriedade do usuário. A ISA utiliza esses dados exclusivamente para fornecer os serviços contratados.</p>
            <p className="mb-4">O tratamento de dados pessoais é regido por nossa Política de Privacidade, que é parte integrante destes Termos de Uso.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">7. Disponibilidade do Serviço</h2>
            <p className="mb-4">A ISA envidará esforços comercialmente razoáveis para manter a plataforma disponível de forma contínua. No entanto, não garantimos operação ininterrupta ou livre de erros. O serviço pode ser temporariamente indisponível para:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Manutenções programadas, que serão comunicadas com antecedência quando possível.</li>
              <li>Atualizações de segurança emergenciais.</li>
              <li>Eventos de força maior ou caso fortuito.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">8. Limitação de Responsabilidade</h2>
            <p className="mb-4">O Isa Concilia é uma ferramenta de auxílio à conciliação contábil. Os resultados, sugestões e correspondências geradas pelo sistema são de natureza indicativa e devem ser validados pelo usuário antes de qualquer tomada de decisão.</p>
            <p className="mb-4">A ISA não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Decisões contábeis, fiscais ou financeiras baseadas exclusivamente nos resultados automatizados da plataforma.</li>
              <li>Perdas ou danos decorrentes de erros nos dados fornecidos pelo usuário.</li>
              <li>Indisponibilidade do serviço por razões fora do controle da ISA.</li>
              <li>Atos ou omissões de terceiros que afetem o funcionamento da plataforma.</li>
            </ul>
            <p className="mb-4">Em nenhuma hipótese a responsabilidade total da ISA excederá o valor pago pelo usuário nos 12 (doze) meses anteriores ao evento que deu origem à reclamação.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">9. Pagamento e Condições Comerciais</h2>
            <p className="mb-4">As condições comerciais, planos disponíveis, preços e formas de pagamento serão definidos em contrato específico ou na página de preços da plataforma. A ISA reserva-se o direito de alterar os preços mediante aviso prévio de 30 (trinta) dias.</p>
            <p className="mb-4">O não pagamento pode resultar na suspensão ou cancelamento do acesso à plataforma.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">10. Rescisão</h2>
            <p className="mb-4">Qualquer das partes pode encerrar a relação contratual e o uso do serviço a qualquer momento, mediante comunicação por escrito.</p>
            <p className="mb-4">Após a rescisão:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>O acesso à plataforma será encerrado.</li>
              <li>Os dados do usuário serão mantidos pelo período exigido por lei ou conforme nossa Política de Privacidade.</li>
              <li>O usuário poderá solicitar a exportação de seus dados antes do encerramento da conta.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">11. Modificações nos Termos</h2>
            <p className="mb-4">A ISA pode modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas através da plataforma ou por e-mail com antecedência mínima de 15 (quinze) dias. O uso continuado da plataforma após a entrada em vigor das alterações constitui aceitação dos novos termos.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">12. Disposições Gerais</h2>
            <p className="mb-4">Estes Termos de Uso constituem o acordo integral entre o usuário e a ISA em relação ao uso da plataforma.</p>
            <p className="mb-4">A invalidade ou inexequibilidade de qualquer disposição destes termos não afetará as demais disposições.</p>
            <p className="mb-4">A tolerância de qualquer das partes quanto ao descumprimento de qualquer disposição não constituirá renúncia ao direito de exigir o cumprimento a qualquer tempo.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">13. Legislação Aplicável e Foro</h2>
            <p className="mb-4">Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil.</p>
            <p className="mb-4">Qualquer disputa decorrente destes termos será submetida ao foro da comarca de [a definir], Estado de [a definir], com exclusão de qualquer outro, por mais privilegiado que seja.</p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4">14. Contato</h2>
            <p className="mb-4">Para questões sobre estes Termos de Uso:</p>
            <p className="mb-4">ISA — Intelligent Systems for Accounting<br />E-mail: [a definir]</p>
          </div>
        </div>
      </Container>
    </main>
  )
}
