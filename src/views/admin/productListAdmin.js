import { useEffect, useState } from "react";
import { API } from "../../api";
import { ProductItemAdmin } from "./productItemAdmin";

export const ProductListAdmin = ({ type }) => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await API.getProduct(type);
    setProducts(response);
  }

  useEffect(() => {
    fetchProducts();
  }, [type]);

  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductItemAdmin
          product={product}
          key={product.objectId}
          fetchProducts={fetchProducts}
        />
      ))}
    </div>
  );
};
