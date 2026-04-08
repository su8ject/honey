import { NavLink } from "react-router-dom";
import { StyledSvg } from "../UI/styledSvg";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";

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
          <ListItemIcon>
            <StyledSvg hash={page.icon} />
          </ListItemIcon>
          <ListItem sx={{ color: "primary.contrastText" }}>
            {page.name}
          </ListItem>
        </MenuItem>
      ))}
    </>
  );
};