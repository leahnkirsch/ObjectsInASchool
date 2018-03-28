var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Sam ","Smith",12));
allStudents.push(new Student("Robert","Gilmore",12));
allStudents.push(new Student("Max","Washington",12));
allStudents.push(new Student("John","Doe",9));
allStudents.push(new Student("Jane","Doe",12));

allTeachers.push(new Teacher("Sarah","Robinson","AP Physics"));
allTeachers.push(new Teacher("James","King","AP Calculus BC"));
allTeachers.push(new Teacher("Walter","Anderson","IB US History"));
allTeachers.push(new Teacher("Carla","Madison","Computer Science"));
allTeachers.push(new Teacher("Amy","Lynch","English"));

allSections.push(new Section("AP Physics",30,"Sarah Robinson"));
allSections.push(new Section("AP Calculus BC",25,"James King"));
allSections.push(new Section("IB US History",30, "Walter Anderson"));
allSections.push(new Section("Computer Science",32, "Carla Madison"));
allSections.push(new Section("English",30, "Amy Lynch"));


