import { useCallback, useEffect, useState } from "react";
import { API } from "../../api";
import { Input, Textarea } from "../../components/basic";
import { PageTitle } from "../../components/pageTitle";
import { advantages } from "../../static";
import { Boxes } from "./boxes";
import { Slider } from "./slider";

const newComment = {
  name: "",
  content: "",
};

export const Index = () => {
  const [comment, setComment] = useState(newComment);
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
      {!!comments[0] ? (
        <Boxes
          type={"comments"}
          array={comments}
          header={"Відгуки моїх клієнтів"}
        />
      ) : (
        <h2 className="primary-header">Коментарі відсутні</h2>
      )}
      <div className="wrapper-input">
        <h2 className="primary-header">Додайте коментар</h2>
        <span className={active ? "notification active" : "notification"}>
          {active
            ? "Ваш коментар збережено та буде розміщений після модерації."
            : ""}
        </span>
        <Textarea
          textareaClasses={"input"}
          label={"Комментар:"}
          labelClasses={"comment-label"}
          rows="5"
          onChange={(e) => onChange(e, "content")}
          value={content}
        />
        <Input
          inputClasses={"input"}
          label={"Ім’я та прізвище:"}
          labelClasses={"comment-label"}
          value={name}
          onChange={(e) => onChange(e, "name")}
        />
        <button className="comment-button" onClick={onClick}>
          Відправити
        </button>
      </div>
    </div>
  );
};
