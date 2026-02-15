'use client'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const principles = [
  {
    name: 'Confidence before every call',
    subtitle: 'NOT ANOTHER DASHBOARD',
    body: 'Selling is stressful. Enso replaces the frantic 5-tab scramble with a single calm surface that tells you exactly what matters, right before you need it.',
  },
  {
    name: 'Opinionated, not flexible',
    subtitle: 'DECISIONS, NOT OPTIONS',
    body: 'Notion gives you building blocks. Salesforce gives you settings pages. Enso makes decisions for you. Every workflow is intentional. Every element earns its place.',
  },
  {
    name: 'Slow dopamine, not noise',
    subtitle: 'BUILT FOR FOCUS',
    body: 'Reps come back because Enso brings calm to what is an emotionally tough job. Not another feed demanding attention. A tool that makes you feel prepared.',
  },
]

const features = [
  {
    icon: '👥',
    title: 'Collaborative pods',
    desc: 'Share with your team while it feels like your own space.',
  },
  {
    icon: '🔄',
    title: 'Handoffs without amnesia',
    desc: 'Context persists when reps change. The graph stays.',
  },
  {
    icon: '💪',
    title: 'Built for the rep',
    desc: 'Empowerment over monitoring. Reps adopt it because it helps them.',
  },
]

export function WhyEnso() {
  return (
    <div className="py-20 md:py-24 bg-card border-t border-border/50" id="why-enso">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Why Enso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Calm. Focused.{' '}
              <span className="text-accent">Opinionated.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Principles */}
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-5 my-10">
          {principles.map((p) => (
            <StaggerItem key={p.name}>
              <div className="rounded-xl border border-border bg-background p-7 h-full">
                <p className="font-serif text-xl font-medium mb-0.5">{p.name}</p>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
                  {p.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Features */}
        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-lg">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5">{f.title}</p>
                  <p className="text-[13px] text-muted-foreground leading-snug">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
