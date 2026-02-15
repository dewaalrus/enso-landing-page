'use client'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const forces = [
  {
    icon: '🧠',
    title: 'AI can finally read relationships',
    body: 'LLMs can now synthesize unstructured communication at scale. But without the right data substrate, AI is just noise. Point solutions solve pieces. Nobody connects them.',
    bg: 'bg-accent/10',
  },
  {
    icon: '⚠',
    title: 'The pain is peaking',
    body: 'The average AE toggles between 5+ tabs before every call. Each GTM handoff loses weeks of context. Teams are drowning in tools but starving for intelligence.',
    bg: 'bg-ai-accent/10',
  },
  {
    icon: '🕒',
    title: 'Incumbents are stuck',
    body: 'Gong, Salesforce, and Granola each own a fragment of the picture. None have a relationship graph. Retrofitting one onto legacy architecture takes years, not months.',
    bg: 'bg-signal/10',
  },
]

export function WhyNow() {
  return (
    <div className="py-20 md:py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Why Now
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Three forces are converging{' '}
              <span className="text-accent">right now.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-5 mt-10">
          {forces.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-xl border border-border bg-card p-7 h-full">
                <div className={`w-11 h-11 rounded-lg ${f.bg} flex items-center justify-center text-xl mb-4`}>
                  {f.icon}
                </div>
                <p className="font-serif text-xl font-medium mb-2">{f.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
