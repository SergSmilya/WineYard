import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { info, secondary } from "../../../theme/palette";

import viewImg from "../../../assets/hero-slider/wine-and-view.jpeg";
import wineBoxImg from "../../../assets/hero-slider/winebox.jpg";

import CustomButton from "../../../components/button";
import { paths } from "../../../config/path";

import RouterLink from "../../../routes/routerLink";

function GiftBoxSlide() {
  return (
    <Box
      sx={{
        backgroundColor: secondary.dark,
        borderRadius: "0px",
        height: "810px",
        color: info.main,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography variant="h4" sx={{ marginBottom: "22px" }}>
              COUNTRY SPECIFIC BOXES:
            </Typography>
            <Typography variant="h3" sx={{ marginBottom: "60px" }}>
              Immerse yourself in the unique flavors and traditions of Georgia,
              Italy, Germany, France, Ukraine, and Spain, with hand-picked wines
              by local experts.
            </Typography>
            <RouterLink to={paths.GIFTBOX}>
              <CustomButton
                color="primary"
                text="CHOOSE BOX"
                width="276px"
                height="62px"
              />
            </RouterLink>
          </Box>
          <Box sx={{ position: "relative" }}>
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
      </Container>
    </Box>
  );
}

export default GiftBoxSlide;
