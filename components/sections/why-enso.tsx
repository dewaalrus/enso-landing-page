'use client'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { User, ArrowLeftRight, PenOff } from 'lucide-react'

const principles = [
  {
    name: 'Confidence before every call',
    subtitle: 'NOT ANOTHER DASHBOARD',
    body: 'Selling is stressful. Enso replaces the frantic 5-tab scramble with a single calm surface that tells you exactly what matters, right before you need it.',
  },
  {
    name: 'Personalized from day one',
    subtitle: 'READY-TO-GO, NOT CONFIGURE-TO-START',
    body: 'Connect once. Enso reads your history and builds a graph tuned to your accounts, your relationships, your role. No setup wizard. No blank slate. Value in the first session.',
  },
  {
    name: 'Best practices baked in',
    subtitle: 'DECISIONS, NOT OPTIONS',
    body: 'Note-takers give you transcripts. CRMs give you settings pages. Enso encodes what good looks like so reps do not have to figure it out. Prep, meet, follow up. Every workflow is intentional.',
  },
]

const features = [
  {
    icon: User,
    title: 'Built for the rep, not the dashboard',
    desc: 'Empowerment over monitoring. Reps adopt it because it helps them.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Handoffs without amnesia',
    desc: 'Context persists when reps change. The graph stays.',
  },
  {
    icon: PenOff,
    title: 'Zero manual data entry',
    desc: 'The graph builds itself from your existing workflow. Nothing to fill in.',
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
              Built to earn{' '}
              <span className="text-accent italic">daily habit.</span>
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
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <f.icon className="size-4 text-muted-foreground" />
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
