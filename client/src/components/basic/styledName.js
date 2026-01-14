import { StyledSvg } from "../UI/syledSvg";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const StyledName = () => {
    
  return (
    <>
      <StyledSvg hash="logo" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        color="primary.contrastText"
        variant="h6"
        noWrap
        component={NavLink}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
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