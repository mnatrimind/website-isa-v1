import Reveal from '@/components/ui/Reveal'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import MidCTASection from '@/components/sections/MidCTASection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import TrustFAQSection from '@/components/sections/TrustFAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main>
      {/* white + gradient */}
      <HeroSection />
      {/* surface */}
      <TrustSection />
      {/* white */}
      <Reveal><ProblemSolutionSection /></Reveal>
      {/* surface */}
      <Reveal><ProductShowcaseSection /></Reveal>
      {/* white */}
      <Reveal><FeaturesSection /></Reveal>
      {/* surface */}
      <Reveal><MidCTASection /></Reveal>
      {/* white */}
      <Reveal><HowItWorksSection /></Reveal>
      {/* surface */}
      <Reveal><UseCasesSection /></Reveal>
      {/* surface */}
      <TrustFAQSection />
      {/* white */}
      <Reveal><FinalCTASection /></Reveal>
    </main>
  )
}
