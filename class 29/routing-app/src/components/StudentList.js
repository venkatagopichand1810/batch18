

import {useNavigate} from "react-router-dom";

// sample students list
const students = [
    { id: 1, name: "Ram", age: 20, major: "PHysics" },
    { id: 2, name: "jack", age: 21, major: "Maths" },
    { id: 3, name: "john", age: 22, major: "React" },
    { id: 4, name: "charlie", age: 23, major: "HTML" },
    { id: 5, name: "venkat", age: 24, major: "CSS" },
    { id: 6, name: "shiva", age: 25, major: "Javascript" }
];


function StudentList() {
    const navigate = useNavigate();

    const goToDetails = (id) => {
        navigate(`/student/${id}`)
    }


    return (
        <div className="student-list">
            {students.map(student => (
                <div
                    key={student.id}
                    onClick={() => goToDetails(student.id)}
                    className="student-card"
                    
                >
                    <h1>{student.name}</h1>
                    <p>Age is: {student.age}</p>
                    <small>Major Subject is: {student.major}</small>
                </div>
            ))}
        </div>
    )


}

export default StudentList