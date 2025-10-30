// Parent class
export class Person {
    getId() {
        return this.id;
    }
    constructor(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.`;
    }
    getAge() {
        return this.age;
    }
}
Person.counter = 0;
// Child class - Student (Modified)
export class Student extends Person {
    constructor(name, age, institute, skills) {
        super(name, age, institute);
        this.skills = skills;
        Student.studentCounter++;
    }
    getStudentDetails() {
        return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    display() {
        return `My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.getAge()} years old and I study at ${this.institute}. I have the following skills: ${this.skills.join(", ")}.`;
    }
    showId() {
        return this.getId();
    }
    // Static method to get total number of students
    static getTotalStudents() {
        return Student.studentCounter;
    }
}
Student.studentCounter = 0;
// New Instructor class
export class Instructor extends Person {
    constructor(name, age, institute, subject, experience) {
        super(name, age, institute);
        this.subject = subject;
        this.experience = experience;
    }
    teach() {
        return `I am teaching ${this.subject} with ${this.experience} years of experience.`;
    }
    getSubject() {
        return this.subject;
    }
    getExperience() {
        return this.experience;
    }
    greet() {
        return `${super.greet()} I teach ${this.subject} with ${this.experience} years of experience.`;
    }
}
// in order to run main.js in html we have to do following change in above json properties
// 1. change "module" to "none" from "commonjs"
// 2.Use <script type="module" src="dis/main.js"></script> in html file to include the compiled js file 
//Addon task :
//Modify Student so skills is public  and use spread operator to clone student object and add new skill to it. 
//Try to change p.institute = "New Institute" and see the error.( institute is readonly property)
//Add a static method to Student class that returns total number of students created till now.
//Create another class Instructor that extends Person and has additional properties like teach() etc or subject and experience (in years).
