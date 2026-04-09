import { useEffect, useState } from "react";
import { API } from "../../api";
import { Loader } from "../../components/loader";
import { PageTitle } from "../../components/UI/pageTitle";
import { ProductList } from "./productList";
import "./style.scss";

const ProductTypes = {
  item: "item",
};

export const Products = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await API.getProducts(type);
      setProducts(response);
    } catch(e) {
      setProducts([]);
    };
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [type]);

  const header =
    type === ProductTypes.item ? "Продукти пасічництва" : "Реманент";

  return (
    <div className="bg">
      <PageTitle header={header} />
      {isLoading ? <Loader /> : <ProductList cards={products} />}
    </div>
  );
};
