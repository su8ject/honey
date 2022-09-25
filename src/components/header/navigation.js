import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="header--navigation">
        <li>
          <NavLink to="index" className="header--link">
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink to="products-honey" className="header--link">
            Продукти пасічництва
          </NavLink>
        </li>
        <li>
          <NavLink to="products-remanent" className="header--link">
            Реманент пасівництва
          </NavLink>
        </li>
        <li>
          <NavLink to="delivery" className="header--link">
            Доставка
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
