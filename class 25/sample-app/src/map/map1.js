

function App() {

    const numbers = [1, 2, 3, 4, 5, 6];
  
    return (
     <>
      <div>
         <h2>Numbers</h2>
         <ul>
           {numbers.map((number, index) => (
            <li key={index}>
              {number}
            </li>
           ))}
         </ul>
      </div>
     
     </>
    )
  
  }
  
  export default App