import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { info, secondary } from "../../../../theme/palette";

import SlideCard from "./slideCard";

import withFishImg from "../../../../assets/hero-slider/with-fish.jpg";
import withBirdImg from "../../../../assets/hero-slider/with-bird.jpeg";
import withMeatImg from "../../../../assets/hero-slider/with-meat.jpg";
import withCheeseImg from "../../../../assets/hero-slider/with-cheese.jpg";

function MealMatchingSlide() {
  return (
    <div className="swiper-slide">
      <Grid
        container
        sx={{
          backgroundColor: secondary.dark,
          borderRadius: "0px",
          height: "810px",
          color: info.main,
          paddingTop: "50px",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          container
          direction="row"
          xs={12}
          justifyContent="space-around"
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
        </Grid>

        <Grid
          item
          container
          direction="row"
          xs={12}
          justifyContent="space-around"
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
        </Grid>

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "48px",
            lineHeight: "48px",
          }}
        >
          CHOOSE <br /> THE RIGHT WINE <br /> TO GO WITH <br /> THE MEAL
        </Typography>
      </Grid>
    </div>
  );
}

export default MealMatchingSlide;
