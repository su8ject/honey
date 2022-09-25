import { useState } from "react";
import { MobileMenu } from "../mobileMenu";

export const Hambl = ({ setHeaderClass }) => {
  const [hamblClass, setHamblClass] = useState("hambl");
  const [mobileMenuClass, setMobileMenuClass] = useState("mobile-menu");

  const hamblHandler = () => {
    if (hamblClass === "hambl") {
      setHamblClass("hambl active");
      setMobileMenuClass("mobile-menu active");
      setHeaderClass("header active");
    } else {
      setHamblClass("hambl");
      setMobileMenuClass("mobile-menu");
      setHeaderClass("header");
    }
  };

  return (
    <div className="hambl-wrapper">
      <div className={hamblClass} onClick={hamblHandler}>
        <span className="hambl-line"></span>
        <span className="hambl-line"></span>
        <span className="hambl-line"></span>
      </div>
      <MobileMenu
        mobileMenuClass={mobileMenuClass}
        hamblHandler={hamblHandler}
      />
    </div>
  );
};
