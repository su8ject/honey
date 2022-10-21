import { useCallback, useState } from "react";
import { API } from "../../api";
import { Input } from "../../components/basic";

export const ProductItemAdmin = ({ product, fetchProducts }) => {
  const [state, setState] = useState(product);

  const onChange = (e, field) => {
    setState((state) => ({ ...state, [field]: e.target.value }));
    console.log(1);
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
      <Input
        inputClasses={"input"}
        label={"Назва"}
        labelClasses={"label"}
        value={state.name}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        inputClasses={"input"}
        label={"Опис"}
        labelClasses={"label"}
        value={state.description}
        onChange={(e) => onChange(e, "description")}
      />
      <Input
        inputClasses={"input"}
        label={"Ціна"}
        labelClasses={"label"}
        value={state.price}
        onChange={(e) => onChange(e, "price")}
      />
      <Input
        type={"checkbox"}
        inputClasses={"input"}
        label={"Наявність"}
        labelClasses={"label"}
        value={state.availability}
        onChange={(e) => onChange(e, "availability")}
      />
      <Input
        inputClasses={"input"}
        label={"Посилання на фото"}
        labelClasses={"label"}
        value={state.imageUrl}
        onChange={(e) => onChange(e, "imageUrl")}
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
