import { useState } from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className={"header" + `${isMenuActive ? " active" : ""} `}>
      <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Logo />
      <Navigation />
      <a href={"tel:+380989656054"} className="phone">
        +380989656054
      </a>
    </div>
  );
};

export default Header;
