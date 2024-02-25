import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import bradPittImg from "../../assets/brad-pitt.jpeg";
import champagneImg from "../../assets/champagne-img.png";
import CustomButton from "../button";
import useProgressiveImage from "../../hooks/useProgressiveImage";

function InfluencersPicksSlide() {
  const theme = useTheme();
  const bradPittImgLoaded = useProgressiveImage(bradPittImg);
  const champagneImgLoaded = useProgressiveImage(champagneImg);

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0px",
        height: "810px",
        color: theme.palette.info.main,
      }}
    >
      <Box sx={{ maxWidth: "510px" }}>
        <Typography variant="h4" sx={{ marginBottom: "22px" }}>
          INFLUENCERS PICKS
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: "60px" }}>
          Discover hidden gems and crowd-pleasers based on recommendations from
          famous creative influencers.
        </Typography>
        <CustomButton
          color="secondary"
          text="SEE ICON'S PICKS"
          width="276px"
          height="62px"
        />
      </Box>
      <Box sx={{ position: "relative", marginRight: "100px" }}>
        <img
          src={bradPittImgLoaded || bradPittImg}
          alt="Brad Pitt"
          style={{
            borderRadius: "180px 180px 0 0",
            height: "506px",
            width: "358px",
            objectFit: "cover",
          }}
        />
        <img
          src={champagneImgLoaded || champagneImg}
          alt="Fleur de Miraval"
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
  );
}

export default InfluencersPicksSlide;
