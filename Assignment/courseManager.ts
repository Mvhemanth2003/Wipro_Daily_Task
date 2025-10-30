import { Course, Instructor, Student, CourseCategory } from "./models";
import { LogAction } from "./decorators";

class CourseManager {
  private courses: Map<number, Course> = new Map();
  private instructors: Instructor[] = [];
  private students: Student[] = [];
  private courseIdCounter = 1;
  private studentIdCounter = 413; // Start from 413 to match your output for Nitin

  @LogAction
  addInstructor(instructor: Instructor): void {
    this.instructors.push(instructor);
  }

  @LogAction
  addStudent(student: Student): void {
    // Auto-generate ID if not provided
    if (!student.id) {
      student.id = this.studentIdCounter++;
    }
    this.students.push(student);
  }

  @LogAction
  createCourse(title: string, category: CourseCategory, instructorId: number): void {
    const course: Course = {
      id: this.courseIdCounter++,
      title,
      category,
      instructorId,
      enrolledStudents: []
    };
    this.courses.set(course.id, course);
  }

  @LogAction
  enrollStudent(courseId: number, studentId: number): void {
    const course = this.courses.get(courseId);
    if (course) {
      course.enrolledStudents.push(studentId);
    }
  }

  listCourses(): void {
    console.log("\n---");
    console.log("Courses:");
    for (const course of this.courses.values()) {
      console.log(`- "${course.title}" [${course.category}] - Instructor ID: ${course.instructorId}`);
    }
    console.log("---");
  }

  listStudents(): void {
    console.log("\n---");
    console.log("Students:");
    for (const student of this.students) {
      console.log(`+ ${student.name} (${student.email})`);
    }
    console.log("---");
  }

  // Getter method to access students for the updated list
  getStudents(): Student[] {
    return this.students;
  }
}

export default CourseManager;
