import { Logo } from "../header/logo";
import { PhoneNumber } from "../header/phoneNumber";
import { Email } from "./email";
import { Inst } from "./inst";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--wrapper">
        <Logo />
        <PhoneNumber phoneNumber={380989656054} />
        <Email email={"minialuk.mykola@gmail.com"} />
        <Inst />
      </div>
    </div>
  );
};

export default Footer;
