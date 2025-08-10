

function App() {
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/100", {
      method: "DELETE",  
    })
      .then(() => {
        console.log("USER IS DELETED")
      })
  }
  return (
    <>
      <button onClick={handlePost}>Delete</button>
    </>
  )

}

export default App