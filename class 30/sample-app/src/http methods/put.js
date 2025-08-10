

function App() {
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/100", {
      method: "PUT",  //POST METHOD for creating the new resource
      headers: {
        "Content-Type": "application/json", //inform server that we are sending the JSON
      },
      body: JSON.stringify({
        id: 1,
        title: "New post",
        body: "new post by venkat",
        userId: 1
      })

    })
      .then((res) => res.json()) //convert the response to JSON
      .then((data) => {
        console.log("put response", data)
      })
  }
  return (
    <>
      <button onClick={handlePost}>Put</button>
    </>
  )

}

export default App