import { useEffect } from "react"

function App() {

  useEffect(() => {
    console.log("component loaded / component mounted")
  })

  return (
    <>
      <h1>Hello world</h1>
    </>
  )

}

export default App