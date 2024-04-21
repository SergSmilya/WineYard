import { Box } from "@mui/material"

import AboutHero from "../sections/about/aboutHero"
import WineTour from "../sections/about/wineTour"
import Partners from "../sections/about/partners"
import DeliveryInfo from "../sections/about/deliveryInfo"
import TeamMembers from "../sections/about/teamMembers"

import { useInfoColors } from "../hooks/useInfoColors";

function About() {
  const colors = useInfoColors();

  return (
    <Box>
      <AboutHero light={colors.light} />
      <WineTour />
      <Partners green={colors.green} />
      <DeliveryInfo green={colors.green} dark={colors.dark} />
      <TeamMembers green={colors.green} grey={colors.grey} />
    </Box>
  )
}

export default About