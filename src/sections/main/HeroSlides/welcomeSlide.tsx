import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { info } from "../../../theme/palette";

import welcomeBackground from "../../../assets/hero-slider/welcomeBackground.jpeg";
import CustomButton from "../../../components/button";
import RouterLink from "../../../routes/routerLink";
import { paths } from "../../../config/path";

function WelcomeSlide() {
  return (
    <div
      className="swiper-slide"
      style={{ position: "relative", height: "810px" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${welcomeBackground}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "163px",
          height: "100%",
          paddingTop: "132px",
        }}
      >
        <Stack
          sx={{
            gap: "31px",
            textAlign: "center",
            maxWidth: { xs: "329px", lg: "570px" },
            color: info.main,
          }}
        >
          <Typography variant="h5">Online wine store</Typography>
          <Typography variant="h1">WELCOME TO WINEYARD!</Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "18px", lg: "24px" },
              lineHeight: { xs: "20px", lg: "30px" },
            }}
          >
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
    </div>
  );
}

export default WelcomeSlide;
