import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getaSingleProduct } from "../api/products";

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
        console.log(res);
        setData(res.data.product);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      } finally {
        setLoading(true);
      }
    };
    getSingleProduct();
  }, [productId]);
  return <div>ProductDetails</div>;
}
