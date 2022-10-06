import { Svg } from "../../components/svg";

export const DeliveryAndPaymentMethod = ({ spriteHash, text }) => {
  return (
    <div className="advances--box">
      <Svg hash={spriteHash} className="advances--img" />
      <span className="advances--header">{text}</span>
    </div>
  );
};
