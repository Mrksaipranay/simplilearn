import { getCourses, getAllAssignments, getOverdueAssignments, Course, Assignment } from '@/lib/airtable';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // Ensure fresh data on every request

export default async function DashboardPage() {
    const coursesData = getCourses();
    const assignmentsData = getAllAssignments();

    const [courses, assignments] = await Promise.all([coursesData, assignmentsData]);

    return (
        <main className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
                    <div className="text-sm text-gray-500">
                        {courses.length} Active Courses
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map(course => {
                        const courseAssignments = assignments.filter(a => a.courseId === course.id);
                        const overdue = getOverdueAssignments(courseAssignments);

                        return (
                            <Link href={`/course/${course.id}`} key={course.id} className="block group">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                                    <div className="h-48 relative bg-gray-200">
                                        {course.coursePhoto ? (
                                            <img
                                                src={course.coursePhoto}
                                                alt={course.courseName}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                                No Photo
                                            </div>
                                        )}
                                        {overdue.length > 0 && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                                                {overdue.length} OVERDUE
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                            {course.courseName}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-6 font-medium">
                                            {course.instructor}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                                                <span>Progress</span>
                                                <span>{Math.round(course.progress * 100)}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-500 ${course.progress === 1 ? 'bg-green-500' : 'bg-blue-600'}`}
                                                    style={{ width: `${course.progress * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className="mt-4 text-xs text-gray-400">
                                                {courseAssignments.length} Assignments
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {courses.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No courses found. Check your Airtable connection.
                    </div>
                )}
            </div>
        </main>
    );
}
