import Container from '@/components/layout/Container'

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight mb-2">Termos de Uso</h1>
          <p className="text-sm text-secondary-text mb-12">Última atualização: Abril de 2026</p>

          <div className="space-y-8 text-secondary-text leading-relaxed">
            <p>Ao acessar este site, você concorda com os seguintes termos.</p>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">1. Uso do Serviço</h2>
              <p>O usuário se compromete a utilizar o site de forma legal e adequada.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">2. Propriedade Intelectual</h2>
              <p>Todo o conteúdo pertence à ISA Concilia e não pode ser reproduzido sem autorização.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">3. Limitação de Responsabilidade</h2>
              <p>A ISA Concilia não se responsabiliza por danos indiretos decorrentes do uso do site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">4. Disponibilidade</h2>
              <p>Não garantimos disponibilidade contínua do serviço.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">5. Alterações</h2>
              <p>Podemos atualizar estes termos a qualquer momento.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-text mb-3">6. Lei Aplicável</h2>
              <p>Este contrato é regido pelas leis do Brasil.</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
