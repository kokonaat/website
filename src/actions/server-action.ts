'use server'

import { actionClient } from './safe-action'

import { formSchema } from '@/lib/form-schema'

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    // TODO: integrate email service (Resend, SendGrid, etc.)
    void parsedInput
    return {
      success: true,
      message: 'Form submitted successfully',
    }
  })
