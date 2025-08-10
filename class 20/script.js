// Get the DOM elements
const form = document.getElementById("student-form")
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age")
const courseInput = document.getElementById("course")
const studentList = document.getElementById("student-list")


// array to store the students
let students = []; //empty list of students initially
let editIndex = null; //track the index of the student edited

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value; //get the name from the name input field
    const age = ageInput.value;
    const course = courseInput.value;

    // if not editing
    if(editIndex === null){
        students.push({name, age, course })
    } else {
        //if editing, update the exiting student
        students[editIndex] = {name, age, course};
        editIndex = null; //reset the edit index
    }


    renderStudents();
})


// function to display students in the table

function renderStudents() {

    studentList.innerHTML = ""; //clear the existing rows

    // loop through each student

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td class = "actions">
            <button class = "edit" onclick = "editStudent(${index})">Edit</button>
            <button class = "delete" onclick = "deleteStudent(${index})">Delete</button>
        </td>
        
        `;
        studentList.appendChild(row)
    })
}

// function to populate form for editing

function editStudent(index) {
    const student = students[index]; //get the selected student 
    nameInput.value = student.name; //fill the name input
    ageInput.value = student.age;
    courseInput.value = student.course;
    editIndex = index; //set the edit index

}



function deleteStudent(index) {
    students.splice(index, 1); //remove the student from the array
    renderStudents(); //refresh data
}