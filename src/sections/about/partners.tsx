import { Box, Stack, Typography } from "@mui/material";
import { secondary } from "../../theme/palette";

import treasuryLogo from "../../assets/about/treasury.svg";
import galloLogo from "../../assets/about/gallo.svg";
import castelLogo from "../../assets/about/castel.svg";
import pernodLogo from "../../assets/about/pernod.svg";
import constellationLogo from "../../assets/about/constellation.svg";

function Partners() {
  return (
    <Box sx={{ margin: "128px 0 120px" }}>
      <Typography
        variant="body2"
        sx={{
          color: secondary.light,
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Partnering with Europe's Winemaking Elite
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "140px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: "90px", height: "70px" }}>
          <img src={treasuryLogo} loading="lazy" alt="Treasury Wine Estates" />
        </Stack>
        <Stack sx={{ width: "161px", height: "70px" }}>
          <img src={galloLogo} loading="lazy" alt="E.J. Gallo Winery" />
        </Stack>
        <Stack sx={{ width: "129px", height: "70px" }}>
          <img src={castelLogo} loading="lazy" alt="Castel" />
        </Stack>
        <Stack sx={{ width: "188px", height: "70px" }}>
          <img src={pernodLogo} loading="lazy" alt="Pernod Ricard" />
        </Stack>
        <Stack sx={{ width: "122px", height: "70px" }}>
          <img
            src={constellationLogo}
            loading="lazy"
            alt="Constellation Brands"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Partners;
