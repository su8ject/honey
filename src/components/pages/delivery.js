import { DeliveryAndPaymentMethod } from "../deliveryAndPaymentMethod";
import { DeliveryContainer } from "../deliveryContainer";
import { Form } from "../form";
import { PageTitle } from "../pageTitle";

export const Delivery = () => {
  return (
    <div className="bg">
      <PageTitle
        header={"Доставка та оплата"}
        text={
          "Оберіть найзручніший спосіб доставки і оплати та зателефонуйте, для оформлення замовленя, мені за номером + 380 (98) 965 60 54."
        }
      />
      <DeliveryContainer header={"Способи доставки"}>
        <DeliveryAndPaymentMethod
          spriteHash={"bike"}
          text={"Доставка по м. Житомир безкоштовна"}
        />
        <DeliveryAndPaymentMethod
          spriteHash={"package"}
          text={"Доставка в інші міста за Ваш рахунок"}
        />
      </DeliveryContainer>
      <DeliveryContainer header={"Способи оплати"}>
        <DeliveryAndPaymentMethod spriteHash={"money"} text={"Готівкою"} />
        <DeliveryAndPaymentMethod
          spriteHash={"card"}
          text={"Банківською картою"}
        />
      </DeliveryContainer>
      <DeliveryContainer header={"Залишилися питання?"}>
        <p className="primary-text">
          Якщо у Вас залишилися питання, залиште свій номер телефону і я
          зателефоную вам.
        </p>
        <Form
          header={"Введіть Ваш номер телефону"}
          action=""
          method="get"
          name="tel"
        />
      </DeliveryContainer>
    </div>
  );
};
