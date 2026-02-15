'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  highlightWords?: string[]
  highlightClassName?: string
  staggerDelay?: number
  startDelay?: number
}

export function TextReveal({
  text, className, highlightWords = [], highlightClassName = 'text-ai-accent',
  staggerDelay = 0.04, startDelay = 0,
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const words = text.split(' ')

  return (
    <span ref={ref} className={cn('inline', className)}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word.replace(/[.,!?]/g, ''))
        return (
          <span key={i} className="inline-flex overflow-hidden">
            <motion.span
              className={cn('inline-block', isHighlight && highlightClassName)}
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: startDelay + i * staggerDelay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        )
      })}
    </span>
  )
}
