import { useEffect, useState } from "react";
import { getAllProducts } from "../api/auth";
import useLocalStorage from "../Hooks/useLocalStorage";
import { Link } from "react-router";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastSelected, setLastSelected] = useLocalStorage("lastSelected", null);
  const [lastTimeStamp, setlastTimeStamp] = useLocalStorage(
    "lastTimeStamp",
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts();
        const now = Date.now();
        console.log(res);
        if (res.status === 200) {
          if (
            !lastSelected ||
            !lastTimeStamp ||
            now - lastTimeStamp > 30 * 60 * 1000
          ) {
            const randomProductIndex = Math.floor(
              Math.random() * res?.data.products.length
            );
            setData([res.data.products[randomProductIndex]]);
            setLastSelected(randomProductIndex);
            setlastTimeStamp(now);
          } else {
            setData([res.data.products[lastSelected]]);
          }
        }
        console.log("Dubble");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [lastSelected, lastTimeStamp, setLastSelected, setlastTimeStamp]);

  console.log(data);
  return (
    <div className="relative">
      <div className="bg-black/50 absolute h-full w-full"></div>
      {data?.map((item) => (
        <div key={item.id} className="h-[calc(80vh)] w-full">
          <img
            src={item.images[0]}
            className="h-full w-full aspect-square object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
            <h1 className="text-4xl md:text-7xl font-bold">
              Product of the day
            </h1>
            <h1 className=" mt-4 font-bold text-3xl md:text-5xl text-center">
              {item.title}
            </h1>
            <Link
              to={`/product/${item.id}`}
              className="mt-4 uppercase border p-3 border-white text-white font-bold w-[200px] text-center"
            >
              View product
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
