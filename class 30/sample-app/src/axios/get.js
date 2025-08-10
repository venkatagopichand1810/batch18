
import axios from "axios"; //we need to import after npm install axios
import { useState, useEffect } from "react";

function App() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts") //api call to get the posts
            .then((response) => {
                console.log(response);
                setPosts(response.data);
            })
            .catch((error) => {
                console.log("error", error)
            })
    }, [])

    return (
        <div>
            <h2> Get post data</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h4 className="font-bold">{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
     
    )

}

export default App

