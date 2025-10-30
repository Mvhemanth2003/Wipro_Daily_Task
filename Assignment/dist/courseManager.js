"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const decorators_1 = require("./decorators");
class CourseManager {
    constructor() {
        this.courses = new Map();
        this.instructors = [];
        this.students = [];
        this.courseIdCounter = 1;
        this.studentIdCounter = 413; // Start from 413 to match your output for Nitin
    }
    addInstructor(instructor) {
        this.instructors.push(instructor);
    }
    addStudent(student) {
        // Auto-generate ID if not provided
        if (!student.id) {
            student.id = this.studentIdCounter++;
        }
        this.students.push(student);
    }
    createCourse(title, category, instructorId) {
        const course = {
            id: this.courseIdCounter++,
            title,
            category,
            instructorId,
            enrolledStudents: []
        };
        this.courses.set(course.id, course);
    }
    enrollStudent(courseId, studentId) {
        const course = this.courses.get(courseId);
        if (course) {
            course.enrolledStudents.push(studentId);
        }
    }
    listCourses() {
        console.log("\n---");
        console.log("Courses:");
        for (const course of this.courses.values()) {
            console.log(`- "${course.title}" [${course.category}] - Instructor ID: ${course.instructorId}`);
        }
        console.log("---");
    }
    listStudents() {
        console.log("\n---");
        console.log("Students:");
        for (const student of this.students) {
            console.log(`+ ${student.name} (${student.email})`);
        }
        console.log("---");
    }
    // Getter method to access students for the updated list
    getStudents() {
        return this.students;
    }
}
__decorate([
    decorators_1.LogAction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseManager.prototype, "addInstructor", null);
__decorate([
    decorators_1.LogAction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseManager.prototype, "addStudent", null);
__decorate([
    decorators_1.LogAction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], CourseManager.prototype, "createCourse", null);
__decorate([
    decorators_1.LogAction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CourseManager.prototype, "enrollStudent", null);
exports.default = CourseManager;
