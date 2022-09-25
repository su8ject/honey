import { useState } from "react";
import { Hambl } from "./hambl";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { PhoneNumber } from "./phoneNumber";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("header");
  return (
    <div className={headerClass}>
      <Hambl setHeaderClass={setHeaderClass} />
      <Logo />
      <Navigation />
      <PhoneNumber phoneNumber={380989656054} />
    </div>
  );
};

export default Header;
