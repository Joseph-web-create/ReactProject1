import ProductCard from "./ProductCard";

export default function TopRated({ products }) {
  console.log(products);
  const getTopratedProducts = products?.filter((item) => item.rating > 4);
  console.log(getTopratedProducts);

  return (
    <div className="container mx-auto mt-16">
      <h1 className="font-semibold text-xl text-center">Top Rated Products</h1>
      <div className="mt-10 flex gap-6 overflow-scroll">
        {getTopratedProducts.map((items) => (
          <ProductCard key={items.id} item={items} />
        ))}
      </div>
    </div>
  );
}
