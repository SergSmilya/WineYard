import { useTheme } from "@mui/material/styles";

import "./index.css";
import slide2 from "../../../assets/influencer-slider/slide2-bg.jpeg";
import snoopDogg from "../../../assets/influencer-slider/snoop-dogg.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";
import WineCardItem from "../../../components/WineCardItem";
import { paths } from "../../../config/path";

function SnoopDoggSlide() {
  const theme = useTheme();
  return (
    <div className="swiper-slide influencer-slide-background">
      <div
        className="influencer-slide-image"
        style={{ backgroundImage: `url(${slide2})` }}
      ></div>
      <div className="influencer-slide-color"></div>
      <div className="influencer-slide-content">
        <Box
          sx={{
            color: theme.palette.info.main,
            maxWidth: "500px",
            zIndex: "10",
            marginTop: "100px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ lineHeight: "70px", marginBottom: "26px" }}
          >
            Influencers picks: Snoop Dogg's choice
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            Snoop Dogg partnered with 19 Crimes to launch “Snoop Cali Red,” a
            red blend that features a combo of petite syrah, zinfandel, and a
            splash of merlot. Through the partnership, Snoop Dogg turned his
            personal passion for wine into an exciting new business venture.
          </Typography>
          <Typography variant="body2">
            For 19 Crimes, the blend is the brand's first California red. The
            blend captures the essence of both Snoop Dogg and 19 Crimes—strong,
            bold, and incredible.
          </Typography>
        </Box>
        <Box sx={{ position: "relative", zIndex: "10" }}>
          <img className="influencer-img" src={snoopDogg} alt="Snoop Dogg" />
          <Stack
            sx={{
              position: "absolute",
              bottom: "58px",
              right: "-220px",
            }}
          >
            <WineCardItem show={false} />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default SnoopDoggSlide;
