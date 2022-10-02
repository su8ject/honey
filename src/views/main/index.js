import { PageTitle } from "../../components/pageTitle";
import { Benefits } from "./benefits";
import { Comments } from "./comments";
import { GalleryCarousel } from "./gallery";

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
