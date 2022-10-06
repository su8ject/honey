import { Svg } from "../../components/svg";

export const Benefit = ({ benefit }) => {
  return (
    <div className="advances--container">
      <div className="advances--box">
        <Svg hash={benefit.svgHash} className="advances--img" />
        <h3 className="advances--header">{benefit.header}</h3>
      </div>
      <p className="primary-text">{benefit.text}</p>
    </div>
  );
};
