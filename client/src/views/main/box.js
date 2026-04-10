import ListItem from "@mui/material/ListItem";
import { Svg } from "../../components/svg";
import { boxType } from "../../static";
import Box from "@mui/material/Box";

export const StyledBox = ({ type, item }) => {
  if (type === boxType.advantages) {
    return (
      <ListItem>
        <Box>
          <Svg hash={item.svgHash} className="box--img" />
          <h3 className="box--header">{item.header}</h3>
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
