

function Child({tasks}) {
    const completedTasks = tasks.filter((task) => !task.completed)
    console.log(completedTasks)

    return (
        <div>
            {completedTasks.map((task, index) => (
                <li key ={index}>
                    {task.title}
                </li>

            ))}

        </div>
    )

}

export default Child