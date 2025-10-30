// // Use ES6 imports
// import { Person, Student, Instructor } from "./person.js";

// // Creating an object of Person class
// const person1 = new Person("Alice", 30, "Wonderland University");
// console.log(person1.greet());
// console.log(`Person ID: ${person1.getId()}`);
// console.log("---------------------------");
// console.log("Person Counter:", Person.counter);

// // Creating an object of Student class
// const student1 = new Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);
// console.log(student1.getStudentDetails());
// student1.addSkill("React");
// student1.display();
// console.log(`Student ID: ${student1.showId()}`);
// console.log("---------------------------");
// console.log("Person Counter after creating Student:", Person.counter);

// // 1. Modify Student so skills is public and use spread operator to clone student object and add new skill to it
// console.log("=== Cloning Student with Spread Operator ===");
// const clonedStudent = { ...student1, skills: [...student1.skills, "Angular"] };
// console.log("Original student skills:", student1.skills);
// console.log("Cloned student skills:", clonedStudent.skills);

// // 2. Try to change p.institute = "New Institute" and see the error
// console.log("=== Readonly Property Test ===");
// // person1.institute = "New Institute"; // This would cause TypeScript error: Cannot assign to 'institute' because it is a read-only property.
// console.log("Institute (readonly):", person1.institute);

// // 3. Add a static method to Student class that returns total number of students created till now
// console.log("=== Student Counter ===");
// const student2 = new Student("Charlie", 22, "Tech University", ["Python", "Java"]);
// console.log("Total students created:", Student.getTotalStudents());

// // 4. Create another class Instructor that extends Person
// console.log("=== Instructor Class ===");
// const instructor1 = new Instructor("Dr. Smith", 45, "Tech University", "Computer Science", 15);
// console.log(instructor1.greet());
// console.log(instructor1.teach());
// console.log(`Subject: ${instructor1.getSubject()}`);
// console.log(`Experience: ${instructor1.getExperience()} years`);


// Use ES6 imports - make sure this path matches your file structure
import { Person, Student, Instructor } from "./person.js";

// Function to display output on HTML page
function displayOutput(message: string, type: 'normal' | 'section' | 'separator' = 'normal') {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        // Remove loading message if it exists
        if (outputDiv.innerHTML.includes('Loading...')) {
            outputDiv.innerHTML = '';
        }
        
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        
        switch (type) {
            case 'section':
                paragraph.className = 'section-title';
                break;
            case 'separator':
                paragraph.className = 'separator';
                break;
            default:
                paragraph.style.borderLeft = '3px solid #007acc';
                paragraph.style.paddingLeft = '10px';
                paragraph.style.backgroundColor = '#f8f9fa';
                paragraph.style.margin = '8px 0';
                paragraph.style.padding = '5px';
        }
        
        outputDiv.appendChild(paragraph);
    }
    console.log(message);
}

// Main execution
function main() {
    displayOutput("PERSON CLASS DEMO", 'section');
    
    // Creating an object of Person class
    const person1 = new Person("Alice", 30, "Wonderland University");
    displayOutput(person1.greet());
    displayOutput(`Person ID: ${person1.getId()}`);
    displayOutput("---------------------------", 'separator');
    displayOutput(`Person Counter: ${Person.counter}`);

    // Creating an object of Student class
    displayOutput("STUDENT CLASS DEMO", 'section');
    const student1 = new Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);
    displayOutput(student1.getStudentDetails());
    student1.addSkill("React");
    displayOutput(student1.display());
    displayOutput(`Student ID: ${student1.showId()}`);
    displayOutput("---------------------------", 'separator');
    displayOutput(`Person Counter after creating Student: ${Person.counter}`);

    // 1. Clone student with spread operator
    displayOutput("CLONING STUDENT WITH SPREAD OPERATOR", 'section');
    const clonedStudent = { ...student1, skills: [...student1.skills, "Angular"] };
    displayOutput(`Original student skills: ${student1.skills.join(", ")}`);
    displayOutput(`Cloned student skills: ${clonedStudent.skills.join(", ")}`);

    // 2. Readonly property test
    displayOutput("READONLY PROPERTY TEST", 'section');
    displayOutput(`Institute (readonly): ${person1.institute}`);

    // 3. Student counter static method
    displayOutput("STUDENT COUNTER", 'section');
    const student2 = new Student("Charlie", 22, "Tech University", ["Python", "Java"]);
    displayOutput(`Total students created: ${Student.getTotalStudents()}`);

    // 4. Instructor class
    displayOutput("INSTRUCTOR CLASS", 'section');
    const instructor1 = new Instructor("Dr. Smith", 45, "Tech University", "Computer Science", 15);
    displayOutput(instructor1.greet());
    displayOutput(instructor1.teach());
    displayOutput(`Subject: ${instructor1.getSubject()}`);
    displayOutput(`Experience: ${instructor1.getExperience()} years`);
    
    displayOutput("=== DEMO COMPLETED SUCCESSFULLY ===", 'section');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', main);