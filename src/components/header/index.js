import { useState } from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";
import "./style.scss";

import cn from "classnames";
import styled from "styled-components";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className={cn("header", { active: isMenuActive })}>
      <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Logo />
      <Navigation />
      <a href={"tel:+380989656054"} className="phone">
        +380989656054
      </a>
    </div>
  );
};
