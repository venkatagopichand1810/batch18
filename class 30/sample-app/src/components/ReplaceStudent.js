
function ReplaceStudent() {
    // function to replace the student data


        const handleReplaceStudent = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",  
            headers: {
                "Content-Type": "application/json", //inform server that we are sending the JSON
            },
            body: JSON.stringify({
             id: 1,
             name: "updated student",
             email: "updated@gmail.com"
            }), //replace the entire student object

        })
            .then((res) => res.json()) //convert the response to JSON
            .then((data) => {
                console.log("Student is replaced", data)
            })
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Replace Student</h2>
            <button onClick={handleReplaceStudent} className="bg-blue-500 text-white px-4 py-2 rounded">
                Replace Student with id 1
            </button>
        </div>
    )

}

export default ReplaceStudent