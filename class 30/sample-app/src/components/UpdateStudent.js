
function UpdateStudent() {

    const updateStudent = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", //inform server that we are sending the JSON
            },
            body: JSON.stringify({
                name: "NEW UPDATED STUDNET",
            }), //UPDATE THE ONLY THE NAME OF THE STUDENT

        })
            .then((res) => res.json()) //convert the response to JSON
            .then((data) => {
                console.log("Student is updated", data)
            })
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Update Student</h2>
            <button onClick={updateStudent} className="bg-yellow-500 text-white px-4 py-2 rounded">
                Update Student with id 1
            </button>
        </div>
    )

}

export default UpdateStudent