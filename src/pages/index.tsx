import { useState } from "react"
import { Container, Typography } from "@mui/material"
import AdultVerify from "../components/AdultVerify/AdultVerify"
import SecWineDish from "../components/SecWineDish";
import AboutSec from "../components/AboutSec";

function HomePage() {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <Container>
      <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} />
      <AboutSec />
      <Typography variant="h6">Hello from Home</Typography>
      <SecWineDish />
    </Container>
  )
}

export default HomePage