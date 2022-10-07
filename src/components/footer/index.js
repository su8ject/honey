import { Logo } from "../header/logo";
import { Svg } from "../svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--wrapper">
        <Logo />
        <a href={"tel:+380989656054"} className="phone none-decoration">
          +380989656054
        </a>
        <a
          href="mailto:minialuk.mykola@gmail.com"
          className="phone none-decoration"
        >
          minialuk.mykola@gmail.com
        </a>
        <a target="_blank" href="https://www.instagram.com/mukola_m_/?hl=ru">
          <Svg hash={"inst"} className="footer--social-icon" />
        </a>
      </div>
    </div>
  );
};
