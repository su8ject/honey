import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter";
import Footer from "./components/footer";
import Header from "./components/header";
import MobileMenu from "./components/mobileMenu";
import { loadTheme } from "./components/theme";
import "./style/index.css";

function App() {
  useEffect(() => {
    loadTheme();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <MobileMenu />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
