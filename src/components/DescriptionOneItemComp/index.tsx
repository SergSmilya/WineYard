import { Box } from "@mui/material";
// component
import ImageWineComp from "../ImageWineComp";
import TextWineItemComp from "../TextWineItemComp";
// interface
import WineById from "../../types/wineById";

export default function DescriptionOneItemComp({data}: WineById) {
    return (
        <Box sx={{
            display: 'flex',
            columnGap: '135px',
            justifyContent: 'space-between',
            marginBottom: '112px'
        }}>
            <ImageWineComp {...data} />
            <TextWineItemComp {...data}/>
        </Box>
    )
}