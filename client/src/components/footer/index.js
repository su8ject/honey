import { Svg } from "../svg";
import { StyledSvg } from "../UI/styledSvg";
import {pages} from "../header/pages"
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h6">Про нас</Typography>
            <Typography variant="body2">
              Сімейна пасіка у селі Високе.
            </Typography>
          </Grid>
          <Grid item>
            {pages.map((page) => (
              <NavLink to={page.link} key={page}/>
            ))}
          </Grid>
        </Grid>
        <StyledSvg hash="logo" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <a href={"tel:+380989656054"} className="phone none-decoration">
          +380989656054
        </a>
        <a
          href="mailto:minialuk.mykola@gmail.com"
          className="phone none-decoration"
        >
          minialuk.mykola@gmail.com
        </a>
        <a target="_blank" href="https://www.instagram.com/mukola_m_/?hl=ru">
          <Svg hash={"inst"} className="footer--social-icon" />
        </a>
      </Container>
    </Box>
  );
};
