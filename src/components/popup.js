import { useState } from "react";

export const Popup = ({ isPopupActive, setIsPopupActive }) => {
  const [popupClass, setPopupClass] = useState(
    "popup" + `${isPopupActive ? " open" : ""}`
  );

  const closePopup = () => {
    setIsPopupActive(false);
  };

  return (
    <div className={popupClass}>
      <div className="popup--body">
        <div className="popup--content">
          <div className="popup--header">
            <span className="card-name--text  popup--text"></span>
            <button type="button" className="popup--cross">
              &times;
            </button>
          </div>
          <div className="popup--img"></div>
          <div className="popup--description"></div>
          <div className="popup--buttons">
            <a href="./delivery.html" className="popup--order">
              Замовити
            </a>
            <button type="button" className="popup--close" onClick={closePopup}>
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
