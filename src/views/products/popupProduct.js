import { Link } from "react-router-dom";
import { Popup } from "../../components/popup";

export const PopupProduct = ({
  isPopup,
  name,
  description,
  img,
  setIsPopup,
}) => {
  return (
    <Popup isPopup={isPopup} setIsPopup={setIsPopup} name={name}>
      <div className="popup--img">
        <img src={img} className="card--img" />
      </div>
      <div className="popup--description">{description}</div>
      <div className="popup--buttons">
        <Link to="/delivery" className="popup--order">
          Замовити
        </Link>
        <button type="button" className="button">
          Закрити
        </button>
      </div>
    </Popup>
  );
};
