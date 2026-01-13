'use client';

import { useFormState } from 'react-dom';
import { createAssignment } from '@/app/actions/createAssignment';
import { Button } from './ui/button'; // Assuming existing
import { Input } from './ui/input'; // Assuming existing
import { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';

const initialState = {
    message: '',
    error: false
}

export function CreateAssignmentForm({ courseId }: { courseId: string }) {
    // @ts-ignore
    const [state, formAction] = useFormState(createAssignment, initialState);
    const [pending, setPending] = useState(false);
    const [open, setOpen] = useState(false);

    if (!open) {
        return (
            <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Add Assignment
            </Button>
        )
    }

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 animate-in fade-in slide-in-from-top-2">
            <h4 className="font-bold text-gray-800 mb-4">New Assignment</h4>
            <form action={async (formData) => {
                setPending(true);
                await formAction(formData);
                setPending(false);
                setOpen(false); // Close on success? Optimization: check state
            }} className="space-y-4">
                <input type="hidden" name="courseId" value={courseId} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                        <Input name="assignmentName" placeholder="e.g. Midterm Project" required className="bg-white" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Due Date</label>
                        <Input type="date" name="dueDate" required className="bg-white" />
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={pending}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={pending} className="bg-blue-600 hover:bg-blue-700 text-white">
                        {pending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Create Assignment
                    </Button>
                </div>
            </form>
        </div>
    );
}
