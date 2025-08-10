// useEffect -> when we do an api call

import { useState, useEffect } from "react";


function App() {
    // state variables
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // create the function to do an api call
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json(); //parsing the json data...we are going to get the data here
                // console.log(data)
                console.log(response)
                console.log(data)
                setPosts(data)

            } catch (error) {
                console.log("some issues")
            } finally {
                setLoading(false)
            }
        }
        fetchData(); //call the api fetch
    }, []) //call only once     

    if(loading) return <p>Data is loading....</p>

    return (
        <div>
            {posts.map(post => (
                <div>
                     <h2>{post.title}</h2>
                     <p>{post.body}</p>
                </div>
            ))}

        </div>
    )

}

export default App