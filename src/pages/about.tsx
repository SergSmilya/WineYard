import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";

import AboutHero from "../sections/about/aboutHero"
import WineTour from "../sections/about/wineTour"
import Partners from "../sections/about/partners"
import DeliveryInfo from "../sections/about/deliveryInfo"
import TeamMembers from "../sections/about/teamMembers"

function About() {
  const theme = useTheme();

  const colors = {
    red: theme.palette.primary.main,
    green: theme.palette.secondary.light,
    dark: theme.palette.success.main,
    grey: theme.palette.success.light,
  };

  return (
    <Box>
      <AboutHero />
      <WineTour red={colors.red} green={colors.green} dark={colors.dark} />
      <Partners green={colors.green} />
      <DeliveryInfo green={colors.green} dark={colors.dark} />
      <TeamMembers green={colors.green} grey={colors.grey} />
    </Box>
  )
}

export default About