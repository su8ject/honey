import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import apiary1 from "../img/gallery/apiary-1.jpg";
import apiary2 from "../img/gallery/apiary-2.jpg";
import apiary3 from "../img/gallery/apiary-3.jpg";
import apiary4 from "../img/gallery/apiary-4.jpg";
import apiary5 from "../img/gallery/apiary-5.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="foto" showStatus={false} width="50vw">
        <div>
          <img src={apiary1} />
        </div>
        <div>
          <img src={apiary2} />
        </div>
        <div>
          <img src={apiary3} />
        </div>
        <div>
          <img src={apiary4} />
        </div>
        <div>
          <img src={apiary5} />
        </div>
      </Carousel>
    );
  }
}
