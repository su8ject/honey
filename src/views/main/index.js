import { PageTitle } from "../../components/pageTitle";
import { advantages, comments } from "../../static";
import { Boxes } from "./boxes";
import { GalleryCarousel } from "./gallery";

export const Index = () => {
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
      <Boxes
        type={"comments"}
        array={comments}
        header={"Відгуки моїх клієнтів"}
      />
      <GalleryCarousel />
    </div>
  );
};
