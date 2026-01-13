import { getCourseById, getAssignmentsByCourse } from '@/lib/airtable';
import { CreateAssignmentForm } from '@/components/CreateAssignmentForm';
import { AssignmentItem } from '@/components/AssignmentItem';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
    const courseId = params.id;
    const course = await getCourseById(courseId);

    // Handle loading/error states
    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h2>
                    <Link href="/dashboard" className="text-blue-600 hover:underline">Return to Dashboard</Link>
                </div>
            </div>
        )
    }

    const assignments = await getAssignmentsByCourse(courseId);

    // Sort assignments by Due Date
    assignments.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

    return (
        <main className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                        <Link href="/dashboard" className="flex items-center hover:text-blue-600 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-1" /> Dashboard
                        </Link>
                        <span>/</span>
                        <span className="font-medium text-gray-900">{course.courseName}</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Course Photo */}
                        <div className="w-full md:w-48 h-32 md:h-48 rounded-xl overflow-hidden bg-gray-200 shrink-0 border border-gray-100 shadow-sm">
                            {course.coursePhoto ? (
                                <img src={course.coursePhoto} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Photo</div>
                            )}
                        </div>

                        {/* Metadata */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.courseName}</h1>

                            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-gray-400" />
                                    <span className="font-medium">{course.instructor}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span>{new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-gray-400" />
                                    <span>{assignments.length} Assignments</span>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="max-w-md">
                                <div className="flex justify-between text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                                    <span>Course Progress</span>
                                    <span>{Math.round(course.progress * 100)}%</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-600 rounded-full transition-all"
                                        style={{ width: `${course.progress * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
                    <CreateAssignmentForm courseId={courseId} />
                </div>

                <div className="space-y-4">
                    {assignments.length > 0 ? (
                        assignments.map(assignment => (
                            <AssignmentItem key={assignment.id} assignment={assignment} />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300 text-gray-500">
                            No assignments yet. Create one to get started!
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
