import { Box } from "@mui/material";
// component
import ImageWineComp from "../ImageWineComp";
import TextWineItemComp from "../TextWineItemComp";
// type
import WineById from "../../types/wineById";

export default function DescriptionOneItemComp({data}: WineById) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', lg: 'row'},
            columnGap: '135px',
            justifyContent: 'space-between',
            marginBottom: '112px'
        }}>
            <ImageWineComp data={data} />
            <TextWineItemComp data={data}/>
        </Box>
    )
}