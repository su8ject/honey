import { Svg } from "../../components/svg";

export const Box = ({ type, item }) => {
  if (type === "advantages") {
    return (
      <div className="advantages--container">
        <div className="advantages--box">
          <Svg hash={item.svgHash} className="box--img" />
          <h3 className="box--header">{item.header}</h3>
        </div>
        <p className="primary-text">{item.text}</p>
      </div>
    );
  } else {
    return (
      <div className="comments--container">
        <p className="primary-text">{item.text}</p>
        <div className="comments--box">
          <Svg hash={"chat"} className="box--img" />
          <span className="box--header">{item.author}</span>
        </div>
      </div>
    );
  }
};
