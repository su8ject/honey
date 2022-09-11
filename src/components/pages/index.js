import ActivePanel from "../activePanel";
import Benefits from "../benefits";
import Comments from "../comments";
import GalleryCarousel from "../gallery";
import PageTitle from "../pageTitle";

const Index = () => {
  return (
    <div className="bg">
      <ActivePanel />
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

export default Index;
