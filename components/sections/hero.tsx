'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import { EnsoIcon } from '@/components/enso-icon'
import { FadeIn } from '@/components/motion/fade-in'
import { GradientBlob } from '@/components/motion/gradient-blob'
import { ArrowDown, Users, Send, Mic } from 'lucide-react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const brushstrokeY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const brushstrokeRotate = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <div ref={ref} className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-[calc(100vh-3.5rem)] flex items-center">
      {/* Gradient blobs */}
      <GradientBlob className="-top-40 -right-40" />
      <GradientBlob className="-bottom-60 -left-60 opacity-[0.04]" />

      {/* Subtle background brushstroke with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]"
        style={{ y: brushstrokeY, rotate: brushstrokeRotate }}
      >
        <div className="animate-slow-spin">
          <EnsoIcon size={600} />
        </div>
      </motion.div>

      {/* Split layout: copy left, mockup right */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Relationship Intelligence
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15] text-foreground">
                Relationship intelligence that{' '}
                <span className="text-accent">
                  builds itself and survives change.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Enso builds a living relationship graph from your
                emails, calls, and meetings. Every rep walks into every
                meeting prepared. Context survives every handoff.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex items-center gap-5">
                <Button asChild size="lg" className="text-base px-8 h-12">
                  <a href="#design-partner">Apply for Early Access</a>
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  See how it works
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
            </FadeIn>

          </div>

          {/* Right: Meeting Prep Mockup */}
          <FadeIn delay={0.4}>
            <div className="relative">
              {/* Main mockup window */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-lg shadow-accent/5 overflow-hidden">
                {/* Window chrome */}
                <div className="bg-background border-b border-border px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 text-center text-[11px] text-muted-foreground font-medium">
                    Meeting Prep
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Meeting title */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-signal" />
                    <span className="font-serif text-base font-medium">
                      Q1 Pipeline Review: Acme Corp
                    </span>
                  </div>

                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground">
                    Key Intelligence
                  </p>

                  {/* Relationship Signal */}
                  <div className="bg-ai-accent-mist rounded-lg px-3.5 py-2.5">
                    <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-ai-accent mb-0.5">
                      Relationship Signal
                    </p>
                    <p className="text-xs text-foreground leading-snug">
                      Sarah Chen (VP Eng) mentioned budget concerns in last
                      email. Champion sentiment trending down.
                    </p>
                  </div>

                  {/* Stakeholder Map */}
                  <div className="bg-accent/5 rounded-lg px-3.5 py-2.5">
                    <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-accent mb-1">
                      Stakeholder Map
                    </p>
                    <div className="flex gap-2.5">
                      {[
                        { initials: 'SC', label: 'Champion', color: 'bg-accent' },
                        { initials: 'MJ', label: 'Decision Maker', color: 'bg-signal' },
                        { initials: 'RP', label: 'Blocker', color: 'bg-ai-accent' },
                      ].map((s) => (
                        <div key={s.initials} className="flex items-center gap-1">
                          <div
                            className={`w-5 h-5 rounded-full ${s.color} text-white text-[8px] font-semibold flex items-center justify-center`}
                          >
                            {s.initials}
                          </div>
                          <span className="text-[10px]">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Talking Points */}
                  <div className="bg-signal/5 rounded-lg px-3.5 py-2.5">
                    <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-signal mb-0.5">
                      Suggested Talking Points
                    </p>
                    <p className="text-xs text-foreground leading-snug">
                      Reference ROI data from pilot. Address timeline concerns
                      raised Dec 15.
                    </p>
                  </div>

                  {/* Generation footer */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-ai-accent flex items-center justify-center">
                      <EnsoIcon size={8} className="text-white" />
                    </div>
                    <span className="text-[10px] text-muted-foreground italic">
                      Generated from 14 emails, 3 meetings, and 2 call
                      transcripts
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating chip: New stakeholder */}
              <motion.div
                className="absolute -bottom-6 -right-4 z-10 rounded-lg border border-border bg-card p-2.5 px-3.5 shadow-lg shadow-black/20 flex items-center gap-2.5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center">
                  <Users className="size-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-foreground">
                    Mike Chen &middot; CFO
                  </p>
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-signal bg-signal/10 px-1.5 py-0.5 rounded inline-block">
                    New stakeholder
                  </span>
                </div>
              </motion.div>

              {/* Floating chip: New transcript */}
              <motion.div
                className="absolute -top-4 -right-6 z-10 rounded-lg border border-border bg-card p-2.5 px-3.5 shadow-lg shadow-black/20 flex items-center gap-2.5"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <div className="w-7 h-7 rounded-full bg-destructive/15 border border-destructive/20 flex items-center justify-center">
                  <Mic className="size-3.5 text-destructive" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-foreground">
                    New transcript ready
                  </p>
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-ai-accent bg-ai-accent/10 px-1.5 py-0.5 rounded inline-block">
                    3 action items
                  </span>
                </div>
              </motion.div>

              {/* Floating chip: Follow-up drafted */}
              <motion.div
                className="absolute -bottom-14 -left-4 z-10 rounded-lg border border-border bg-card p-2.5 px-3.5 shadow-lg shadow-black/20 flex items-center gap-2.5"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <div className="w-7 h-7 rounded-full bg-signal/15 border border-signal/20 flex items-center justify-center">
                  <Send className="size-3.5 text-signal" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-foreground">
                    Follow-up drafted
                  </p>
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-accent bg-accent/10 px-1.5 py-0.5 rounded inline-block">
                    Agentic
                  </span>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
