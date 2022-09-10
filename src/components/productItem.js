import sprite from "../img/sprite.svg";
import { hideMark, showMark } from "./favourite";
import { showPopup } from "./popup";

const ProductItem = ({ card, favouriteName }) => {
  const isAvailable = card.availability;
  const isFavourite = favouriteName.includes(card.name);
  const productsCardClasses = "products-card" + `${isAvailable ? "" : " sold"}`;
  const favouriteIconClasses =
    "favourite-mark" + `${isFavourite ? " temp block" : ""}`;

  const handlerMark = (event) => {
    const nameProduct =
      event.target.closest(".products-card").children[2].children[0].innerHTML;

    event.target.closest(".favourite-mark").classList.toggle("temp");

    if (favouriteName.includes(nameProduct)) {
      favouriteName = favouriteName.filter((name) => {
        return name !== nameProduct;
      });
    } else {
      favouriteName.push(nameProduct);
    }
    localStorage.setItem("favouriteName", JSON.stringify(favouriteName));
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
    </div>
  );
};

export default ProductItem;
