var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Sam ","Smith",12, "IB Math HL"));
allStudents.push(new Student("Robert","Gilmore",12, "Math Studies"));
allStudents.push(new Student("Max","Washington",12, "AP Statistics"));
allStudents.push(new Student("John","Doe",9, "Algebra"));
allStudents.push(new Student("Jane","Doe",12, "IB Math SL"));

allTeachers.push(new Teacher("Sarah","Robinson","Math Studies"));
allTeachers.push(new Teacher("James","King","IB Math HL"));
allTeachers.push(new Teacher("Walter","Anderson","AP Statistics"));
allTeachers.push(new Teacher("Carla","Madison","IB Math SL"));
allTeachers.push(new Teacher("Amy","Lynch","Algebra"));

allSections.push(new Section("Math Studies",30,"Sarah Robinson"));
allSections.push(new Section("IB Math HL",25,"James King"));
allSections.push(new Section("AP Statistics",30, "Walter Anderson"));
allSections.push(new Section("IB Math SL",32, "Carla Madison"));
allSections.push(new Section("Algebra",30, "Amy Lynch"));


