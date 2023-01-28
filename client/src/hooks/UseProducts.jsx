import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await axios
      .get("/api/v1/products")
      .then((serverRes) => {
        setProducts(serverRes.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
