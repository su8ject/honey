import ContainerWrapper from "./containerWrapper";
import Comment from "./comment";

const Comments = () => {
  return (
    <ContainerWrapper header={"Відгуки моїх клієнтів"}>
      <Comment
        comment={" Відмінний мед, зручна та швидка доставка."}
        name={"Зуєв Ігор"}
      />
      <Comment
        comment={
          " Чудовий мед, беру вже третій рік, дуже подобається. Велике дякую. Упаковка завжди відмінна."
        }
        name={"Давидюк Ярослав"}
      />
      <Comment
        comment={
          " Відмінний мед, беру собі вже років зо три. А тепер і мамі замовляю, має діабет, але від цього справжнього меду ніякого підвищення цукру немає. Прямо не можу наїстися, він різний і кожен по-своєму оригінальний і дуже смачний!"
        }
        name={"Козлова Катерина"}
      />
    </ContainerWrapper>
  );
};

export default Comments;
