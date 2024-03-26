import { List, ListItem } from "@mui/material";
import WineCardItem from "../WineCardItem";

const listStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '24px',
    columnGap: '21px',
    marginBottom: '60px'
}

export default function ListCardWineComp({data = [] }) {
    return (
        <List sx={listStyle} disablePadding>
            {data.map((el, index) => (
                <ListItem key={index} sx={{
                width: '304px',
                display: 'flex',
                justifyContent: 'center',
            }} disableGutters={true} disablePadding={true}>
                    <WineCardItem {...el} />
            </ListItem>
            ))}
        </List>
    )
}