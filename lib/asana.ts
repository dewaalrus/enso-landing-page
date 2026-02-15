import type { ApplicationFormData } from './form-schema'

const COMPANY_SIZE_MAP: Record<string, string> = {
  startup_1_10: '1213109382951571',
  small_11_50: '1213109382951572',
  medium_51_200: '1213109382951573',
  large_200_plus: '1213109382951574',
}

export function mapCompanySize(size: string): string | undefined {
  return COMPANY_SIZE_MAP[size]
}

export function formatAsanaTaskNotes(data: ApplicationFormData): string {
  const lines = [
    '## About',
    `- **Name:** ${data.fullName}`,
    `- **Email:** ${data.email}`,
    `- **Company:** ${data.companyName}`,
    `- **Role:** ${data.role}`,
    `- **Company Size:** ${data.companySize.replace(/_/g, ' ')}`,
    '',
    '## Workflow',
    `- **External Meetings/Week:** ${data.meetingsPerWeek}`,
    `- **Tools:** ${data.currentTools.join(', ')}${data.otherTool ? ` (Other: ${data.otherTool})` : ''}`,
    `- **Current Prep:** ${data.currentPrep || 'Not provided'}`,
    '',
    '## Design Partner Fit',
    `- **Biggest Pain Point:** ${data.biggestPainPoint}`,
    `- **Willing to Give Feedback:** ${data.willingToGiveFeedback}`,
    `- **How They Heard About Enso:** ${data.howHeardAboutEnso}`,
  ]
  return lines.join('\n')
}
