

function Child({amazonProducts}) {

    return (
       <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-6">
            {amazonProducts.map((product) => (
                <div key={product.id} className="">
                    <img src = {product.image} alt= {product.title} className="w-full" />
                    <h3 className="text-lg font-semibold">{product.title}</h3>   
                    <h3 className="text-orange-600">Rs: {product.price} /-</h3>                 
                </div>
            ))}
          </div>
       </div>
    )

}

export default Child