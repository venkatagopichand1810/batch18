
import "./ProductCard.css"
function ProductCard({ name, title, image, description }) {


    return (
        <>
            <div className = "product-card">
                <img className = "product-image" src={image} alt={name} />
                <h2 className = "product-name">{name}</h2>
                <h4 className = "product-title">{title}</h4>
                <p className = "product-description">{description}</p>
            </div>

        </>
    )

}

export default ProductCard