import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export const MenuNavigation = ({ pages, onClick }) => {

  return (
    <>
      {pages.map((page) => (
        <MenuItem
          component={NavLink}
          to={page.link}
          key={page}
          onClick={onClick}
        >
          <Typography sx={{ textAlign: "center" }}>
            {page.name}
          </Typography>
        </MenuItem>
      ))}
    </>
  );
};