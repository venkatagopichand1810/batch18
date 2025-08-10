
function StudentList({students}) {

    return (
        <div>
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p> No Student added yet</p>
            ): (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.name} - grade: {student.grade}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default StudentList