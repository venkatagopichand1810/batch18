


function App() {

  // initial to do list
  let tasks = ["watch ipl b.w csk rcb", "walking", "sleeping"];

  // move task

  const moveTask = (fromindex, toIndex) => {
    const [task] = tasks.splice(fromindex, 1); //remove the task from the origianl position
    tasks.splice(toIndex, 0, task); //insert the task at the new position
    console.log("updated tasks", tasks)
  }



  //remove task
  const removeTask = (index) => {
    tasks.splice(index, 1); //removes the task at the specified index
    console.log("Updated tasks", tasks)
  }




  return (
    <div>
      <h1>To do list</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key = {index}>
            {task} {' '}
            <button onClick = {() => removeTask(index)}>Remove</button>
            <button onClick = {() => moveTask(index, index-1)}>Move Up</button>
            <button onClick = {() => moveTask(index, index + 1)}>Move down</button>
          </li>
        ))}
      </ul>
    </div>
  )




}

export default App