'use client'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const founders = [
  {
    initials: 'ED',
    name: 'Ethan DeWaal',
    role: 'Co-founder & CEO',
    photo: '/ethan-headshot.png',
    narrative:
      'Co-created Asana\u2019s AI Studio and built the AI GTM motion from zero. Felt the prep anxiety before every call. Built workarounds. Then better workarounds. Then started building the real thing.',
    proof: 'GTM Strategy & Operations at Asana. 12\u00D7 YoY growth on AI product line.',
  },
  {
    initials: 'BG',
    name: 'Ben Graney-Green',
    role: 'Co-founder & CTO',
    photo: '/ben-headshot.png',
    narrative:
      'Led Strategic Solutions Architecture at Asana for 4.5 years, building complex processes for Mag-7 companies. Saw the graph that should exist but doesn\u2019t. Now building the data model every GTM tool needs underneath it.',
    proof: '10,000+ AI GTM uses per week at Asana. Entity resolution, relationship modeling.',
  },
]

export function Team() {
  return (
    <div className="py-20 md:py-24 bg-card border-t border-border/50" id="team">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              The Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              We didn&rsquo;t study this market.{' '}
              <span className="text-accent">We lived in it.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {founders.map((f) => (
            <StaggerItem key={f.initials}>
              <div className="rounded-xl border border-border bg-background p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-serif text-xl font-medium">{f.name}</p>
                    <p className="text-sm text-accent font-semibold">{f.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {f.narrative}
                </p>
                <p className="text-xs text-muted-foreground/70 leading-snug">
                  {f.proof}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="font-serif text-lg text-center max-w-2xl mx-auto mt-10 leading-relaxed">
            Opposite sides of the GTM stack. Same obsession.{' '}
            <strong>
              In a market where everyone is building a platform, we are building the one thing that actually compounds.
            </strong>
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
