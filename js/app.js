'use strict'


var table = document.getElementById('table');
creatheader();



function Student_result(Studentname,StudentsGrades,Course_name)
{
    this.Studentname = Studentname;
    this.StudentsGrades = StudentsGrades;
    this.Course_name = Course_name;
    this.array_students.push(this);
}
Student_result.prototype.array_students = [];


function getrandomresult(){

   return Math.floor(Math.random() * 101);
}

Student_result.prototype.createtable = function(){

    var tr = document.createElement('tr');
    tr.appendChild(table);

    var td = document.createElement('td');
    td.textContent = this.Studentname;
    td.appendChild(table);
    
    var td = document.createElement('td');
    td.textContent = this.StudentsGrades;
    td.appendChild(table);

    var td = document.createElement('td');
    td.textContent = this.Course_name;
    td.appendChild(table);
}

function creatheader(){

    var tr = document.createElement('tr');
    tr.appendChild(table);

    var td = document.createElement('td');
    td.textContent = "Students";
    td.appendChild(table);
    var td = document.createElement('td');
    td.textContent = "Grades";
    td.appendChild(table);
    var td = document.createElement('td');
    td.textContent = "Course";
    td.appendChild(table);
}

var form = document.getElementById('form');

form.addEventListener('submit',addresult());

function addresult(){


    var Studentname = document.getElementById('Students_name').value;
    var StudentsGrades = getrandomresult();

    var  course =document.getElementById('Course_name');
    var Course_name  = course.value;


    var newstudent  = new Student_result(Studentname,StudentsGrades,Course_name);

    newstudent.createtable();

    console.log(newstudent);

}