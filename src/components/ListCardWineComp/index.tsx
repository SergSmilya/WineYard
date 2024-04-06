import { List, ListItem } from "@mui/material";
import WineCardItem from "../WineCardItem";

interface WineArr {
    id: number;
  goods_color: string;
  goods_type: string;
  goods_name: string;
  goods_img: string;
  goods_price: number;
  country_goods: {
    name: string;
  };
}

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '24px',
    columnGap: '21px',
    marginBottom: '60px'
}

export default function ListCardWineComp({ data = [] }: { data: WineArr[] }) {
    return (
        <List sx={listStyle} disablePadding>
            {data.length !== 0 && data.map((el, index) => (
                 <ListItem key={index} sx={{
                    width: '304px',
                    display: 'flex',
                    justifyContent: 'center',
                }} disableGutters={true} disablePadding={true}>
                    <WineCardItem el={el} />
                </ListItem>
            ))}
        </List>
    )
}