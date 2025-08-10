
import axios from "axios"; //we need to import after npm install axios
import { useState } from "react";

function App() {
    const [title, setTitle] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: title,
            body: "this is the new post",
            userId: 1,

        })
        .then(respone => {
            console.log("post created", respone.data)
            setTitle("") //crear the field
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your post title"
                />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default App

