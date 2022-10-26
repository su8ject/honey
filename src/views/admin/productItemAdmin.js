import { useCallback, useState } from "react";
import { API } from "../../api";
import { FormProduct } from "./formProduct";

export const ProductItemAdmin = ({ product, fetchProducts }) => {
  const [state, setState] = useState(product);

  const onChange = (e, field) => {
    setState((state) => ({ ...state, [field]: e.target.value }));
  };

  const saveProduct = async (state) => {
    await API.saveProduct(state);
  };

  const validate = (state) => {
    try {
      new URL(state.imageUrl);
    } catch {
      setError("Invalid URL");

      return false;
    }

    return (
      state.name &&
      state.description &&
      state.price &&
      state.imageUrl &&
      state.type
    );
  };

  const changeProduct = useCallback(async () => {
    const isValid = validate(state);

    if (isValid) {
      await saveProduct(state);
    }
  }, [saveProduct, state]);

  const removeProduct = async (id) => {
    await API.removeProduct({ objectId: id });
    fetchProducts();
  };

  return (
    <div className="products-card">
      <FormProduct
        name={state.name}
        description={state.description}
        price={state.price}
        availability={state.availability}
        imageUrl={state.imageUrl}
        onChange={onChange}
      />
      <div className="buttons">
        <button className="button" onClick={changeProduct}>
          Змінити
        </button>
        <button
          className="button"
          onClick={() => removeProduct(state.objectId)}
        >
          Видалити
        </button>
      </div>
    </div>
  );
};
