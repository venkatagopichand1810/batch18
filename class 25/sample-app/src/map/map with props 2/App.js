

import Child from "./Child";

function App() {

  const productData = [
    {id: 1, title: "Laptop", price: 25000, image: "https://f.media-amazon.com/images/I/71YRiXlRR9L._AC_UY218_.jpg"},
    {id: 2, title: "Desktop", price: 45000, image: "https://f.media-amazon.com/images/I/715OqdQG2LL._AC_UY218_.jpg"},
    {id: 3, title: "TV", price: 36000, image: "https://f.media-amazon.com/images/I/71oXoIMlfTL._AC_UY218_.jpg"},
    {id: 4, title: "Mobile", price: 5000, image: "https://f.media-amazon.com/images/I/71657TiFeHL._AC_UY218_.jpg"}
  ]



  return (
   <>
    <div>
       <Child amazonProducts = {productData}/>
    </div>
   
   </>
  )

}

export default App