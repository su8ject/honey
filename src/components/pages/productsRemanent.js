import { useEffect, useState } from "react";
import { getProduct } from "../../api/productService";
import ActivePanel from "../activePanel";
import PageTitle from "../pageTitle";
import Popup from "../popup";
import ProductList from "../productList";

const ProductsRemanent = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await getProduct("tools");
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

export default ProductsRemanent;
