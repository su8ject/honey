import { HashRouter } from "react-router-dom";
import { AppRouter } from "./components/appRouter";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { inputGlobalStyles } from "./inputGlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}
      <HashRouter>
        <Header />
        <AppRouter />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;