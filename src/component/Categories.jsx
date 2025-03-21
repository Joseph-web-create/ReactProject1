import { useState, useEffect } from "react";
import { getProductsCategories } from "../api/products";
import { NavLink } from "react-router";

export const Categories = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomCategories = (arr, num) => {
    const shuffle = [...arr].sort(() => 0.5 - Math.random());
    return shuffle.slice(0, num);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getProductsCategories();

        if (res.status === 200) {
          const random = getRandomCategories(res.data, 8);
          setData(random);
        }
      } catch (error) {
        console.log(error);
        setError(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hidden md:block border-t border-b">
      <div className="container max-auto px-4 py-6">
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading ? (
          <p className="text-center">Fetching Categories...</p>
        ) : (
          <>
            {data?.length > 0 ? (
              <div className="flex justify-center items-center gap-5">
                {data?.map((item, index) => (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      `uppercase hover:text-primary text-sm ${
                        isActive ? "text-zinc-700 font-bold" : ""
                      }`
                    }
                    to={`/products/${item}`}
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            ) : (
              <p className="text-center">No Category items to display</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
