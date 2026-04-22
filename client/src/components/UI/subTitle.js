import Typography from "@mui/material/Typography";

export const SubTitle = ({ text }) => {
  return (
    <Typography textAlign="center" variant="h3" margin="10px">
      {text}
    </Typography>
  );
};