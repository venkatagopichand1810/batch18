import { useState } from "react"

function AddStudent() {
    // state to manage the form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // function to handle the form submission

    const handleAddStudent = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",  //POST METHOD for creating the new resource
            headers: {
                "Content-Type": "application/json", //inform server that we are sending the JSON
            },
            body: JSON.stringify({
                name: name,
                email: email
            })

        })
            .then((res) => res.json()) //convert the response to JSON
            .then((data) => {
                console.log("Student is added", data)
                // reset the from fields
                setName('')
                setEmail('')
            })
    }


    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 mr-2"
                value={name}
                onChange={(e) => setName(e.target.value)}

            />

            <input
                type="email"
                placeholder="Enter your email"
                className="border p-2 mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button 
                onClick={handleAddStudent} 
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Add Student
            </button>
        </div>
    )

}

export default AddStudent