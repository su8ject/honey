import sprite from "../../img/sprite.svg";

export const Logo = () => {
  return (
    <div className="header--logo">
      <svg className="logo--img">
        <use href={sprite + "#logo"}></use>
      </svg>
      <span className="header--logo-text">MykolaHoney</span>
    </div>
  );
};
