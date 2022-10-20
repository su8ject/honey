import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import apiary1 from "../../img/gallery/apiary-1.jpg";
import apiary2 from "../../img/gallery/apiary-2.jpg";
import apiary3 from "../../img/gallery/apiary-3.jpg";
import apiary4 from "../../img/gallery/apiary-4.jpg";
import apiary5 from "../../img/gallery/apiary-5.jpg";

export const Slider = () => {
  return (
    <div className="slider">
      <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={false}>
        <div data-src={apiary1} />
        <div data-src={apiary2} />
        <div data-src={apiary3} />
        <div data-src={apiary4} />
        <div data-src={apiary5} />
      </AwesomeSlider>
    </div>
  );
};
