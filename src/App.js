import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { ActivePanel } from "./components/activePanel";
import { AppRouter } from "./components/appRouter";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./style/index.css";

function App() {
  const [theme, setTheme] = useState("main-theme");

  const loadTheme = () => {
    if (localStorage.getItem("theme") === "additional") {
      setTheme("additional-theme");
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <div className={theme}>
      <HashRouter>
        <Header />
        <ActivePanel setTheme={setTheme} />
        <AppRouter />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
