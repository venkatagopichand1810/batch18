
// useState -> usestate is the react hook allow to add the state to the functional components

//const[state, setState] = useState(initialValue)

//state ->the current value of the state..
//setState -> function or setter method to update the state
//initialState -> the initial value assigned to the state



// import Child from "./Child";
import {useState} from "react"
function App() {
  // counter example
  const[count, setCount] = useState(0);
  console.log(count);

  const increment = () => {
   setCount(count + 1)// state setter method to update the state variable
  }
  return (
    <div>
      Counter: {count}
       <button onClick={increment}>Incremnt</button> 

    </div>
  )

}

export default App

// 1) only props -> we cant able to change
//2) state + props


// import { Component } from "react";

// class App extends Component {

//   constructor(props) {
//     super(props); //call the parent constructor
//     //initial state
//     this.state = {
//       count: 0
//     }
//   }

//   increment = () => {
//     // update the state using setState
//     this.setState({ count: this.state.count + 1 })

//   }

//   // render method to return jsx
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increment}>Incremnt</button>
//       </div>

//     )
//   }



// }

// export default App