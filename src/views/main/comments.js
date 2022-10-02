import { ContainerWrapper } from "../../components/containerWrapper";
import { comments } from "../../static";
import { Comment } from "./comment";

export const Comments = () => {
  return (
    <ContainerWrapper header={"Відгуки моїх клієнтів"}>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </ContainerWrapper>
  );
};
