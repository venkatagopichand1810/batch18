
function ProductCard({product, onAddCart}) {

    return (
        <>
        
        <div className="product">
            <div className="product-card">
                <img src= {product.image} alt= {product.title} className="product-image" />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <button onClick={() => onAddCart(product)} className="btn">Add to Cart</button>
            </div>
        </div>
        </>
    )
    
}

export default ProductCard