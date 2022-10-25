import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export const Slider = () => {
  const images = [1, 2, 3, 4, 5].map((number) => ({
    src: `https://dreamycats.backendless.app/api/files/img/apiary-${number}.jpg`,
  }));
  return (
    <div className="slider">
      <Carousel
        className="slider"
        images={images}
        isMaximized={false}
        hasSizeButton={false}
        hasMediaButton={false}
        hasIndexBoard={false}
        hasThumbnails={false}
      />
    </div>
  );
};
