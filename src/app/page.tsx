import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/ui/Reveal'
import DemoModal from '@/components/ui/DemoModal'
import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import ProductShowcase from '@/components/sections/ProductShowcase'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import TrustSecurity from '@/components/sections/TrustSecurity'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <DemoModal />
      <Navbar />
      <main>
        <Hero />
        <Reveal><ProblemSolution /></Reveal>
        <div className="border-y border-border bg-surface px-4 py-8 text-center text-xl md:text-2xl font-bold text-primary">
          A contabilidade evoluiu. Seu processo também precisa evoluir.
        </div>
        <Reveal><ProductShowcase /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Features />
        <Reveal><UseCases /></Reveal>
        <Pricing />
        <Reveal><FAQ /></Reveal>
        <Reveal><TrustSecurity /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
    </>
  )
}
