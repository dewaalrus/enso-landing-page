'use client'
import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  amount?: number
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerDelay } },
})

const itemVariants = (direction: 'up' | 'left' | 'right') => {
  const offset = direction === 'up' ? { y: 30 } : direction === 'left' ? { x: -30 } : { x: 30 }
  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  }
}

export function StaggerContainer({
  children, className, staggerDelay = 0.1, once = true, amount = 0.2,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children, className, direction = 'up',
}: { children: ReactNode; className?: string; direction?: 'up' | 'left' | 'right' }) {
  return (
    <motion.div className={cn(className)} variants={itemVariants(direction)}>
      {children}
    </motion.div>
  )
}
