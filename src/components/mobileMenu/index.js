import { NavLink } from "react-router-dom";
import "./style.scss";
import cn from "classnames";
import { Svg } from "../svg";

export const MobileMenu = ({ isMenuActive, menuHandler }) => {
  const handler = (e) => {
    e.target.tagName === "DIV" && menuHandler();
  };

  return (
    <div
      className={cn("mobile-menu-wrapper", { active: isMenuActive })}
      onClick={(e) => handler(e)}
    >
      <aside className={cn("mobile-menu", { active: isMenuActive })}>
        <ul className="mobile-navigation">
          <li className="flex-center">
            <Svg hash={"house"} className="menu--img" />
            <NavLink to="index" className="mobile-link" onClick={menuHandler}>
              Головна
            </NavLink>
          </li>
          <li className="flex-center">
            <Svg hash={"honey"} className="menu--img" />
            <NavLink
              to="products-honey"
              className="mobile-link"
              onClick={menuHandler}
            >
              Продукти пасічництва
            </NavLink>
          </li>
          <li className="flex-center">
            <Svg hash={"hive"} className="menu--img" />
            <NavLink
              to="products-remanent"
              className="mobile-link"
              onClick={menuHandler}
            >
              Реманент пасівництва
            </NavLink>
          </li>
          <li className="flex-center">
            <Svg hash={"delivery"} className="menu--img" />
            <NavLink
              to="delivery"
              className="mobile-link"
              onClick={menuHandler}
            >
              Доставка
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};
