import { useEffect, useState } from "react";
import { API } from "../../api";
import { Loader } from "../../components/loader";
import { PageTitle } from "../../components/pageTitle";
import { ProductList } from "./productList";
import "./style.scss";
import { PRODUCTS } from "../../static";

const ProductTypes = {
  item: "item",
};

export const Products = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await API.getProduct(type);
      setProducts(response);
    } catch(e) {
      setProducts(PRODUCTS[type]);
    };
    setIsLoading(false);
  };

async function test() {
  await API.test();
  console.log(1);
  }

  useEffect(() => {
    fetchProducts();
  }, [type]);

  const header =
    type === ProductTypes.item ? "Продукти пасічництва" : "Реманент";

  return (
    <div className="bg">
      <button onClick={test}>TEST</button>
      <PageTitle header={header} />
      {isLoading ? <Loader /> : <ProductList cards={products} />}
    </div>
  );
};
