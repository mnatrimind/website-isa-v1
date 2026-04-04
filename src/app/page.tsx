import Reveal from '@/components/ui/Reveal'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import TrustFAQSection from '@/components/sections/TrustFAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <Reveal><ProblemSolutionSection /></Reveal>
      <Reveal><ProductShowcaseSection /></Reveal>
      <Reveal><FeaturesSection /></Reveal>
      <Reveal><HowItWorksSection /></Reveal>
      <Reveal><UseCasesSection /></Reveal>
      <TrustFAQSection />
      <Reveal><FinalCTASection /></Reveal>
    </main>
  )
}
