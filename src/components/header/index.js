import { useState } from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";
import { PhoneNumber } from "./phoneNumber";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className={"header" + `${isMenuActive ? " active" : ""} `}>
      <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Logo />
      <Navigation />
      <PhoneNumber phoneNumber={380989656054} />
    </div>
  );
};

export default Header;
