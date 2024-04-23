import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
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
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ maxWidth: "510px" }}>
            <Typography variant="h4" sx={{ marginBottom: "22px" }}>
              INFLUENCERS PICKS
            </Typography>
            <Typography variant="h3" sx={{ marginBottom: "60px" }}>
              Discover hidden gems and crowd-pleasers based on recommendations
              from famous creative influencers.
            </Typography>

            <CustomButton
              color="secondary"
              text="SEE ICON'S PICKS"
              width="276px"
              height="62px"
              onClick={handleLinkClick}
            />
          </Box>
          <Box sx={{ position: "relative", marginRight: "100px" }}>
            <img
              src={bradPittImg}
              alt="Brad Pitt"
              loading="lazy"
              style={{
                borderRadius: "180px 180px 0 0",
                height: "506px",
                width: "358px",
                objectFit: "cover",
              }}
            />
            <img
              src={champagneImg}
              alt="Fleur de Miraval"
              loading="lazy"
              style={{
                borderRadius: "0 220px 220px 0",
                objectFit: "cover",
                height: "121px",
                width: "301px",
                position: "absolute",
                bottom: "76px",
                left: "150px",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                left: "370px",
                bottom: "7px",
              }}
            >
              Brad Pitt
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default InfluencersPicksSlide;
