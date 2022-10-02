import { Logo } from "../header/logo";
import { PhoneNumber } from "../header/phoneNumber";
import sprite from "../../img/sprite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--wrapper">
        <Logo />
        <PhoneNumber phoneNumber={380989656054} />
        <a
          href="mailto:minialuk.mykola@gmail.com"
          className="phone none-decoration"
        >
          minialuk.mykola@gmail.com
        </a>
        <a target="_blank" href="https://www.instagram.com/mukola_m_/?hl=ru">
          <svg className="footer--social-icon">
            <use href={sprite + "#inst"}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
