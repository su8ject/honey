import ProductItem from "./productItem";

export const ProductList = ({ cards }) => {
  let favouriteName = [];
  if (JSON.parse(localStorage.getItem("favouriteName"))) {
    favouriteName = JSON.parse(localStorage.getItem("favouriteName"));
  }
  return (
    <div id="gallery">
      {cards.map((card) => (
        <ProductItem
          card={card}
          key={card.objectId}
          favouriteName={favouriteName}
        />
      ))}
    </div>
  );
};
