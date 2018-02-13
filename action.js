var allStudents = [];
var allTeachers = [];
var allSections = [];
var school = [];


function addStudent(){
    var first = document.getElementById("studentFirst").value;
    var last = document.getElementById("studentLast").value;
    var grade = document.getElementById("studentGrade").value;
    if (grade < 9 || grade > 12) {
        document.getElementById("error'").innerHTML = "Error: Only enter students in grades 9-12.";
        return;
    }
    var student = new Student(first, last, grade);
    allStudents.push(student);
    school.push(student);
    document.getElementById("confirmStudent").innerHTML = student.firstName + " " + student.lastName + " has been added.";
    clearBoxes("studentBox");
    Section.addStudent;
}

function addTeacher (){
    var first = document.getElementById("teacherFirst").value;
    var last = document.getElementById("teacherLast").value;
    var subject = document.getElementById("teacherSubject").value;
    var teacher = new Teacher (first, last, subject);
    allTeachers.push(teacher);
    school.push(teacher);
    document.getElementById("confirmTeacher").innerHTML = teacher.firstName + " " + teacher.lastName + " has been added.";
    clearBoxes("teacherBox");
}

function addSection(){
    var subject = document.getElementById("sectionName").value;
    var size = document.getElementById("sectionSize").value;
    var teacher = document.getElementById("sectionTeacher").value;
    var section = new Section(subject, size, teacher);
    allSections.push(section);
    school.push(section);
    document.getElementById("confirmSection").innerHTML = section.name + " has been added.";
    clearBoxes("sectionBox");
}

function hideInfo (divToShow){
    var divsToHide = document.getElementsByClassName("display");
    for (var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none";
    }
    document.getElementById(divToShow).style.display = "inline"
}


function getStudentById (id){
    for (var i = 0; i < allStudents.length; i++){
        if (allStudents[i].id == id){
            return allStudents[i];
        }
    }
}

function getSectionById (id){
    for (var i = 0; i < allSections.length; i++){
        if (allSections[i].id == id){
            return allSections[i];
        }
    }
}

function searchStudent(){
    document.getElementById("studentSearched").innerHTML = "";
    var output = "";
    var stu = parseInt(document.getElementById("getStudents").value);
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id == stu){
            output += "<tr><td>" + "NAME" + "</td>";
            output += "<td>" + "ID" + "</td>";
            output += "<td>" + "GRADE" + "</td>";
            output += "<tr><td>" + allStudents[i].firstName + allStudents[i].lastName + "</td>";
            output += "<td>" + allStudents[i].id + "</td>";
            output += "<td>" + allStudents[i].grade + "</td></tr>";
        }
    }
    document.getElementById("studentSearched").innerHTML = output;
}

function addStudentToSection(){
    var studentId = parseInt(document.getElementById("students").value);
    var sectionId = parseInt(document.getElementById("sections").value);
    var student = getStudentById(studentId);
    var section = getSectionById(sectionId);
    section.students.push(student);
    section.currentsize ++;
    section.spaceremaining --;
    document.getElementById("confirmAddition").innerHTML = student.firstName + student.lastName + " added to " + section.name + ".";
}

function removeStudentFromSection(){
   var studentToRemoveId = parseInt(document.getElementById("students2").value);
   var sectionToRemoveFromId = parseInt(document.getElementById("sections2").value);
   var studentToRemove = getStudentById(studentToRemoveId);
   var sectionToRemoveFrom = getSectionById(sectionToRemoveFromId);
   var index = sectionToRemoveFrom.students.indexOf(studentToRemove);
   sectionToRemoveFrom.student.splice(index, 1);
   sectionToRemoveFrom.spaceremaining ++;
   sectionToRemoveFrom.currentsize --;
   document.getElementById("confirmRemoval").innerHTML = studentToRemove.firstName + studentToRemove.lastName + " removed from " + sectionToRemoveFrom.name +".";
}

function clearBoxes (elements){
    var boxes = document.getElementsByClassName(elements);
    for(var i = 0; i < boxes.length; i++){
        if(boxes[i].type == "text"){
            boxes[i].value = "";
        }
    }
}



function listSections(){
   document.getElementById("sectionInformation").innerHTML = "";
   document.getElementById("studentsEnrolled").innerHTML = "";
   var id = parseInt(document.getElementById("allSections").value);
   var output = "";
   for (var i = 0; i<allSections.length; i++){
        if (allSections[i].id == id){
            console.log(allSections[i]);
            console.log(allSections[i]);
            var getSection = allSections[i];
            output += "<tr><td>" + "name" + "</td>";
            output += "<td>" + "teacher" + "</td>";
            output += "<td>" + "max size" + "</td>";
            output += "<td>" + "current size" + "</td>";
            output += "<td>" + "space remaining" + "</td>";
            output += "<td>" + "students enrolled" + "</td>";
            output += "<td></tr><td>" + getSection.name + "</td>";
            output += "<td>" + getSection.teacher + "</td>";
            output += "<td>" + getSection.size + "</td>";
            output += "<td>" + getSection.currentsize + "</td>";
            output += "<td>" + getSection.spaceremaining + "</td>";
            output += "<td>" + "<button id = 'listStudents' onclick = 'listStudents()' > click to see enrolled students</button>" + "</td>";
            document.getElementById("sectionInformation").innerHTML = output;
            return;
        }
    }
}

function listStudents(){
    var id = parseInt(document.getElementById("allSections").value);
    for (var i = 0; i < allSections.length; i++){
        if(allSections[i] == id){
            var getSection = allSections[i];
            if(getSection.currentSize == 0){
                document.getElementById("studentsEnrolled").innerHTML = "No students currently enrolled in " + getSection.name + ".";
            }
            for(var a = 0; a < getSection.students.length; a++){
                document.getElementById("studentsEnrolled").innerHTML += getSection.students[x].firstName + " " + getSection.students[x].lastName + "<br>";
            }
            return;
        }
    }
}

function list(){
   var  output = "";
    if (document.getElementById("listItems").value == "1"){
        output += "<tr id = 'theList'><td>" + "FIRST NAME" +"</td>";
        output += "<td>" + "LAST NAME" +"</td>";
        output += "<td>" + "GRADE" +"</td>";
        for (var i = 0; i < allStudents.length; i++){
            output += "<tr><td>" + allStudents[i].firstName + "</td>";
            output += "<td>" + allStudents[i].lastName + "</td>";
            output += "<td>" + allStudents[i].grade + "</td></tr>";
        }
    }
    if (document.getElementById("listItems").value == "2"){
        output += "<tr><td>" + "FIRST NAME" +"</td>";
        output += "<td>" + "LAST NAME" +"</td>";
        output += "<td>" + "SUBJECT" +"</td>";
        for (var a = 0; a < allTeachers.length; a++){
            output += "<tr><td>" + allTeachers[a].firstName + "</td>";
            output += "<td>" + allTeachers[a].lastName + "</td>";
            output += "<td>" + allTeachers[a].subject + "</td></tr>";
        }
    }
    if (document.getElementById("listItems").value == "3"){
        output += "<tr><td>" + "SECTION NAME" +"</td>";
        output += "<td>" + "MAX # STUDENTS" +"</td>";
        output += "<td>" + "TEACHER" +"</td>";
        for (var b = 0; b < allSections.length; b++){
            output += "<tr><td>" + allSections[b].name + "</td>";
            output += "<td>" + allSections[b].size + "</td>";
            output += "<td>" + allSections[b].teacher + "</td></tr>";
        }
    }
    document.getElementById("listing").innerHTML = output;
}

function fillLists() {
    document.getElementById("students").innerHTML = "<option value = '0'>Select a student</option>";
    for (var i = 0; i < allStudents.length; i++) {
        document.getElementById("students").innerHTML += "<option value = '" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    document.getElementById("sections").innerHTML = "<option value = '0'>Select a section</option>";
    for (var a = 0; a < allSections.length; a++) {
        document.getElementById("sections").innerHTML += "<option value = '" + allSections[a].id + "'>" + allSections[a].name + "</option>";
    }
    document.getElementById("allSections").innerHTML = "<option value = '0'>Select a section</option>";
    for (var b = 0; b < allSections.length; b++) {
        document.getElementById("allSections").innerHTML += "<option value = '" + allSections[b].id + "'>" + allSections[b].name + "</option>";
    }
    document.getElementById("students2").innerHTML = "<option value = '0'>Select a student</option>";
    for (var c = 0; c < allStudents.length; c++) {
        document.getElementById("students2").innerHTML += "<option value = '" + allStudents[c].id + "'>" + allStudents[c].firstName + " " + allStudents[c].lastName + "</option>";
    }
    document.getElementById("sections2").innerHTML = "<option value = '0'>Select a section</option>";
    for (var d = 0; d < allSections.length; d++) {
        document.getElementById("sections2").innerHTML += "<option value = '" + allSections[d].id + "'>" + allSections[d].name + "</option>";
    }
    document.getElementById("getStudents").innerHTML = "<option value = '0'>Select a student to learn about</option>";
    for (var e = 0; e < allStudents.length; e++) {
        document.getElementById("getStudents").innerHTML += "<option value = '" + allStudents[e].id + "'>" + allStudents[e].firstName + " " + allStudents[e].lastName + "</option>";
    }
}
