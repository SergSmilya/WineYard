import { Box } from "@mui/material"

import AboutHero from "../sections/about/aboutHero"
import WineTour from "../sections/about/wineTour"
import Partners from "../sections/about/partners"
import DeliveryInfo from "../sections/about/deliveryInfo"
import TeamMembers from "../sections/about/teamMembers"

function About() {
  return (
    <Box>
      <AboutHero />
      <WineTour />
      <Partners />
      <DeliveryInfo />
      <TeamMembers />
    </Box>
  )
}

export default About