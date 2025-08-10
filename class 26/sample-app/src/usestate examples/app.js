
import {useState} from "react";


function App() {
  // array of products

  const products = ["Shoes", "T-shirt", "TV", "Shirts", "Mobiles", "mangoes", "samsung"];


  // state for the search input
  const[query, setQuery] = useState('');


  return (
    <div>
      <input 
        type="text"
        placeholder="Search the product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* filter and display the matching products */}

      {products
        .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
        .map((product, index) => (
          <li key={index}>{product}</li>
        ))}
    </div>
  )

}

export default App