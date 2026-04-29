import { useEffect, useState } from "react";
import { API } from "../../api";
import { PageTitle } from "../../components/UI/pageTitle";
import { Boxes } from "./boxes";
import { CommentPopup } from "./commentPopup";
import { Sliderphoto } from "./slider";
import { mainTitle } from "../../static";
import Container from "@mui/material/Container";
import { SubTitle } from "../../components/UI/subTitle";
import { ApiaryGalery } from "./apiaryGalery";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
      <SubTitle text={"Фото моєї пасіки"} />
      <ApiaryGalery />
      <Boxes
        type={"comments"}
        array={comments}
        header={"Відгуки моїх клієнтів"}
      />
      <div className="buttons comment-button">
        <Box
          sx={{
            width: "100%",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Button variant="contained">
            Додати коментар
          </Button>
        </Box>
      </div>
      <CommentPopup />
    </Container>
  );
};
