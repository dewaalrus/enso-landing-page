export interface ApplicationFormData {
  // Step 1 — About You
  fullName: string
  email: string
  companyName: string
  role: string
  companySize: '' | 'startup_1_10' | 'small_11_50' | 'medium_51_200' | 'large_200_plus'

  // Step 2 — Your Workflow
  meetingsPerWeek: '' | '1-3' | '3-5' | '5-10' | '10+'
  currentTools: string[]
  otherTool: string
  currentPrep: string

  // Step 3 — Design Partner Fit
  biggestPainPoint: string
  willingToGiveFeedback: '' | 'yes' | 'maybe' | 'no'
  howHeardAboutEnso: string
}

export type FormStep = 1 | 2 | 3

export const initialFormData: ApplicationFormData = {
  fullName: '',
  email: '',
  companyName: '',
  role: '',
  companySize: '',
  meetingsPerWeek: '',
  currentTools: [],
  otherTool: '',
  currentPrep: '',
  biggestPainPoint: '',
  willingToGiveFeedback: '',
  howHeardAboutEnso: '',
}

const STORAGE_KEY = 'enso-application-draft'

export function saveDraft(data: ApplicationFormData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage unavailable (private browsing, etc.)
  }
}

export function loadDraft(): ApplicationFormData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ApplicationFormData
  } catch {
    return null
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // noop
  }
}

export function validateField(
  field: keyof ApplicationFormData,
  data: ApplicationFormData
): string | undefined {
  switch (field) {
    case 'fullName':
      return !data.fullName.trim() ? 'Name is required' : undefined
    case 'email':
      if (!data.email.trim()) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Enter a valid email'
      return undefined
    case 'companyName':
      return !data.companyName.trim() ? 'Company name is required' : undefined
    case 'role':
      return !data.role.trim() ? 'Role is required' : undefined
    case 'companySize':
      return !data.companySize ? 'Select a company size' : undefined
    case 'meetingsPerWeek':
      return !data.meetingsPerWeek ? 'Select meeting frequency' : undefined
    case 'currentTools':
      return data.currentTools.length === 0 ? 'Select at least one tool' : undefined
    case 'biggestPainPoint':
      return !data.biggestPainPoint.trim() ? 'Please share your biggest pain point' : undefined
    case 'willingToGiveFeedback':
      return !data.willingToGiveFeedback ? 'Please select an option' : undefined
    case 'howHeardAboutEnso':
      return !data.howHeardAboutEnso ? 'Please select how you heard about us' : undefined
    default:
      return undefined
  }
}

export function validateStep1(data: ApplicationFormData): Record<string, string> {
  const errors: Record<string, string> = {}
  const fields: (keyof ApplicationFormData)[] = ['fullName', 'email', 'companyName', 'role', 'companySize']
  for (const f of fields) {
    const err = validateField(f, data)
    if (err) errors[f] = err
  }
  return errors
}

export function validateStep2(data: ApplicationFormData): Record<string, string> {
  const errors: Record<string, string> = {}
  const fields: (keyof ApplicationFormData)[] = ['meetingsPerWeek', 'currentTools']
  for (const f of fields) {
    const err = validateField(f, data)
    if (err) errors[f] = err
  }
  return errors
}

export function validateStep3(data: ApplicationFormData): Record<string, string> {
  const errors: Record<string, string> = {}
  const fields: (keyof ApplicationFormData)[] = ['biggestPainPoint', 'willingToGiveFeedback', 'howHeardAboutEnso']
  for (const f of fields) {
    const err = validateField(f, data)
    if (err) errors[f] = err
  }
  return errors
}
