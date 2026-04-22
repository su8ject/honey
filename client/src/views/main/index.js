import { useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/UI/pageTitle";
import { Boxes } from "./boxes";
import { CommentPopup } from "./commentPopup";
import { Sliderphoto } from "./slider";
import { mainTitle } from "../../static";
import Container from "@mui/material/Container";

export const Index = () => {
  const [comments, setComments] = useState([]);
  const [advantages, setAdvantages] = useState([]);

  async function fetchComments() {
    const response = await API.getComments();
    setComments(response);
  };

  async function fetchAdvantages() {
    const responce = await API.getAdvantages();
    setAdvantages(responce);
  };

  useEffect(() => {
    fetchComments();
    fetchAdvantages();
  }, []);

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
        <button>
          Додати коментар
        </button>
      </div>
      <CommentPopup/>
    </Container>
  );
};
