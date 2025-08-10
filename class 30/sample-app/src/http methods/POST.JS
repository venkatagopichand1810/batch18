

function App() {
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",  //POST METHOD for creating the new resource
      headers: {
        "Content-Type": "application/json", //inform server that we are sending the JSON
      },
      body: JSON.stringify({
        title: "New post",
        body: "new post by venkat",
        userId: 1
      })

    })
      .then((res) => res.json()) //convert the response to JSON
      .then((data) => {
        console.log("create the post", data)
      })
  }
  return (
    <>
      <button onClick={handlePost}>POST</button>
    </>
  )

}

export default App