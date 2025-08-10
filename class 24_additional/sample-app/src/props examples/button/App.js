
import Button from "./Button";

function App() {

  const handleClick = (buttonType) => {
    alert(`${buttonType} button is clicked`)
  }

  return (
    <div>
      <Button label="Cancel" color="red" onClick={() => handleClick("Cancel")} />
      <Button label="Reset" color="yellow" onClick={() => handleClick("Reset")} />
      <Button label="Submit" color="green" onClick={() => handleClick("Submit")} />

    </div>
  )


}

export default App



// reusable button