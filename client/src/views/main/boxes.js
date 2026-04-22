import { Title } from "../../components/UI/title";
import { StyledBox } from "./box";
import List from "@mui/material/List";

export const Boxes = ({ type, array, header }) => {
  
  return (
    <List>
      <Title text={header}/>
      {array.map((item) => (
        <StyledBox item={item} type={type} key={item.id} />
      ))}
    </List>
  );
};
