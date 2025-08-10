

import { useState, useEffect } from "react";


function App() {

  // state to store the cat data
  const [cat, setCat] = useState(null);

  // useEffect

  useEffect(() => {
    //function to fetch the cat data
    const fetchCat = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search"); //call the api
        const data = await response.json(); //parsing the json
        setCat(data[0])

      } catch (error) {
        console.log("error fetching the data")
      }
    }

    fetchCat(); //call the function
  }, [])



  return (
    <div>
      {!cat ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={cat.url} alt={cat.id} />
        </div>
      )}

    </div>
  )

}

export default App