import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import PrivacyComp from "../components/PrivacyComp";
import SocialMedia from "../components/SocialMedia";
import Logo from "../components/logo";
import Navbar from "./header/navbar";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.info.main }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #7D0006",
            padding: "70px 0px",
          }}
        >
          <Logo width="176px" height="25px" />
          <Navbar />
          <SocialMedia />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "30px",
            paddingBottom: "40px",
          }}
        >
          <Typography sx={{ fontSize: "18px", lineHeight: "18px" }}>
            Copyright &#169; 2024 WINEYARD | All Rights Reserved{" "}
          </Typography>
          <PrivacyComp />
        </Box>
      </Container>
    </Box>
  );
}
