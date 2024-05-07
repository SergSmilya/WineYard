import { Box, Container, List, ListItem } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import GiftCardItemComp from "../components/GiftCardItemComp";

import img1 from '../assets/collection/collections-images/1.png';
import img2 from '../assets/collection/collections-images/2.png';
import img3 from '../assets/collection/collections-images/3.png';
import img4 from '../assets/collection/collections-images/4.png';
import img5 from '../assets/collection/collections-images/5.png';
import img6 from '../assets/collection/collections-images/6.png';
import img7 from '../assets/collection/collections-images/7.png';
import img8 from '../assets/collection/collections-images/8.png';

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
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img1} /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img2}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img3}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img4}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img5}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img6}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img7}/></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp imgPath={img8}/></ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  )
}