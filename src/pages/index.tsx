import { useState } from "react"
import { Container } from "@mui/material"
import AdultVerify from "../components/AdultVerify/AdultVerify"

function HomePage() {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <Container>
      <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} />
      
    </Container>
  )
}

export default HomePage