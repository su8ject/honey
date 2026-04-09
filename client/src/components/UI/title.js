import Typography from "@mui/material/Typography";

export const Title = ({text}) => {
    return (
        <Typography variant="h2" component="h2">
            {text}
        </Typography>
    );
};