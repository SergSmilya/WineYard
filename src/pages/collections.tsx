import { Box, Container, List, ListItem } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import GiftCardItemComp from "../components/GiftCardItemComp";

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
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  )
}