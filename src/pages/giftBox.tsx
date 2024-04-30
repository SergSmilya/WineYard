import { Box, Container } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import GiftCardItemComp from "../components/GiftCardItemComp";

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
          <GiftCardItemComp />
          <GiftCardItemComp />
          <GiftCardItemComp />
          <GiftCardItemComp />
          <GiftCardItemComp />
        </Container>
      </Box>
    </Box>
  )
}