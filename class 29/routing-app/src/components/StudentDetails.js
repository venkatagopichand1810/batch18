import { useParams, useNavigate } from "react-router-dom"

const students = [
    { id: 1, name: "Ram", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
    { id: 2, name: "jack", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
    { id: 3, name: "john", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
    { id: 4, name: "charlie", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
    { id: 5, name: "venkat", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
    { id: 6, name: "shiva", fathername: "rama", address: "Chennai", state: "tamilnadu", country: "india" },
];

function StudentDetails() {
    const { id } = useParams(); //userparams is used to extract the id from the URL
    console.log(id)
    const navigate = useNavigate();

    // find the student by ID from the params

    const student = students.find((s) => s.id === Number(id));

    if (!student) {
        return (
            <div className="details-container">
                <h1>Student is not found</h1>
                <button className="btn-back" onClick={() => navigate(-1)}>Go back</button>
            </div>
        )
    }

    return (
        <div className="details-container">
            <h1>{student.name}</h1>
            <p><strong>Address:</strong>{student.address}</p>
            <p><strong>Fathername:</strong>{student.fathername}</p>
            <p><strong>State:</strong>{student.state}</p>
            <p><strong>Country:</strong>{student.country}</p>
            <button className="btn-back" onClick={() => navigate(-1)}>Back to list</button>
        </div>
    )

}

export default StudentDetails