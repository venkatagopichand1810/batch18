
import { useState, useMemo } from "react";

function slowFunction(num){
  console.log("running slow function");
  let result = 0;
  for(let i = 0; i<1e7; i++){
    result += i
  }
  return result + num
}


function App(){

  // state variables
  const[number, setNumber] = useState(0);
  const[dark, setDark] = useState(false);

  const slowResult = useMemo(() => slowFunction(number), [number]);

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px"
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <div style={themeStyle}>
        <p>Slow result: {slowResult}</p>
      </div>

    </div>
  )

}

export default App


// when we have complex calculation, this calculation when we chagne that specfic state....(useMemo)