import { useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/UI/pageTitle";
import { advantages } from "../../static";
import { Boxes } from "./boxes";
import { CommentPopup } from "./commentPopup";
import { Sliderphoto } from "./slider";
import disableScroll from "disable-scroll";
import { mainTitle } from "../../static";
import Container from "@mui/material/Container";

export const Index = () => {
  const [comments, setComments] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  isPopup ? disableScroll.on() : disableScroll.off();

  async function fetchComments() {
    const response = await API.getComments();
    setComments(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onClick = () => {
    setIsPopup(true);
  };

  return (
    <Container fixed>
      <PageTitle
        header={mainTitle.header}
        text={mainTitle.text}
      />
      <Boxes
        type={"advantages"}
        array={advantages}
        header={"Чому купувати мед саме у мене?"}
      />
      <h2 className="primary-header">Фото моєї пасіки</h2>
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
    </Container>
  );
};
