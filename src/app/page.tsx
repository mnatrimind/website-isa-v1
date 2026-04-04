import Reveal from '@/components/ui/Reveal'
import HeroSection from '@/components/sections/HeroSection'
import ClarityStripSection from '@/components/sections/ClarityStripSection'
import TrustSection from '@/components/sections/TrustSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProductDeepDiveSection from '@/components/sections/ProductDeepDiveSection'
import MidCTASection from '@/components/sections/MidCTASection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import TrustFAQSection from '@/components/sections/TrustFAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — white + gradient */}
      <HeroSection />
      {/* 2. Clarity strip — white */}
      <ClarityStripSection />
      {/* 3. Metrics — surface */}
      <TrustSection />
      {/* 4. Before vs After — white */}
      <Reveal><BeforeAfterSection /></Reveal>
      {/* 5. Product showcase — surface */}
      <Reveal><ProductShowcaseSection /></Reveal>
      {/* 6. Features — white */}
      <Reveal><FeaturesSection /></Reveal>
      {/* 7. Product deep dive — surface */}
      <Reveal><ProductDeepDiveSection /></Reveal>
      {/* 8. Mid CTA — white */}
      <MidCTASection />
      {/* 9. How it works — surface */}
      <Reveal><HowItWorksSection /></Reveal>
      {/* 10. Use cases — white */}
      <Reveal><UseCasesSection /></Reveal>
      {/* 11. Security + FAQ — surface */}
      <TrustFAQSection />
      {/* 12. Final CTA — white */}
      <Reveal><FinalCTASection /></Reveal>
    </main>
  )
}
