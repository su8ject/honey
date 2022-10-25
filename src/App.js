import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { ActivePanel } from "./components/activePanel";
import { AppRouter } from "./components/appRouter";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MobileMenu } from "./components/mobileMenu";
import "./style/index.css";

function App() {
  const [theme, setTheme] = useState("main-theme");
  const [isMenuActive, setIsMenuActive] = useState(false);

  const loadTheme = () => {
    if (localStorage.getItem("theme") === "additional") {
      setTheme("additional-theme");
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const menuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  return (
    <div className={theme}>
      <HashRouter>
        <Header
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          menuHandler={menuHandler}
        />
        <MobileMenu isMenuActive={isMenuActive} menuHandler={menuHandler} />
        <ActivePanel setTheme={setTheme} />
        <AppRouter isMenuActive={isMenuActive} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
