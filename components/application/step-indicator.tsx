'use client'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FormStep } from '@/lib/form-schema'

const steps = [
  { step: 1 as FormStep, label: 'About You' },
  { step: 2 as FormStep, label: 'Workflow' },
  { step: 3 as FormStep, label: 'Fit' },
]

interface StepIndicatorProps {
  currentStep: FormStep
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map(({ step, label }, i) => {
        const isActive = step === currentStep
        const isCompleted = step < currentStep

        return (
          <div key={step} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <motion.div
                className={cn(
                  'flex items-center justify-center rounded-full transition-colors',
                  isCompleted && 'bg-signal text-signal-foreground',
                  isActive && 'bg-accent text-accent-foreground',
                  !isActive && !isCompleted && 'border border-border text-muted-foreground',
                )}
                animate={{
                  width: isActive ? 32 : 28,
                  height: isActive ? 32 : 28,
                }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <Check className="size-3.5" />
                ) : (
                  <span className="text-xs font-medium">{step}</span>
                )}
              </motion.div>
              <span className={cn(
                'text-[10px]',
                isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn(
                'w-8 h-px mb-4',
                isCompleted ? 'bg-signal' : 'bg-border'
              )} />
            )}
          </div>
        )
      })}
    </div>
  )
}
