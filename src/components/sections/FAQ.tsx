'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'

const faqs = [
  { q: 'O Isa Concilia substitui meu sistema contábil?', a: 'Não. Ele complementa seu sistema atual. Conecta ao balancete e automatiza a conciliação bancária — sem substituir nenhuma ferramenta que você já usa.' },
  { q: 'Quanto tempo leva para começar?', a: 'Menos de 24 horas. Após a configuração inicial, sua equipe já realiza a primeira conciliação automatizada.' },
  { q: 'Preciso de conhecimento técnico?', a: 'Não. A interface foi desenhada para contadores. Se você usa um sistema contábil hoje, vai se adaptar rapidamente.' },
  { q: 'Como funciona o suporte?', a: 'Suporte por email e chat com especialistas que entendem de contabilidade — não apenas de tecnologia.' },
  { q: 'Posso cancelar a qualquer momento?', a: 'Sim. Sem fidelidade, sem multas. Seus dados podem ser exportados antes do encerramento.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">FAQ</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary">Perguntas frequentes</h2>
          </div>

          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                  >
                    <span className="font-medium text-primary group-hover:text-accent transition-colors">{f.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-secondary leading-relaxed pb-5">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
