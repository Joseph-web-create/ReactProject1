import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getaSingleProduct } from "../api/products";
import Spinner from "../component/Spinner";

export default function ProductDetails() {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSingleProduct = async () => {
      setLoading(true);
      try {
        const res = await getaSingleProduct(productId);
        setData(res.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [productId]);

  console.log(data);

  return (
    <div className="container mx-auto py-6 px-4">
      {error && <p className="text-center text-red-600">{error}</p>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="lg:flex">
            <div className="lg:w-[60%]">
              {data?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className="w-full h-[400px] mb-4"
                  alt="Product images"
                />
              ))}
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
              <div className="">
                <div className="divider"></div>
                <h1 className="font-bold text-lg">Description</h1>
                <p>{data?.description}</p>
                <p className="mt-4">
                  <span>Shipping Information</span>
                  {" "}
                  {data?.shippingInformation}
                </p>
                <p className="mt-4">
                  <span>Warranty Information</span>
                  {" "}
                  {data?.warrantyInformation}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
