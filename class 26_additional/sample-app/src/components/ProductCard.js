
function ProductCard({product}){

    return (
        <div className="product-card">
            <img src = {product.image} className="product-image"/>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
        </div>
    )

}

export default ProductCard