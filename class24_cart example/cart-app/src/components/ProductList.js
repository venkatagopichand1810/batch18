import ProductCard from "./ProductCard"

function ProductList({products, addToCart}) {

    return (
        <div>
            {products.map((product) => (
               <ProductCard product = {product} addToCart = {addToCart}/>
            ))}
        </div>
    )

}

export default ProductList