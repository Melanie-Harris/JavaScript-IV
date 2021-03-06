// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of`people`.
// * ** Instructors ** - extensions of Person
// * ** Students ** - extensions of Person
// * ** Project Managers ** - extensions of Instructors
// * ** IMPORTANT ** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// #### Person
// * First we need a Person class.This will be our`base-class`
// * Person receives`name` `age` `location` all as props
// * Person receives`speak` as a method.
// * This method logs out a phrase`Hello my name is Fred, I am from Bedrock` where`name` and`location` are the object's own props

class Person {
    constructor(base_class) {
        this.name = base_class.name;
        this.age = base_class.age;
        this.location = base_class.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
// * `specialty` what the Instructor is good at i.e. 'redux'
// * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
// * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
// * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instrClass) {
        super(instrClass)
        this.specialty = instrClass.specialty;
        this.favLanguage = instrClass.favLanguage;
        this.catchPhrase = instrClass.catchPhrase;
    }
    //Why doesn't it like a string and why did it want to put am underscore in front of the parameter?
    // took out string that was passed as param
    demo(subject) {
        return( `Today we are learning about ${subject}`)
    }
    // What is the syntax for passing an object?
    // took out "this. from subject" also made subject not a string in param
    grade(student, subject) {
        return (`${student} receives a perfect score on ${subject}`)
    }
}

// #### Student

//     * Now we need some students!
//     * Student uses the same attributes that have been set up by Person
//     * Student has the following unique props:
//     *`previousBackground` i.e.what the Student used to do before Lambda School
//     *`className` i.e.CS132
//     *`favSubjects`.i.e.an array of the student's favorite subjects ['Html ', 'CSS ', 'JavaScript ']
//     * Student has the following methods:
//     *`listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//     *`PRAssignment` a method that receives a subject as an argument and logs out that the
//     `student.name has submitted a PR for {subject}`
//     *`sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(StudStats) {
        super(StudStats)
        this.previousBackground = StudStats.previousBackground;
        this.className = StudStats.className;
        this.favSubjects = StudStats.favSubjects;
    }
    listsSubjects(subject) {
        return `${subject}`
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
}



// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
// * `gradClassName`: i.e. CS1
// * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
// * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
// * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp(name, channel) {
        return (`${name} announces to ${channel}, @channel stand times!`);
    }

    debugsCode(subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
// created student object
const student = new Student({
    name: 'Melanie',
    location: "The Boondocks",
    age: 31,
    favLanguage: "JavaScript",
    specialty: "Explaining with patience",
    catchPhrase: "I love coding!",

})

// created PM object
const projectManager = new ProjectManager({
    name: "Adam",
    gradClassName: "Web 19",
    favInstructor: "Josh Knell",
    channel: "Web20",

})
// created Instructor object
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Cash Rules Everything Around Me, get the C.R.E.A.M.`
});
// correctly called fred.grade, changed "subject" to a subject
fred.grade(student, "Constructors");

console.log(fred.speak());
console.log(fred.demo("JavaScript"));
console.log(fred.grade("Melanie", "JS Sprint"));
console.log(student.listsSubjects("Coding, English, Art"));
console.log(student.PRAssignment("JavaScript"));
console.log(projectManager.standUp("Adam","WEb20"));
console.log(projectManager.debugsCode("VS Code"));
