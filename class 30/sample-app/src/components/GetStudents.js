import { useEffect, useState } from "react"

function GetStudents() {

    // state to hold the list of students
    const [students, setStudents] = useState([]);

    // fetch the students data

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setStudents(data))
    }, []);

    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Student Lists</h2>
            <ul className="space-y-2">
                {students.map((student) => (
                    <li key={student.id} className="p-4 bg-gray-200 rounded shadow">
                        <p className="font-bold">{student.name}</p>
                        <p>{student.email}</p>
                    </li>

                ))}
            </ul>
        </div>
    )




}

export default GetStudents