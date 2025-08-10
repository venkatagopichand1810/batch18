

// condtional rendering....


import {useState} from "react";

function App(){

  // state variable for the loggedin
  const[showMessage, setShowMessage] = useState(true);



  return (
    <div>
       {showMessage && <p>You have new message</p>}
      <button onClick={() => setShowMessage(!showMessage)}>Change</button>
    </div>
  )

}



export default App

// && -> true....then only it will show message