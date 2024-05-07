import { Box, Container, List, ListItem } from "@mui/material";
import HeroSectionComp from "../components/HeroSectionComp";
import BenefitsSec from "../sections/main/BenefitsSec";
import HowItWorkSection from "../sections/collection/HowItWorkSection";
import bgd from '../assets/collection/bgd.jpeg';
import WhatInsideSection from "../sections/giftBox/WhatInsideSection";
import GiftCardItemComp from "../components/GiftCardItemComp";

const itemStyle = {
  width: '304px',
  display: 'flex',
  justifyContent: 'center',
}

export default function Collections() {
  return (
    <Box>
        <HeroSectionComp
        descOne="Uncork a world of discovery with our curated Country-Specific Mystery Boxes!  Travel the globe, sip by sip, with hand-picked selections from local wine experts."
        descTwo="Each box is a delightful surprise, brimming with authentic wines that capture the essence of a particular region."
        bgd={bgd}
      >Country-specific  Mysteryboxes:</HeroSectionComp>
      <Container>
        <BenefitsSec />
        <HowItWorkSection />
        <Box sx={{ paddingTop: '30px', paddingBottom: "100px" }}>
          <WhatInsideSection />
        </Box>
      </Container>
      <Box sx={{paddingTop: '60px', paddingBottom: '100px', backgroundColor: '#F8EDE1'}}>
        {/* Example */}
        <Container>
          <List sx={{display: 'flex', flexWrap: 'wrap', gap: '21px'}}>
            <ListItem sx={itemStyle}><GiftCardItemComp /></ListItem>
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