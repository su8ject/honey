import ListItem from "@mui/material/ListItem";
import { Svg } from "../../components/svg";
import { boxType } from "../../static";
import Box from "@mui/material/Box";
import { StyledSvg } from "../../components/UI/styledSvg";
import { Title } from "../../components/UI/title";
import Typography from "@mui/material/Typography";

export const StyledBox = ({ type, item }) => {
  if (type === boxType.advantages) {
    return (
      <ListItem>
        <Box>
          <StyledSvg hash={item.svgHash}/>
          <Typography variant="h4">{item.header}</Typography>
        </Box>
        <p className="primary-text">{item.text}</p>
      </ListItem>
    );
  } else {
    return (
      <div className="comments--container">
        <p className="primary-text">{item.content}</p>
        <div className="comments--box">
          <Svg hash={"chat"} className="box--img" />
          <span className="box--header">{item.name}</span>
        </div>
      </div>
    );
  }
};
