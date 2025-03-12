import { useEffect, useState } from "react";
import { getAllProducts } from "../api/auth";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts();
        console.log(res);
        
      } catch (error) {
        console.log(error);
        
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);
  return <div></div>;
};

export default Home;