import cn from "classnames";

export const Popup = ({ children, isPopup, name, setIsPopup }) => {
  const closePopup = (e) => {
    if ((e.target.className === "popup--body" || e.target.className === "popup--cross")) {
      setIsPopup(false);
    }
  };

  return (
    <div
      className={cn("popup", { active: isPopup })}
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
          {children}
        </div>
      </div>
    </div>
  );
};
