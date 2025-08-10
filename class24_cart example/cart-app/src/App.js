import Cart from "./components/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"


function App() {

  const products = [
    {id: 1, name: "TV", price: 25000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/5/q/j/-original-imahbchewysyxjfv.jpeg?q=70"},
    {id: 1, name: "TV", price: 25000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/n/c/x/-original-imah8br9ey4pfcgj.jpeg?q=70"},
    {id: 1, name: "TV", price: 25000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/s/y/-original-imah4smtchzwyhgs.jpeg?q=70"}
  ]

  const cartItems = [
    {id: 1, name: "TV", price: 25000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/5/q/j/-original-imahbchewysyxjfv.jpeg?q=70"},
  ]


  const addToCart = (product) => {
    console.log(`Added to cart: ${product.name}`)
  }

  return (
    <div>
      <Header />
      <ProductList products = {products} addToCart = {addToCart}/>
      <Cart cartItems = {cartItems}/>
      <Footer />


    </div>
  )

}

export default App

// number, string, object, array, function