

function ProductCard({product, addToCart}) {

    return (
        <div>
            <img src = {product.image} alt = {product.name}/>
            <h2>{product.name}</h2>
            <p>Price: Rs {product.price}</p>
            <button onClick = {() => addToCart(product)}>Add to cart</button>

        </div>
    )
}

export default ProductCard