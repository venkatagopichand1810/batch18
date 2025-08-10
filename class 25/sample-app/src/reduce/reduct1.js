

function App() {

    const marks = [100, 98, 600, 36, 79];
  
    const max = marks.reduce((acc, curr) => {
      // compare the current value with the acc and we are keep the max value
      return curr > acc ? curr : acc
    }, marks[0])
  
    return (
      <div>
        <p> max value: {max}</p>
      </div>
    )
  
  }
  
  export default App
  
  