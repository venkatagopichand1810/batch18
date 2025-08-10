import { useState } from "react"
import "./StudentForm.css";


function StudentForm() {

    // we have to create the state variables 

    // const[name, setName] = useState("");
    // const[age, setAge] = useState("");
    // const[course, setCourse] = useState("");

    const [student, setStudent] = useState({
        name: "",
        age: "",
        course: ""
    })

    // handle change for all the inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value
        }))
    }





    // handle submit function form submission

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5001/api/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            if (res.ok) {
                const data = await res.json();

                //clear form
                setStudent({
                    name: "",
                    age: "",
                    course: ""
                })
            } else {
                console.log("Failed to submit")
            }

        } catch (error) {
            console.log("Error", error.message)
        }
    }





    return (
        <>

            <form onSubmit={handleSubmit} className="student-form">
                <input
                    type="text"
                    placeholder="Please enter your name"
                    value={student.name}
                    name="name"
                    required
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="Please enter your age"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    placeholder="Please enter your course name"
                    value={student.course}
                    name="course"
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>

        </>
    )



}

export default StudentForm