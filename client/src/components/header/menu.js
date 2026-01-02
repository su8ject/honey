import { MobileMenu } from "../mobileMenu";
import disableScroll from "disable-scroll";

export const Menu = ({ isMenuActive, setIsMenuActive }) => {
  const menuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
      disableScroll.off();
    } else {
      setIsMenuActive(true);
      disableScroll.on();
    }
  };

  return (
    <div className="menu-wrapper">
      <div className="menu" onClick={menuHandler}>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>
      <MobileMenu isMenuActive={isMenuActive} menuHandler={menuHandler} />
    </div>
  );
};
