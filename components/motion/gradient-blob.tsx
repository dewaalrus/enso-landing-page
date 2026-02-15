'use client'
import { cn } from '@/lib/utils'

interface GradientBlobProps {
  className?: string
}

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full opacity-[0.06] blur-[80px]',
        'animate-blob-float',
        className
      )}
      style={{
        background: 'radial-gradient(circle, var(--ai-accent) 0%, transparent 70%)',
        width: '500px',
        height: '500px',
      }}
    />
  )
}
