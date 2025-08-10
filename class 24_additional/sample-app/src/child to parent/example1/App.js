// child to parent communication
//the parent component will pass a function as a callback as a prop to the child that will be used to pass data back to the parent

import ChildComponent from "./ChildComponent"


function App() {

  
  const handleDataFromChild = (data) => {
    console.log("Data received from the child:", data)
  }


  return(

    <>
      <ChildComponent data = {handleDataFromChild}/>
    </>
  )

}

export default App


// wihtout props we have to send?

//props from parent to child or child to parent....we can use context API