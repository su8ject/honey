import { Benefits } from "../benefits";
import { Comments } from "../comments";
import { GalleryCarousel } from "../gallery";
import { PageTitle } from "../pageTitle";

export const Index = () => {
  return (
    <div className="bg">
      <PageTitle
        header={"Про мене"}
        text={"Доброго дня, вітаю на моєму сайті. Мене звати Микола."}
      />
      <Benefits />
      <Comments />
      <GalleryCarousel />
    </div>
  );
};
