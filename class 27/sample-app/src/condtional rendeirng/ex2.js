

// condtional rendering....


import {useState} from "react";

function App(){

  // state variable for the loggedin
  const[isOnline, setIsOnline] = useState(true);



  return (
    <div>
       {isOnline ? "User is online" : "user is offline"}
      <button onClick={() => setIsOnline(!isOnline)}>Change</button>
    </div>
  )

}



export default App