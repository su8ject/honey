import { NavLink } from "react-router-dom";

export const MobileMenu = ({ isMenuActive, menuHandler }) => {
  return (
    <div className={"mobile-menu" + `${isMenuActive ? " active" : ""}`}>
      <ul className="mobile-navigation">
        <li>
          <NavLink to="index" className="mobile-link" onClick={menuHandler}>
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-honey"
            className="mobile-link"
            onClick={menuHandler}
          >
            Продукти пасічництва
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-remanent"
            className="mobile-link"
            onClick={menuHandler}
          >
            Реманент пасівництва
          </NavLink>
        </li>
        <li>
          <NavLink to="delivery" className="mobile-link" onClick={menuHandler}>
            Доставка
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
