export const showPopup = (name, imgUrl, description, target) => {
  if (
    target.className === "products-card" ||
    target.className === "card-name--text" ||
    target.className === "card-name--price" ||
    target.className === "card--img"
  ) {
    const popup = document.querySelector(".popup");
    const popupTex = document.querySelector(".popup--text");
    const popupImg = document.querySelector(".popup--img");
    const popupDescription = document.querySelector(".popup--description");

    popupTex.innerHTML = name;
    popupImg.innerHTML = `<img src=${imgUrl} class="card--img" />;`;
    popupDescription.innerHTML = description;
    popup.classList.add("open");
  }
};

const hidePopup = () => {
  const popup = document.querySelector(".popup");
  popup.classList.remove("open");
};

const closePopup = (event) => {
  if (
    event.target.className === "popup--cross" ||
    event.target.className === "popup--close" ||
    event.target.className === "popup--body"
  ) {
    hidePopup();
  }
};

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup--body" onClick={closePopup}>
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
            <button type="button" className="popup--close">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
