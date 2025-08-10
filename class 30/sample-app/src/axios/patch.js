
import axios from "axios"; //we need to import after npm install axios
import { useState } from "react";

function App() {
    const [title, setTitle] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            body: "partial update to the title",
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