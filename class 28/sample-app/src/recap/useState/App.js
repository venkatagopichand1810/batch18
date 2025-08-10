import { useState } from "react"

function App() {

    const[count, setCount] = useState(100);

    const increment = () => {
       setCount(count + 200)
    }


    return (
        <div>
            <h1>Count: {count}</h1>
            {/* <button onClick={increment}> Increment </button> */}
            <button onClick={() => setCount(count + 200)}> Increment </button>
        </div>
    )


}

export default App

// const[state, setState] = useState(initialValue)