import { useState } from "react";
import sprite from "../img/sprite.svg";
import { Popup } from "./popup";

const ProductItem = ({ card, favouriteName, setFavouriteName }) => {
  const isAvailable = card.availability;
  const [isFavourite, setIsFavourite] = useState(
    favouriteName.includes(card.name)
  );
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handlerMark = () => {
    if (isFavourite) {
      setFavouriteName(
        favouriteName.filter((name) => {
          return name !== card.name;
        })
      );
    } else {
      setFavouriteName(favouriteName.concat(card.name));
    }
    setIsFavourite(!isFavourite);
  };

  const openPopup = (e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "use") {
      return;
    }
    setIsPopupActive(true);
  };

  const closePopup = () => {
    setIsPopupActive(false);
  };

  return (
    <div>
      <div
        className={"products-card" + `${isAvailable ? "" : " sold"}`}
        onClick={(e) => openPopup(e)}
      >
        <svg className="favourite-mark" onClick={handlerMark}>
          <use
            href={sprite + `${isFavourite ? "#favourite-mark" : "#star"}`}
          ></use>
        </svg>
        <div>
          <img src={card.imageUrl} className="card--img" />
        </div>
        <div className="card-name">
          <span className="card-name--text">{card.name}</span>
          <span className="card-name--price">{card.price}грн</span>
        </div>
      </div>
      <Popup
        closePopup={closePopup}
        isPopupActive={isPopupActive}
        name={card.name}
        img={card.imageUrl}
        description={card.description}
      />
    </div>
  );
};

export default ProductItem;
