import ListItem from "@mui/material/ListItem";
import { Svg } from "../../components/svg";
import { boxType } from "../../static";

export const StyledBox = ({ type, item }) => {
  if (type === boxType.advantages) {
    return (
      <ListItem>
        <div className="advantages--box">
          <Svg hash={item.svgHash} className="box--img" />
          <h3 className="box--header">{item.header}</h3>
        </div>
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
