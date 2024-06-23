import { Container, Hidden } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { info, primary } from "../../../theme/palette";

import bradPittImg from "../../../assets/hero-slider/brad-pitt.jpeg";
import champagneImg from "../../../assets/hero-slider/champagne-img.jpg";
import CustomButton from "../../../components/button";

import { useScrollToSection } from "../../../hooks/useScrollToSection";

function InfluencersPicksSlide() {
  const sectionId = "influencers";

  const handleLinkClick = () => {
    useScrollToSection(sectionId);
  };

  return (
    <Box
      sx={{
        backgroundColor: primary.main,
        borderRadius: "0px",
        height: "810px",
        color: info.main,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: "510px" }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: { xs: "15px", lg: "22px" },
                fontSize: { xs: "41px", lg: "48px" },
                lineHeight: { xs: "41px", lg: "48px" },
              }}
            >
              INFLUENCERS PICKS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginBottom: { lg: "60px" },
                fontSize: { xs: "18px", lg: "24px" },
                lineHeight: { xs: "20px", lg: "30px" },
                maxWidth: { xs: "256px", lg: "600px" },
              }}
            >
              Discover hidden gems and crowd-pleasers based on recommendations
              from famous creative influencers.
            </Typography>

            <Hidden lgDown>
              <CustomButton
                color="secondary"
                text="SEE ICON'S PICKS"
                width="276px"
                height="62px"
                onClick={handleLinkClick}
              />
            </Hidden>
          </Box>

          <Box
            sx={{
              position: "relative",
              top: { xs: "-20px" },
              marginRight: { xs: "-100px", lg: "100px" },
              marginBottom: { xs: "20px" },
            }}
          >
            <img
              src={bradPittImg}
              alt="Brad Pitt"
              className="bradPittImg"
              loading="lazy"
            />
            <img
              src={champagneImg}
              alt="Fleur de Miraval"
              className="champagneImg"
              loading="lazy"
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: {xs: "14px", lg: "24px"},
                lineHeight: {xs: "16px", lg: "30px"},
                position: "absolute",
                left: { xs: "-70px", lg: "370px"},
                bottom: {xs: "-3px", lg: "7px"},
              }}
            >
              Brad <br /> Pitt
            </Typography>
          </Box>

          <Hidden lgUp>
            <CustomButton
              color="secondary"
              text="SEE ICON'S PICKS"
              width="276px"
              height="62px"
              onClick={handleLinkClick}
            />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
}

export default InfluencersPicksSlide;
