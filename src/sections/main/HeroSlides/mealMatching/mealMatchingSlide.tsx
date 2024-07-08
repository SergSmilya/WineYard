import Typography from "@mui/material/Typography";
import { info, secondary } from "../../../../theme/palette";

import SlideCard from "./slideCard";

import withFishImg from "../../../../assets/hero-slider/with-fish.jpg";
import withBirdImg from "../../../../assets/hero-slider/with-bird.png";
import withMeatImg from "../../../../assets/hero-slider/with-meat.jpg";
import withCheeseImg from "../../../../assets/hero-slider/with-cheese.jpg";
import { Box } from "@mui/material";

function MealMatchingSlide() {
  return (
    <div className="swiper-slide">
      <Box
        sx={{
          backgroundColor: secondary.dark,
          height: "810px",
          color: info.main,
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "360px", lg: "1280px" },
            height: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center" },
            padding: { xs: "0 16px 60px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: { xs: "static", lg: "absolute" },
              top: "50%",
              left: "50%",
              transform: { lg: "translate(-50%, -50%)" },
              textAlign: "center",
              fontSize: { xs: "41px", lg: "48px" },
              lineHeight: { xs: "41px", lg: "48px" },
            }}
          >
            CHOOSE <br /> THE RIGHT WINE <br /> TO GO WITH <br /> THE MEAL
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: { xs: "51px 0 11px", lg: "0 0 50px" },
            }}
          >
            <SlideCard
              text="Red meat"
              sx={{
                imageUrl: withMeatImg,
                radius: "0 220px 220px 0",
                justifyContent: "start",
              }}
              categoryId={1}
            />

            <SlideCard
              text="Poultry meat"
              sx={{
                imageUrl: withBirdImg,
                radius: "220px 0 0 220px",
                justifyContent: "end",
              }}
              categoryId={2}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SlideCard
              text="Cheese"
              sx={{
                imageUrl: withCheeseImg,
                radius: "0 220px 220px 0",
                justifyContent: "start",
              }}
              categoryId={3}
            />

            <SlideCard
              text="Fish & Seafood"
              sx={{
                imageUrl: withFishImg,
                radius: "220px 0 0 220px",
                justifyContent: "end",
              }}
              categoryId={4}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MealMatchingSlide;
