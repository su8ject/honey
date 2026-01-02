import sprite from "../../img/sprite.svg";
import SvgIcon from "@mui/material/SvgIcon";

export const Logo = ({hash, ...props}) => {
  return (
    <SvgIcon {...props}>
      <use href={sprite + `#${hash}`}></use>
    </SvgIcon>
  );
};
