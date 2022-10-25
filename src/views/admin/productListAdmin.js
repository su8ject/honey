import { useEffect, useState } from "react";
import { API } from "../../api";
import { ProductItemAdmin } from "./productItemAdmin";

export const ProductListAdmin = ({ type }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await API.getProduct(type);
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductItemAdmin product={product} key={product.objectId} />
      ))}
    </div>
  );
};
