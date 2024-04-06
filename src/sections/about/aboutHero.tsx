import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/about/logo.svg";
import background from "../../assets/about/about-bg.jpeg";

function AboutHero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "810px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "31px",
        boxShadow: "inset 0 0 0 2000px #00000080",
      }}
    >
      <Stack>
        <img src={logo} alt="Wineyard" />
      </Stack>
      <Stack
        sx={{
          maxWidth: "520px",
          textAlign: "center",
          color: theme.palette.info.main,
        }}
      >
        <Typography variant="h3" sx={{ lineHeight: "25px", marginBottom: "20px" }}>
          Find exceptional wines from across Europe, from Italy's sun-kissed
          vineyards to France's vibrant cellars.
        </Typography>
        <Typography variant="h3" sx={{ lineHeight: "25px" }}>
          We deliver to your door, offer alcohol-free choices, and help you pair
          your wine with every dish.
        </Typography>
      </Stack>
    </Box>
  );
}

export default AboutHero;
