import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { host } from "../../constants.js"

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
          src={host + "apiary" + number + ".jpg"}
          key={number}
        />
      ))}
    </Slider>
  );
};
