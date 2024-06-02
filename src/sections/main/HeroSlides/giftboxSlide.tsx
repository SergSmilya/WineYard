import { Container, Hidden } from "@mui/material";
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
      <Container sx={{ maxWidth: { xs: "329px" }, padding: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            height: {xs: "558px"}
          }}
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: { xs: "15px", lg: "22px" },
                fontSize: { xs: "41px", lg: "48px" },
                lineHeight: { xs: "41px", lg: "48px" },
              }}
            >
              COUNTRY SPECIFIC BOXES:
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginBottom: { lg: "60px" },
                fontSize: { xs: "18px", lg: "24px" },
                lineHeight: { xs: "20px", lg: "30px" },
                maxWidth: { xs: "300px" },
              }}
            >
              Immerse yourself in the unique flavors and traditions of Georgia,
              Italy, Germany, France, Ukraine, and Spain, with{" "}
              <span className="dividedText"> hand-picked wines </span>{" "}
              <span className="dividedText">by local experts.</span>
            </Typography>
            <Hidden lgDown>
              <RouterLink to={paths.GIFTBOX}>
                <CustomButton
                  color="primary"
                  text="CHOOSE BOX"
                  width="276px"
                  height="62px"
                />
              </RouterLink>
            </Hidden>
          </Box>
          <Box
            sx={{
              position: "relative",
              top: { xs: "-30px" },
              marginRight: { xs: "-180px" },
            }}
          >
            <img
              src={viewImg}
              alt="Beautiful view with wine"
              loading="lazy"
              className="viewImg"
            />
            <img
              src={wineBoxImg}
              alt=""
              loading="lazy"
              className="wineBoxImg"
            />
          </Box>

          <Hidden lgUp>
            <RouterLink to={paths.GIFTBOX}>
              <CustomButton
                color="primary"
                text="CHOOSE BOX"
                width="276px"
                height="62px"
              />
            </RouterLink>
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
}

export default GiftBoxSlide;
