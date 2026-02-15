'use client'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const founders = [
  {
    initials: 'ED',
    name: 'Ethan DeWaal',
    role: 'Co-founder & CEO',
    bullets: [
      'Co-created Asana\u2019s AI Studio product and built the AI GTM motion from scratch',
      'Asana\u2019s AI product line now growing at 12\u00D7 YoY and 70% QoQ',
      'Deep expertise in sales workflows, AI product strategy, and go-to-market',
    ],
  },
  {
    initials: 'BG',
    name: 'Ben Graney-Green',
    role: 'Co-founder & CTO',
    bullets: [
      'Led Strategic Solution Architecture, scoping custom integrations for Asana\u2019s largest customers',
      'Built internal AI tooling for the revenue team; rotated onto AI Automations Engineering',
      'Deep expertise in graph data systems & entity resolution',
    ],
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
              Built the AI playbook{' '}
              <span className="text-accent">at scale.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {founders.map((f) => (
            <StaggerItem key={f.initials}>
              <div className="rounded-xl border border-border bg-background p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 text-accent font-serif text-2xl font-medium flex items-center justify-center mx-auto mb-4">
                  {f.initials}
                </div>
                <p className="font-serif text-xl font-medium">{f.name}</p>
                <p className="text-sm text-accent font-semibold mb-4">{f.role}</p>
                <ul className="text-left space-y-2">
                  {f.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-muted-foreground leading-snug">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="font-serif text-lg text-center max-w-2xl mx-auto mt-10 leading-relaxed">
            They partnered closely on AI at Asana from opposite sides of the
            GTM stack: strategy and solutions architecture.{' '}
            <strong>
              The relationship intelligence layer for GTM does not exist
              yet.
            </strong>{' '}
            They know exactly how to build it.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
