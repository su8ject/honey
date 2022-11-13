import { useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/pageTitle";
import { advantages } from "../../static";
import { Boxes } from "./boxes";
import { CommentPopup } from "./commentPopup";
import { Slider } from "./slider";
import cn from "classnames";

export const Index = () => {
  const [comments, setComments] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [active, setActive] = useState(false);

  const fetchComments = async () => {
    const response = await API.getComment(true);
    setComments(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onClick = () => {
    setIsPopup(true);
  };

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
      <Boxes
        type={"comments"}
        array={comments}
        header={"Відгуки моїх клієнтів"}
      />
      <Notification active={active} />
      <div className="buttons comment-button">
        <button className="button" onClick={onClick}>
          Додати коментар
        </button>
      </div>
      <CommentPopup isPopup={isPopup} setIsPopup={setIsPopup} />
    </div>
  );
};

const Notification = ({ active }) => {
  const content = active
    ? "Ваш коментар збережено та буде розміщений після модерації."
    : "";

  return <span className={cn("notification", { active })}> {content} </span>;
};
