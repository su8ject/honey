import { useCallback, useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/pageTitle";
import { advantages } from "../../static";
import { Boxes } from "./boxes";
import { Slider } from "./slider";

import cn from "classnames";

const commentDefaultState = { name: "", content: "" };

export const Index = () => {
  const [comment, setComment] = useState(commentDefaultState);
  const [comments, setComments] = useState([]);
  const [active, setActive] = useState(false);

  const fetchComments = async () => {
    const response = await API.getComment(true);
    setComments(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const validate = ({ name, content }) => {
    return name && content;
  };

  const saveComment = useCallback(async (comment) => {
    try {
      await API.saveComment(comment);
      setComment(newComment);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const onClick = useCallback(async () => {
    const isValid = validate(comment);

    if (isValid) {
      await saveComment(comment);
    }

    setActive(true);

    setTimeout(() => setActive(false), 2000);
  }, [saveComment, comment]);

  const onChange = (e, field) => {
    setComment((comment) => ({ ...comment, [field]: e.target.value }));
  };

  const { name, content } = comment;

  return (
    <div className="bg">
      <PageTitle
        header={"Про мене"}
        text={"Доброго дня, вітаю на моєму сайті. Мене звати Микола."}
      />
      <Boxes
        type={"advantages"}
        array={advantages}
        header={"Чому купувати мед саме у мене?"}
      />
      <h2 className="primary-header">Фото моєї пісіки</h2>
      <Slider />
      {comments?.length ? (
        <Boxes
          type={"comments"}
          array={comments}
          header={"Відгуки моїх клієнтів"}
        />
      ) : (
        <h2 className="primary-header">Коментарі відсутні</h2>
      )}

      <h2 className="primary-header">Додайте коментар</h2>
      <div className="wrapper-input">
        <Notification active={active} />
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
    </div>
  );
};

const Notification = ({ active }) => {
  const content = active
    ? "Ваш коментар збережено та буде розміщений після модерації."
    : "";

  return <span className={cn("notification", { active })}> {content} </span>;
};
