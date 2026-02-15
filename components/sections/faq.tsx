'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is the time commitment for design partners?',
    answer:
      'Minimal. We ask for async Slack feedback when you have thoughts, plus one 15-minute call per month. We know your time is valuable. That is literally why we are building Enso.',
  },
  {
    question: 'What happens to my email and calendar data?',
    answer:
      'Your data stays yours. Enso reads your Gmail and Google Calendar through OAuth with read-only permissions. We never store raw email content. We extract relationship signals and discard the rest. We are building toward SOC 2 compliance.',
  },
  {
    question: 'Do I need Salesforce to use Enso?',
    answer:
      'No. Enso works entirely from Gmail and Google Calendar. If you use Salesforce, great. Enso complements it by surfacing context your CRM does not capture. If you do not, Enso fills the gap.',
  },
  {
    question: 'When will I get access after applying?',
    answer:
      'We review applications within 48 hours. If you are a fit, we will onboard you within a week. Design partners get early access before our public launch and help shape the product roadmap.',
  },
  {
    question: 'What does \u201Cfree forever\u201D actually mean?',
    answer:
      'Design partners lock in free access to Enso permanently. No catch, no expiration. When we launch paid plans (expected to be $99\u2013299/month), your account stays free as a thank-you for helping us build the right product.',
  },
  {
    question: 'How is this different from Gong or LinkedIn Sales Nav?',
    answer:
      'Gong records calls but does not help you prepare or follow up. Enso covers the full loop: prep, recording, processing, and follow-ups. All powered by your relationship graph. LinkedIn Sales Nav gives you public profiles. Enso gives you your actual conversation history. And unlike Gong, Enso records through system audio with no bot joining your call.',
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
