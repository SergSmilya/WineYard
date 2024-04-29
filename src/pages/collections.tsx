import { Box, Container } from "@mui/material";
import HeroSectionComp from "../components/HeroSectionComp";
import BenefitsSec from "../sections/main/BenefitsSec";
import HowItWorkSection from "../sections/collection/HowItWorkSection";
import bgd from '../assets/collection/bgd.jpeg';


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
      </Container>
    </Box>
  )
}