import { useState } from "react";
import classes from "../form/form.module.css";

export const Form = ({ children, header, ...props }) => {
  const [value, setValue] = useState("");
  const [invalidText, setInvalidText] = useState("");

  const validateTel = (text) => {
    if (value.length !== 12) {
      setInvalidText(text);
    }
  };

  const addInputValue = (text) => {
    setInvalidText("");
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
      <input
        type="tel"
        name="tel"
        placeholder="380"
        value={value}
        onBlur={() =>
          validateTel("Введіть корректний номер телефону!")
        }
        onFocus={() => addInputValue("380")}
        onInput={inputOnlyNumbers}
        className="form-tel--button"
      />
      <button className="form-tel--button" type="button" onClick={logInput}>
        Відправити
      </button>
      <div className="invalid">{invalidText}</div>
    </form>
  );
};
