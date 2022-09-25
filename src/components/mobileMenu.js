import { NavLink } from "react-router-dom";

export const MobileMenu = ({ mobileMenuClass, hamblHandler }) => {
  return (
    <div className={mobileMenuClass}>
      <ul className="mobile-navigation">
        <li>
          <NavLink to="index" className="mobile-link" onClick={hamblHandler}>
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-honey"
            className="mobile-link"
            onClick={hamblHandler}
          >
            Продукти пасічництва
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-remanent"
            className="mobile-link"
            onClick={hamblHandler}
          >
            Реманент пасівництва
          </NavLink>
        </li>
        <li>
          <NavLink to="delivery" className="mobile-link" onClick={hamblHandler}>
            Доставка
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
