

function App() {

  const numbers = [1, 2, 3, 4, 5, 6];
  return (
   <>
    <div>
       <h2>Numbers</h2>
       <ul>
         {numbers.map((number) => (
          <li>
            {number}
          </li>
         ))}
       </ul>
    </div>
   
   </>
  )

}

export default App