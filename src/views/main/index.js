import { useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/pageTitle";
import { advantages } from "../../static";
import { Boxes } from "./boxes";
import { CommentPopup } from "./commentPopup";
import { Sliderphoto } from "./slider";
import "./style.scss";
import disableScroll from "disable-scroll";

export const Index = () => {
  const [comments, setComments] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  isPopup ? disableScroll.on() : disableScroll.off();

  async function fetchComments() {
    const response = await API.getComment(true);
    setComments(response);
  }

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
      <Sliderphoto />
      <Boxes
        type={"comments"}
        array={comments}
        header={"Відгуки моїх клієнтів"}
      />
      <div className="buttons comment-button">
        <button className="button" onClick={onClick}>
          Додати коментар
        </button>
      </div>
      <CommentPopup isPopup={isPopup} setIsPopup={setIsPopup} />
    </div>
  );
};
