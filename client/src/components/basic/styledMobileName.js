import { StyledSvg } from "../UI/syledSvg";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const StyledMobileName = () => {

  return (
    <>
      <StyledSvg hash="logo" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        color="primary.contrastText"
        variant="h5"
        noWrap
        component={NavLink}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          textDecoration: "none",
        }}
      >
        MykolaHony
      </Typography>
    </>
  );
};