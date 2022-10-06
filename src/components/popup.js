import { Link } from "react-router-dom";

export const Popup = ({
  isPopupActive,
  name,
  description,
  img,
  setIsPopupActive,
}) => {
  const closePopup = (e) => {
    if (e.target.className === "popup--body" || e.target.tagName === "BUTTON") {
      setIsPopupActive(false);
    }
  };

  return (
    <div
      className={"popup" + `${isPopupActive ? " open" : ""}`}
      onClick={(e) => closePopup(e)}
    >
      <div className="popup--body">
        <div className="popup--content">
          <div className="popup--header">
            <span className="card-name--text  popup--text">{name}</span>
            <button type="button" className="popup--cross">
              &times;
            </button>
          </div>
          <div className="popup--img">
            <img src={img} className="card--img" />
          </div>
          <div className="popup--description">{description}</div>
          <div className="popup--buttons">
            <Link to="/delivery" className="popup--order">
              Замовити
            </Link>
            <button type="button" className="popup--close">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
