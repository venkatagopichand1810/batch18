

function App() {
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/100", {
      method: "PATCH",  
      headers: {
        "Content-Type": "application/json", //inform server that we are sending the JSON
      },
      body: JSON.stringify({
        title: "UPDATED ONLY THE TITLE OF THE POST",
      })

    })
      .then((res) => res.json()) //convert the response to JSON
      .then((data) => {
        console.log("put response", data)
      })
  }
  return (
    <>
      <button onClick={handlePost}>PATCH</button>
    </>
  )

}

export default App