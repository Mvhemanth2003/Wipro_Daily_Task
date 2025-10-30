// Enums for course categories
export enum CourseCategory {
  Programming = "Programming",
  Design = "Design",
  Marketing = "Marketing",
  Business = "Business"
}

// Interface for Course
export interface Course {
  id: number;
  title: string;
  category: CourseCategory;
  instructorId: number;
  enrolledStudents: number[];
}

// Interface for Instructor
export interface Instructor {
  id: number;
  name: string;
  expertise: CourseCategory;
}

// Interface for Student (make id optional)
export interface Student {
  id?: number; // Make id optional
  name: string;
  email: string;
}