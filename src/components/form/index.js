import classes from "../form/form.module.css";

export const Form = ({ children, header, ...props }) => {
  return (
    <form {...props} className={classes.formTel}>
      <label className="form-tel--label primary-text">{header}</label>
      <div>{children}</div>
      <div className="invalide"></div>
    </form>
  );
};

export const Input = ({ ...props }) => {
  return <input {...props} className="form-tel--input" />;
};

export const Button = ({ ...props }) => {
  return (
    <button {...props} className="form-tel--button">
      Відправити
    </button>
  );
};

export const ifTheInputIsIncorret = (text) => {
  const formTelInput = document.querySelector(".form-tel--input");
  const invalide = document.querySelector(".invalide");
  if (formTelInput.value.length !== 12) {
    invalide.innerHTML = text;
  }
};

export const addInputValue = (text) => {
  const formTelInput = document.querySelector(".form-tel--input");
  const invalide = document.querySelector(".invalide");
  invalide.innerHTML = "";
  if (!formTelInput.value) {
    formTelInput.value = text;
  }
};

export const logInput = () => {
  const formTelInput = document.querySelector(".form-tel--input");
  if (formTelInput.value.length === 12) {
    console.log(formTelInput.value);
  }
};

export const inputOnlyNumbers = () => {
  const formTelInput = document.querySelector(".form-tel--input");
  formTelInput.value = formTelInput.value.replace(/\D/g, "");
};
