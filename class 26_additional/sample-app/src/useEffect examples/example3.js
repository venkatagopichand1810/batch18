// api calling using useEffect
import { useState, useEffect } from "react"
function App() {
  // usestate to hold the data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // fetch data from api using useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // start the loading
        setLoading(true);
        //make the api request
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json(); //parsing the json
        //set the fetched data to state
        setPosts(data);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts();

  }, [] );

  return (
    <div>
      <h1>Posts</h1>
      {/* show the loading message */}
      {loading && <p>Loading the data... please wait</p>} 
      {/* if loading is true, then only show this  */}

      {/* render the fetched posts */}

      <div>
        {posts.map((post) => (
          <div key = {post.id} style={{border: "5px solid green"}}>
             <h2>{post.title}</h2>
             <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )



}

export default App