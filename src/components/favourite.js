export const showMark = (event) => {
  event.target.closest(".products-card").children[0].classList.add("block");
};

export const hideMark = (event) => {
  if (
    event.target
      .closest(".products-card")
      .children[0].classList.contains("temp")
  )
    return;
  event.target.closest(".products-card").children[0].classList.remove("block");
};
