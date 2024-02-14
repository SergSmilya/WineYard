import { useState } from "react"
import { Container, Typography } from "@mui/material"
import AdultVerify from "../components/AdultVerify/AdultVerify"

function HomePage() {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <Container>
      <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} />
    <Typography variant="h6">Hello from Home</Typography>
    </Container>
  )
}

export default HomePage