import ProductCard from "./ProductCard";
import useScroll from "../Hooks/UseScroll";

export default function TopRated({ products }) {
  const getTopratedProducts = products?.filter((item) => item.rating > 4);

  const {scroll,scrollRef} = useScroll()

  return (
    <div className="bg-gray-200  py-6 px-4">
      <div className="container mx-auto mt-16 relative">
        <h1 className="font-semibold text-xl text-center">
          Top Rated Products
        </h1>
        <div
          className="mt-10 lg:max-w-[90%] mx-auto flex gap-6 overflow-x-auto pb-4 scrollbarHide"
          ref={scrollRef}
        >
          {getTopratedProducts.map((items) => (
            <ProductCard key={items.id} item={items} />
          ))}
        </div>
        <div className="hidden lg:block">
          <i
            className="ri-arrow-left-s-line text-7xl absolute top-[35%] left-0 cursor-pointer"
            role="button"
            onClick={() => scroll('left')}
          ></i>
          <i
            className="ri-arrow-right-s-line text-7xl absolute top-[35%] right-0 cursor-pointer"
            role="button"
            onClick={() => scroll('right')}
          ></i>
        </div>
      </div>
    </div>
  );
}
