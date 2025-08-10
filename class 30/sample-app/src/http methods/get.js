
//Get - read the data from the server and display in the client(browser)
//useState ---we have to use useState becuase we need to store the data in state
//useEffect --> if we are doing an api call we have to use useEffect
import { useState, useEffect } from "react"
function App() {
  // useState variable to store the data 
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //api call to get the posts
      .then((res) => res.json()) //convert the response to JSON
      .then((data) => {
        setPosts(data);
      })
  }, [])
  return (
    <div>
      <h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.title}
            </h2>
            <small>
              {post.body}
            </small>
          </div>
        ))}
      </h1>
    </div>
  )
}

export default App