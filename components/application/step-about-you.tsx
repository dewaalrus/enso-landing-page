'use client'
import { FormField } from './form-field'
import type { ApplicationFormData } from '@/lib/form-schema'
import { cn } from '@/lib/utils'

const companySizes = [
  { value: 'startup_1_10', label: 'Startup (1-10)' },
  { value: 'small_11_50', label: 'Small (11-50)' },
  { value: 'medium_51_200', label: 'Medium (51-200)' },
  { value: 'large_200_plus', label: 'Large (200+)' },
]

interface StepAboutYouProps {
  data: ApplicationFormData
  errors: Record<string, string>
  onChange: (field: keyof ApplicationFormData, value: string) => void
  onBlur: (field: keyof ApplicationFormData) => void
}

export function StepAboutYou({ data, errors, onChange, onBlur }: StepAboutYouProps) {
  return (
    <div className="space-y-5">
      <h3 className="font-serif text-xl text-foreground">About you</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Full name" htmlFor="fullName" error={errors.fullName} required>
          <input
            id="fullName"
            type="text"
            className="form-input"
            value={data.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            onBlur={() => onBlur('fullName')}
            placeholder="Jane Smith"
          />
        </FormField>

        <FormField label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            type="email"
            className="form-input"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            onBlur={() => onBlur('email')}
            placeholder="jane@company.com"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Company" htmlFor="companyName" error={errors.companyName} required>
          <input
            id="companyName"
            type="text"
            className="form-input"
            value={data.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
            onBlur={() => onBlur('companyName')}
            placeholder="Acme Inc"
          />
        </FormField>

        <FormField label="Your role" htmlFor="role" error={errors.role} required>
          <input
            id="role"
            type="text"
            className="form-input"
            value={data.role}
            onChange={(e) => onChange('role', e.target.value)}
            onBlur={() => onBlur('role')}
            placeholder="Account Executive"
          />
        </FormField>
      </div>

      <FormField label="Company size" htmlFor="companySize" error={errors.companySize} required>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {companySizes.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={cn(
                'px-3 py-2 rounded-lg border text-sm transition-colors',
                data.companySize === value
                  ? 'border-accent bg-accent/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-accent/50'
              )}
              onClick={() => onChange('companySize', value)}
            >
              {label}
            </button>
          ))}
        </div>
      </FormField>
    </div>
  )
}
