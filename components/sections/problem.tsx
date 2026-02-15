'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const roles = ['SDR', 'AE', 'SE', 'AE', 'CSM']

const stats = [
  {
    number: '29%',
    label: 'of rep time is actually spent selling',
    source: 'Salesforce State of Sales',
  },
  {
    number: '79%',
    label: 'of deal context never enters a CRM',
    source: 'Forrester Research',
  },
]

export function Problem() {
  const chainRef = useRef(null)
  const chainInView = useInView(chainRef, { once: true, amount: 0.3 })

  return (
    <div className="py-20 md:py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              The Problem
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              GTM is a relay race.{' '}
              <span className="text-accent">
                The baton keeps getting dropped.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Handoff chain */}
        <div ref={chainRef} className="flex items-center justify-center gap-0 my-10 flex-wrap">
          {roles.map((role, i) => (
            <div key={`${role}-${i}`} className="flex items-center">
              <motion.div
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={chainInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.3 }}
              >
                {role}
              </motion.div>
              {i < roles.length - 1 && (
                <motion.div
                  className="flex flex-col items-center px-1.5"
                  initial={{ opacity: 0 }}
                  animate={chainInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
                >
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    className="text-destructive"
                  >
                    <path
                      d="M0 7h20M16 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-destructive mt-0.5">
                    context lost
                  </span>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 my-10">
          {stats.map((stat) => (
            <StaggerItem key={stat.number}>
              <div className="rounded-xl border border-border bg-card p-7 text-center">
                <p className="font-serif text-5xl md:text-6xl font-medium text-accent leading-none mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-foreground">{stat.label}</p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {stat.source}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Narrative */}
        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            Every email, call, and meeting generates relationship intelligence.
            But today it sits in silos: Gmail, Salesforce, Gong, calendar
            invites. No connecting schema. AI SDRs can sequence. Call
            analytics can transcribe. But without a structured relationship
            graph,{' '}
            <strong className="text-foreground">
              it is a data lake, not intelligence.
            </strong>
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
