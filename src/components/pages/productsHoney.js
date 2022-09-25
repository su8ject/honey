import { useEffect, useState } from "react";
import { getProduct } from "../../api/productService";
import { Loader } from "../loader";
import { PageTitle } from "../pageTitle";
import { ProductList } from "../productList";

export const ProductsHoney = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await getProduct("items");
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
