import { Svg } from "../svg";

export const Logo = () => {
  return (
    <div className="header--logo">
      <Svg hash={"logo"} className="logo--img" />
      <span className="header--logo-text">MykolaHoney</span>
    </div>
  );
};
