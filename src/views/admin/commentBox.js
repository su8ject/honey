import { API } from "../../api";

export const CommentBox = ({ comment, fetchComments }) => {
  const remove = async (id) => {
    await API.removeComment({ objectId: id });
    fetchComments();
  };

  const toApprove = async (comment) => {
    comment.accepted = true;
    await API.saveComment(comment);
    fetchComments();
  };
  return (
    <div className="comment-box">
      <span className="primary-text">Ім’я: {comment.name}</span>
      <span className="primary-text">Коментар: {comment.content}</span>
      <div className="buttons">
        <button className="button" onClick={() => remove(comment.objectId)}>
          Видалити
        </button>
        <button className="button" onClick={() => toApprove(comment)}>
          Розмістити
        </button>
      </div>
    </div>
  );
};
