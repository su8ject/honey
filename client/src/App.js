import { HashRouter } from "react-router-dom";
import { ActivePanel } from "./components/activePanel";
import { AppRouter } from "./components/appRouter";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import {theme} from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import "./style/index.scss";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Header />
        <ActivePanel />
        <AppRouter />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
