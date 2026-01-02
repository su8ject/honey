import { Svg } from "../svg";
import "./style.scss";
import { StyledSvg } from "../UI/SyledSvg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--wrapper">
        <StyledSvg hash="logo" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
