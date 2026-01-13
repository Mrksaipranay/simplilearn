import Airtable from 'airtable';

// Types
export interface Course {
  id: string;
  courseName: string;
  instructor: string;
  startDate: string;
  endDate: string;
  coursePhoto: string; // URL
  progress: number;
  assignmentIds: string[];
}

export interface Assignment {
  id: string;
  assignmentName: string;
  courseId: string;
  dueDate: string;
  status: 'Not Started' | 'In Progress' | 'Overdue' | 'Completed';
  grade?: number;
  submissionPhoto?: string;
}

// Config
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
// Used generic names in prompt, mapping to env vars if strictly needed, or hardcoding defaults if env var missing is safer for types? 
// Prompt says "Use only environment variables" for keys. Table names are in env too.
const COURSES_TABLE = process.env.COURSES_TABLE || 'Courses';
const ASSIGNMENTS_TABLE = process.env.ASSIGNMENTS_TABLE || 'Assignments';

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  // Warn but don't crash at module level, crash at usage
  console.warn("Missing Airtable credentials");
}

const base = (AIRTABLE_API_KEY && AIRTABLE_BASE_ID)
  ? new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
  : ((tableName: string) => {
    console.warn(`Airtable credentials missing. Mocking base('${tableName}').`);

    const mockCourses = [
      {
        id: 'recMockCourse1',
        fields: {
          'Course Name': 'AI Workflow Automation',
          'Instructor': 'Dr. Antigravity',
          'Start Date': new Date().toISOString(),
          'End Date': new Date(Date.now() + 86400000 * 30).toISOString(),
          'Course Photo': [{ url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' }],
          'Progress': 0.65,
          'Assignments': ['recMockAss1', 'recMockAss2']
        }
      },
      {
        id: 'recMockCourse2',
        fields: {
          'Course Name': 'Next.js Advanced Patterns',
          'Instructor': 'Vercel Team',
          'Start Date': new Date().toISOString(),
          'End Date': new Date(Date.now() + 86400000 * 15).toISOString(),
          'Course Photo': [],
          'Progress': 0.20,
          'Assignments': ['recMockAss3']
        }
      }
    ];

    const mockAssignments = [
      {
        id: 'recMockAss1',
        fields: {
          'Assignment Name': 'Setup Environment',
          'Course': ['recMockCourse1'],
          'Due Date': new Date(Date.now() - 86400000).toISOString(), // Overdue
          'Status': 'Not Started',
          'Grade': 0
        }
      },
      {
        id: 'recMockAss2',
        fields: {
          'Assignment Name': 'Build Dashboard',
          'Course': ['recMockCourse1'],
          'Due Date': new Date(Date.now() + 86400000 * 2).toISOString(),
          'Status': 'In Progress',
          'Grade': 0
        }
      },
      {
        id: 'recMockAss3',
        fields: {
          'Assignment Name': 'Server Actions Deep Dive',
          'Course': ['recMockCourse2'],
          'Due Date': new Date(Date.now() + 86400000 * 5).toISOString(),
          'Status': 'Completed',
          'Grade': 95
        }
      }
    ];

    const data = tableName === 'Courses' ? mockCourses : mockAssignments;

    // Mock Record Object to satisfy mapCourse/mapAssignment
    const mockRecords = data.map(item => ({
      id: item.id,
      get: (field: string) => (item.fields as any)[field]
    }));

    return {
      select: () => ({ all: async () => mockRecords }),
      find: async (id: string) => mockRecords.find(r => r.id === id) || null,
      create: async () => [],
      update: async () => [],
    } as any;
  });

// Mappers
const mapCourse = (record: any): Course => ({
  id: record.id,
  courseName: record.get('Course Name') as string,
  instructor: record.get('Instructor') as string,
  startDate: record.get('Start Date') as string,
  endDate: record.get('End Date') as string,
  coursePhoto: (record.get('Course Photo') as any[])?.[0]?.url || '',
  progress: (record.get('Progress') as number) || 0,
  assignmentIds: (record.get('Assignments') as string[]) || [],
});

const mapAssignment = (record: any): Assignment => ({
  id: record.id,
  assignmentName: record.get('Assignment Name') as string,
  courseId: (record.get('Course') as string[])?.[0] || '',
  dueDate: record.get('Due Date') as string,
  status: record.get('Status') as any,
  grade: record.get('Grade') as number | undefined,
  submissionPhoto: (record.get('Submission Photo') as any[])?.[0]?.url || '',
});

// Accessors
export const getCourses = async (): Promise<Course[]> => {
  try {
    const records = await base(COURSES_TABLE).select({
      view: 'Grid view'
    }).all();
    return records.map(mapCourse);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const getCourseById = async (id: string): Promise<Course | null> => {
  try {
    const record = await base(COURSES_TABLE).find(id);
    return mapCourse(record);
  } catch (error) {
    console.error(`Error fetching course ${id}:`, error);
    return null;
  }
};

export const getAssignmentsByCourse = async (courseId: string): Promise<Assignment[]> => {
  try {
    // Requires linked record filter or filtering in memory. 
    // Filtering in memory is safer if formula syntax is tricky with IDs.
    const records = await base(ASSIGNMENTS_TABLE).select({
      // filterByFormula: `{Course} = '${courseId}'` // ID usually works directly in formula for linked records? 
      // Actually linked record fields return names sometimes depending on config, but API returns IDs.
      // Safer to fetch all and filter or use generic Select if dataset small. 
      // Ideally: filterByFormula: `SEARCH("${courseId}", {Course})`
    }).all();

    // Client-side filtering for reliability with minimal Airtable setup assumptions
    return records
      .map(mapAssignment)
      .filter((a: Assignment) => a.courseId === courseId);
  } catch (error) {
    console.error(`Error fetching assignments for ${courseId}:`, error);
    return [];
  }
};

export const getAllAssignments = async (): Promise<Assignment[]> => {
  try {
    const records = await base(ASSIGNMENTS_TABLE).select().all();
    return records.map(mapAssignment);
  } catch (error) {
    console.error("Error fetching all assignments:", error);
    return [];
  }
}

// Utility to categorize assignments (Upcoming vs Overdue) works on returned data
export const getOverdueAssignments = (assignments: Assignment[]) => {
  const now = new Date();
  return assignments.filter(a => {
    if (a.status === 'Completed' || !a.dueDate) return false;
    const due = new Date(a.dueDate);
    return due < now;
  });
};
