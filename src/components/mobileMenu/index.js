import { NavLink } from "react-router-dom";

const mobileMenuHandler = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("mobile-menu-active");
};

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul className="mobile-navigation">
        <li>
          <NavLink
            to="index"
            className="mobile-link"
            onClick={mobileMenuHandler}
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-honey"
            className="mobile-link"
            onClick={mobileMenuHandler}
          >
            Продукти пасічництва
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products-remanent"
            className="mobile-link"
            onClick={mobileMenuHandler}
          >
            Реманент пасівництва
          </NavLink>
        </li>
        <li>
          <NavLink
            to="delivery"
            className="mobile-link"
            onClick={mobileMenuHandler}
          >
            Доставка
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
