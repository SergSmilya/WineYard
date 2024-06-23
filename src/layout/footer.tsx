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
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "1px solid #7D0006",
            padding: { xs: "50px 0 30px", lg: "50px 0px" },
            gap: { xs: "37px" },
          }}
        >
          <Logo width="176px" height="25px" />
          <Navbar isFooterPart={true} />
          <SocialMedia />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "baseline", lg: "center" },
            padding: { xs: "30px 0 60px", lg: "30px 0 40px" },
            gap: { xs: "50px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "18px",
              width: { xs: "260px", lg: "fit-content" },
            }}
          >
            Copyright &#169; 2024 WINEYARD | All Rights Reserved{" "}
          </Typography>
          <PrivacyComp />
        </Box>
      </Container>
    </Box>
  );
}
