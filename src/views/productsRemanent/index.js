import { useEffect, useState } from "react";
import { getProduct } from "../../api/productService";
import { Loader } from "../../components/loader";
import { PageTitle } from "../../components/pageTitle";
import { ProductList } from "../../components/productList";

export const ProductsRemanent = () => {
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
      <PageTitle header={"Продукти пасічництва"} />
      {isLoading ? <Loader /> : <ProductList cards={products} />}
    </div>
  );
};
