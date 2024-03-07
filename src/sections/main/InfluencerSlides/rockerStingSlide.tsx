import { useTheme } from "@mui/material/styles";

import "./index.css";
import slide1 from "../../../assets/influencer-slider/slide1-bg.jpg";
import rockerSting from "../../../assets/influencer-slider/rocker-sting.jpg";
import { Box, Typography } from "@mui/material";

function RockerStingSlide() {
  const theme = useTheme();
  return (
    <div className="swiper-slide influencer-slide-background" id="influencers">
      <div
        className="influencer-slide-image"
        style={{ backgroundImage: `url(${slide1})` }}
      ></div>
      <div className="influencer-slide-color"></div>
      <div className="influencer-slide-content">
        <Box
          sx={{
            color: theme.palette.info.main,
            maxWidth: "500px",
            alignSelf: "baseline",
            marginTop: "100px",
          }}
        >
          <Typography variant="h4" sx={{ lineHeight: "70px", marginBottom: "26px" }}>
            Influencers picks: Sting's choise
          </Typography>
          <Typography variant="body2" sx={{marginBottom: "20px" }}>
            Rocker Sting and his producer-philanthropist wife Trudie Styler own
            a stunning vineyard high up in the Tuscan hills called Villa Il
            Palagio.
          </Typography>
          <Typography variant="body2">
            The Estate offers three wines, including Sting's favourite -
            Chianti, named after the Sting song "When We Dance".
          </Typography>
        </Box>
        <Box>
          <img
            className="influencer-img"
            src={rockerSting}
            alt="Rocker Sting and Trudie Styler"
          />
        </Box>
      </div>
    </div>
  );
}

export default RockerStingSlide;
