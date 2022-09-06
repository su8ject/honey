import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/header";
import MobileMenu from "./components/mobileMenu";
import "./style/index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MobileMenu />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
