import { DeliveryAndPaymentMethod } from "./deliveryAndPaymentMethod";
import { DeliveryContainer } from "./deliveryContainer";
import { PageTitle } from "../../components/pageTitle";
import { Input } from "../../components/basic";
import { useState } from "react";
import { delivery, paymentMethod } from "../../static";

export const Delivery = () => {
  const [value, setValue] = useState("");
  const [invalidText, setInvalidText] = useState("");

  const inputOnlyNumbers = ({ target: { value } }) => {
    setValue((prev) => (/\d+/.test(Number(value)) ? value : prev));
  };

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
  return (
    <div className="bg">
      <PageTitle
        header={"Доставка та оплата"}
        text={
          "Оберіть найзручніший спосіб доставки і оплати та зателефонуйте, для оформлення замовленя, мені за номером + 380 (98) 965 60 54."
        }
      />
      <DeliveryContainer header={"Способи доставки"}>
        {delivery.map((item, id) => (
          <DeliveryAndPaymentMethod
            key={id}
            spriteHash={item.svgHash}
            text={item.text}
          />
        ))}
      </DeliveryContainer>
      <DeliveryContainer header={"Способи оплати"}>
        {paymentMethod.map((item, id) => (
          <DeliveryAndPaymentMethod
            key={id}
            spriteHash={item.svgHash}
            text={item.text}
          />
        ))}
      </DeliveryContainer>
      <DeliveryContainer header={"Залишилися питання?"}>
        <p className="primary-text">
          Якщо у Вас залишилися питання, залиште свій номер телефону і я
          зателефоную вам.
        </p>
        <Input
          label={"Введіть Ваш номер телефону"}
          type={"tel"}
          onChange={inputOnlyNumbers}
          inputClasses={"input"}
          labelClasses={"label"}
          onBlur={() => validateTel("Введіть корректний номер телефону!")}
          value={value}
          onFocus={() => addInputValue("380")}
          placeholder="380"
        >
          <button className="button" type="button" onClick={logInput}>
            Відправити
          </button>
        </Input>

        <div className="invalid">{invalidText}</div>
      </DeliveryContainer>
    </div>
  );
};
