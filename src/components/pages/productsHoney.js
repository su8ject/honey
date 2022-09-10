import { useEffect, useMemo, useState } from "react";
import { getProduct } from "../../api/productService";
import ActivePanel from "../activePanel";
import PageTitle from "../pageTitle";
import Popup from "../popup";
import ProductList from "../productList";

const ProductsHoney = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await getProduct("items");
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg">
      <ActivePanel />
      <Popup />
      <PageTitle header={"Продукти пасічництва"} />
      <ProductList cards={products} />
    </div>
  );
};

export default ProductsHoney;
