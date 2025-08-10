import { useState } from "react"

function StudentForm({onAddStudent}) {

    // state variables
    const[name, setName] = useState("");
    const[grade, setGrade] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); //stopping default behviour
        if(!name || !grade) {
            alert("name and grade are mandatory")
        }
        console.log(name, grade)

        onAddStudent({name, grade})

        // clear the input fields after click on the submit button
        setName('')
        setGrade('')
    }



    return (

        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder="enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type = "text"
                placeholder="enter student grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    )

}

export default StudentForm