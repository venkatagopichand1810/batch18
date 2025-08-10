import { useState } from "react"

function App() {
    const [user, setUser] = useState({
        name: "venkat",
        age: 30
    });

    // add the new todo to the list
    const increaseAge = () => {
        setUser({...user, age: user.age + 1})
    }



    return (
        <div>
           <h1>User is: {user.name}</h1>
           <p>Age is: {user.age}</p>
            <button onClick={increaseAge}>Increae Age</button>
        </div>
    )

   


}

export default App


// todos