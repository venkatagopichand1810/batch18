
function App() {
    let mobiles = ["lg", "oppo"];
  
    const addMobile = () => {
      mobiles.push("iphone");
      console.log(mobiles)
    }
  
    return (
      <div>
          <h1>Mobiles:</h1>
          <ul>
            {mobiles.map((mobile, index) => (
              <li key = {index}>{mobile}</li>
            ))}
          </ul>
  
  
          <button onClick = {addMobile}>Add mobile</button>
      </div>
    )
  
  
  }
  
  export default App