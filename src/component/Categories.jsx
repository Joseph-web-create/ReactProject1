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
        console.log(res);
        if (res.status === 200) {
          const random = getProductsCategories(res.data, 8);
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
  console.log("Cart Data", data);

  return (
    <div className="border-t border-b">
      <div className="container max-auto px-4 py-6">
        {data?.map((item, index) => (
          <div>
            <NavLink key={index} className="uppercase mr-4">
              {item}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
