import { useState } from "react"

function App() {
    const [todos, setTodos] = useState(["Learn React", "HTML"]);

    // add the new todo to the list
    const addTodo = () => {
        setTodos([...todos, "Learn React Routing"])
    }



    return (
        <div>
            Todos:
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
             <button onClick={increment}>Add Todo</button>
        </div>
    )

   


}

export default App


// todos


// venkat

const name = "venkat";
console.log(name)