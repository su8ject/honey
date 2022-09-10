import ActivePanel from "../activePanel";
import Benefits from "../benefits";
import Comments from "../comments";
import DemoCarousel from "../gallery";
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
      <DemoCarousel />
    </div>
  );
};

export default Index;
