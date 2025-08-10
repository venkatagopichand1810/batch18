// product/profilecard

import ProductCard from "./ProductCard"
import "./App.css"
import products from "./data/ProductData"

function App() {

  return (
    <div className="productcard">
      {products.map(function(product){
        return (
          <ProductCard
           name = {product.name}
           title = {product.title}
           image= {product.image}
           description= {product.description}
          />
        )
     })}


      {/* <ProductCard
        name="Nothing Phone (3a)"
        title="Nothing Phone (3a) (White, 128 GB)  (8 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/t/h/-original-imah9xz4atgnwu63.jpeg?q=70"
        description="Replay life's best bits again and again with the Phone (3a)'s camera system that consistently delivers true-to-life results. Captures every light and shadow in stunning detail for elite-level shots, wherever you are. Boasting a large, light-absorbing 50 MP sensor with the largest full well capacity in its class, a high-res 50 MP telephoto sensor with up to 30X ultra zoom, a 32 MP front camera for superstar groufies, and a 120º ultra-wide field of view. All four sensors support Ultra HDR photo output."
      />


      <ProductCard
        name="I Kall K333 Plus Touch "
        title="I Kall K333 Plus Touch and Type (Sky Blue, 16 GB)  (2 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/i/8/k333-plus-touch-and-type-k333-plus-touch-and-type-i-kall-original-imaguzxasavxbje3.jpeg?q=70"
        description="I KALL K333 Touch and Type Mobile comes with impressive 2.8 inch display that provides sharp and clear visuals. With 2GB of RAM that ensures smooth and seamless performance. The device also comes equipped with 16GB of storage, providing ample space for all your photos, videos, and files. Running on the latest Android 12 operating system, this mobile phone offers a user-friendly interface with improved privacy and security features. The device supports 4G SIM"
      />

      <ProductCard
        name="vivo T4x 5G"
        title="vivo T4x 5G (Pronto Purple, 128 GB)  (8 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70"
        description="Go All Day , Every Day with no limits with vivo T4x 5G. The 6500 mAh battery and 44W FlashCharge deliver all-day energy, quick recharges, and smart efficiency for nonstop use."
      />

      <ProductCard
        name="Nothing Phone (3a)"
        title="Nothing Phone (3a) (White, 128 GB)  (8 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/t/h/-original-imah9xz4atgnwu63.jpeg?q=70"
        description="Replay life's best bits again and again with the Phone (3a)'s camera system that consistently delivers true-to-life results. Captures every light and shadow in stunning detail for elite-level shots, wherever you are. Boasting a large, light-absorbing 50 MP sensor with the largest full well capacity in its class, a high-res 50 MP telephoto sensor with up to 30X ultra zoom, a 32 MP front camera for superstar groufies, and a 120º ultra-wide field of view. All four sensors support Ultra HDR photo output."
      />


      <ProductCard
        name="I Kall K333 Plus Touch "
        title="I Kall K333 Plus Touch and Type (Sky Blue, 16 GB)  (2 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/i/8/k333-plus-touch-and-type-k333-plus-touch-and-type-i-kall-original-imaguzxasavxbje3.jpeg?q=70"
        description="I KALL K333 Touch and Type Mobile comes with impressive 2.8 inch display that provides sharp and clear visuals. With 2GB of RAM that ensures smooth and seamless performance. The device also comes equipped with 16GB of storage, providing ample space for all your photos, videos, and files. Running on the latest Android 12 operating system, this mobile phone offers a user-friendly interface with improved privacy and security features. The device supports 4G SIM"
      />

      <ProductCard
        name="vivo T4x 5G"
        title="vivo T4x 5G (Pronto Purple, 128 GB)  (8 GB RAM)"
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70"
        description="Go All Day , Every Day with no limits with vivo T4x 5G. The 6500 mAh battery and 44W FlashCharge deliver all-day energy, quick recharges, and smart efficiency for nonstop use."
      /> */}



      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  )

}

export default App