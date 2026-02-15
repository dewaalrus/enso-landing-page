'use client'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface SuccessScreenProps {
  name: string
  email: string
}

export function SuccessScreen({ name, email }: SuccessScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const firstName = name.split(' ')[0] || name

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center text-center py-8 relative overflow-hidden">
      {/* Animated checkmark */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.4 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" className="stroke-signal" strokeWidth="3" opacity="0.2" />
          <motion.circle
            cx="32" cy="32" r="30"
            className="stroke-signal"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.path
            d="M20 32 L28 40 L44 24"
            className="stroke-signal"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="font-serif text-2xl text-foreground mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Application submitted!
      </motion.h3>

      {/* Personalized message */}
      <motion.p
        className="text-muted-foreground max-w-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Thanks, {firstName}! We&rsquo;ll review your application and get back to you within 48 hours.
      </motion.p>

      {/* Email confirmation */}
      <motion.p
        className="text-xs text-muted-foreground/60 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Confirmation will be sent to {email}
      </motion.p>

      {/* Back to top */}
      <motion.a
        href="#"
        className="mt-8 text-sm text-accent hover:text-accent/80 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Back to top
      </motion.a>

      {/* Confetti particles */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '30%',
                width: i % 2 === 0 ? 6 : 4,
                height: i % 2 === 0 ? 6 : 4,
                backgroundColor: i % 3 === 0 ? 'var(--ai-accent)' : i % 3 === 1 ? 'var(--accent)' : 'var(--signal)',
              }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 350,
                y: (Math.random() - 0.5) * 250 - 60,
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.5,
                delay: i * 0.04,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
