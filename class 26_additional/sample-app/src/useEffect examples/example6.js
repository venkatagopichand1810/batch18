import { useState, useEffect } from "react";
function App() {
  // state to store the cat data
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10"); //call the api
        const data = await response.json(); //parsing the json
        //we have the maintain the existing cats plus add the new cats
        setCats((prevCats) => [prevCats, data]); //adding the new cats to the existing list

      } catch (error) {
        console.log("error fetching the data")
      }
    }
  // useEffect
  useEffect(() => {
    //function to fetch the cat data
    fetchCats(); //call the function
  }, [])
  return (
    <div style={{textAlign: "center", padding: "20px"}}>
      <h1>All Cats</h1>
      {cats.length === 0 ? (
        <p>Loading...... the cats</p>
      ) : (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
            {cats.map((cat, index) => (
              <div key={index}>
                  <img src = {cat.url} alt={cat.id} />
              </div>
            ))}
        </div>
      )}
      <button onClick={fetchCats} >Load more Cats</button>
    </div>
  )
}
export default App