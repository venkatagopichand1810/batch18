
function App() {
    let mobiles = ["lg", "oppo"];
  
    const removeMobile = () => {
  
       const removedMobile = mobiles.pop();
       console.log(removedMobile)
    }
  
    return (
      <div>
          <h1>Mobiles:</h1>
          <ul>
            {mobiles.map((mobile, index) => (
              <li key = {index}>{mobile}</li>
            ))}
          </ul>
  
  
          <button onClick = {removeMobile}>remove mobile</button>
      </div>
    )
  
  
  }
  
  export default App
  
  