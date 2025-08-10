import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductList(){

    // state variables to hold the data coming from the api

    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    // fetch the products using useEffect

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false)
        })
    }, []);

    if(loading) {
        return <div>Loading the products please wait.......</div>
    }

    if(error) {
        return <div> Error fetching the products</div>
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key = {product.id} product = {product} />
            ))}
        </div>
    )

}

export default ProductList