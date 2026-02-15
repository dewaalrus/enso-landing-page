'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { ApplicationForm } from '@/components/application/application-form'

const benefits = [
  'Free forever for design partners',
  'Shape the product before anyone else',
  '15 minutes of feedback monthly',
  'Direct Slack channel with founders',
]

const TOTAL_SPOTS = 15
const SPOTS_TAKEN = 8

type View = 'intro' | 'form'

export function DesignPartner() {
  const [view, setView] = useState<View>('intro')

  return (
    <div className="py-20 md:py-24 border-t border-border/50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <motion.div
            className="rounded-2xl border border-accent/20 bg-accent/5 p-10 md:p-14"
            layout
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          >
            <AnimatePresence mode="wait">
              {view === 'intro' ? (
                <motion.div
                  key="intro"
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Spot counter */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ai-accent/30 bg-ai-accent/10 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                    <span className="text-xs font-medium text-ai-accent">
                      {TOTAL_SPOTS - SPOTS_TAKEN} of {TOTAL_SPOTS} spots remaining
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    Join the Design Partner Program
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                    We&rsquo;re looking for AEs at startups who have 3+
                    external meetings a week and are tired of going in blind.
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="size-4 text-signal shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-3">
                    <Button
                      size="lg"
                      className="text-base px-8 h-12"
                      onClick={() => setView('form')}
                    >
                      Apply to Join
                    </Button>
                    <p className="text-xs text-muted-foreground/60">
                      Takes about 2 minutes &middot; No account needed
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ApplicationForm onBack={() => setView('intro')} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  )
}
