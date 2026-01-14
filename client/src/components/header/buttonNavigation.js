import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";


export const ButtonNavigation = ({ pages, onClick }) => {

  return (
    <>
      {pages.map((page, onClick) => (
        <Button
          color="primary.contrastText"
          component={NavLink}
          to={page.link}
          key={page}
          onClick={onClick}
          sx={{ my: 2, display: "block", fontSize: "16px" }}
        >
          {page.name}
        </Button>
      ))}
    </>
  );
};