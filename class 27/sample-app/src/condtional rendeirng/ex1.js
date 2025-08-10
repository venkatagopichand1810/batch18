

// condtional rendering....


import {useState} from "react";

function App(){

  // state variable for the loggedin
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if(isLoggedIn) {
    message = <h1>Welcome back</h1>
  } else {
    message = <h1>Please log in</h1>
  }


  return (
    <div>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
    </div>
  )

}



export default App
