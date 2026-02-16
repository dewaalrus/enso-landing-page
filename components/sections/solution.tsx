'use client'
import { EnsoIcon } from '@/components/enso-icon'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { Mail, CalendarDays, Mic, Database, FileText, Activity, Send } from 'lucide-react'

const loopSteps = ['Prep', 'Meet', 'Process', 'Follow-up']

const sources = [
  { icon: Mail, label: 'Email' },
  { icon: CalendarDays, label: 'Calendar' },
  { icon: Mic, label: 'Meetings' },
  { icon: Database, label: 'CRM' },
]

const surfaces = [
  { icon: FileText, label: 'Prep Briefs' },
  { icon: Activity, label: 'Signals' },
  { icon: Send, label: 'Follow-ups' },
]

export function Solution() {
  return (
    <div className="py-20 md:py-24 bg-card border-t border-border/50" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Connect once.{' '}
              <span className="text-accent">The graph builds itself.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Daily loop */}
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-2 my-8 md:my-10 flex-wrap">
            {loopSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold">
                  {step}
                </div>
                {i < loopSteps.length - 1 && (
                  <span className="text-ai-accent font-medium">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Architecture */}
        <div className="grid md:grid-cols-[200px_1fr_200px] gap-6 items-center my-10">
          {/* Sources */}
          <StaggerContainer staggerDelay={0.1} className="flex flex-col gap-2.5">
            {sources.map((s) => (
              <StaggerItem key={s.label} direction="left">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm font-medium">
                  <s.icon className="size-4 text-muted-foreground" />
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Center graph */}
          <FadeIn>
            <div className="flex items-center justify-center relative py-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
                <EnsoIcon size={260} />
              </div>
              <div className="w-48 h-48 md:w-52 md:h-52 rounded-full border-2 border-border bg-background flex flex-col items-center justify-center relative z-10">
                <span className="font-serif text-base md:text-lg font-medium text-center leading-tight">
                  Relationship
                  <br />
                  Graph
                </span>
                <span className="text-[10px] text-muted-foreground text-center max-w-[140px] mt-1">
                  Compounds with every interaction
                </span>
              </div>
            </div>
          </FadeIn>

          {/* AI Surfaces */}
          <StaggerContainer staggerDelay={0.1} className="flex flex-col gap-2.5">
            {surfaces.map((s) => (
              <StaggerItem key={s.label} direction="right">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm font-medium">
                  <s.icon className="size-4 text-muted-foreground" />
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Callout */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <span className="inline-block bg-ai-accent-mist rounded-full px-6 py-2.5 text-sm font-medium">
              Used 8 times per day, per AE. Every cycle compounds the graph.
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
