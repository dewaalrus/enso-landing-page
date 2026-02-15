import { Nav } from '@/components/nav'
import { Hero } from '@/components/sections/hero'
import { SocialProof } from '@/components/sections/social-proof'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { ProductShowcase } from '@/components/sections/product-showcase'
import { WhyEnso } from '@/components/sections/why-enso'
import { WhyNow } from '@/components/sections/why-now'
import { Team } from '@/components/sections/team'
import { WhatEnsoIs } from '@/components/sections/what-enso-is'
import { FAQ } from '@/components/sections/faq'
import { DesignPartner } from '@/components/sections/design-partner'
import { Footer } from '@/components/sections/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <ProductShowcase />
        <WhyEnso />
        <WhyNow />
        <Team />
        <WhatEnsoIs />
        <section id="faq">
          <FAQ />
        </section>
        <section id="design-partner">
          <DesignPartner />
        </section>
      </main>
      <Footer />
    </div>
  )
}
