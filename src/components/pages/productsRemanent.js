import { useEffect, useState } from "react";
import { getProduct } from "../../api/productService";
import ActivePanel from "../activePanel";
import Loader from "../loader";
import PageTitle from "../pageTitle";
import Popup from "../popup";
import ProductList from "../productList";

const ProductsRemanent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await getProduct("tools");
    setProducts(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg">
      <ActivePanel />
      <Popup />
      <PageTitle header={"Продукти пасічництва"} />
      {isLoading ? <Loader /> : <ProductList cards={products} />}
    </div>
  );
};

export default ProductsRemanent;
