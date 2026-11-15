'use client'

import { useEffect, useState } from 'react'
import Button from './Button'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [nomeEscritorio, setNomeEscritorio] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const handler = () => setIsOpen(true)
    document.addEventListener('open-demo-modal', handler)
    return () => document.removeEventListener('open-demo-modal', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => {
    if (status === 'loading') return
    setIsOpen(false)
    setTimeout(() => {
      setNome('')
      setNomeEscritorio('')
      setEmail('')
      setTelefone('')
      setMensagem('')
      setStatus('idle')
      setErrorMsg('')
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          nomeEscritorio,
          email,
          telefone: telefone.trim() || null,
          mensagem: mensagem.trim() || null,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.title ?? 'error')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Não foi possível enviar. Tente novamente em instantes.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />

      {/* Card */}
      <div className="relative bg-white rounded-[8px] shadow-2xl w-full max-w-md p-8">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-muted hover:text-primary cursor-pointer transition-colors"
          aria-label="Fechar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-[8px] bg-[#dcfce7] flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl text-primary mb-2">Solicitação enviada!</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Em breve nossa equipe entrará em contato com você.
            </p>
            <div className="mt-6">
              <Button onClick={close}>Fechar</Button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="font-heading font-bold text-xl text-primary mb-1">Solicitar demonstração</h3>
            <p className="text-secondary text-sm mb-6">
              Preencha os dados abaixo e nossa equipe entrará em contato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Nome<span className="text-red ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full border border-border rounded-[4px] px-3 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  E-mail<span className="text-red ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full border border-border rounded-[4px] px-3 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Nome do escritório<span className="text-red ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nomeEscritorio}
                  onChange={e => setNomeEscritorio(e.target.value)}
                  placeholder="Nome do seu escritório"
                  className="w-full border border-border rounded-[4px] px-3 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Telefone <span className="text-muted font-normal">(opcional)</span>
                </label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full border border-border rounded-[4px] px-3 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Mensagem <span className="text-muted font-normal">(opcional)</span>
                </label>
                <textarea
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  placeholder="Fale um pouco sobre sua necessidade..."
                  rows={3}
                  className="w-full border border-border rounded-[4px] px-3 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md px-7 py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar solicitação'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
