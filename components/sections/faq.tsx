'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What happens to my email and calendar data?',
    answer:
      'Your data stays yours. Enso reads your Gmail and Google Calendar through OAuth with read-only permissions. We never store raw email content. We extract relationship signals and discard the rest. We are building toward SOC 2 compliance.',
  },
  {
    question: 'Do I need a CRM to use Enso?',
    answer:
      'No. Enso works from Gmail and Google Calendar on day one. CRM integration is on our roadmap and we are looking for companies to co-design that experience with. In the meantime, Enso surfaces the relationship context your CRM never captures.',
  },
  {
    question: 'What do design partners get?',
    answer:
      'Founding member pricing locked in permanently, early access before public launch, and a direct line to shape the product roadmap. We are only taking 15 partners to keep the feedback loop tight.',
  },
  {
    question: 'How is Enso different from call recorders?',
    answer:
      'Call recorders give you transcripts after the meeting. Enso gives you intelligence before, during, and after. Prep briefs before every call. Bot-free recording through system audio. Follow-ups drafted automatically. All grounded in your relationship graph.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-20 md:py-24 border-t border-border/50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-foreground/50 mb-2 text-center">
            Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Frequently asked
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={cn(
                    'rounded-xl border transition-colors',
                    isOpen ? 'border-accent/30 bg-accent/5' : 'border-border bg-card/50'
                  )}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground text-sm pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="size-4 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
