import sprite from "../img/sprite.svg";

export const Benefit = ({ header, text, svgHash }) => {
  return (
    <div className="advances--container">
      <div className="advances--box">
        <svg className="advances--img">
          <use href={sprite + `#${svgHash}`}></use>
        </svg>
        <h3 className="advances--header">{header}</h3>
      </div>
      <p className="primary-text">{text}</p>
    </div>
  );
};
