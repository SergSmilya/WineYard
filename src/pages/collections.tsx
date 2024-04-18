import { Box, Container } from "@mui/material";
import BenefitsSec from "../sections/main/BenefitsSec";
import HowItWorkSection from "../sections/collection/HowItWorkSection";
import HeroSection from "../sections/collection/HeroSection";


export default function Collections() {
  return (
    <Box>
      <Container>
        <HeroSection />
        <BenefitsSec />
        <HowItWorkSection />
      </Container>
    </Box>
  )
}