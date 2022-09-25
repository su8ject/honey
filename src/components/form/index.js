import { useState } from "react";
import classes from "../form/form.module.css";

export const Form = ({ children, header, ...props }) => {
  const [value, setValue] = useState("");
  const [invalideText, setInvalideText] = useState("");

  const ifTheInputIsIncorret = (text) => {
    if (value.length !== 12) {
      setInvalideText(text);
    }
  };

  const addInputValue = (text) => {
    setInvalideText("");
    if (!value) {
      setValue(text);
    }
  };

  const logInput = () => {
    if (value.length === 12) {
      console.log(value);
    }
  };

  const inputOnlyNumbers = ({ target: { value } }) => {
    setValue((prev) => (/\d+/.test(Number(value)) ? value : prev));
  };

  return (
    <form {...props} className={classes.formTel}>
      <label className="form-tel--label primary-text">{header}</label>
      <Input
        type="tel"
        name="tel"
        placeholder="380"
        value={value}
        onBlur={() =>
          ifTheInputIsIncorret("Введіть корректний номер телефону!")
        }
        onFocus={() => addInputValue("380")}
        onInput={inputOnlyNumbers}
      />
      <Button type="button" onClick={logInput} />
      <div className="invalide">{invalideText}</div>
    </form>
  );
};

const Input = ({ ...props }) => {
  return <input {...props} className="form-tel--button" />;
};

const Button = ({ ...props }) => {
  return (
    <button {...props} className="form-tel--button">
      Відправити
    </button>
  );
};
