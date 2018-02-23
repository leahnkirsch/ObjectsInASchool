var studentId = 1;
var sectionId = 1;

function Student(firstName, lastName, grade){
    this.id = studentId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
}

function Teacher(firstName, lastName, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.sections = [];
}

function Section(name, size, teacher){
    this.name = name;
    this.size = size;
    this.id = sectionId++;
    this.students = [];
    this.currentsize = this.students.length;
    this.teacher = teacher;
    this.spaceremaining = (size - this.currentsize);
}
