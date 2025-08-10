

import Child from "./Child";

function App() {

  const events = [
    { title: "Team Meeting", date: "2025-05-02"},
    { title: "code review", date: "2025-05-03"},
    { title: "product Launch", date: "2025-05-02"},
    { title: "Client Visit", date: "2025-05-02"}
  ]




  return (
   <>
    <div>
       <Child events = {events} date = "2025-05-05"/>
    </div>
   
   </>
  )

}

export default App