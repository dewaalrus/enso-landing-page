'use client'
import { motion, AnimatePresence } from 'motion/react'
import { FormField } from './form-field'
import type { ApplicationFormData } from '@/lib/form-schema'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

const meetingFrequencies = [
  { value: '1-3', label: '1-3' },
  { value: '3-5', label: '3-5' },
  { value: '5-10', label: '5-10' },
  { value: '10+', label: '10+' },
]

const tools = ['Gmail', 'Google Calendar', 'Salesforce', 'HubSpot', 'Gong', 'Slack', 'Other']

interface StepWorkflowProps {
  data: ApplicationFormData
  errors: Record<string, string>
  onChange: (field: keyof ApplicationFormData, value: string | string[]) => void
  onBlur: (field: keyof ApplicationFormData) => void
}

export function StepWorkflow({ data, errors, onChange, onBlur }: StepWorkflowProps) {
  const toggleTool = (tool: string) => {
    const updated = data.currentTools.includes(tool)
      ? data.currentTools.filter((t) => t !== tool)
      : [...data.currentTools, tool]
    onChange('currentTools', updated)
  }

  const showOtherInput = data.currentTools.includes('Other')
  const isLowFrequency = data.meetingsPerWeek === '1-3'

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-xl text-foreground">Your workflow</h3>

      <FormField label="External meetings per week" htmlFor="meetingsPerWeek" error={errors.meetingsPerWeek} required>
        <div className="flex gap-2">
          {meetingFrequencies.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={cn(
                'flex-1 px-3 py-2 rounded-lg border text-sm transition-colors',
                data.meetingsPerWeek === value
                  ? 'border-accent bg-accent/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-accent/50'
              )}
              onClick={() => onChange('meetingsPerWeek', value)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Qualification nudge */}
        <AnimatePresence>
          {isLowFrequency && (
            <motion.div
              className="flex items-start gap-2 mt-2 p-2.5 rounded-lg bg-ai-accent/10 border border-ai-accent/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle className="size-3.5 text-ai-accent shrink-0 mt-0.5" />
              <p className="text-xs text-ai-accent">
                Our design partners typically have 3+ external meetings per week.
                You&rsquo;re still welcome to apply!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </FormField>

      <FormField label="What tools do you use?" htmlFor="currentTools" error={errors.currentTools} required>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <button
              key={tool}
              type="button"
              className={cn(
                'px-3 py-1.5 rounded-full border text-sm transition-colors',
                data.currentTools.includes(tool)
                  ? 'border-accent bg-accent/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-accent/50'
              )}
              onClick={() => toggleTool(tool)}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* "Other" tool inline input */}
        <AnimatePresence>
          {showOtherInput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2"
            >
              <input
                type="text"
                className="form-input"
                value={data.otherTool}
                onChange={(e) => onChange('otherTool', e.target.value)}
                placeholder="Which other tool?"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </FormField>

      <FormField
        label="How do you currently prepare for meetings?"
        htmlFor="currentPrep"
        hint="2-3 sentences about your current process"
      >
        <textarea
          id="currentPrep"
          className="form-textarea"
          value={data.currentPrep}
          onChange={(e) => onChange('currentPrep', e.target.value)}
          onBlur={() => onBlur('currentPrep')}
          placeholder="I usually check LinkedIn, skim recent emails, and glance at the CRM..."
          rows={3}
        />
      </FormField>
    </div>
  )
}
