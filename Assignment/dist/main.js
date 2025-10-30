"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courseManager_1 = __importDefault(require("./courseManager"));
const models_1 = require("./models");
const manager = new courseManager_1.default();
// Add instructors
manager.addInstructor({ id: 1, name: "Alice", expertise: models_1.CourseCategory.Programming });
manager.addInstructor({ id: 2, name: "Bob", expertise: models_1.CourseCategory.Design });
// Add students
manager.addStudent({ id: 101, name: "Charlie", email: "charlie@example.com" });
manager.addStudent({ id: 102, name: "Dana", email: "dana@example.com" });
// Create courses
manager.createCourse("Intro to TypeScript", models_1.CourseCategory.Programming, 1);
manager.createCourse("UI/UX Basics", models_1.CourseCategory.Design, 2);
// Enroll students
manager.enrollStudent(1, 101);
manager.enrollStudent(2, 102);
// List all courses and students
manager.listCourses();
manager.listStudents();
// Add a new student
console.log("\nAdd a new student (format: Name,Email): Nitin,nitin@example.com");
manager.addStudent({ name: "Nitin", email: "nitin@example.com" });
// Show updated student list
console.log("\n---");
console.log("Updated Student List:");
const students = manager.getStudents();
for (const student of students) {
    console.log(`+ ${student.name} (${student.email})`);
}
console.log("---");
