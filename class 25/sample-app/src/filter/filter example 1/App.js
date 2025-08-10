

import Child from "./Child";

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


  return (
   <>
    <div>
       <Child tasks = {tasks}/>
    </div>
   
   </>
  )

}

export default App