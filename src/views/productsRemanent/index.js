import { useEffect, useState } from "react";
import { API } from "../../api";
import { Loader } from "../../components/loader";
import { PageTitle } from "../../components/pageTitle";
import { ProductList } from "../../components/productList";

export const ProductsRemanent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await API.getProduct("tool");
    setProducts(response);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg">
      <PageTitle header={"Продукти пасічництва"} />
      {isLoading ? <Loader /> : <ProductList cards={products} />}
    </div>
  );
};
