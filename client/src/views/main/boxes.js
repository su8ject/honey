import { StyledBox } from "./box";
import List from "@mui/material/List";

export const Boxes = ({ type, array, header }) => {
  
  return (
    <List>
      {array.map((item) => (
        <StyledBox item={item.text} type={type} key={item.id} />
      ))}
    </List>
  );
};
