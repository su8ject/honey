import sprite from "../img/sprite.svg";

export const Comment = ({ comment, name }) => {
  return (
    <div className="comments--container">
      <p className="primary-text">{comment}</p>
      <div className="comments--box">
        <svg className="comments--img">
          <use href={sprite + "#chat"}></use>
        </svg>
        <span className="author">{name}</span>
      </div>
    </div>
  );
};
