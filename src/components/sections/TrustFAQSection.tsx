'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'

const trustItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Criptografia de ponta a ponta',
    desc: 'Todos os dados são protegidos em trânsito e em repouso.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" />
      </svg>
    ),
    title: 'Servidores no Brasil',
    desc: 'Seus dados ficam em servidores localizados no território brasileiro.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Conformidade com LGPD',
    desc: 'Seguimos todas as normas da Lei Geral de Proteção de Dados.',
  },
]

const faqs = [
  { q: 'O Isa Concilia substitui meu sistema contábil?', a: 'Não. Ele complementa seu sistema atual. Conecta ao balancete e automatiza a conciliação bancária — sem substituir nenhuma ferramenta que você já usa.' },
  { q: 'Quanto tempo leva para começar?', a: 'Menos de 24 horas. Após a configuração inicial, sua equipe já pode realizar a primeira conciliação automatizada.' },
  { q: 'Preciso de conhecimento técnico?', a: 'Não. A interface foi desenhada para contadores, não para programadores.' },
  { q: 'Como funciona o suporte?', a: 'Oferecemos suporte por email e chat com especialistas que entendem de contabilidade.' },
]

export default function TrustFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-text tracking-tight mb-8">Seus dados estão seguros</h2>
            <div className="flex flex-col gap-6">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-text mb-1">{item.title}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-text tracking-tight mb-8">Perguntas frequentes</h2>
            <div>
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={i} className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="font-medium text-primary-text">{faq.q}</span>
                      <svg
                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                        className={`flex-shrink-0 text-secondary-text transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div
                      className="grid transition-all duration-200 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-secondary-text leading-relaxed pb-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
