

function App(){

    const cartItems = [
      {id: 1, name: "Acer laptop", price: 51999},
      {id: 2, name: "mobile", price: 25000},
      {id: 3, name: "GaxQuly Electric Juicer", price: 949},
  
    ];
  
    // reduce method
  
    const Subtotal = cartItems.reduce((acc, currItem) => {
      return acc + currItem.price; //add the price of each cart item to the accumulator 
    }, 0)
  
    return (
      <div>
        <h1>Shopping cart</h1>
        <p>Total Price: ${Subtotal}</p>
      </div>
    )
  
  
  
  
  }
  
  export default App