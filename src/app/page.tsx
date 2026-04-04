import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/ui/Reveal'
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
      <Navbar />
      <main>
        <Hero />
        <Reveal><ProblemSolution /></Reveal>
        <Reveal><ProductShowcase /></Reveal>
        <Features />
        <Reveal><HowItWorks /></Reveal>
        <Reveal><UseCases /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><TrustSecurity /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
    </>
  )
}
