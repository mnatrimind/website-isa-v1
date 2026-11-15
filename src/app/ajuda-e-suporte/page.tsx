'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

const categories = [
  { name: 'Primeiros passos', description: 'Configure sua conta e faça sua primeira conciliação.', icon: '01', tone: 'bg-[#eaf2ff] text-[#2563eb]', count: '3 artigos' },
  { name: 'Conciliação bancária', description: 'Importe arquivos, revise lançamentos e finalize períodos.', icon: '02', tone: 'bg-[#e8f8f0] text-[#168255]', count: '4 artigos' },
  { name: 'Conta e configurações', description: 'Gerencie usuários, empresas e preferências do sistema.', icon: '03', tone: 'bg-[#fff5df] text-[#b66a00]', count: '3 artigos' },
]

const articles = [
  { title: 'Como fazer sua primeira conciliação', description: 'Um passo a passo para sair do zero e validar seu primeiro período.', category: 'Primeiros passos', readTime: '5 min de leitura', href: '/ajuda-e-suporte/primeira-conciliacao' },
  { title: 'Como importar um extrato bancário', description: 'Entenda os formatos aceitos e prepare o arquivo para importação.', category: 'Conciliação bancária', readTime: '4 min de leitura', href: '/ajuda-e-suporte/importar-extrato-bancario' },
  { title: 'Como revisar lançamentos sugeridos', description: 'Aprenda a confirmar, editar ou ignorar as sugestões da plataforma.', category: 'Conciliação bancária', readTime: '6 min de leitura', href: '/ajuda-e-suporte/revisar-lancamentos' },
  { title: 'Como convidar alguém da sua equipe', description: 'Adicione colaboradores e organize o acesso de cada pessoa.', category: 'Conta e configurações', readTime: '3 min de leitura', href: '/ajuda-e-suporte/convidar-equipe' },
]

export default function HelpAndSupport() {
  const [query, setQuery] = useState('')
  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return articles
    return articles.filter(article => `${article.title} ${article.description} ${article.category}`.toLowerCase().includes(normalizedQuery))
  }, [query])

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <section className="bg-[#f5f8fc] border-b border-border">
          <Container className="py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center entrance">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-4">Central de ajuda</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary">Como podemos ajudar?</h1>
              <p className="mt-5 text-lg leading-relaxed text-secondary max-w-2xl mx-auto">Encontre respostas rápidas e aprenda a tirar o máximo do Isa Concilia, do primeiro acesso à conciliação finalizada.</p>
              <label className="mt-9 flex items-center gap-3 max-w-2xl mx-auto rounded-[8px] border border-border bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] text-left focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-muted"><circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" /><path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Busque por uma dúvida ou tarefa..." aria-label="Buscar na central de ajuda" className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-muted" />
              </label>
            </div>
          </Container>
        </section>

        <Container className="py-16 md:py-24">
          <section aria-labelledby="categories-title">
            <div className="mb-7"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-2">Navegue por tema</p><h2 id="categories-title" className="font-heading text-2xl font-bold text-primary">Por onde você quer começar?</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {categories.map(category => (
                <a key={category.name} href="#artigos" className="group border border-border rounded-[8px] p-6 hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-[8px] text-xs font-bold ${category.tone}`}>{category.icon}</span>
                  <h3 className="mt-5 font-semibold text-primary group-hover:text-accent transition-colors">{category.name}</h3><p className="mt-2 text-sm leading-relaxed text-secondary">{category.description}</p><span className="mt-5 block text-xs font-medium text-muted">{category.count}</span>
                </a>
              ))}
            </div>
          </section>

          <section id="artigos" aria-labelledby="articles-title" className="mt-20 md:mt-28 scroll-mt-24">
            <div className="flex items-end justify-between gap-6 mb-7"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-2">Guias práticos</p><h2 id="articles-title" className="font-heading text-2xl font-bold text-primary">Aprenda fazendo</h2></div><span className="hidden sm:block text-sm text-muted">{filteredArticles.length} {filteredArticles.length === 1 ? 'resultado' : 'resultados'}</span></div>
            {filteredArticles.length > 0 ? <div className="grid md:grid-cols-2 border-t border-l border-border">{filteredArticles.map(article => <Link key={article.href} href={article.href} className="group min-h-[190px] border-r border-b border-border p-6 md:p-7 hover:bg-[#f8fbff] transition-colors"><div className="flex items-center gap-2 text-xs text-muted"><span className="text-accent">{article.category}</span><span aria-hidden="true">·</span><span>{article.readTime}</span></div><h3 className="mt-5 text-lg font-semibold text-primary group-hover:text-accent transition-colors">{article.title}</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-secondary">{article.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Ler guia <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">-&gt;</span></span></Link>)}</div> : <div className="border border-dashed border-border p-10 text-center text-sm text-secondary">Não encontramos um guia para essa busca. Tente usar outros termos.</div>}
          </section>

          <section className="mt-20 md:mt-28 border-t border-border pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"><div><h2 className="font-heading text-xl font-bold text-primary">Ainda precisa de ajuda?</h2><p className="mt-2 text-sm text-secondary">Fale com nosso time. Estamos aqui para destravar sua rotina.</p></div><a href="mailto:suporte@isaconcilia.com.br" className="inline-flex items-center justify-center rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#334155] transition-colors">Falar com suporte</a></section>
        </Container>
      </main>
      <Footer />
    </>
  )
}
