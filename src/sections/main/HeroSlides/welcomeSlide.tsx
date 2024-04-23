import { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { info } from "../../../theme/palette";

import welcomeBackground from "../../../assets/hero-slider/welcomeBackground.jpeg";
import CustomButton from "../../../components/button";
import RouterLink from "../../../routes/routerLink";
import { paths } from "../../../config/path";

function WelcomeSlide() {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <div className="swiper-slide">
      <img
        src={welcomeBackground}
        alt=""
        onLoad={handleLoad}
        style={{ display: "none" }}
      />
      {loaded ? (
        <Box
          sx={{
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "163px",
            height: "810px",
            paddingTop: "132px",
            backgroundImage: `url(${welcomeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: `${loaded ? "inset 0 0 0 2000px #00000080" : ""}`,
          }}
        >
          <Stack
            sx={{
              gap: "31px",
              textAlign: "center",
              maxWidth: "570px",
              color: info.main,
            }}
          >
            <Typography variant="h5">Online wine store</Typography>
            <Typography variant="h1">WELCOME TO WINEYARD!</Typography>
            <Typography variant="h3">
              Taste the World: Discover <br /> Europe's Vineyards at Your Door
            </Typography>
          </Stack>
          <RouterLink to={paths.CATALOG} style={{ textDecoration: "none" }}>
            <CustomButton
              color="primary"
              text="Browse Wines"
              width="272px"
              height="62px"
            />
          </RouterLink>
        </Box>
      ) : null}
    </div>
  );
}

export default WelcomeSlide;
