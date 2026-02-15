'use client'
import { motion, useMotionValue, useSpring, useInView, useTransform } from 'motion/react'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CountUpProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({ target, duration = 2, suffix = '', prefix = '', className }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (v: number) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, motionValue, target])

  return <motion.span ref={ref} className={cn(className)}>{display}</motion.span>
}
