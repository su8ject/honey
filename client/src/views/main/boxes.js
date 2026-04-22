import Box from "@mui/material/Box";
import { MainCard } from "./mainCard";
import { SubTitle } from "../../components/UI/subTitle";

export const Boxes = ({ type, array, header }) => {

  return (
    <Box>
      <SubTitle text={header} />
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}>
        {array.map((item) => (
          <MainCard item={item} type={type} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};
