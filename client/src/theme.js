import { createTheme } from "@mui/material/styles";

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
        }
    }
});