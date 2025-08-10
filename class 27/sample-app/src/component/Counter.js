

import { counterReducer } from "../reducer/counterReducer";
import { useReducer } from "react";

function Counter() {

// initial state for the counter

const initialstate = {count: 0};

const[state, dispatch] = useReducer(counterReducer, initialstate);

return (
    <div>
        <h1>Count value is: {state.count}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
        <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </div>
)



}

export default Counter