import { Box } from "@mui/material";
// components
import TitleComp from "../TitleComp";
// style
const cardStyle = {
    width: '304px',
    height: '388px',
    padding: '15px 0',
    borderRadius: '10px',
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center'
}

export default function LastSeenComp() {
    return (
        <Box sx={{ padding: '60px 0 100px' }}>
            <Box sx={{marginBottom: '44px'}}>
                <TitleComp>Last seen</TitleComp>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={cardStyle}>WineItem</Box>
                <Box sx={cardStyle}>WineItem</Box>
                <Box sx={cardStyle}>WineItem</Box>
                <Box sx={cardStyle}>WineItem</Box>
            </Box>
        </Box>
    )
}