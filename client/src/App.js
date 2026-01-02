import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { ActivePanel } from "./components/activePanel";
import { AppRouter } from "./components/appRouter";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MobileMenu } from "./components/mobileMenu";
import {theme} from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import "./style/index.scss";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Header
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          menuHandler={menuHandler}
        />
        <MobileMenu isMenuActive={isMenuActive} menuHandler={menuHandler} />
        <ActivePanel />
        <AppRouter isMenuActive={isMenuActive} />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
