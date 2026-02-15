import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import type { ApplicationFormData } from '@/lib/form-schema'
import { mapCompanySize, formatAsanaTaskNotes } from '@/lib/asana'

const PROJECT_ID = '1213109275926185'
const SECTION_ID = '1213109417163312'
const PARTNER_STATUS_FIELD = '1213109417163321'
const NEW_APPLICATION_VALUE = '1213109417163322'
const COMPANY_SIZE_FIELD = '1213109382951570'

function getAsanaPAT(): string | null {
  // Try env var first (Vercel deployment)
  if (process.env.ASANA_PAT) return process.env.ASANA_PAT

  // Fall back to local file
  try {
    const tokenPath = join(homedir(), '.claude', '.asana-env')
    return readFileSync(tokenPath, 'utf-8').trim()
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  try {
    const data: ApplicationFormData = await request.json()

    const pat = getAsanaPAT()
    if (!pat) {
      console.error('Asana PAT not found')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const notes = formatAsanaTaskNotes(data)
    const companySizeGid = mapCompanySize(data.companySize)

    // Build custom fields
    const customFields: Record<string, string> = {
      [PARTNER_STATUS_FIELD]: NEW_APPLICATION_VALUE,
    }
    if (companySizeGid) {
      customFields[COMPANY_SIZE_FIELD] = companySizeGid
    }

    // Create task
    const taskRes = await fetch('https://app.asana.com/api/1.0/tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: `${data.fullName} | ${data.companyName}`,
          notes,
          projects: [PROJECT_ID],
          custom_fields: customFields,
        },
      }),
    })

    if (!taskRes.ok) {
      const err = await taskRes.text()
      console.error('Asana task creation failed:', err)
      return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
    }

    const taskData = await taskRes.json()
    const taskGid = taskData.data?.gid

    // Move to "New Applications" section
    if (taskGid) {
      await fetch(`https://app.asana.com/api/1.0/sections/${SECTION_ID}/addTask`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${pat}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { task: taskGid } }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
