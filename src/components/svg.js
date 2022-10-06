import sprite from "../img/sprite.svg";

export const Svg = ({ hash, ...props }) => {
  return (
    <svg {...props}>
      <use href={sprite + `#${hash}`}></use>
    </svg>
  );
};
