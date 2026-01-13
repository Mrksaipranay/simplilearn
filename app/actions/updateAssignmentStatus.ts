'use server';

import Airtable from 'airtable';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
    recordId: z.string().min(1),
    status: z.enum(['Not Started', 'In Progress', 'Overdue', 'Completed']),
    courseId: z.string().optional() // For revalidation
});

export async function updateAssignmentStatus(recordId: string, status: string, courseId?: string) {
    const validated = schema.safeParse({ recordId, status, courseId });

    if (!validated.success) {
        return { message: 'Invalid status', error: true };
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const table = process.env.ASSIGNMENTS_TABLE || 'Assignments';

    if (!apiKey || !baseId) return { message: 'Config error', error: true };

    try {
        const base = new Airtable({ apiKey }).base(baseId);
        await base(table).update([
            {
                id: validated.data.recordId,
                fields: {
                    "Status": validated.data.status
                }
            }
        ]);

        if (courseId) {
            revalidatePath(`/course/${courseId}`);
        }
        revalidatePath('/dashboard');
        return { message: 'Status updated', error: false };
    } catch (e) {
        console.error('Update Status Error:', e);
        return { message: 'Failed to update status', error: true };
    }
}
