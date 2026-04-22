import { boxType } from "../../static";
import { StyledSvg } from "../../components/UI/styledSvg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export const MainCard = ({ type, item }) => {
  if (type === boxType.advantages) {
    return (
      <Card>
        <CardContent sx={{ padding: "10px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <StyledSvg hash={item.svgHash} />
            <Typography variant="h5">
              {item.header}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.text}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{ display: "flex" }}>
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "10px"
          }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.text}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: "auto",
            }}>
            <StyledSvg hash="chat" />
            <Typography variant="h5">
              {item.header}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
};
