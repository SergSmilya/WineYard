import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../theme/palette";

import logo from "../../assets/about/logo.svg";
import background from "../../assets/about/about-bg.jpeg";

function AboutHero() {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <img
        src={background}
        alt=""
        onLoad={handleLoad}
        style={{ display: "none" }}
      />
      {loaded ? (
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
            gap: "81px",
            boxShadow: `${loaded ? "inset 0 0 0 2000px #00000080" : ""}`,
          }}
        >
          <Stack>
            <img src={logo} loading="lazy" alt="Wineyard" />
          </Stack>
          <Stack
            sx={{
              maxWidth: "520px",
              textAlign: "center",
              color: info.main,
            }}
          >
            <Typography variant="h3" sx={{ lineHeight: "25px" }}>
              Find exceptional wines from across Europe, from Italy's sun-kissed
              vineyards to France's vibrant cellars.
              <br />
              <br />
              We deliver to your door, offer alcohol-free choices, and help you
              pair your wine with every dish.
            </Typography>
          </Stack>
        </Box>
      ) : null}
    </>
  );
}

export default AboutHero;
