'use server';

import Airtable from 'airtable';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
    assignmentName: z.string().min(1),
    courseId: z.string().min(1),
    dueDate: z.string().min(1), // Date string
});

export async function createAssignment(prevState: any, formData: FormData) {
    const assignmentName = formData.get('assignmentName');
    const courseId = formData.get('courseId');
    const dueDate = formData.get('dueDate');

    const validated = schema.safeParse({ assignmentName, courseId, dueDate });

    if (!validated.success) {
        return { message: 'Invalid input', error: true };
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const table = process.env.ASSIGNMENTS_TABLE || 'Assignments';

    if (!apiKey || !baseId) {
        return { message: 'Configuration error', error: true };
    }

    try {
        const base = new Airtable({ apiKey }).base(baseId);
        await base(table).create([
            {
                fields: {
                    "Assignment Name": validated.data.assignmentName,
                    "Course": [validated.data.courseId], // Linked record requires array of IDs
                    "Due Date": validated.data.dueDate,
                    "Status": "Not Started"
                }
            }
        ]);

        revalidatePath('/course/[id]'); // Revalidate generic or strict path?
        revalidatePath(`/course/${validated.data.courseId}`);
        revalidatePath('/dashboard');

        return { message: 'Assignment created successfully', error: false };
    } catch (e) {
        console.error('Create Assignment Error:', e);
        return { message: 'Failed to create assignment', error: true };
    }
}
