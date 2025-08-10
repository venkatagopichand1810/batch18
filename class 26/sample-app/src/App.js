
import {useState} from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const[students, setStudents] = useState([]);

  // add student

  const addStudent = (student) => {
    setStudents([...students, student])
  }

  //delete student



  return(
    <div>
      <StudentForm onAddStudent = {addStudent}/>
      <StudentList students = {students}/>
    </div>
  )

}

export default App