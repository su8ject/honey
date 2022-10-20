import { useState } from "react";
import { Input, Textarea } from "../../components/basic";
import { PageTitle } from "../../components/pageTitle";
import { advantages, comments } from "../../static";
import { Boxes } from "./boxes";
import { Slider } from "./slider";

const newComment = {
  author: "",
  text: "",
};

export const Index = () => {
  const [comment, setComment] = useState(newComment);

  const validate = ({ author, text }) => {
    return author && text;
  };

  const onClick = (e) => {
    const isValid = validate(comment);
    if (isValid) {
      comments.push(comment);
    }
    setComment(newComment);
  };

  const onChange = (e, field) => {
    setComment((comment) => ({ ...comment, [field]: e.target.value }));
  };

  const { author, text } = comment;
  console.log(!!comments[0]);

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
        <Textarea
          textareaClasses={"input"}
          label={"Комментар:"}
          labelClasses={"comment-label"}
          rows="5"
          onChange={(e) => onChange(e, "text")}
          value={text}
        />
        <Input
          inputClasses={"input"}
          label={"Ім’я та прізвище:"}
          labelClasses={"comment-label"}
          value={author}
          onChange={(e) => onChange(e, "author")}
        />
        <button className="comment-button" onClick={onClick}>
          Відправити
        </button>
      </div>
    </div>
  );
};
