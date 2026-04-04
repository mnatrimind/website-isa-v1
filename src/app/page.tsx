import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <ProductShowcaseSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  )
}
