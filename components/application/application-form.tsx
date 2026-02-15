'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { StepIndicator } from './step-indicator'
import { StepAboutYou } from './step-about-you'
import { StepWorkflow } from './step-workflow'
import { StepDesignFit } from './step-design-fit'
import { SuccessScreen } from './success-screen'
import {
  type ApplicationFormData,
  type FormStep,
  initialFormData,
  validateStep1,
  validateStep2,
  validateStep3,
  validateField,
  saveDraft,
  loadDraft,
  clearDraft,
} from '@/lib/form-schema'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'

interface ApplicationFormProps {
  onBack: () => void
}

export function ApplicationForm({ onBack }: ApplicationFormProps) {
  const [step, setStep] = useState<FormStep>(1)
  const [data, setData] = useState<ApplicationFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [direction, setDirection] = useState(1)
  const [showBackConfirm, setShowBackConfirm] = useState(false)

  // Load draft from localStorage on mount
  useEffect(() => {
    const draft = loadDraft()
    if (draft) setData(draft)
  }, [])

  // Save draft whenever data changes
  useEffect(() => {
    saveDraft(data)
  }, [data])

  const updateField = useCallback((field: keyof ApplicationFormData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }))
    // Clear error for field on change
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const handleBlur = useCallback((field: keyof ApplicationFormData) => {
    setTouched((prev) => new Set(prev).add(field))
    setData((current) => {
      const err = validateField(field, current)
      if (err) {
        setErrors((prev) => ({ ...prev, [field]: err }))
      } else {
        setErrors((prev) => {
          if (!prev[field]) return prev
          const next = { ...prev }
          delete next[field]
          return next
        })
      }
      return current
    })
  }, [])

  const validateCurrentStep = (): boolean => {
    const validator = step === 1 ? validateStep1 : step === 2 ? validateStep2 : validateStep3
    const stepErrors = validator(data)
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleNext = () => {
    if (!validateCurrentStep()) return
    setDirection(1)
    setStep((s) => Math.min(s + 1, 3) as FormStep)
    setTouched(new Set())
  }

  const handleBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1) as FormStep)
    setErrors({})
    setTouched(new Set())
  }

  const handleBackToIntro = () => {
    // Check if any field has been filled
    const hasData = data.fullName || data.email || data.companyName || data.role || data.companySize
    if (hasData) {
      setShowBackConfirm(true)
    } else {
      onBack()
    }
  }

  const confirmBack = () => {
    clearDraft()
    setShowBackConfirm(false)
    onBack()
  }

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Submission failed')
      clearDraft()
      setIsSuccess(true)
    } catch (err) {
      console.error('Submit error:', err)
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return <SuccessScreen name={data.fullName} email={data.email} />
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <div>
      <StepIndicator currentStep={step} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {step === 1 && (
            <StepAboutYou data={data} errors={errors} onChange={updateField} onBlur={handleBlur} />
          )}
          {step === 2 && (
            <StepWorkflow data={data} errors={errors} onChange={updateField} onBlur={handleBlur} />
          )}
          {step === 3 && (
            <StepDesignFit data={data} errors={errors} onChange={updateField} onBlur={handleBlur} />
          )}
        </motion.div>
      </AnimatePresence>

      {errors.submit && (
        <p className="text-sm text-destructive text-center mt-4">{errors.submit}</p>
      )}

      {/* Back confirmation */}
      <AnimatePresence>
        {showBackConfirm && (
          <motion.div
            className="mt-4 p-3 rounded-lg border border-border bg-card text-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              Your progress will be saved as a draft. Leave anyway?
            </p>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowBackConfirm(false)}>
                Stay
              </Button>
              <Button variant="outline" size="sm" onClick={confirmBack}>
                Leave
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={step === 1 ? handleBackToIntro : handleBack}
        >
          <ArrowLeft className="size-4 mr-1" />
          {step === 1 ? 'Back' : 'Previous'}
        </Button>

        {step < 3 ? (
          <Button onClick={handleNext} size="sm">
            Next
            <ArrowRight className="size-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isSubmitting} size="sm">
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin mr-1" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
