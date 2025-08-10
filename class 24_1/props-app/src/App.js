
import Child from "./Child"
function App() {

  const name = "Ram";  //string
  const age = 30; //number
  const user = {   //object
    id: 1,
    email: "ram@gmail.com"
  }
  // array prop
  const hobbies = ["reading", "playing"];
  // json data
  const jsonData = {
    status: "success",
    data: {
      id: 101,
      title: "Post title",
      content: "post content"
    }
  }

  // const users = [
  //   {
  //     id: 1, name: "venkat", age: 30, 
  //     adddress: {
  //       state: "chennai",
  //       city: "tamilnadu"
  //     }
  //   },
  //   {
  //     id: 2, name: "harashaa", age: 30, adddress: {
  //       state: "chennai",
  //       city: "bangalore"
  //     }
  //   },
  //   {
  //     id: 3, name: "ash", age: 30, adddress: {
  //       state: "chennai",
  //       city: "delhi"
  //     }
  //   }
  // ]


  const users = [
    {
      id: 1, name: "venkat", age: 30, 
      adddress: {
        state: "chennai",
        city: "tamilnadu"
      }
    },
    {
      id: 2, name: "harashaa", age: 30, adddress: {
        state: "chennai",
        city: "bangalore"
      }
    },
    {
      id: 3, name: "ash", age: 30, adddress: {
        state: "chennai",
        city: "delhi"
      }
    }
  ]

  return (
    <>
      <Child name={name} age={age} user={user} hobbies={hobbies} jsonData={jsonData} users={users}>
        USER INFORMATION
      </Child>

    </>
  )

}


export default App

// composition