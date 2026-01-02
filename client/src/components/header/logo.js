import { Svg } from "../svg";
import SvgIcon from "@mui/material/SvgIcon";

export const Logo = (props) => {
  return (
    <SvgIcon {...props}>
      <Svg  hash={"logo"} className="logo--img" />
    </SvgIcon>
  );
};
