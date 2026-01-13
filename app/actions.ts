'use server'

import { z } from 'zod';
import Airtable from 'airtable';

const schema = z.object({
  email: z.string().email(),
  capabilities: z.string().optional(), // The "Which capabilities..." answer
});

export async function submitRsvp(prevState: any, formData: FormData) {
  // Validate
  const email = formData.get('email');
  const capabilities = formData.get('capabilities');

  const validated = schema.safeParse({ email, capabilities });

  if (!validated.success) {
    return { message: 'Invalid email or input', error: true };
  }

  // Persist to Airtable
  // NOTE: In a static export scenario without a proxy, this Server Action
  // might not be reachable if not deployed to Vercel/Node.
  // We assume the user has AIRTABLE_API_KEY and AIRTABLE_BASE_ID set.

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'RSVPs';

  if (!apiKey || !baseId) {
    console.warn('Airtable credentials missing. Logging to console instead.');
    console.log('RSVP Submission:', validated.data);
    return { message: 'Success (Dev Mode - No Airtable)', error: false };
  }

  try {
    const base = new Airtable({ apiKey }).base(baseId);

    await base(tableName).create([
      {
        fields: {
          Email: validated.data.email,
          Capabilities: validated.data.capabilities || '',
          Date: new Date().toISOString(),
        }
      }
    ]);

    return { message: 'RSVP Confirmed!', error: false };
  } catch (e) {
    console.error('Airtable Error:', e);
    return { message: 'Failed to submit RSVP. Please try again.', error: true };
  }
}
