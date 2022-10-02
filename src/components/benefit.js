import sprite from "../img/sprite.svg";

export const Benefit = ({ benefit }) => {
  return (
    <div className="advances--container">
      <div className="advances--box">
        <svg className="advances--img">
          <use href={sprite + `#${benefit.svgHash}`}></use>
        </svg>
        <h3 className="advances--header">{benefit.header}</h3>
      </div>
      <p className="primary-text">{benefit.text}</p>
    </div>
  );
};
