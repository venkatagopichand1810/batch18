
function Cart({cart, onClose, onRemoveFromCart}) {

    return (
        <>
            <div className="cart">
                <div className="cart-content">
                    <button className="close-button" onClick={onClose}>X</button>
                    <h1>Cart Items</h1>
                    {cart.length === 0 ? (
                        <p>No items in the cart</p>
                    ) : (
                        <div>
                            {cart.map(product => (
                                <div className="cart-item" key={product.id}>
                                    <img src = {product.image} alt={product.title} className="cart-image" />
                                    <div className="cart-info">
                                        <h2>{product.title}</h2>
                                        <p>${product.price}</p>
                                        <button onClick={() => onRemoveFromCart(product.id)} className="removeBtn">Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
    
}

export default Cart