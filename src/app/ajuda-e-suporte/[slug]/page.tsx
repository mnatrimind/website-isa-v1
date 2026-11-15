import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import { knowledgeArticles } from '@/lib/knowledge-base'

export function generateStaticParams() {
  return knowledgeArticles.map(article => ({ slug: article.slug }))
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = knowledgeArticles.find(item => item.slug === slug)
  if (!article) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-[68px]"><Container className="py-16 md:py-24"><div className="max-w-3xl mx-auto">
        <Link href="/ajuda-e-suporte" className="text-sm font-medium text-accent hover:text-accent-hover">&lt;- Voltar para a central de ajuda</Link>
        <div className="mt-12 border-b border-border pb-10"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-4">{article.category} · {article.readTime}</p><h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary">{article.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">{article.intro}</p></div>
        <ol className="mt-12 space-y-10">{article.steps.map((step, index) => <li key={step.title} className="flex gap-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] text-sm font-bold text-accent">{index + 1}</span><div><h2 className="text-lg font-semibold text-primary">{step.title}</h2><p className="mt-2 text-base leading-relaxed text-secondary">{step.description}</p></div></li>)}</ol>
        <div className="mt-16 border-t border-border pt-8"><p className="text-sm text-secondary">Não encontrou o que precisava?</p><a href="mailto:suporte@isaconcilia.com.br" className="mt-2 inline-block text-sm font-semibold text-accent hover:text-accent-hover">Falar com suporte -&gt;</a></div>
      </div></Container></main>
      <Footer />
    </>
  )
}