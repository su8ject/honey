import { useCallback, useEffect, useState } from "react";
import { API } from "../../api";
import { Input } from "../../components/basic";
import { FormProduct } from "./formProduct";
import { ProductListAdmin } from "./productListAdmin";

const defaultState = {
  name: "",
  description: "",
  price: "",
  availability: false,
  imageUrl: "",
  type: "item",
};

export const EditingProducts = () => {
  const [state, setState] = useState(defaultState);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await API.getProduct("");
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const validate = ({ name, description, price, imageUrl }) => {
    try {
      new URL(imageUrl);
    } catch {
      console.log("Invalid URL");

      return false;
    }

    return name && description && price && imageUrl && type;
  };

  const saveProduct = useCallback(async (state) => {
    try {
      await API.saveProduct(state);

      setState(defaultState);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const onChange = (e, field) =>
    setState((state) => ({ ...state, [field]: e.target.value }));
  const onCheckboxChange = (e) =>
    setState((state) => ({ ...state, availability: e.target.checked }));

  const { name, description, price, availability, imageUrl, type } = state;

  const onClick = useCallback(async () => {
    const isValid = validate(state);

    if (isValid) {
      await saveProduct(state);
    }

    fetchProducts();
  }, [saveProduct, state]);

  return (
    <div className="wrapper">
      <FormProduct
        name={name}
        description={description}
        price={price}
        availability={availability}
        imageUrl={imageUrl}
        onChange={onChange}
        onCheckboxChange={onCheckboxChange}
      />
      <span className="primary-text">Тип:</span>
      <Input
        inputClasses={"input"}
        label={"Мед"}
        labelClasses={"label"}
        checked={state.type === "item" ? true : false}
        value="item"
        name="type"
        type="radio"
        onChange={(e) => onChange(e, "type")}
      />
      <Input
        inputClasses={"input"}
        label={"Реманент"}
        labelClasses={"label"}
        checked={state.type === "tool" ? true : false}
        value="tool"
        name="type"
        type="radio"
        onChange={(e) => onChange(e, "type")}
      />
      <button className="button" onClick={onClick}>
        Додати товар
      </button>
      <h2 className="primary-header">Мед</h2>
      <ProductListAdmin
        products={products.filter((product) => product.type === "item")}
        fetchProducts={fetchProducts}
      />
      <h2 className="primary-header">Реманент</h2>
      <ProductListAdmin
        products={products.filter((product) => product.type === "tool")}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};
