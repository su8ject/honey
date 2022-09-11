import sprite from "../img/sprite.svg";

const DeliveryAndPaymentMethod = ({ spriteHash, text }) => {
  return (
    <div className="advances--box">
      <svg className="advances--img">
        <use href={sprite + `#${spriteHash}`}></use>
      </svg>
      <span className="advances--header">{text}</span>
    </div>
  );
};

export default DeliveryAndPaymentMethod;
