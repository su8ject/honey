import { MobileMenu } from "../mobileMenu";

export const Menu = ({ isMenuActive, setIsMenuActive }) => {
  const menuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  return (
    <div className="menu-wrapper">
      <div
        className={"menu" + `${isMenuActive ? " active" : ""}`}
        onClick={menuHandler}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>
      <MobileMenu isMenuActive={isMenuActive} menuHandler={menuHandler} />
    </div>
  );
};
