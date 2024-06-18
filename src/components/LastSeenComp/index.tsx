import { Box, List, ListItem } from "@mui/material";
// components
import TitleComp from "../TitleComp";
import WineCardItem from "../WineCardItem";
import { WineItem } from "../WineCardItem/types";

// style
const cardStyle = {
    width: '304px',
    height: '388px',
    padding: '15px 0',
    borderRadius: '10px',
    color: 'white',
    textAlign: 'center'
}

export default function LastSeenComp({ el }: any) {
    
    return (
        <Box sx={{ padding: '60px 0 100px' }}>
            <Box sx={{marginBottom: '44px'}}>
                <TitleComp>Last seen</TitleComp>
            </Box>
            <ListItem sx={{
                display: 'flex',
                gap: '21.8px'
            }}>
                {el.map((item: WineItem )  => (
                    <List key={item.id} sx={cardStyle}>
                        <WineCardItem el={item} />
                    </List>
                ))}
            </ListItem>
        </Box>
    )
}