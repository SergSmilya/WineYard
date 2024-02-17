import { Box, Container, Typography } from "@mui/material";
import PrivacyComp from "../components/PrivacyComp";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <Box sx={{backgroundColor:'#F5EBE2'}}>
      <Container>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #7D0006', padding:'70px 0px'}}>
          <Box>LOGO</Box>
          <Box>NAV</Box>
          <SocialMedia />
        </Box>
        
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'30px', paddingBottom:'40px'}}>
          <Typography>Copyright &#169; 2024 WINEYARD | All Rights Reserved </Typography>
          <PrivacyComp />
        </Box>
      
      </Container>
    </Box>
  )
}

