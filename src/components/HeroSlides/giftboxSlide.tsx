import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import viewImg from "../../assets/hero-slider/wine-and-view.jpeg";
import wineBoxImg from "../../assets/hero-slider/winebox.jpg";
import CustomButton from "../button";

function GiftBoxSlide() {
  const theme = useTheme();

  return (
    <div className="swiper-slide">
      <Grid
        item
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          borderRadius: "0px",
          height: "810px",
          color: theme.palette.info.main,
        }}
      >
        <Box sx={{ maxWidth: "600px", marginLeft: "60px" }}>
          <Typography variant="h4" sx={{ marginBottom: "22px" }}>
            COUNTRY SPECIFIC BOXES:
          </Typography>
          <Typography variant="h3" sx={{ marginBottom: "60px" }}>
            Immerse yourself in the unique flavors and traditions of Georgia,
            Italy, Germany, France, Ukraine, and Spain, with hand-picked wines
            by local experts.
          </Typography>
          <CustomButton
            color="primary"
            text="CHOOSE BOX"
            width="276px"
            height="62px"
          />
        </Box>
        <Box sx={{ position: "relative", marginRight: "100px" }}>
          <img
            src={viewImg}
            alt="Beautiful view with wine"
            loading="lazy"
            style={{
              height: "509px",
              width: "380px",
              objectFit: "cover",
            }}
          />
          <img
            src={wineBoxImg}
            alt=""
            loading="lazy"
            style={{
              borderRadius: "220px 220px 0 0",
              objectFit: "cover",
              height: "278px",
              width: "202px",
              position: "absolute",
              bottom: "50px",
              right: "250px",
            }}
          />
        </Box>
      </Grid>
    </div>
  );
}

export default GiftBoxSlide;
