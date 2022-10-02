export const Popup = ({
  isPopupActive,
  togglePopup,
  name,
  description,
  img,
}) => {
  return (
    <div className={"popup" + `${isPopupActive ? " open" : ""}`}>
      <div className="popup--body">
        <div className="popup--content">
          <div className="popup--header">
            <span className="card-name--text  popup--text">{name}</span>
            <button
              type="button"
              className="popup--cross"
              onClick={togglePopup}
            >
              &times;
            </button>
          </div>
          <div className="popup--img">
            <img src={img} className="card--img" />
          </div>
          <div className="popup--description">{description}</div>
          <div className="popup--buttons">
            <a href="./delivery.html" className="popup--order">
              Замовити
            </a>
            <button
              type="button"
              className="popup--close"
              onClick={togglePopup}
            >
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
