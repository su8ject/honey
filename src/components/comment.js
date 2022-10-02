import sprite from "../img/sprite.svg";

export const Comment = ({ comment }) => {
  return (
    <div className="comments--container">
      <p className="primary-text">{comment.text}</p>
      <div className="comments--box">
        <svg className="comments--img">
          <use href={sprite + "#chat"}></use>
        </svg>
        <span className="author">{comment.author}</span>
      </div>
    </div>
  );
};
