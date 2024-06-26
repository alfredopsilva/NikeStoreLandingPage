import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

type Product = {
  imgURL: string;
  name: string;
  price: string;
};

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </div>
      <div className="mt-16 items-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product: Product) => (
          <PopularProductCard
            key={product.name}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
