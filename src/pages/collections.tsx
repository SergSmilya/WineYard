import { Box, Container, List, ListItem } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import GiftCardItemComp from "../components/GiftCardItemComp";

import mysteryBoxImg from '../assets/collection/mystery-box.jpg';

const itemStyle = {
  width: '304px',
  display: 'flex',
  justifyContent: 'center',
}

export default function GiftBox() {
  return (
    <Box>
      <HeroSectionComp
        descOne="In Wineyard, we believe in exploring and understanding the world of quality wine."
        descTwo="Our 187ml mini bottles offer curated wine flights and fridge packs, perfect for tasting a variety of small-batch wines."
        bgd={bgd}
      >Curated Flights Collections!</HeroSectionComp>
        <Box sx={{
          paddingTop: '60px',
          paddingBottom: '100px',
          backgroundColor: '#F8EDE1'
      }}>
        <Container>
          <List sx={{display: 'flex', flexWrap: 'wrap', gap: '21px'}}>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Germany' path /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Austria' path id={2}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Georgia' path id={3}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='France' path id={4}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Italy' path id={5}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Spain' path id={6}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='Ukraine' path id={7}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={mysteryBoxImg} showBtnHideFlag={false} country='USA' path id={8}/></ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  )
}