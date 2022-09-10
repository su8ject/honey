import sprite from "../../img/sprite.svg";

const Logo = () => {
  return (
    <div className="header--logo">
      <svg className="logo--img">
        <use href={sprite + "#logo"}></use>
      </svg>
      <span className="header--logo-text">MykolaHoney</span>
    </div>
  );
};

export default Logo;
