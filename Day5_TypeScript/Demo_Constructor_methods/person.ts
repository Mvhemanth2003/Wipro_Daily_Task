// Parent class
export class Person {
  public name: string;
  protected age: number;
  readonly institute: string;
  private id: number;
  static counter: number = 0;

  public getId(): number {
    return this.id;
  }

  constructor(name: string, age: number, institute: string) {
    this.name = name;
    this.age = age;
    this.institute = institute;
    this.id = ++Person.counter;
  }

  public greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.`;
  }

  protected getAge(): number {
    return this.age;
  }
}

// Child class - Student (Modified)
export class Student extends Person {
  public skills: string[]; // Changed to public
  private static studentCounter: number = 0;

  constructor(name: string, age: number, institute: string, skills: string[]) {
    super(name, age, institute);
    this.skills = skills;
    Student.studentCounter++;
  }

  public getStudentDetails(): string {
    return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
  }

  public addSkill(skill: string): void {
    this.skills.push(skill);
  }

  public display(): string {
    return `My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`;
  }

  public greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.getAge()} years old and I study at ${this.institute}. I have the following skills: ${this.skills.join(", ")}.`;
  }

  public showId(): number {
    return this.getId();
  }

  // Static method to get total number of students
  public static getTotalStudents(): number {
    return Student.studentCounter;
  }
}

// New Instructor class
export class Instructor extends Person {
  private subject: string;
  private experience: number;

  constructor(name: string, age: number, institute: string, subject: string, experience: number) {
    super(name, age, institute);
    this.subject = subject;
    this.experience = experience;
  }

  public teach(): string {
    return `I am teaching ${this.subject} with ${this.experience} years of experience.`;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getExperience(): number {
    return this.experience;
  }

  public greet(): string {
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