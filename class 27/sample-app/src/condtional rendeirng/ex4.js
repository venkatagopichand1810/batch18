

// condtional rendering....

// inline conditional rendering

import {useState} from "react";

function App(){

  // state variable for the loggedin
  const[age, setAge] = useState(15);



  return (
    <div>
      initial age {age}
       <p>{age >=18 ? "YOu are adult and can vote" : "you are not eligible"}</p>
      <button onClick={() => setAge(age + 1)}>Age Increase</button>
    </div>
  )

}



export default App

// && -> true....then only it will show message