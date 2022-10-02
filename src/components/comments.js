import { ContainerWrapper } from "./containerWrapper";
import { Comment } from "./comment";
import { comments } from "../static";

export const Comments = () => {
  return (
    <ContainerWrapper header={"Відгуки моїх клієнтів"}>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </ContainerWrapper>
  );
};
