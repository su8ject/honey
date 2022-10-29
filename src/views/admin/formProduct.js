import { Input } from "../../components/basic";

export const FormProduct = ({
  name,
  description,
  price,
  availability,
  imageUrl,
  onChange,
  onCheckboxChange,
}) => {
  return (
    <div className="form-product">
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
        onChange={(e) => onCheckboxChange(e, "availability")}
      />
      <Input
        inputClasses={"input"}
        label={"Посилання на фото"}
        labelClasses={"label"}
        value={imageUrl}
        onChange={(e) => onChange(e, "imageUrl")}
      />
    </div>
  );
};
