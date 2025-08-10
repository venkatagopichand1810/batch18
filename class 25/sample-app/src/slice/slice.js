



// function App() {

//   const users = [
//     {id: 1, name: "venkat"},
//     {id: 2, name: "ram"},
//     {id: 3, name: "laxman"},
//   ];

//   const findUser = (username) => {
//     const index = users.findIndex(user => user.name === username)
//     return index !== -1 ? `user is found at index ${index}` : "user is not found"
//   }

//   return (
//     <div>
//       <p>{findUser("laxman")}</p>
//       <p>{findUser("rama")}</p>
//     </div>
//   )

// }


// export default App







function App() {

    const users = [
      {id: 1, name: "venkat"},
      {id: 2, name: "ram"},
      {id: 3, name: "laxman"},
      {id: 1, name: "shiva"},
      {id: 2, name: "ganesha"},
      {id: 3, name: "sai"},
    ];
  
    const topUsers = users.slice(0, 4);
  
  
  
  
    return (
      <div>
         <ul>
           {topUsers.map((user, index) => (
            <li>{user.name}</li>
           ))}
         </ul>
      </div>
    )
  
  }
  
  
  export default App