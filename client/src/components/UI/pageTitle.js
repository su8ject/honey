import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Title } from "./title";

export const PageTitle = ({ header, text }) => {
  return (
    <Box textAlign="center">
      <Title text={header}/>
      <Typography variant="subtitle1">{text}</Typography>
    </Box>
  );
};