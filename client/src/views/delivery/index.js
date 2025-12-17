import { DeliveryAndPaymentMethod } from "./deliveryAndPaymentMethod";
import { DeliveryContainer } from "./deliveryContainer";
import { PageTitle } from "../../components/pageTitle";
import { delivery, paymentMethod } from "../../static";

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
    </div>
  );
};
