'use client'
import { Check, X } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { FadeIn } from '@/components/motion/fade-in'

const isItems = [
  'A relationship intelligence layer for your inbox and meetings',
  'Bot-free meeting recording that feeds your relationship graph',
  'Prep briefs, transcripts, and follow-ups. Grounded in real history',
  'A graph that compounds with every email, call, and interaction',
]

const isNotItems = [
  'Another CRM to update',
  'A generic LinkedIn scraper',
  'A bot that joins your calls and announces itself',
  'A replacement for human relationships',
]

export function WhatEnsoIs() {
  return (
    <div className="py-20 md:py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-foreground/50 mb-2 text-center">
            Clarity
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 text-center">
            What Enso is and is not
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* What Enso Is */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem direction="left">
              <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center">
                  <Check className="size-3.5 text-signal" />
                </span>
                What Enso is
              </h3>
            </StaggerItem>
            <div className="space-y-4">
              {isItems.map((item) => (
                <StaggerItem key={item} direction="left">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-signal/10 bg-signal/5">
                    <Check className="size-4 text-signal shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* What Enso Is Not */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem direction="right">
              <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <X className="size-3.5 text-muted-foreground" />
                </span>
                What Enso is not
              </h3>
            </StaggerItem>
            <div className="space-y-4">
              {isNotItems.map((item) => (
                <StaggerItem key={item} direction="right">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50">
                    <X className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </div>
  )
}
