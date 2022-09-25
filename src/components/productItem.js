import { useState } from "react";
import sprite from "../img/sprite.svg";
import { Popup } from "./popup";

const ProductItem = ({ card, favouriteName }) => {
  const isAvailable = card.availability;
  const isFavourite = favouriteName.includes(card.name);
  const productsCardClasses = "products-card" + `${isAvailable ? "" : " sold"}`;
  const [favouriteIconClasses, setFavouriteIconClasses] = useState(
    "favourite-mark" + `${isFavourite ? " active temp" : ""}`
  );
  const [isPopupActive, setIsPopupActive] = useState(false);

  const showMark = () => {
    if (favouriteIconClasses === "favourite-mark") {
      setFavouriteIconClasses("favourite-mark active");
    }
  };

  const hideMark = () => {
    if (favouriteIconClasses === "favourite-mark active") {
      setFavouriteIconClasses("favourite-mark");
    }
  };

  const handlerMark = (event) => {
    if (favouriteIconClasses === "favourite-mark active temp") {
      setFavouriteIconClasses("favourite-mark active");
    } else {
      setFavouriteIconClasses("favourite-mark active temp");
    }
    localStorage.setItem("favouriteName", JSON.stringify(card.name));
  };

  const showPopup = () => {
    setIsPopupActive(true);
  };

  return (
    <div
      className={productsCardClasses}
      onMouseMove={showMark}
      onMouseOut={hideMark}
      onClick={(event) =>
        showPopup(card.name, card.imageUrl, card.description, event.target)
      }
    >
      <svg className={favouriteIconClasses} onClick={handlerMark}>
        <use href={sprite + "#favourite-mark"}></use>
      </svg>
      <div>
        <img src={card.imageUrl} className="card--img" />
      </div>
      <div className="card-name">
        <span className="card-name--text">{card.name}</span>
        <span className="card-name--price">{card.price}грн</span>
      </div>
      <Popup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive}/>
    </div>
  );
};

export default ProductItem;
