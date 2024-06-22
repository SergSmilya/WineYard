import { Box } from "@mui/material"

import { useEffect } from "react"
import AboutHero from "../sections/about/aboutHero"
import WineTour from "../sections/about/wineTour"
import Partners from "../sections/about/partners"
import DeliveryInfo from "../sections/about/deliveryInfo"
import TeamMembers from "../sections/about/teamMembers"

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);
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