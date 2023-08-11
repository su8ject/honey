import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Sliderphoto = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
  };
  const images = [1, 2, 3, 4, 5];
  return (
    <Slider {...settings} className="slider">
      {images.map((number) => (
        <img
          src={`https://dreamycats.backendless.app/api/files/img/apiary-${number}.jpg`}
          key={number}
        />
      ))}
    </Slider>
  );
};
