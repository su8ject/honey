import { createTheme } from "@mui/material/styles";
import { host } from "./constants";

export const theme = createTheme({
    typography: {
        fontFamily: "Lora, serif",
    },
    palette: {
        primary: {
            main: "#fecf4b",
            light: "#fedb6d",
            dark: "#feb61a",
            contrastText: "#50220a"
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: `url(${host}background.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#fedb6d",
                },
            },
        },
    },
});