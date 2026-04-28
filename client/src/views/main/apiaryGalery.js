import ImageList from "@mui/material/ImageList";
import { host } from "../../constants";
import ImageListItem from "@mui/material/ImageListItem";

export const ApiaryGalery = () => {

    const images = [1, 2, 3, 4, 5];

    return (
        <ImageList
            sx={{ width: "100%" }}
            variant="quilted"
            cols={3}
            rowHeight={121}
        >
            {images.map((number) => (
                <ImageListItem key={number}>
                    <img
                        src={host + "apiary" + number + ".jpg"}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};