

import Child from "./Child";

function App() {

const blogs = [
  {id: 1, title: "React Basics", description: "Introduction to react", author: "venkat"},
  {id: 2, title: "HTML Basics", description: "Introduction to HTML", author: "venkat"},
  {id: 3, title: "React Basics", description: "Introduction to react", author: "rama"},
  {id: 4, title: "React Basics", description: "React intro", author: "bala"},

]

  return (
   <>
    <div>
       <Child posts = {blogs}/>
    </div>
   
   </>
  )

}

export default App