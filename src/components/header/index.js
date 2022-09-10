import Hambl from "./hambl";
import Logo from "./logo";
import Navigation from "./navigation";
import PhoneNumber from "./phoneNumber";

const Header = () => {
  return (
    <div className="header">
      <Hambl />
      <Logo />
      <Navigation />
      <PhoneNumber phoneNumber={380989656054} />
    </div>
  );
};

export default Header;
