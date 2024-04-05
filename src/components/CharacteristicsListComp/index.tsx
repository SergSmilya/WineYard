import { List, ListItem } from "@mui/material";
// components
import CharacteristicsTextComp from "../CharacteristicsTextComp";
// interface
import WineById from "../../types/wineById";

export default function CharacteristicsListComp({ data }: WineById) {
    const { goods_color, goods_type, goods_year, goods_strength, country_goods, goods_dishes } = data;
    return (
        <List sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '43px',
            padding:'0 62px 54px 77px'
          }}>
              <ListItem>
                <CharacteristicsTextComp characteristic={goods_color}>Wine colour</CharacteristicsTextComp>
              </ListItem>
              <ListItem>
                <CharacteristicsTextComp characteristic={goods_type}>Type of Wine</CharacteristicsTextComp>
              </ListItem>
              <ListItem>
                <CharacteristicsTextComp characteristic={goods_year}>Wine year</CharacteristicsTextComp>
              </ListItem>
              <ListItem>
                <CharacteristicsTextComp characteristic={goods_strength}>Alcohol strength</CharacteristicsTextComp>
              </ListItem>
              <ListItem>
                <CharacteristicsTextComp characteristic={country_goods}>Country</CharacteristicsTextComp>
              </ListItem>
              <ListItem>
                <CharacteristicsTextComp characteristic={goods_dishes}>Food Pairing</CharacteristicsTextComp>
              </ListItem>
        </List>
    )
}