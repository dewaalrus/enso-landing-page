'use client'
import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

export function FadeIn({
  children, className, direction = 'up', delay = 0,
  duration = 0.6, once = true, amount = 0.3,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const directionMap = {
    up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 }, none: {},
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
