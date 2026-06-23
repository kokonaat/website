import { Background } from '@/components/background'
import { Contact } from '@/components/blocks/contact'
import { FAQ } from '@/components/blocks/faq'
import { Features } from '@/components/blocks/features'
import { Hero } from '@/components/blocks/hero'
import { LanguageSection } from '@/components/blocks/language-section'
import { Operations } from '@/components/blocks/operations'
import { Pricing } from '@/components/blocks/pricing'
import { TrustStrip } from '@/components/blocks/trust-strip'

export default function Home() {
  return (
    <>
      <Background>
        <Hero />
        <TrustStrip />
        <Features />
        <Operations />
      </Background>
      <LanguageSection />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
        <Contact />
      </Background>
    </>
  )
}
