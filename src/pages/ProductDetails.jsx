import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getaSingleProduct, getAllProducts } from "../api/products";
import Spinner from "../component/Spinner";
import ProductCard from "../component/ProductCard";
import useScroll from "../Hooks/UseScroll";

export default function ProductDetails() {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { scroll, scrollRef } = useScroll();

  useEffect(() => {
    const getSingleProduct = async () => {
      setLoading(true);
      try {
        const [res, resProducts] = await Promise.all([
          getaSingleProduct(productId),
          getAllProducts(),
        ]);
        setData(res.data);
        setRecommended(resProducts.data.products);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [productId]);

  console.log(data);
  console.log(recommended);

  const getRecommendedProducts = recommended?.filter(
    (product) => product.category !== data.category
  );

  return (
    <div className="container mx-auto py-6 px-4">
      {error && <p className="text-center text-red-600">{error}</p>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="lg:flex">
            <div className="lg:w-[60%]">
              <div
                className={`grid ${
                  data?.images?.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {data?.images?.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className="w-full h-[400px] mb-4 object-contain"
                    alt="Product images"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-[40%]">
              <p className="font-bold mb-4">{data?.category}</p>
              <h1 className="text-3xl font-bold">{data?.title}</h1>
              <p className="text-xl mt-2">{data?.price}</p>
              <p>
                Availability: <span>{data?.availabilityStatus}</span>
              </p>
              <button className="btn btn-primary btn-lg w-full mt-4">
                Add To Cart
              </button>
              <div>
                <div className="divider"></div>
                <h1 className="font-bold text-lg">Description</h1>
                <p>{data?.description}</p>
                <p className="mt-4">
                  <span>Shipping Information</span> {data?.shippingInformation}
                </p>
                <p className="mt-4">
                  <span>Warranty Information</span> {data?.warrantyInformation}
                </p>
                <div className="divider"></div>

                <h1>Reviews</h1>
                <div>
                  {data?.reviews?.map((review, index) => (
                    <div className="my-4" key={index}>
                      <h1 className="font-bold">{review.reviewerName}</h1>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="mt-10">
        <h1 className="font-bold text-2xl">You may also like</h1>
        <div className="relative">
          <div
            className="mt-6 lg:max-w-[90%] mx-auto flex gap-6 overflow-x-auto scrollbarHide"
            ref={scrollRef}
          >
            {getRecommendedProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="hidden lg:block">
            <i
              className="ri-arrow-left-s-line text-7xl absolute top-[35%] left-0 cursor-pointer"
              role="button"
              onClick={() => scroll("left")}
            ></i>
            <i
              className="ri-arrow-right-s-line text-7xl absolute top-[35%] right-0 cursor-pointer"
              role="button"
              onClick={() => scroll("right")}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
