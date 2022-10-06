import { Svg } from "../../components/svg";

export const Comment = ({ comment }) => {
  return (
    <div className="comments--container">
      <p className="primary-text">{comment.text}</p>
      <div className="comments--box">
        <Svg hash={"chat"} className="comments--img" />
        <span className="author">{comment.author}</span>
      </div>
    </div>
  );
};
