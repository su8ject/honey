import { useState } from "react";
import ProductItem from "./productItem";

export const ProductList = ({ cards }) => {
  const [favouriteName, setFavouriteName] = useState(
    JSON.parse(localStorage.getItem("favouriteName"))
      ? JSON.parse(localStorage.getItem("favouriteName"))
      : []
  );

  localStorage.setItem("favouriteName", JSON.stringify(favouriteName));

  return (
    <div id="gallery">
      {cards.map((card) => (
        <ProductItem
          card={card}
          key={card.objectId}
          favouriteName={favouriteName}
          setFavouriteName={setFavouriteName}
        />
      ))}
    </div>
  );
};
