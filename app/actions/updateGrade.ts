'use server';

import Airtable from 'airtable';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
    recordId: z.string().min(1),
    grade: z.number().min(0).max(100),
    courseId: z.string().optional()
});

export async function updateGrade(recordId: string, grade: number, courseId?: string) {
    const validated = schema.safeParse({ recordId, grade, courseId });

    if (!validated.success) {
        return { message: 'Invalid grade (0-100)', error: true };
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
                    "Grade": validated.data.grade
                }
            }
        ]);

        if (courseId) {
            revalidatePath(`/course/${courseId}`);
        }
        return { message: 'Grade updated', error: false };
    } catch (e) {
        console.error('Update Grade Error:', e);
        return { message: 'Failed to update grade', error: true };
    }
}
