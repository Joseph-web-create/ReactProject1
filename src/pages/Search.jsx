import { useSearchParams } from "react-router";
import { searchProducts } from "../api/products";
import { useState, useEffect } from "react";
import Spinner from "../component/Spinner";
import ProductCard from "../component/ProductCard";

export default function Search() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("query");

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      try {
        const res = await searchProducts(queryParams);
        console.log(res);
        if (res.status === 200) {
          setData(res.data.products);
        }
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getSearch();
  }, [queryParams]);
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-xl">
        Search result for: <strong className="mx-1">{queryParams}</strong>
        <span className="mx-1">({data?.length}) products</span>
      </h1>
      <div className="mt-6">
        {error && <p className="text-sm text-red-500">{error}</p>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            {data?.length > 0 ? (
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                {data.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p>No products found matching your Search query {queryParams}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
