import { Box } from "@mui/material";
import { ICollections } from "../../types/collections";
import ImageCollectionItemComp from "../ImageCollectionItemComp";
import TextCollectionItemComp from "../TextCollectionItemComp";
import { flexCenter } from "../../reusableStyles";

export default function MainCollectionItemComp(data: ICollections) {
    return (
        <Box sx={{
            ...flexCenter,
            flexDirection: {xs: 'column', lg: 'row'},
            columnGap: '135px',
            justifyContent: 'space-between',
            marginBottom: '112px',
            }}>
            <ImageCollectionItemComp {...data} />
            <TextCollectionItemComp {...data} />
        </Box>
    )
}