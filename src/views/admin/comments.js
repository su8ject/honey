import { useEffect, useState } from "react";
import { API } from "../../api";
import { CommentBox } from "./commentBox";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await API.getComment(false);
    setComments(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="gallery">
      {!!comments[0] ? null : (
        <span className="primary-text">Не має не перевірених коментарів</span>
      )}
      {comments.map((comment) => (
        <CommentBox key={comment.objectId} comment={comment} />
      ))}
    </div>
  );
};
