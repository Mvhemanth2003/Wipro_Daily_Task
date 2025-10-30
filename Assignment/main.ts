import CourseManager from "./courseManager";
import { CourseCategory } from "./models";

const manager = new CourseManager();

// Add instructors
manager.addInstructor({ id: 1, name: "Alice", expertise: CourseCategory.Programming });
manager.addInstructor({ id: 2, name: "Bob", expertise: CourseCategory.Design });

// Add students
manager.addStudent({ id: 101, name: "Charlie", email: "charlie@example.com" });
manager.addStudent({ id: 102, name: "Dana", email: "dana@example.com" });

// Create courses
manager.createCourse("Intro to TypeScript", CourseCategory.Programming, 1);
manager.createCourse("UI/UX Basics", CourseCategory.Design, 2);

// Enroll students
manager.enrollStudent(1, 101);
manager.enrollStudent(2, 102);

// List all courses and students
manager.listCourses();
manager.listStudents();

// Add a new student
console.log("\nAdd a new student (format: Name,Email): hemanth,hemanth@example.com");
manager.addStudent({ name: "hemanth", email: "hemanth@example.com" });

// Show updated student list
console.log("\n---");
console.log("Updated Student List:");
const students = manager.getStudents();
for (const student of students) {
  console.log(`+ ${student.name} (${student.email})`);
}
console.log("---");
