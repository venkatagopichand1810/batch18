
// useState, useRef, useEffect, useMemo

// useMemo is a hook that memoizes the result fo the cal...where there is a change in the particular dependency then only cal will happen



import { useMemo, useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('')


  const doubleCount = useMemo(() => {
    console.log("Cal the double value")
    return count * 2
  },[count]); //only runs when count value changed

  return (
    <div>
       <p>Count: {count}</p>
       <p>Double Count: {doubleCount}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <br></br>

       <input
        type="text"
        placeholder="Type something here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )

}

export default App