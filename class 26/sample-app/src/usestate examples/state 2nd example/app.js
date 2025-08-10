
import { useState } from "react";

function App(){
  const[password, setPassword] = useState('venkat'); //state variable to the set the password
  const[showPassword, setShowPassword] = useState(false);
  console.log(password)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <input
        type= {showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />


      <button onClick={() => setShowPassword(!showPassword)}>{showPassword? "Hide" : "Show"}</button>
    </div>
  )

}

export default App




// <input
//         type= 
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

