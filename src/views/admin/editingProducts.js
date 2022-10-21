import { useCallback, useState } from "react";
import { API } from "../../api";
import { Input } from "../../components/basic";
import { ProductListAdmin } from "./productListAdmin";

const defaultState = {
  name: "",
  description: "",
  price: "",
  availability: false,
  imageUrl: "",
  type: "item",
};

export const EditingProducts = ({ setError }) => {
  const [state, setState] = useState(defaultState);

  const validate = ({ name, description, price, imageUrl }) => {
    try {
      new URL(imageUrl);
    } catch {
      setError("Invalid URL");

      return false;
    }

    return name && description && price && imageUrl && type;
  };

  const saveProduct = useCallback(
    async (state) => {
      try {
        await API.saveProduct(state);

        setState(defaultState);
      } catch (error) {
        setError(error.message);
      }
    },
    [setError]
  );

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
  }, [saveProduct, state]);

  return (
    <div className="wrapper">
      <Input
        inputClasses={"input"}
        label={"Назва"}
        labelClasses={"label"}
        value={name}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        inputClasses={"input"}
        label={"Опис"}
        labelClasses={"label"}
        value={description}
        onChange={(e) => onChange(e, "description")}
      />
      <Input
        inputClasses={"input"}
        label={"Ціна"}
        value={price}
        labelClasses={"label"}
        onChange={(e) => onChange(e, "price")}
      />
      <Input
        inputClasses={"input"}
        type="checkbox"
        label={"Наявність"}
        labelClasses={"label"}
        value={availability}
        onChange={onCheckboxChange}
      />
      <Input
        inputClasses={"input"}
        label={"Посилання на фото"}
        labelClasses={"label"}
        value={imageUrl}
        onChange={(e) => onChange(e, "imageUrl")}
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
      <ProductListAdmin type={"item"} />
      <h2 className="primary-header">Реманент</h2>
      <ProductListAdmin type={"tool"} />
    </div>
  );
};
