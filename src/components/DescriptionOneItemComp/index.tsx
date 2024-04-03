import { Box } from "@mui/material";
// component
import ImageWineComp from "../ImageWineComp";
// interface
import WineById from "../../types/wineById";

export default function DescriptionOneItemComp({data}: WineById) {
    return (
        <Box sx={{marginBottom: '112px'}}>
            <ImageWineComp {...data} />
        </Box>
    )
}