import { useNavigate } from "react-router-dom";

import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../../theme/palette";

import { useGetWineByIdQuery } from "../../../RTK/wineApi";

import slide3 from "../../../assets/influencer-slider/slide3-bg.jpg";
import jonBonJovi from "../../../assets/influencer-slider/jon-bon-jovi.jpg";

import WineCardItem from "../../../components/WineCardItem";

import "./index.css";

function JonBonJoviSlide() {
  const { data } = useGetWineByIdQuery(66);
  const navigate = useNavigate();

  return (
    <div className="swiper-slide influencer-slide-background">
      <div
        className="influencer-slide-image"
        style={{ backgroundImage: `url(${slide3})` }}
      ></div>
      <div className="influencer-slide-color"></div>
      <div className="influencer-slide-content">
        <Box
          sx={{
            color: info.main,
            maxWidth: "500px",
            marginTop: "100px",
            zIndex: "10",
          }}
        >
          <Typography
            variant="h4"
            sx={{ lineHeight: "70px", marginBottom: "26px" }}
          >
            Influencers picks: Jon Bon Jovi's choice
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            Wine has been my drink of choice my whole life. And I knew about the
            rosé craze twenty years ago because of all of my travels.
          </Typography>
          <Typography variant="body2">
            Hampton Water is Jon Bon Jovi's collaboration with his son Jesse and
            winemaker Gérard Bertrand. Their vision is to unite the laidback
            lifestyles of the Hamptons and the South of France with their light
            and refreshing rosé.
          </Typography>
        </Box>
        <Box sx={{ position: "relative", zIndex: "10" }}>
          <img className="influencer-img" src={jonBonJovi} alt="Jon Bon Jovi" />
          <Stack
            sx={{
              position: "absolute",
              bottom: "58px",
              right: "-220px",
            }}
          >
            <Box
              onClick={() => navigate(`/product/${data.id}`)}
              sx={{ cursor: "pointer" }}
            >
              {data && <WineCardItem show={false} el={data} />}
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default JonBonJoviSlide;
