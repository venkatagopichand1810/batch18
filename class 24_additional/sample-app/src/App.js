
import Child from "./Child"

function App() {

  const handleButtonClick = (data) => {
    console.log("data recived from the child: ", data)
  }


  return (
    <div>
      <h1>Parent Component</h1>
      <Child onButtonClick = {handleButtonClick} />
    </div>
  )


}

export default App