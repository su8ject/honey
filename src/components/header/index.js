import Hambl from "./hambl";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="header">
      <Hambl />
      <Logo />
      <Navigation />
      <a href="tel:+380989656054" className="phone">
        + 380 (98) 965 60 54
      </a>
    </div>
  );
};

export default Header;
