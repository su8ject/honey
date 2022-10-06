import { Svg } from "../../components/svg";

export const DeliveryAndPaymentMethod = ({ spriteHash, text }) => {
  return (
    <div className="advantages--box">
      <Svg hash={spriteHash} className="box--img" />
      <span className="box--header">{text}</span>
    </div>
  );
};
