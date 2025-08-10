// useMemo....is the reack hook that memorizes the result of the function, 
// so it does not re-calculate unnecessarily on every render unless the dependencies changes


import { useState } from "react";

function App() {
    const[count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    //big cal
    const expensiveCalculation = () => {
        console.log("it is calculating")
        let total = 0;
        for(let i =0; i<1_000; i++) {
            total += i
        }
        return total + count
    }

    const result = expensiveCalculation();

    return (
        <div>
            <p>Result is: {result}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setOtherState(otherState + 1)}>Change other state</button>
        </div>
    )

}

export default App

// useMemo

//object des