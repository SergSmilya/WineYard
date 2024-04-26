import { Box, Stack } from "@mui/material";

import wineStand from "../../assets/about/wine-stand.jpg";

import DescText from "../../components/DescText";
import AchievementComp from "../../components/AchievementComp";

function WineTour() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "96px",
        marginTop: "60px",
      }}
    >
      <Stack sx={{ maxWidth: "576px", maxHeight: "662px" }}>
        <img src={wineStand} alt="Wine stand" loading="lazy" />
      </Stack>
      <Stack sx={{ maxWidth: "576px" }}>
        <DescText beforeTitle="We invite you to explore the world of wine with us">
          Bringing Europe's Wines to Your Doorstep
        </DescText>

        <AchievementComp />
      </Stack>
    </Box>
  );
}

export default WineTour;
