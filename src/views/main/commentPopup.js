import { useCallback, useState } from "react";
import { API } from "../../api";
import { Notification } from "../../components/notification";
import { Popup } from "../../components/popup";

const commentDefaultState = { name: "", content: "" };

export const CommentPopup = ({ isPopup, setIsPopup }) => {
  const [comment, setComment] = useState(commentDefaultState);
  const [active, setActive] = useState(false);

  const validate = ({ name, content }) => {
    return name && content;
  };

  const saveComment = useCallback(async (comment) => {
    try {
      await API.saveComment(comment);
      setComment(commentDefaultState);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const onClick = useCallback(async () => {
    const isValid = validate(comment);
    setActive(true);

    if (isValid) {
      await saveComment(comment);
    }

    setTimeout(() => setActive(false), 2000);
  }, [saveComment, comment]);

  const onChange = (e, field) => {
    setComment((comment) => ({ ...comment, [field]: e.target.value }));
  };

  const { name, content } = comment;

  return (
    <div>
      <Notification active={active} />
      <Popup
        isPopup={isPopup}
        setIsPopup={setIsPopup}
        name={"Додайте коментар"}
      >
        <div className="wrapper-input">
          <textarea
            placeholder="Коментар"
            className="input"
            rows="5"
            onChange={(e) => onChange(e, "content")}
            value={content}
          ></textarea>
          <input
            className="input"
            value={name}
            onChange={(e) => onChange(e, "name")}
            placeholder="Ім’я та прізвище:"
          ></input>
          <button className="button" onClick={onClick}>
            Відправити
          </button>
        </div>
      </Popup>
    </div>
  );
};
