
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

import "./App.css"
function App() {

  // create the state variables

  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  // useeffect to fetch the products

  useEffect(() => {
    // fetch the data
    const fetchProduct = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const productData = await productResponse.json()
        setProduct(productData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [])

  if (loading) {
    return <h1>Data is loading please wait</h1>
  }

  // to add the product in the cart

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart")
      return;
    }
    else {
      setCart([...cart, product])
    }
  }

  const removeCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  return (

    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} />
      <h1>Products</h1>

      {/* display the products with productcard */}

      <div className="product">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddCart={addToCart}
          />
        ))}

      </div>

      {/* conditional render the cat component */}
      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemoveFromCart={removeCart}
        />
      )}


    </div>
  )

}

export default App