import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllProductsByCategory } from "../api/products";
import Spinner from "../component/Spinner";
import ProductCard from "../component/ProductCard";

useParams;

export default function Products() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const res = await getAllProductsByCategory(category);
        console.log(res);
        setData(res.data.products);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, [category]);

  return (
    <div className="container mx-auto py-6 px-4">
      {error && <p className="text-center text-red-600">{error}</p>}
      <h1 className="capitalize my-4 font-semibold text-xl">{category}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data?.length > 0 ? (
            <div className="md:grid grid-cols-4 gap-4">
              {data.map((item) => (
                <ProductCard key={item.id} item={item}/>
              ))}
            </div>
          ) : (
            <p>No products to display for this category</p>
          )}
        </>
      )}
    </div>
  );
}
