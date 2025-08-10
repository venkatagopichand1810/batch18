
import axios from "axios"; //we need to import after npm install axios
import { useState } from "react";

function App() {
 

    const deletePost = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => {
            console.log("post deleted")
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <button onClick={deletePost}>Delete</button>
        </div>

    )
}

export default App



