import Container from '@/components/layout/Container'

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight mb-2">Política de Privacidade</h1>
          <p className="text-sm text-secondary-text mb-12">Última atualização: Abril de 2026</p>

          <div className="space-y-8 text-secondary-text leading-relaxed">
            <p>A ISA Concilia respeita a sua privacidade e está comprometida com a proteção dos dados pessoais de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">1. Dados Coletados</h2>
              <p className="mb-2">Podemos coletar:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nome e e-mail (quando fornecidos voluntariamente)</li>
                <li>Dados de uso do site (cookies, analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">2. Finalidade</h2>
              <p className="mb-2">Utilizamos os dados para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Responder solicitações</li>
                <li>Análise de uso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">3. Base Legal</h2>
              <p className="mb-2">Tratamos dados com base em:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Consentimento</li>
                <li>Legítimo interesse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">4. Compartilhamento</h2>
              <p>Não vendemos dados pessoais. Podemos compartilhar com provedores técnicos necessários.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">5. Retenção</h2>
              <p>Dados são mantidos apenas pelo tempo necessário para cumprir as finalidades.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">6. Direitos do Titular</h2>
              <p className="mb-2">Você pode:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acessar seus dados</li>
                <li>Corrigir dados</li>
                <li>Solicitar exclusão</li>
                <li>Revogar consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">7. Segurança</h2>
              <p>Adotamos medidas técnicas e organizacionais para proteger os dados.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">8. Contato</h2>
              <p>Para exercer seus direitos: contato@isaconcilia.com</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
