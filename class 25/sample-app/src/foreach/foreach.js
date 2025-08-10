

function App() {


    const tasks = [
      {title: "Complete HTML assignment",  completed: true},
      {title: "Complete CSS assignment",  completed: true},
      {title: "Complete Javascript assignment",  completed: false},
      {title: "Complete react assignment",  completed: true},
      {title: "Complete mongoDB assignment",  completed: true},
      {title: "Complete Mongoose assignment",  completed: false},
      {title: "Complete jira assignment",  completed: true},
      {title: "Complete scrum assignment",  completed: true},
      {title: "Complete python assignment",  completed: false}
    ]
  
    // create the list of tasks and add a completed label based on the task status
  
    const taskItems = [];
    tasks.forEach(task => {
      taskItems.push(
        <li style = {{textDecoration: task.completed ? "line-through" : "none"}}>
          {task.title}
        </li>
      )
    })
  
    return (
      <div>
        <ul>
          {taskItems}
        </ul>
      </div>
    )
  
  }
  
  export default App