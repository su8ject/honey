import SwiftSlider from "react-swift-slider";

export const Slider = () => {
  const data = [
    {
      id: "1",
      src: "https://dreamycats.backendless.app/api/files/img/apiary-1.jpg",
    },
    {
      id: "2",
      src: "https://dreamycats.backendless.app/api/files/img/apiary-2.jpg",
    },
    {
      id: "3",
      src: "https://dreamycats.backendless.app/api/files/img/apiary-3.jpg",
    },
    {
      id: "4",
      src: "https://dreamycats.backendless.app/api/files/img/apiary-4.jpg",
    },
    {
      id: "5",
      src: "https://dreamycats.backendless.app/api/files/img/apiary-5.jpg",
    },
  ];
  return (
    <div className="slider">
      <SwiftSlider data={data} showDots={false} />
    </div>
  );
};
