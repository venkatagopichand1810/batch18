

function App() {

    const users = [
      {id: 1, name: "ram", age: 20},
      {id: 2, name: "jack", age: 30},
      {id: 3, name: "john", age: 10}
  
    ]
  
    return (
     <>
      <div>
         <h2>Users list</h2>
         <ul>
           {users.map(user => (
            <li key={user.id}>
              Name: {user.name}
              Age: {user.age}
            </li>
           ))}
         </ul>
      </div>
     
     </>
    )
  
  }
  
  export default App