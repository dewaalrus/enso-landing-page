'use client'
import { FormField } from './form-field'
import type { ApplicationFormData } from '@/lib/form-schema'
import { cn } from '@/lib/utils'

const feedbackOptions = [
  { value: 'yes', label: 'Yes, happy to' },
  { value: 'maybe', label: 'Maybe, depends' },
  { value: 'no', label: 'Probably not' },
]

const sourceOptions = [
  { value: 'friend', label: 'Friend / colleague' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'sales_community', label: 'Sales community' },
  { value: 'twitter', label: 'Twitter / X' },
  { value: 'product_hunt', label: 'Product Hunt' },
  { value: 'other', label: 'Other' },
]

interface StepDesignFitProps {
  data: ApplicationFormData
  errors: Record<string, string>
  onChange: (field: keyof ApplicationFormData, value: string) => void
  onBlur: (field: keyof ApplicationFormData) => void
}

export function StepDesignFit({ data, errors, onChange, onBlur }: StepDesignFitProps) {
  return (
    <div className="space-y-5">
      <h3 className="font-serif text-xl text-foreground">Design partner fit</h3>

      <FormField
        label="What's your biggest pain point in meeting prep?"
        htmlFor="biggestPainPoint"
        error={errors.biggestPainPoint}
        required
      >
        <textarea
          id="biggestPainPoint"
          className="form-textarea"
          value={data.biggestPainPoint}
          onChange={(e) => onChange('biggestPainPoint', e.target.value)}
          onBlur={() => onBlur('biggestPainPoint')}
          placeholder="Context is scattered across too many tools..."
          rows={3}
        />
      </FormField>

      <FormField
        label="Willing to give async Slack feedback + a monthly 15-min call?"
        htmlFor="willingToGiveFeedback"
        error={errors.willingToGiveFeedback}
        required
      >
        <div className="flex gap-2">
          {feedbackOptions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={cn(
                'flex-1 px-3 py-2 rounded-lg border text-sm transition-colors',
                data.willingToGiveFeedback === value
                  ? 'border-accent bg-accent/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-accent/50'
              )}
              onClick={() => onChange('willingToGiveFeedback', value)}
            >
              {label}
            </button>
          ))}
        </div>
      </FormField>

      <FormField
        label="How did you hear about Enso?"
        htmlFor="howHeardAboutEnso"
        error={errors.howHeardAboutEnso}
        required
      >
        <select
          id="howHeardAboutEnso"
          className="form-select"
          value={data.howHeardAboutEnso}
          onChange={(e) => onChange('howHeardAboutEnso', e.target.value)}
          onBlur={() => onBlur('howHeardAboutEnso')}
        >
          <option value="">Select an option...</option>
          {sourceOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
