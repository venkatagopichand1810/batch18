
function DeleteStudent() {


    const DeleteStudent = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE",
        })
            .then(() => {
                console.log("Student is DELETED")
            })
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Delete Student</h2>
            <button onClick={DeleteStudent} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete Student with id 1
            </button>
        </div>
    )

}

export default DeleteStudent