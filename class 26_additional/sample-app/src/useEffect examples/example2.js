
import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  const increment = () => {
    setCount(count + 1)
  }

  const incrementage = () => {
    setAge(age + 1)
  }

  // useEffect(() => {
  //   console.log("component loaded / component mounted")
  // }) //if we dont have any dependency then it will call all the time based on the user interfaction

  //   useEffect(() => {
  //   console.log("component loaded / component mounted")
  // }, []); //if we use empty dependency then it will call only once



  //   useEffect(() => {
  //   console.log(`${count}`)
  //     console.log(`${age}`)
  // }, []); //if we use empty dependency then it will call only once


  // useEffect(() => {
  //   console.log(`${count}`)
  // }, [count]); //whenever there is a change in the count..


  // useEffect(() => {
  //   console.log(`${age}`)
  // }, [age]); //whenever there is a change in the count..

  //either count or age change

  // useEffect(() => {
  //   console.log(`either count ${count} or age ${age} is changed `)
  // }, [count, age])

  
  // useEffect(() => {
  //   console.log(`count ${count} `)
  // }, [count])

  // // clean up
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("timer is running", timer)
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("Cleanup: Timer cleared")
  //   }
  // }, [count])


  useEffect(() => {
    if(count === 6) {
      alert("sorry cant add more items")
    }
  }, [count])


  return (
    <>
      <h1>Counter value: {count}</h1>
      <button onClick={increment}>Increment</button>
      <p>Age is : {age}</p>
      <button onClick={incrementage}>Age</button>
    </>
  )

}

export default App