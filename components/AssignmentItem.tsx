'use client';

import { useState } from 'react';
import { updateAssignmentStatus } from '@/app/actions/updateAssignmentStatus';
import { updateGrade } from '@/app/actions/updateGrade';
import { Assignment } from '@/lib/airtable';
import { Loader2, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this exists from previous task

export function AssignmentItem({ assignment }: { assignment: Assignment }) {
    const [updating, setUpdating] = useState(false);

    const isOverdue = assignment.status !== 'Completed' && new Date(assignment.dueDate) < new Date();

    const handleStatusChange = async (newStatus: string) => {
        setUpdating(true);
        await updateAssignmentStatus(assignment.id, newStatus, assignment.courseId);
        setUpdating(false);
    };

    const handleGradeBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val !== assignment.grade) {
            setUpdating(true);
            await updateGrade(assignment.id, val, assignment.courseId);
            setUpdating(false);
        }
    };

    const statusColors: Record<string, string> = {
        'Not Started': 'bg-gray-100 text-gray-600',
        'In Progress': 'bg-blue-100 text-blue-700',
        'Overdue': 'bg-red-100 text-red-700',
        'Completed': 'bg-green-100 text-green-700'
    };

    return (
        <div className={cn(
            "group bg-white rounded-xl border p-4 shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row md:items-center gap-4",
            isOverdue ? "border-red-200 bg-red-50/10" : "border-gray-100"
        )}>
            {/* Status & Icon */}
            <div className="shrink-0">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", statusColors[assignment.status] || 'bg-gray-100')}>
                    {assignment.status === 'Completed' ? <CheckCircle className="w-5 h-5" /> :
                        isOverdue ? <AlertCircle className="w-5 h-5" /> :
                            <Clock className="w-5 h-5" />}
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 truncate">{assignment.assignmentName}</h4>
                <p className={cn("text-xs font-medium flex items-center gap-2", isOverdue ? "text-red-600" : "text-gray-500")}>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    {isOverdue && <span className="uppercase text-[10px] bg-red-100 px-2 py-0.5 rounded text-red-700 font-bold">Overdue</span>}
                </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                {/* Status Select */}
                <select
                    disabled={updating}
                    value={assignment.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="h-9 text-sm rounded-md border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 font-medium text-gray-700"
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Overdue">Overdue</option>
                    <option value="Completed">Completed</option>
                </select>

                {/* Grade Input */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Grade:</span>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={assignment.grade}
                        onBlur={handleGradeBlur}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') e.currentTarget.blur();
                        }}
                        placeholder="--"
                        className="w-16 h-9 text-center rounded-md border-gray-300 text-sm font-bold focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}
