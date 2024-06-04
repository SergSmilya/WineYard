import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../theme/palette";

import logo from "../../assets/about/logo.svg";
import background from "../../assets/about/about-bg.jpeg";

function AboutHero() {
  return (
    <Box
      sx={{
        height: "810px",
        background: `url(${background}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "81px",
        }}
      >
        <Stack>
          <img
            src={logo}
            loading="lazy"
            alt="Wineyard"
            className="wineyard-logo-text"
          />
        </Stack>
        <Stack
          sx={{
            maxWidth: "520px",
            textAlign: "center",
            color: info.main,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              lineHeight: "25px",
              fontSize: { xs: "18px", lg: "24px" },
              maxWidth: { xs: "329px" },
            }}
          >
            Find exceptional wines from across Europe, from Italy's sun-kissed
            vineyards to France's vibrant cellars.
            <br />
            <br />
            We deliver to your door, offer alcohol-free choices, and help you
            pair your wine with every dish.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default AboutHero;
